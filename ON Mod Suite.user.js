// ==UserScript==
// @name         ON Mod Suite
// @namespace    http://www.hanalani.org/
// @version      0.7
// @description  Collection of mods for Blackbaud ON system
// @author       Scott Yoshimura
// @match        https://hanalani.myschoolapp.com/*
// @grant        none
// @run-at       document-end
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

/* Copyright (C) 2018  Hanalani Schools

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>. */


// Completed Mods:
// - User Module Selector
//      Adds links to user pages for quickly switching between module views
// - People Finder Quick Select
//      Hit enter when searching with People Finder to open the first result.
//      Use number keys 1-9 to select the nth search result
// - Switch Roster to Faculty
//      Class rosters opened in Academics are missing the Send Communication menu.
//      This adds a link to quickly switch between Faculty and Academics view of the roster.
// - Email all parents of a student from Roster Relationships
//      View Relationships from a student's card in a roster now includes a mailto link that includes all
//      emails for this student's parents.
// - Enroll in All
//      Button added when editing group enrollments, primarily for LS, who add all classes for a specific
//      homeroom.
// - Roster Student Count
//      Rosters (class, activity, community, and athletic groups) show total members, including teachers/
//      coaches.  This also displays the total number of students in the group, which is a more useful number.
// - Manual Attendance Sheet Improvements
//      Manual Attendance Sheet report added to roster reports menu and loads the class that you ran the
//      report from.
// - Convert Grad Year to Grade Level
//      Roster cards can now display current grade level instead of graduation year or both, (global setting saved
//      as a browser cookie and selectable from a new menu added to roster pages).  Student profile pages
//      (Core, Academics, Faculty) display the current grade level in addition to the grad year.

// Notes:
// - Also removes Connect5 emergency contact info from contact cards

// ----------------------------------------------------------------------------------------
// ---------------------------------------Main Section-------------------------------------
// ----------------------------------------------------------------------------------------

this.$ = this.jQuery = jQuery.noConflict(true);

// Check for page hashchanges
// Borrowed from: https://stackoverflow.com/questions/18989345/how-do-i-reload-a-greasemonkey-script-when-ajax-changes-the-url-without-reloadin
var fireOnHashChangesToo    = true;
var pageURLCheckTimer       = setInterval (
    function () {
        if (   this.lastPathStr  !== location.pathname
            || this.lastQueryStr !== location.search
            || (fireOnHashChangesToo && this.lastHashStr !== location.hash)
        ) {
            this.lastPathStr  = location.pathname;
            this.lastQueryStr = location.search;
            this.lastHashStr  = location.hash;
            setTimeout(gmMain, 100);

        }
    }
    , 111
);


// Load all mods
function gmMain(){

    var strURL = window.location.href

    // User Module Selector

    var strLinks = "Open in: "

    switch(GetModule(strURL))
    {
        case "Core":
            waitForKeyElements("#userName", PostLinkCore)
            break;
        case "Academics":
            waitForKeyElements("h1.bb-tile-header", PostLinkAcademics)
            break;
        case "Enrollment Management":
            waitForKeyElements("#CandidateName", PostLinkEnrollmentManagement)
            break;
        case "Faculty":
            waitForKeyElements(".bb-page-heading", PostLinkFaculty)
            break;
        case "Academics-Roster":
            waitForKeyElements(".bb-page-heading", PostLinkRosterFaculty)
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            EmailAllParentsOfStudent();
            break;
        case "Faculty-Roster":
            waitForKeyElements(".bb-page-heading", PostLinkRosterAcademics)
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            EmailAllParentsOfStudent();
            break;
        case "Other Roster":
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            break;
        case "Manage Student Enrollment":
            waitForKeyElements("#LevelNum", EnrollInAll)
            break;
        case "Manual Attendance Sheet Report":
            waitForKeyElements("#L_c1i0_cb3224_ct3224_cTool_lbtnRefresh", ManualAttendanceSheet)
            break;
    }

    // People Finder Quick Select
    waitForKeyElements("#people-finder-search-box", PeopleFinderQuickSelect)

    // Remove Connect5 Info
    waitForKeyElements(".emergencyemaildetail p", RemoveConnect5Info)

}


