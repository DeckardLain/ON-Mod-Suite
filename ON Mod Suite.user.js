// ==UserScript==
// @name         ON Mod Suite
// @namespace    http://www.hanalani.org/
// @version      0.9.2
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


/*
Completed Mods:
- User Module Selector
     Adds links to user pages for quickly switching between module views
- People Finder Quick Select
     Hit enter when searching with People Finder to open the first result.
     Use number keys 1-9 to select the nth search result
- Switch Roster to Faculty
     Class rosters opened in Academics are missing the Send Communication menu.
     This adds a link to quickly switch between Faculty and Academics view of the roster.
     Updated in v0.7.1 - Send Communication menu simply added to Academics roster.
- Email all parents of a student from Roster Relationships
     View Relationships from a student's card in a roster now includes a mailto link that includes all
     emails for this student's parents.
- Enroll in All
     Button added when editing group enrollments, primarily for LS, who add all classes for a specific
     homeroom.
- Roster Student Count
     Rosters (class, activity, community, and athletic groups) show total members, including teachers/
     coaches.  This also displays the total number of students in the group, which is a more useful number.
- Manual Attendance Sheet Improvements
     Manual Attendance Sheet report added to roster reports menu and loads the class that you ran the
     report from.
- Convert Grad Year to Grade Level
     Roster cards can now display current grade level instead of graduation year or both, (global setting saved
     as a browser cookie and selectable from a new menu added to roster pages).  Student profile pages
     (Core, Academics, Faculty) display the current grade level in addition to the grad year.
- Advanced List User Links
     Advanced lists that include a User ID column will now link the User ID to their profile page.  The module
     and page it opens to is customizable and saved per list.
- Roster Student Select
     Specific students can be selected on class rosters, and the Send Communication menu then used to email those
     students, parents of those students, or both.


Notes:
- Also removes Connect5 emergency contact info from contact cards

*/

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
            waitForKeyElements(".bb-btn-secondary:first", CreateRosterCheckboxes)
            EmailAllParentsOfStudent();
            break;
        case "Faculty-Roster":
            waitForKeyElements(".bb-page-heading", PostLinkRosterAcademics)
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".bb-btn-secondary:first", CreateRosterCheckboxes)
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
        case "Advanced List - Run":
            waitForKeyElements("#L_c1i0_cb143420_ct143420_ctl05_grdResult", AddAdvancedListIDLinks)
            break;
        case "Advanced List - CopyEdit":
            waitForKeyElements("#L_c1i0_cb143402_ct143402_ctl29_grdResult", AddAdvancedListIDLinks)
            break;
        case "Advanced List Main":
            waitForKeyElements(".thCBarbtn:first", CreateAdvancedListDefaultButton)
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
    } else if (strURL == "https://hanalani.myschoolapp.com/podium/default.aspx?t=52586")
    {
        return "Advanced List - Run";
    } else if (strURL == "https://hanalani.myschoolapp.com/podium/default.aspx?t=52568")
    {
        return "Advanced List - CopyEdit";
    } else if (strURL.substring(0, 60) == "https://hanalani.myschoolapp.com/podium/default.aspx?t=23189")
    {
        return "Advanced List Main";
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

    // Just add the Send Communication button to the Academics version of the roster
    waitForKeyElements("#roster-reports", function(){
        var commHTML = '<div class="btn-group" style="margin-left:10px;">            <button class="btn  btn-default btn-sm dropdown-toggle" data-toggle="dropdown" data-original-title="" title="" aria-expanded="false">Send Communication to <span class="caret"></span></button>            <ul class="dropdown-menu">                <li><a class="btn send-message" data-message-type="2" href="#" data-original-title="" title="">Students</a></li>                <li><a class="btn send-message" data-message-type="1" href="#" data-original-title="" title="">Parents</a></li>                <li><a class="btn send-message" data-message-type="0" data-lead-section-id="'
        commHTML = commHTML.concat(strID, '" href="#" data-original-title="" title="">All</a></li>            </ul>            </div>');
        $("#roster-reports").before(commHTML);
    });

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
    if (!$("#email-parents").length)
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
    $("#roster-reports .dropdown-menu").append(html);
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
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_l$ctl00']").val(getCookie("SchoolLevel"));
                setCookie("ManualAttendanceSheetNewInfo", "2", 1);
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "2":
            {
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00']").val(getCookie("Term"));
                setCookie("ManualAttendanceSheetNewInfo", "3", 1);
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "3":
            {
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_t$ctl00']").val(getCookie("TeacherID"));
                setCookie("ManualAttendanceSheetNewInfo", "4", 1);
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "4":
            {
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_s$ctl00']").val(getCookie("ClassID"));
                setCookie("ManualAttendanceSheetNewInfo", "0", 1);
                __doPostBack('L$c1i0$cb3224$ct3224$cTool$lbtnPDF','');
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
// -----------------------------------Advanced list ID Links-------------------------------
// ----------------------------------------------------------------------------------------

function CreateAdvancedListDefaultButton(jNode)
{
    var page = GetAdvancedListIDLinkSetting("Default");
    if (page == "") // default not set
    {
        SetAdvancedListIDLinkSetting("Default", "Core->Access");
        page = "Core->Access";
    }
    GeneratePageMenu("Default Open Users in " + page, $(".thCBarbtn:eq(1)").closest("table"))
}

function AddAdvancedListIDLinks()
{
    var listName = GetListName();
    var page = GetAdvancedListIDLinkSetting(listName);
    if (page == "")
    {
        page = GetAdvancedListIDLinkSetting("Default");
        if (page == "") // default not set
        {
            SetAdvancedListIDLinkSetting("Default", "Core->Access");
            page = "Core->Access";
        }
    }

    GeneratePageMenu("Open Users In " + page, $(".thHistory [style='float:left;'"))

    CreateUserLinks(page);
}

function CreateUserLinks(page)
{
    if ($("td").length)
    {
        $("td").each(function(index){
            if ($(this).text().length == 7 && isInt($(this).text()) && $(this).text() > 1000000)
            {
                $(this).html(GetUserLink($(this).text(), page, true));
            }
        });
    }
}

function GetListName()
{
    var listName = $(".thHistoryLink1 ~ b").text()
    listName = listName.replace("Edit Advanced List: ", "");
    listName = listName.replace("Advanced List: ", "");
    if (listName == "")
    {
        listName = "Default";
    }
    return listName;
}

function AdvancedListSetting(listName, page) {
    var that= this;

    this.listName = listName;
    this.page = page;
}

function GetAdvancedListIDLinkSetting(listName)
{
    var rawSettings = getCookie("AdvancedListUserLinkSettings");
    if (rawSettings == "")
    {
        return "";
    }
    var settings = JSON.parse(rawSettings);
    var page = "";
    var defaultPage;

    settings.forEach(function(value){
        if (value.listName == listName)
        {
            page = value.page;
        } else if (value.listName == "Default")
        {
            defaultPage = value.page;
        }
    });
    if (!page)
    {
        page = defaultPage;
    }
    return page;
}

function SetAdvancedListIDLinkSetting(listName, page)
{
    var rawSettings = getCookie("AdvancedListUserLinkSettings");
    var settings = [];

    if (rawSettings != "")
    {
        settings = JSON.parse(rawSettings);
        settings.forEach(function(value){
            if (value.listName == listName)
            {
                value.page = page;
                return;
            }
        });
    }

    var newSetting = new AdvancedListSetting();
    newSetting.listName = listName;
    newSetting.page = page;
    settings.push(newSetting);
    setCookie("AdvancedListUserLinkSettings", JSON.stringify(settings), 9999);
}

function GetUserLink(userID, page, newWindow)
{
    var moduleURL;
    var pageURL;
    var strHTMLPrefix = '<a '
    if (newWindow){
        strHTMLPrefix = strHTMLPrefix + 'target="_blank" '
    }
    strHTMLPrefix = strHTMLPrefix + 'href="https://hanalani.myschoolapp.com/app/'
    var strHTMLSuffix = '</a>';

    switch (page)
    {
        case "Core->Access":
            moduleURL = "Core#userprofile";
            pageURL = "access";
            break;
        case "Core->Enrollment":
            moduleURL = "Core#userprofile";
            pageURL = "enrollment";
            break;
        case "Core->Settings":
            moduleURL = "Core#userprofile";
            pageURL = "settings";
            break;
        case "Core->Files & Forms":
            moduleURL = "Core#userprofile";
            pageURL = "files";
            break;
        case "Core->Contact Card":
            moduleURL = "Core#userprofile";
            pageURL = "contactcard";
            break;
        case "Academics->Attendance":
            moduleURL = "academics#academicprofile";
            pageURL = "attendance";
            break;
        case "Academics->Conduct":
            moduleURL = "academics#academicprofile";
            pageURL = "conduct";
            break;
        case "Academics->Enrollment":
            moduleURL = "academics#academicprofile";
            pageURL = "enrollment";
            break;
        case "Academics->Rank":
            moduleURL = "academics#academicprofile";
            pageURL = "grades";
            break;
        case "Academics->Course Requests":
            moduleURL = "academics#academicprofile";
            pageURL = "courserequests";
            break;
        case "Academics->Contact Card":
            moduleURL = "academics#academicprofile";
            pageURL = "contactcard";
            break;
        case "Enrollment Management->Record":
            moduleURL = "enrollment-management#candidate";
            pageURL = "record";
            break;
        case "Enrollment Management->Checklist":
            moduleURL = "enrollment-management#candidate";
            pageURL = "checklist";
            break;
        case "Enrollment Management->Schools":
            moduleURL = "enrollment-management#candidate";
            pageURL = "schools";
            break;
        case "Enrollment Management->Financial Aid":
            moduleURL = "enrollment-management#candidate";
            pageURL = "financialaid";
            break;
        case "Enrollment Management->Contracts":
            moduleURL = "enrollment-management#candidate";
            pageURL = "contracts";
            break;
        case "Enrollment Management->Contact Card":
            moduleURL = "enrollment-management#candidate";
            pageURL = "contactcard";
            break;
        case "Enrollment Management->Connections":
            moduleURL = "enrollment-management#candidate";
            pageURL = "connections";
            break;
        case "Faculty->Progress":
            moduleURL = "faculty#profile";
            pageURL = "progress";
            break;
        case "Faculty->Schedule":
            moduleURL = "faculty#profile";
            pageURL = "schedule";
            break;
        case "Faculty->Assignments":
            moduleURL = "faculty#profile";
            pageURL = "assignments";
            break;
        case "Faculty->Conduct":
            moduleURL = "faculty#profile";
            pageURL = "conduct";
            break;
        case "Faculty->Official Notes":
            moduleURL = "faculty#profile";
            pageURL = "officalnotes";
            break;
        case "Faculty->Contact Card":
            moduleURL = "faculty#profile";
            pageURL = "contactcard";
            break;
        case "Faculty->Medical":
            moduleURL = "faculty#profile";
            pageURL = "medical";
            break;
    }

    var strHTMLFinal = strHTMLPrefix.concat(moduleURL, "/", userID, "/", pageURL, '">', userID, strHTMLSuffix)
    return strHTMLFinal;
}

function GeneratePageMenu(label, location)
{
    if (!$("#openin-menu").length)
    {
        var strHTMLPrefix = '<div id="openin-menu" class="btn-group" style="margin-left:10px;"><button class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" style="display: inline-block;" data-original-title="" title="" aria-expanded="false">' + label + ' <span class="caret"></span></button><ul class="dropdown-menu">'
        var strHTMLSuffix = '</ul></div>'
        var strHTMLItem
        var strHTMLFinal = strHTMLPrefix;
        var id

        var pages = [
            "Core->Access",
            "Core->Enrollment",
            "Core->Settings",
            "Core->Files and Forms",
            "Core->Contact Card",
            "Academics->Attendance",
            "Academics->Conduct",
            "Academics->Enrollment",
            "Academics->Rank",
            "Academics->Course Requests",
            "Academics->Contact Card",
            "Enrollment Management->Record",
            "Enrollment Management->Checklist",
            "Enrollment Management->Schools",
            "Enrollment Management->Financial Aid",
            "Enrollment Management->Contracts",
            "Enrollment Management->Contact Card",
            "Enrollment Management->Connections",
            "Faculty->Progress",
            "Faculty->Schedule",
            "Faculty->Assignments",
            "Faculty->Conduct",
            "Faculty->Official Notes",
            "Faculty->Contact Card",
            "Faculty->Medical"
        ];

        pages.forEach(function(value){
            id = value.replace(">", "");
            strHTMLItem = '<li><a id="' + id.replace(/\s/g, "_") + '" href="javascript:void(0)">' + value + '</a></li>';
            strHTMLFinal = strHTMLFinal + strHTMLItem;
        });

        strHTMLFinal = strHTMLFinal + strHTMLSuffix;

        location.after(strHTMLFinal);

        pages.forEach(function(value){
            id = value.replace(">", "");
            id = "#" + id.replace(/\s/g, "_");
            $(id).bind("click", function(){
                SetAdvancedListIDLinkSetting(GetListName(), value);
                WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions("L$c1i0$cb143420$ct143420$ctl04", "", true, "", "", false, true))
            });
        });
    }
}

// ----------------------------------------------------------------------------------------
// -----------------------------------Roster Student Select--------------------------------
// ----------------------------------------------------------------------------------------

function CreateRosterCheckboxes(jNode)
{
    var input;
    var cardHeader;
    var nonStudentConditions = ["Teacher", "Co-Teacher", "Assistant Teacher", "Activity Leader", "Owner", "Coach"]
    var selectedCount = 0;

    // Check if the checkboxes already exist on the page and make sure on a roster page
    if (!$(".Select_all").length && window.location.href.substr(window.location.href.length - 6, window.location.href.length) == "roster")
    {

        // Add menu items to Send Communication
        $("#roster-reports").prev().find("li:eq(2)").after('<li><a id="selected-students" href="javascript:void(0)">Selected Students</a></li>');
        $("#roster-reports").prev().find("li:eq(3)").after('<li><a id="selected-parents" href="javascript:void(0)">Selected Students\x27 Parents</a></li>');
        $("#roster-reports").prev().find("li:eq(4)").after('<li><a id="selected-students-and-parents" href="javascript:void(0)">Selected Students and Parents</a></li>');

        // Create Select All checkbox
        $("#roster-count").closest("h4").after('<label><input type="checkbox" class="Select_all">Select All</label>');

        // Create checkboxes for each student's card
        $(".bb-btn-secondary").each(function(index){
            cardHeader = $(this).closest(".roster-card").find(".bb-card-title:first").text()
            if(!nonStudentConditions.some(el => cardHeader.includes(el)) && !$(this).closest(".roster-relationships").length)
                // Only if not a teacher and not for relationships popup
            {
                input = document.createElement("input");
                input.type = "checkbox";
                $(this).before(input);
            }
        });

        // Click events for Send Communication menu items
        $("#selected-students").bind("click", function(){
            EmailSelectedStudents();
        });
        $("#selected-parents").bind("click", function(){
            EmailSelectedParents(false);
        });
        $("#selected-students-and-parents").bind("click", function(){
            EmailSelectedParents(true);
        });

        // Click event for Select All, to check/uncheck all students
        $("input[type='checkbox'].Select_all").bind("click", function(){
            if ($(this).is(":checked"))
            {
                $("input[type='checkbox']").not(".Select_all").prop("checked", true);
            } else
            {
                $("input[type='checkbox']").not(".Select_all").prop("checked", false);
            }
        });

        // Create/update selected count after any checkbox click
        $("input[type='checkbox']").bind("click", function(){
            selectedCount = $('input[type="checkbox"]:checked').not('.Select_all').length;
            if ($("#selected-count").length)
            {
                $("#selected-count").text("  [" + selectedCount + " Selected]")
            } else
            {
                var selectedSpan = document.createElement("span");
                selectedSpan.id = "selected-count";
                selectedSpan.innerHTML = "  [" + selectedCount + " Selected]"
                $("#roster-count").closest("h4").append(selectedSpan);
            }
        });
    }
}

function EmailSelectedParents(studentsToo)
{
    var mailtoLink = "mailto:?bcc=";
    var lastEmail;
    var currEmail = 0;
    var currStudent = 0;
    var gettingEmails = false;
    var popupOpen = false;
    var done = false;
    var timerID = 0;

    if ($('input[type="checkbox"]:checked').not('.Select_all').length) // only if there are selected students
    {
        $("#roster-count").closest("h4").append('<span id="email-parents"> Gathering Parent Emails...</span>')

        timerID = setInterval(function(){

            if (!done) // prevent running on page after already done
            {
                if (currStudent < $('input[type="checkbox"]:checked').not('.Select_all').length) // loop through selected students
                {
                    if (!popupOpen) // if relationship popup is not open, open it
                    {
                        if (studentsToo)
                        {
                            mailtoLink = mailtoLink + $('input[type="checkbox"]:checked').not('.Select_all').eq(currStudent).closest(".roster-card").find("[href^='mailto']").text() + ";"
                        }
                        $('input[type="checkbox"]:checked').not('.Select_all').eq(currStudent).closest(".bb-context-menu").find("[href='#']")[0].click();
                        popupOpen = true;
                    } else
                    {
                        if ($(".roster-relationships [href^='mailto']").length && !gettingEmails) // avoid repeating loop when already running
                        {
                            gettingEmails = true;
                            $(".roster-relationships [href^='mailto']").each(function(index){
                                if ($(this).text() != lastEmail) // skip duplicate email addresses
                                {
                                    mailtoLink = mailtoLink + $(this).text() + ";";
                                    lastEmail = $(this).text();
                                }
                            });

                            $(".close")[0].click();
                            popupOpen = false;
                            currStudent++;
                            gettingEmails = false;
                        } else if (!$(".roster-relationships [href^='mailto']").length) // no parent emails
                        {
                            $(".close")[0].click();
                            popupOpen = false;
                            currStudent++;
                        }
                    }
                } else  // done
                {
                    document.location.href = mailtoLink;
                    $("#email-parents").remove();
                    clearInterval(timerID);
                    done = true;
                }
            }
        }, 100);

    } else
    {
        alert("No students selected!");
    }
}

function EmailSelectedStudents()
{
    var mailtoLink = "mailto:?bcc=";

    if ($('input[type="checkbox"]:checked').not('.Select_all').length)
    {
        $('input[type="checkbox"]:checked').not('.Select_all').each(function(index){
            mailtoLink = mailtoLink + $(this).closest(".roster-card").find("[href^='mailto']").text() + ";"
        });
        document.location.href = mailtoLink;
    } else
    {
        alert("No students selected!");
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