function GetModule(strURL)
{

    if (strURL == "https://hanalani.myschoolapp.com/podium/default.aspx?t=1691&wapp=1&ch=1&_pd=gm_fv&pk=359")
    {
        return "Manual Attendance Sheet Report";
    } else if (strURL.substring(0, 41).toLowerCase() == "https://hanalani.myschoolapp.com/app/core")
    {
        return "Core";
    } else if (strURL.substring(0, 70) == "https://hanalani.myschoolapp.com/app/academics#managestudentenrollment")
    {
        return "Manage Student Enrollment";
    } else if (strURL.substring(0, 60) == "https://hanalani.myschoolapp.com/app/academics#academicclass" && strURL.substring(73, 79) == "roster")
    {
        return "Academics-Roster";
    } else if (strURL.substring(0, 58) == "https://hanalani.myschoolapp.com/app/faculty#academicclass" && strURL.substring(71, 77) == "roster")
    {
        return "Faculty-Roster";
    } else if (strURL.substring(strURL.length-6, strURL.length) == "roster")
    {
        return "Other Roster";
    } else if (strURL.substring(0, 46) == "https://hanalani.myschoolapp.com/app/academics")
    {
        return "Academics";
    } else if (strURL.substring(0, 58) == "https://hanalani.myschoolapp.com/app/enrollment-management")
    {
        return "Enrollment Management";
    } else if (strURL.substring(0, 44) == "https://hanalani.myschoolapp.com/app/faculty")
    {
        return "Faculty";
    }

    return;
}


// ----------------------------------------------------------------------------------------
// -----------------------------------User Module Selector---------------------------------
// ----------------------------------------------------------------------------------------

function PostLinkCore(jNode)
{
    var strURL = window.location.href
    var strLinks = "Open in: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 7){
        return;
    }

    strLinks = strLinks.concat(GetLink("Academics", strID));
    strLinks = strLinks.concat(GetLink("Enrollment Management", strID));
    strLinks = strLinks.concat(GetLink("Faculty", strID));
    jNode.append(strLinks);

    // Add grade level to name display
    $("#userName h1").append(GetGradeLevel($("#userName h1").text()));
    return;
}

function PostLinkAcademics(jNode)
{
    var strURL = window.location.href
    var strLinks = "Open in: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 7){
        return;
    }

    strLinks = strLinks.concat(GetLink("Core", strID));
    strLinks = strLinks.concat(GetLink("Enrollment Management", strID));
    strLinks = strLinks.concat(GetLink("Faculty", strID));
    jNode.after(strLinks);

    // Add grade level to name display
    $("h1.bb-tile-header").append(GetGradeLevel($("h1.bb-tile-header").text()));
    return;
}

function PostLinkEnrollmentManagement(jNode)
{
    var strURL = window.location.href
    var strLinks = "Open in: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 7){
        return;
    }

    strLinks = strLinks.concat(GetLink("Core", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Academics", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Faculty", strID));
    jNode.append(strLinks);

    return;
}

function PostLinkFaculty(jNode)
{
    var strURL = window.location.href
    var strLinks = "Open in: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 7){
        return;
    }

    strLinks = strLinks.concat(GetLink("Core", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Academics", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Enrollment Management", strID));
    jNode.after(strLinks);

    // Add grade level to name display
    $("div.bb-page-heading").append(GetGradeLevel($("div.bb-page-heading").text()));
    return;
}

function GetLink(strModule, strID)
{
    var strHTMLPrefix = '<a href="';
    var strHTMLSuffix = '">[';
    var strHTMLSuffix2 = ']</a>  ';
    var strLinkPrefix;
    var strLinkSuffix;

    switch(strModule)
    {
        case "Core":
            strLinkPrefix = "https://hanalani.myschoolapp.com/app/Core#userprofile/";
            strLinkSuffix = "/access";
            break;
        case "Academics":
            strLinkPrefix = "https://hanalani.myschoolapp.com/app/academics#academicprofile/";
            strLinkSuffix = "/attendance";
            break;
        case "Enrollment Management":
            strLinkPrefix = "https://hanalani.myschoolapp.com/app/enrollment-management#candidate/";
            strLinkSuffix = "/contracts";
            break;
        case "Faculty":
            strLinkPrefix = "https://hanalani.myschoolapp.com/app/faculty#profile/";
            strLinkSuffix = "/progress";
            break;
        case "Faculty-Roster":
            strLinkPrefix = "https://hanalani.myschoolapp.com/app/faculty#academicclass/";
            strLinkSuffix = "/0/roster";
            strModule = "Faculty";
            break;
        case "Academics-Roster":
            strLinkPrefix = "https://hanalani.myschoolapp.com/app/academics#academicclass/";
            strLinkSuffix = "/0/roster";
            strModule = "Academics";
    }

    var strLinkFull = strHTMLPrefix.concat(strLinkPrefix, strID, strLinkSuffix, strHTMLSuffix, strModule, strHTMLSuffix2);
    return strLinkFull;
}

function GetID(strURL)
{

    var strParts = strURL.split("/");
    var arrayLength = strParts.length;

    for (var i = 0; i < arrayLength; i++)
    {
        if (isInt(strParts[i]))
        {
            return strParts[i];
        }
    }
    return;
}


// ----------------------------------------------------------------------------------------
// ------------------------------People Finder Quick Select--------------------------------
// ----------------------------------------------------------------------------------------

function PeopleFinderQuickSelect(jNode)
{
    $("#people-finder-search-box").keypress(function (e){
        console.log(e.keyCode);
        switch (e.keyCode)
        {
            case 13:
            case 49:
                $(".pf-user").eq(0).click();
                break;
            case 50:
                $(".pf-user").eq(1).click();
                break;
            case 51:
                $(".pf-user").eq(2).click();
                break;
            case 52:
                $(".pf-user").eq(3).click();
                break;
            case 53:
                $(".pf-user").eq(4).click();
                break;
            case 54:
                $(".pf-user").eq(5).click();
                break;
            case 55:
                $(".pf-user").eq(6).click();
                break;
            case 56:
                $(".pf-user").eq(7).click();
                break;
            case 57:
                $(".pf-user").eq(8).click();
        }

    })
}

// ----------------------------------------------------------------------------------------
// ------------------------------Switch Roster to Faculty----------------------------------
// ----------------------------------------------------------------------------------------

function PostLinkRosterFaculty(jNode)
{
    var strURL = window.location.href
    var strLinks = "Switch to: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 9){
        return;
    }

    strLinks = strLinks.concat(GetLink("Faculty-Roster", GetID(strURL)));
    jNode.after(strLinks);
    return;
}

function PostLinkRosterAcademics(jNode)
{
    var strURL = window.location.href
    var strLinks = "Switch to: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 9){
        return;
    }

    strLinks = strLinks.concat(GetLink("Academics-Roster", GetID(strURL)));
    jNode.after(strLinks);
    return;
}

// ----------------------------------------------------------------------------------------
// ----------------------------Email All Parents of Student--------------------------------
// ----------------------------------------------------------------------------------------

function EmailAllParentsOfStudent()
{
    setInterval(function(){
    waitForKeyElements(".roster-relationships", CreateEmailLink);}, 1000);
}

function CreateEmailLink(jNode)
{
    var strPrefix = '<div align="right"><a href="mailto:';
    var strSuffix = '">Email All Parents of This Student</a></div>';
    var strEmails = "";

    $(".roster-relationships [href^='mailto']").each(function(index){
        if (index != 0){
            strEmails = strEmails.concat(";");
        }
        strEmails = strEmails.concat($(this).text());
    });

    var strFinal = strPrefix.concat(strEmails, strSuffix);
    $(".bb-tile-content-section").after(strFinal);
}

// ----------------------------------------------------------------------------------------
// ----------------------------------------Enroll in All-----------------------------------
// ----------------------------------------------------------------------------------------

function EnrollInAll(jNode)
{
    console.log($("#LevelNum").val())
    if (!$(".custom-add-all").length){

        $(".corner .white-bgc:first").append('<a class="btn btn-default custom-add-all">Enroll in All</a>');

        $(".custom-add-all").click(function() {
            if (!$("#search").val().length){
                alert("You should filter the courses by searching first!");
            } else
            {

                if (confirm("Are you sure you want to enroll this student in all displayed classes?")){
                    console.log("confirmed");
                    $(".fa-plus-circle").each(function(index) {
                        this.click();
                        console.log(index);
                    });
                }
            }
        });
    }
}

// ----------------------------------------------------------------------------------------
// ------------------------------------Remove Connect5 Info--------------------------------
// ----------------------------------------------------------------------------------------

function RemoveConnect5Info(jNode)
{
    var str;

    setTimeout(function(){
        $(".emergencyphonedetail p, .emergencyemaildetail p").each(function(index){
            str = $(this).html();
            str = str.replace("Automated call: Never", "");
            str = str.replace("Automated call: Emergency Only", "");
            str = str.replace("Automated email: Never", "");
            str = str.replace("Automated email: Emergency Only", "");
            $(this).html(str);
        });
    }, 100);
}

// ----------------------------------------------------------------------------------------
// -----------------------------------Roster Student Count---------------------------------
// ----------------------------------------------------------------------------------------

function AddRosterStudentCount(jNode)
{
    var memberCount = $("#roster-count").text();
    var teacherCount = 0;
    var nonStudentConditions = ["Teacher", "Co-Teacher", "Assistant Teacher", "Activity Leader", "Owner", "Coach"]

    $(".bb-card-title").each(function(index){
       var str = $(this).text();
       //if (str.includes("Teacher"))
        if(nonStudentConditions.some(el => str.includes(el)))
       {
           teacherCount++;
       }
    });

    if (!($("#RosterCardContainer").length))
    {
        memberCount = $("h4.pull-left").text();
        memberCount = memberCount.replace(" Members", "");
    }

    var studentCount = memberCount - teacherCount;
    var studentCountText = "  /  ";
    studentCountText = studentCountText.concat(studentCount, " Students");

    if ($("#RosterCardContainer").length)
    {
        $("#RosterCardContainer").siblings("h4").append(studentCountText);
    } else
    {
        $("h4.pull-left").append(studentCountText);
    }

    // Manual Attendance Sheet
    AddManualAttendanceSheetToMenu();
    $("#ManualAttendanceSheet").bind("click", LaunchManualAttendanceSheet);

    ConvertGradYearToGradeLevel();

}

// ----------------------------------------------------------------------------------------
// ----------------------------------Manual Attendance Sheet-------------------------------
// ----------------------------------------------------------------------------------------


function LaunchManualAttendanceSheet()
{
    SaveClassAndTeacher();
    window.open("/podium/default.aspx?t=1691&wapp=1&ch=1&_pd=gm_fv&pk=359", "_blank");
}

function AddManualAttendanceSheetToMenu()
{
    var html = '<li><a href="javascript:void(0)" id="ManualAttendanceSheet">Manual Attendance Sheet</a></li>'
    $(".dropdown-menu").append(html);
}

function SaveClassAndTeacher()
{
    var userID;

    // Save class ID to cookie
    setCookie("ClassID", GetID(window.location.href), 1);

    // Save teacher's user ID to cookie
    $(".bb-card-title").each(function(index){
       var str = $(this).text();
       if (str == "Teacher")
       {
           userID = GetID($(this).closest("header").next().next().find(".bb-dropdown-item").html());
           return false;
       }
    });
    setCookie("TeacherID", userID, 1);

    // Save class school level to cookie
    var details = $(".lead").text();
    if (details.includes("Upper School"))
    {
        setCookie("SchoolLevel", "1568", 1);
    } else if (details.includes("Elementary"))
    {
        setCookie("SchoolLevel", "1567", 1);
    } else if (details.includes("Early Childhood"))
    {
        setCookie("SchoolLevel", "1566", 1);
    }

    // Save term to cookie
    if (details.includes("Fall Semester"))
    {
        setCookie("Term", "98719", 1);
    } else if (details.includes("Summer Semester"))
    {
        setCookie("Term", "98718", 1);
    } else if (details.includes("Spring Semester"))
    {
        setCookie("Term", "98720", 1);
    } else if (details.includes("Year Long"))
    {
        setCookie("Term", "98725", 1);
    } else if (details.includes("Summer Term"))
    {
        setCookie("Term", "98724", 1);
    }

    setCookie("ManualAttendanceSheetNewInfo", "1", 1);
}

function ManualAttendanceSheet()
{
    switch(getCookie("ManualAttendanceSheetNewInfo"))
    {
        case "1":
            {
                console.log($("[name='L$c1i0$cb3224$ct3224$ct3$ddl_l$ctl00']").val());
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_l$ctl00']").val(getCookie("SchoolLevel"));
                setCookie("ManualAttendanceSheetNewInfo", "2", 1);
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "2":
            {
                console.log($("[name='L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00']").val());
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00']").val(getCookie("Term"));
                setCookie("ManualAttendanceSheetNewInfo", "3", 1);
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "3":
            {
                console.log($("[name='L$c1i0$cb3224$ct3224$ct3$ddl_t$ctl00']").val());
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_t$ctl00']").val(getCookie("TeacherID"));
                setCookie("ManualAttendanceSheetNewInfo", "4", 1);
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "4":
            {
                console.log($("[name='L$c1i0$cb3224$ct3224$ct3$ddl_s$ctl00']").val());
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_s$ctl00']").val(getCookie("ClassID"));
                setCookie("ManualAttendanceSheetNewInfo", "0", 1);
                __doPostBack('L$c1i0$cb3224$ct3224$cTool$lbtnRefresh','');
                break;
            }
    }
}

// ----------------------------------------------------------------------------------------
// ----------------------------Convert Grad Year to Grade Level----------------------------
// ----------------------------------------------------------------------------------------

function ConvertGradYearToGradeLevel()
{
    // Add menu
    $("#roster-reports").after('<div id="show-menu" class="btn-group" style="margin-left:10px;"><button class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" style="display: inline-block;" data-original-title="" title="" aria-expanded="false">Show <span class="caret"></span></button><ul class="dropdown-menu"><li><a id="gradyear" href="javascript:void(0)">Grad Year</a></li><li><a id="gradelevel" href="javascript:void(0)">Grade Level</a></li><li><a id="both" href="javascript:void(0)">Both</a></li></ul></div>')
    $("#gradyear").bind("click", function(){
        setCookie("GradeLevelSetting", 1, 9999);
        location.reload();
    });
    $("#gradelevel").bind("click", function(){
        setCookie("GradeLevelSetting", 2, 9999);
        location.reload();
    });
    $("#both").bind("click", function(){
        setCookie("GradeLevelSetting", 3, 9999);
        location.reload();
    });

    var grade;
    var name;

    switch (getCookie("GradeLevelSetting"))
    {
        case "1":
            $("#gradyear").prepend(">");
            break;
        case "2":
            $("#gradelevel").prepend(">");
            $(".bb-card-title").each(function(index){
                name = $(this).text();
                grade = GetGradeLevel(name);
                if (grade)
                {
                   name = name.substring(0, name.length-4);
                   name = name.concat(grade);
                   $(this).text(name);
                }
            });
            break;
        case "3":
            $("#both").prepend(">");
            $(".bb-card-title").each(function(index){
                grade = GetGradeLevel($(this).text())
                if (grade)
                {
                    $(this).append(grade);
                }
            });
            break;
        default:
            $("#gradelevel").text(">Grade Level (Default)");
            setCookie("GradeLevelSetting", 2, 9999);
            $(".bb-card-title").each(function(index){
                name = $(this).text();
                grade = GetGradeLevel(name);
                if (grade)
                {
                   name = name.substring(0, name.length-4);
                   name = name.concat(grade);
                   $(this).text(name);
                }
            });
            break;
    }

}

function GetGradeLevel(str)
{
    str = str.trim()
    if (str.substring(str.length-3, str.length-2)=="'" && isInt(str.substring(str.length-2, str.length)))
    {
        var d = new Date();
        var yearnum = d.getFullYear();
        var year = yearnum.toString();
        year = year.substring(2, 4);
        var offset = str.substring(str.length-2, str.length) - year - ((d.getMonth() < 7) ? 0:1);

        switch (offset)
        {
            case 0:
                return " (12th)";
                break;
            case 1:
                return " (11th)";
                break;
            case 2:
                return " (10th)";
                break;
            case 3:
                return " (9th)";
                break;
            case 4:
                return " (8th)";
                break;
            case 5:
                return " (7th)";
                break;
            case 6:
                return " (6th)";
                break;
            case 7:
                return " (5th)";
                break;
            case 8:
                return " (4th)";
                break;
            case 9:
                return " (3rd)";
                break;
            case 10:
                return " (2nd)";
                break;
            case 11:
                return " (1st)";
                break;
            case 12:
                return " (K5)";
                break;
            case 13:
                return " (K4)";
                break;
            case 14:
                return " (K3)";
                break;
            default:
                return null;
        }
    }
}

// ----------------------------------------------------------------------------------------
// -----------------------------------Misc. Helper Functions-------------------------------
// ----------------------------------------------------------------------------------------

function trimAtChar(str, trimAt)
{
    var n = str.indexOf(trimAt);
    str = str.substring(0, n != -1 ? n : str.length);
    str = str.trim();
    return str;
}

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

// Cookie functions borrowed from: https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
