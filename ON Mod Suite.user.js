// ==UserScript==
// @name         ON Mod Suite
// @namespace    http://www.hanalani.org/
// @version      1.2.2
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
- Team Roster Link to Grades
     Team rosters now have a View Grades link for each student, for quick access to Faculty->Progress page
     for the student.
- Email Multiple Classes
     Classes can be selected on Schedule & Performance page and email sent to students, parents, or everyone in
     selected classes.
- Classes Menu Sort Order
     Classes menu can be sorted by period instead of the default alphabetical order.  See the new Settings page on
     the resource board or click the link at the bottom of any page on the site.
- Classes Menu Default Page
     The default page that classes open to from the Classes menu can be changed to Topics, Assignments, Schedule, or
     Roster instead of the default Bulletin Board.
- Reverse Attendance Default
     Adds option on the Record Attendance screen to set all students to Unexcused Absence, then allowing the teacher to
     one-click mark students as Present.
- Page Number Navigation
     Various Podium pages that contain lists, such as Advanced Lists, have Back/Next and page number links for navigation,
     but only at the top of the page.  This copies the navigation area to the bottom of the page as well.
- Advanced List Favorites
     Advanced lists can be individually added to a list of favorite lists that you can Copy or Run from the Core Dashboard.

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
        case "Settings":
            waitForKeyElements(".conDefault b:first", GenerateSettingsPage)
            break;
        case "Core":
            waitForKeyElements("#userName", PostLinkCore)
            waitForKeyElements(".bb-page-heading", PostLinkCore)
            break;
        case "Academics":
            waitForKeyElements("h1.bb-tile-header", PostLinkAcademics)
            waitForKeyElements(".bb-page-heading", PostLinkFaculty)
            break;
        case "Enrollment Management":
            waitForKeyElements("#CandidateName", PostLinkEnrollmentManagement)
            waitForKeyElements(".bb-page-heading", PostLinkEnrollmentManagement)
            break;
        case "Faculty":
            waitForKeyElements(".bb-page-heading", PostLinkFaculty)
            waitForKeyElements("#group-header-Classes", ClassesMenuSortOrder)
            break;
        case "Extracurricular":
            waitForKeyElements(".student-header-body", PostLinkEnrollmentManagement)
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
            waitForKeyElements(".dropdown-toggle:first", SaveRosterEmails)
            waitForKeyElements("#group-header-Classes", ClassesMenuSortOrder)
            EmailAllParentsOfStudent();
            break;
        case "Team Roster":
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".btn-contact-card:first", AddLinkToFacultyProgress)
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
            CheckIfRunningFavorite()
            waitForKeyElements(".cal2listdayitem:first", CreateAddToFavoritesLink)
            break;
        case "Schedule and Performance":
            waitForKeyElements("#accordionSchedules:first", CreateClassCheckboxes)
            waitForKeyElements("#group-header-Classes", ClassesMenuSortOrder)
            waitForKeyElements(".bb-dialog-header", ReverseAttendanceDefault)
            break;
        case "Core Dashboard":
            waitForKeyElements(".col-md-9:first", AdvancedListFavorites)
            break;
    }

    // People Finder Quick Select
    waitForKeyElements("#people-finder-search-box", PeopleFinderQuickSelect)

    // Remove Connect5 Info
    waitForKeyElements(".emergencyemaildetail p", RemoveConnect5Info)

    // Page footer
    waitForKeyElements("#site-footer-fixed", AddPageFooter)

    // Page Number Navigation
    waitForKeyElements(".thCBarlink:first", CopyPageNumberNavigation)
    waitForKeyElements(".thCBarlinkD:first", CopyPageNumberNavigation)

}


function GetModule(strURL)
{

    if (strURL == "https://hanalani.myschoolapp.com/podium/default.aspx?t=1691&wapp=1&ch=1&_pd=gm_fv&pk=359")
    {
        return "Manual Attendance Sheet Report";
    } else if (strURL == "https://hanalani.myschoolapp.com/app/core#dashboard/system")
    {
        return "Core Dashboard";
    } else if (strURL == "https://hanalani.myschoolapp.com/app/faculty#resourceboarddetail/16184")
    {
        return "Settings";
    } else if (strURL == "https://hanalani.myschoolapp.com/app/faculty#myday/schedule-performance")
    {
        return "Schedule and Performance";
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
    } else if (strURL.substring(53, 65) == "athleticteam" && strURL.substring(strURL.length-6, strURL.length) == "roster")
    {
        return "Team Roster";
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
    } else if (strURL.substring(0, 52) == "https://hanalani.myschoolapp.com/app/extracurricular")
    {
        return "Extracurricular";
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

function AddPageFooter()
{
    if (window.location.href != "https://hanalani.myschoolapp.com/app/faculty#resourceboarddetail/16184")
    {
        $("body").append('<div align="center" style="font-size:12px">This site experience enhanced by ON Mod Suite. | Copyright © 2018 Hanalani Schools | Click <a href="https://hanalani.myschoolapp.com/app/faculty#resourceboarddetail/16184" target="_blank">here</a> to change settings.</div>')
    }
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

    if (strURL.substring(0, 49) == "https://hanalani.myschoolapp.com/app/core#profile")
    {
        strLinks = strLinks.concat(GetLink("Core", strID));
    }
    strLinks = strLinks.concat(GetLink("Academics", strID));
    strLinks = strLinks.concat(GetLink("Enrollment Management", strID));
    strLinks = strLinks.concat(GetLink("Faculty", strID));

    jNode.after(strLinks);

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

    if (strURL.substring(0, 66) == "https://hanalani.myschoolapp.com/app/enrollment-management#profile")
    {
        strLinks = strLinks.concat(GetLink("Enrollment Management", strID));
        jNode.after(strLinks);
    } else
    {
        jNode.append(strLinks);
    }

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
        case "View Grades":
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
        if (!$("#RosterCardContainer").siblings("h4").text().includes("Students"))
        {
            $("#RosterCardContainer").siblings("h4").append(studentCountText);
        }
    } else
    {
        if (!$("h4.pull-left").includes("Students"))
        {
            $("h4.pull-left").append(studentCountText);
        }
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
    localStorage.setItem("ClassID", GetID(window.location.href));

    // Save teacher's user ID to cookie
    $(".bb-card-title").each(function(index){
       var str = $(this).text();
       if (str == "Teacher")
       {
           userID = GetID($(this).closest("header").next().next().find(".bb-dropdown-item").html());
           return false;
       }
    });
    localStorage.setItem("TeacherID", userID);

    // Save class school level to cookie
    var details = $(".lead").text();
    if (details.includes("Upper School"))
    {
        localStorage.setItem("SchoolLevel", "1568");
    } else if (details.includes("Elementary"))
    {
        localStorage.setItem("SchoolLevel", "1567");
    } else if (details.includes("Early Childhood"))
    {
        localStorage.setItem("SchoolLevel", "1566");
    }

    // Save term to cookie
    if (details.includes("Fall Semester"))
    {
        localStorage.setItem("Term", "98719");
    } else if (details.includes("Summer Semester"))
    {
        localStorage.setItem("Term", "98718");
    } else if (details.includes("Spring Semester"))
    {
        localStorage.setItem("Term", "98720");
    } else if (details.includes("Year Long"))
    {
        localStorage.setItem("Term", "98725");
    } else if (details.includes("Summer Term"))
    {
        localStorage.setItem("Term", "98724");
    }

    localStorage.setItem("ManualAttendanceSheetNewInfo", "1");
}

function ManualAttendanceSheet()
{
    switch(localStorage.getItem("ManualAttendanceSheetNewInfo"))
    {
        case "1":
            {
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_l$ctl00']").val(localStorage.getItem("SchoolLevel"));
                localStorage.setItem("ManualAttendanceSheetNewInfo", "2");
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "2":
            {
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00']").val(localStorage.getItem("Term"));
                localStorage.setItem("ManualAttendanceSheetNewInfo", "3");
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "3":
            {
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_t$ctl00']").val(localStorage.getItem("TeacherID"));
                localStorage.setItem("ManualAttendanceSheetNewInfo", "4");
                setTimeout('__doPostBack(\'L$c1i0$cb3224$ct3224$ct3$ddl_d$ctl00\',\'\')', 0)
                break;
            }
        case "4":
            {
                $("[name='L$c1i0$cb3224$ct3224$ct3$ddl_s$ctl00']").val(localStorage.getItem("ClassID"));
                localStorage.setItem("ManualAttendanceSheetNewInfo", "0");
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
    if (!$("#show-menu").length)
    {
        // Add menu
        $("#roster-reports").after('<div id="show-menu" class="btn-group" style="margin-left:10px;"><button class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" style="display: inline-block;" data-original-title="" title="" aria-expanded="false">Show <span class="caret"></span></button><ul class="dropdown-menu"><li><a id="gradyear" href="javascript:void(0)">Grad Year</a></li><li><a id="gradelevel" href="javascript:void(0)">Grade Level</a></li><li><a id="both" href="javascript:void(0)">Both</a></li><li><a id="none" href="javascript:void(0)">None</a></li></ul></div>')
    }
        $("#gradyear").bind("click", function(){
            localStorage.setItem("GradeLevelSetting", 1);
            location.reload();
        });
        $("#gradelevel").bind("click", function(){
            localStorage.setItem("GradeLevelSetting", 2);
            location.reload();
        });
        $("#both").bind("click", function(){
            localStorage.setItem("GradeLevelSetting", 3);
            location.reload();
        });
        $("#none").bind("click", function(){
            localStorage.setItem("GradeLevelSetting", 4);
            location.reload();
        });

        var grade;
        var name;

        switch (localStorage.getItem("GradeLevelSetting"))
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
            case "4":
                $("#none").prepend(">");
                $(".bb-card-title").each(function(index){
                    name = $(this).text();
                    grade = GetGradeLevel(name);
                    if (grade)
                    {
                        name = name.substring(0, name.length-4);
                        $(this).text(name);
                    }
                });
                break;
            default:
                $("#gradelevel").text(">Grade Level (Default)");
                localStorage.setItem("GradeLevelSetting", 2);
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
    GeneratePageMenu("Default Open Users in " + page, $(".thCBar table table:first"))
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
    var rawSettings = localStorage.getItem("AdvancedListUserLinkSettings");
    if (rawSettings == null)
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
    var rawSettings = localStorage.getItem("AdvancedListUserLinkSettings");
    var settings = [];

    if (rawSettings != null)
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
    localStorage.setItem("AdvancedListUserLinkSettings", JSON.stringify(settings));
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
// --------------------------------Team Roster Link to Grades------------------------------
// ----------------------------------------------------------------------------------------

function AddLinkToFacultyProgress()
{
     $(".btn-contact-card").each(function(index){
         if ($(this).closest("div").attr("class") != "bb-card-actions")
         {
            $(this).after(GetLink("View Grades", GetID($(this).attr("href"))))
         }
     });
}

// ----------------------------------------------------------------------------------------
// ----------------------------------Email Multiple Classes--------------------------------
// ----------------------------------------------------------------------------------------

function CreateClassCheckboxes()
{
    var input;
    var link;
    var RosterWindow;

    if (!$(".Select_all").length)
    {
        // Create Send Communication Menu
        if (!$("#send-communication-classes").length)
        {
            $(".schedule-list").before('<div id="send-communication-classes" class="btn-group" style="margin-left:10px;">            <button class="btn  btn-default btn-sm dropdown-toggle" data-toggle="dropdown" data-original-title="" title="">Send Communication to <span class="caret"></span></button>            <ul class="dropdown-menu">                <li><a id="selected-classes-students" href="javascript:void(0)">Students in Selected Classes</a></li><li><a id="selected-classes-parents" href="javascript:void(0)">Parents in Selected Classes</a></li><li><a id="selected-classes-all" href="javascript:void(0)">Everyone in Selected Classes</a></li>            </ul>            </div>')
        }

        // Create Select All checkbox
        $(".schedule-list table thead tr th").eq(2).append('<div align="right"><label><input type="checkbox" class="Select_all">Select All</label></div>');

        // Create checkboxes for each class
        $("#accordionSchedules").find("[href]").not(".all-present").each(function(index){
            input = document.createElement("input");
            input.type = "checkbox";
            input.className = "checkbox-class";
            $(this).before(input);
//            $(this).after('<a id="test" href="javascript:void(0)">Test</a>')
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

        // Click events for Send Communication menu items
        $("#selected-classes-students").unbind("click").bind("click", function(){
            localStorage.setItem("SaveRosterEmailsType", "Students");
            EmailSelectedClasses();
        });
        $("#selected-classes-parents").unbind("click").bind("click", function(){
            localStorage.setItem("SaveRosterEmailsType", "Parents");
            EmailSelectedClasses();
        });
        $("#selected-classes-all").unbind("click").bind("click", function(){
            localStorage.setItem("SaveRosterEmailsType", "All");
            EmailSelectedClasses();
        });

        // Reset cookie in case process failed previously
        localStorage.setItem("SaveRosterEmailsActive", "0");

    }
}

function EmailSelectedClasses()
{
    var numSelectedClasses = $('input[type="checkbox"]:checked').not('.Select_all').length
    var currClass = 0
    var rosterWindow

    if (numSelectedClasses && confirm("A new tab/window will be opened for each class to grab the email addresses.  Click OK when ready."))
    {
        localStorage.setItem("SaveRosterEmailsActive", "1");
        localStorage.setItem("SaveRosterEmailsFirstClass", "1");
        localStorage.setItem("SaveRosterEmailsClassDone", "1");

        var timerID = setInterval(function(){
            var url
            var mailtoLink
            var mailtoLinks = []
            var emails
            if (localStorage.getItem("SaveRosterEmailsClassDone") == 0)
            {
                // wait for new window to finish saving emails
            } else
            {
                if (localStorage.getItem("SaveRosterEmailsFirstClass") == 0)
                {
                    currClass++
                }

                if (currClass < numSelectedClasses)
                {
                    // Open class roster to grab email addresses
                    url = "https://hanalani.myschoolapp.com/app/faculty#academicclass/" + GetID($('input[type="checkbox"]:checked').not('.Select_all').eq(currClass).next("[href]").attr("href")) + "/0/roster"
                    localStorage.setItem("SaveRosterEmailsClassDone", "0");
                    rosterWindow = window.open(url)
                } else  // Done
                {
                    clearInterval(timerID);
                    localStorage.setItem("SaveRosterEmailsActive", "0");
                    emails = localStorage.getItem("SaveRosterEmailsAddresses")

                    // Remove duplicates from emails
                    var emailArray = emails.split("|")
                    var uniqueEmails = [];
                    $.each(emailArray, function(i, el){
                        if($.inArray(el, uniqueEmails) === -1) uniqueEmails.push(el);
                    });

                    // Split email group if larger than 2000 characters total
                    var currEmail = 0
                    emails = ""
                    while (currEmail < uniqueEmails.length)
                    {
                        emails = emails + uniqueEmails[currEmail] + ";"
                        if (emails.length > 1500)
                        {
                            emails = emails.substring(0, emails.length - uniqueEmails[currEmail].length - 2)
                            mailtoLink = "mailto:?bcc=" + emails
                            mailtoLinks.push(mailtoLink)
                            emails = ""
                        }
                        currEmail++
                    }
                    mailtoLink = "mailto:?bcc=" + emails
                    mailtoLinks.push(mailtoLink)
                    var CurrMailtoLink = 0
                    var confirmPrompt = "You will be sending to " + uniqueEmails.length + " recipients."
                    if (mailtoLinks.length > 1)
                    {
                        confirmPrompt += "  Due to browser limitations, your recipient list will be split into " + mailtoLinks.length + " parts and a new message window created for each."
                    }

                    if(confirm(confirmPrompt))
                    {
                        var timerID2 = setInterval(function() {
                            if (CurrMailtoLink < mailtoLinks.length)
                            {
                                document.location.href = mailtoLinks[CurrMailtoLink];
                                CurrMailtoLink++
                            } else
                            {
                                clearInterval(timerID2)
                            }
                        }, 500);
                    }
                }

            }
        }, 100);
    } else if (!numSelectedClasses)
    {
        alert("No classes selected!");
    }
}

function SaveRosterEmails()
{
    if (localStorage.getItem("SaveRosterEmailsActive") == 1)
    {
        switch (localStorage.getItem("SaveRosterEmailsType"))
        {
            case "Students":
                $(".send-message").eq(0)[0].click()
                waitForKeyElements("#email-list-textarea", GrabEmails)
                break;
            case "Parents":
                $(".send-message").eq(1)[0].click()
                waitForKeyElements("#email-list-textarea", GrabEmails)
                break;
            case "All":
                $(".send-message").eq(2)[0].click()
                waitForKeyElements("#email-list-textarea", GrabEmails)
                break;
        }
    }
}

function GrabEmails()
{
    if (localStorage.getItem("SaveRosterEmailsActive") == 1)
    {
        var str;

        if ($("#email-list-textarea").text().length)  // Make sure there are emails in the box
        {
            if (localStorage.getItem("SaveRosterEmailsFirstClass") == 1)
            {
                str = $("#email-list-textarea").text();
                localStorage.setItem("SaveRosterEmailsFirstClass", "0");
            } else
            {
                str = localStorage.getItem("SaveRosterEmailsAddresses") + "| " + $("#email-list-textarea").text()
            }
            str = str.replace(/,/g, "|")  // Commas and semicolons are not allowed in cookie values
            localStorage.setItem("SaveRosterEmailsAddresses", str)
            localStorage.setItem("SaveRosterEmailsClassDone", "1")
            window.close()
        } else
        {
            // Box of emails is empty.  Reload page to try again
            location.reload()
        }
    }
}

// ----------------------------------------------------------------------------------------
// ----------------------------------Classes Menu Sort Order-------------------------------
// ----------------------------------------------------------------------------------------

function ClassesMenuSortOrder(jNode)
{
    // Get saved value
    if (localStorage.getItem("ClassesMenuSortOrder") == "period")
    {
        // Sort class list
        jNode.siblings(".subnav").find("ul:first").html(
            jNode.siblings(".subnav").find("ul:first").children("li").sort(function (a, b) {
                return GetPeriodSortOrder(GetPeriod($(a).find(".title").text())) - GetPeriodSortOrder(GetPeriod($(b).find(".title").text()));
            })
                                             );

        // Rename menu items to put period in front
        jNode.siblings(".subnav").find("ul:first").children("li").each(function (index) {
            if ($(this).find(".title").text().indexOf("(") != -1)
            {
                $(this).find(".title").text("[" + GetPeriod($(this).find(".title").text()) + "] " + $(this).find(".title").text().substring(0, $(this).find(".title").text().indexOf("(")))
            }
        });
    }

    UpdateClassMenuLinks()
}

function GetPeriodSortOrder(period)
{
    if (period)
    {
        switch (period.substring(0, 2))
        {
            case "HR":
                return 1;
                break;
            case "P1":
            case "D1":
                return 2;
                break;
            case "P2":
            case "D2":
                return 3;
                break;
            case "P3":
            case "D3":
                return 4;
                break;
            case "P4":
            case "D4":
                return 5;
                break;
            case "Fl":
                return 6;
                break;
            case "P5":
            case "D5":
                return 7;
                break;
            case "P6":
            case "D6":
                return 8;
                break;
            case "P7":
            case "D7":
                return 9;
                break;
            case "P8":
                return 10;
                break;
            case "AS":
                return 11;
                break;
            default:
                return 99;
        }
    } else
    {
        return 99;
    }
}

function GetPeriod(className)
{
    if (className.indexOf("(") == -1)
    {
        return null
    } else
    {
        return className.substring(className.indexOf("(")+1, className.indexOf(")"))
    }
}

// ----------------------------------------------------------------------------------------
// ------------------------------------Default Class Page----------------------------------
// ----------------------------------------------------------------------------------------

function UpdateClassMenuLinks()
{
    var page = localStorage.getItem("ClassesDefaultPage")

    $("#group-header-Classes").siblings(".subnav").find("a").attr("href", function(index, value){
        if (GetID(value))
        {
            return GetClassPage(GetID(value), page)
        } else
        {
            return value
        }
    });
}

function GetClassPage(classID, page)
{
    var urlPrefix = "https://hanalani.myschoolapp.com/app/faculty#academicclass/"
    var urlMiddle = "/0/"

    switch (page)
    {
        case "bulletinboard":
            return urlPrefix + classID + urlMiddle + "bulletinboard"
            break;
        case "topics":
            return urlPrefix + classID + urlMiddle + "topics"
            break;
        case "assignments":
            return urlPrefix + classID + urlMiddle + "assignments"
            break;
        case "schedule":
            return urlPrefix + classID + urlMiddle + "schedule"
            break;
        case "roster":
            return urlPrefix + classID + urlMiddle + "roster"
            break;
        default:
            return urlPrefix + classID + urlMiddle + "bulletinboard"
    }
}

// ----------------------------------------------------------------------------------------
// ---------------------------------------Settings Page------------------------------------
// ----------------------------------------------------------------------------------------

function GenerateSettingsPage(jNode)
{
    var str
    // Build Page
    document.title = "ON Mod Suite Settings"
    jNode.text(" ")
    jNode.parent().append('<style scoped>th, td { padding: 10px; } form label {font-weight:normal;}</style><table id="settings-table"><tr><td valign="top">Classes menu sort order</td><td><input type="radio" id="ClassSortByName" name="class-sort" value="name"><label for="ClassSortByName">By Name</label><br><input type="radio" id="ClassSortByPeriod" name="class-sort" value="period"><label for="ClassSortByPeriod">By Period</label></td></tr></table>')

    // Default Class Page
    str = '<tr><td valign="top">Classes menu default page</td>'
    str += '<td><input type="radio" id="ClassPageDefaultBulletinBoard" name="class-default-page" value="bulletinboard"><label for="ClassPageDefaultBulletinBoard">Bulletin Board</label><br>'
    str += '<input type="radio" id="ClassPageDefaultTopics" name="class-default-page" value="topics"><label for="ClassPageDefaultTopics">Topics</label><br>'
    str += '<input type="radio" id="ClassPageDefaultAssignments" name="class-default-page" value="assignments"><label for="ClassPageDefaultAssignments">Assignments</label><br>'
    str += '<input type="radio" id="ClassPageDefaultSchedule" name="class-default-page" value="schedule"><label for="ClassPageDefaultSchedule">Schedule</label><br>'
    str += '<input type="radio" id="ClassPageDefaultRoster" name="class-default-page" value="roster"><label for="ClassPageDefaultRoster">Roster</label><br>'
    str += '</td></tr>'
    $("#settings-table").append(str)

    // ----------------------------------------------------------------------------------------
    // Get existing settings

    // Classes Menu Sort Order
    switch (localStorage.getItem("ClassesMenuSortOrder"))
    {
        case "name":
            $("#ClassSortByName").prop("checked", true)
            break;
        case "period":
            $("#ClassSortByPeriod").prop("checked", true)
            break;
        default:
            $("#ClassSortByName").prop("checked", true)
            $("#ClassSortByName ~ label:first").text("By Name (default)")
    }

    // Default Class Page
    switch (localStorage.getItem("ClassesDefaultPage"))
    {
        case "bulletinboard":
            $("#ClassPageDefaultBulletinBoard").prop("checked", true)
            break;
        case "topics":
            $("#ClassPageDefaultTopics").prop("checked", true)
            break;
        case "assignments":
            $("#ClassPageDefaultAssignments").prop("checked", true)
            break;
        case "schedule":
            $("#ClassPageDefaultSchedule").prop("checked", true)
            break;
        case "roster":
            $("#ClassPageDefaultRoster").prop("checked", true)
            break;
        default:
            $("#ClassPageDefaultBulletinBoard").prop("checked", true)
            $("#ClassPageDefaultBulletinBoard ~ label:first").text("Bulletin Board (default)")
    }

    // Save changes
    $("#ClassSortByName").unbind("click").bind("click", function(){
        localStorage.setItem("ClassesMenuSortOrder", "name")
    });
    $("#ClassSortByPeriod").unbind("click").bind("click", function(){
        localStorage.setItem("ClassesMenuSortOrder", "period")
    });
    $("#ClassPageDefaultBulletinBoard").unbind("click").bind("click", function(){
        localStorage.setItem("ClassesDefaultPage", "bulletinboard")
    });
    $("#ClassPageDefaultTopics").unbind("click").bind("click", function(){
        localStorage.setItem("ClassesDefaultPage", "topics")
    });
    $("#ClassPageDefaultAssignments").unbind("click").bind("click", function(){
        localStorage.setItem("ClassesDefaultPage", "assignments")
    });
    $("#ClassPageDefaultSchedule").unbind("click").bind("click", function(){
        localStorage.setItem("ClassesDefaultPage", "schedule")
    });
    $("#ClassPageDefaultRoster").unbind("click").bind("click", function(){
        localStorage.setItem("ClassesDefaultPage", "roster")
    });
}

// ----------------------------------------------------------------------------------------
// ---------------------------------Reverse Attendance Default-----------------------------
// ----------------------------------------------------------------------------------------

function ReverseAttendanceDefault(jNode)
{
    if (jNode.text() == "Record Attendance")
    {
        $(".modal-body").prepend('<a href="javascript:void(0)" id="reverse-attendance">Click to set all students to Unexcused Absence</a>')

        $("#reverse-attendance").unbind("click").bind("click", function(){
            if ($(".slide").find("th").text().trim().substring(0, 8) == "Homeroom")
            {
                // If Homeroom, choose the Homeroom code
                $(".form-control:contains('Attended Class'):not(:disabled)").val("3385")
            } else
            {
                // Otherwise, choose the Class code
                $(".form-control:contains('Attended Class'):not(:disabled)").val("3996")
            }

            // Create links for marking as Present
            if (!$(".mark-present").length)
            {
                $(".table-condensed tbody tr").each(function() {
                    $(this).find("td").eq(1).append('<br><a href="javascript:void(0)" class="mark-present"> Present--&gt</a>')
                });
            }
        });

        // Click handler for Present link
        $(document).on('click', ".mark-present", function(){
            $(this).parents("tr").find("select").val("3384")
        });
    }
}

// ----------------------------------------------------------------------------------------
// -----------------------------------Page Number Navigation-------------------------------
// ----------------------------------------------------------------------------------------

function CopyPageNumberNavigation(jNode)
{
    if (!$("#bottom-page-navigation").length)
    {
        $("#lPg").append(jNode.closest("table").clone().attr("id", "bottom-page-navigation"));
    } else
    {
        $("#bottom-page-navigation").replaceWith(jNode.closest("table").clone().attr("id", "bottom-page-navigation"))
    }
    window.scrollTo(0, 0);
}

// ----------------------------------------------------------------------------------------
// ----------------------------------Advanced List Favorites-------------------------------
// ----------------------------------------------------------------------------------------

function AdvancedListFavorites()
{
    if (location.href == "https://hanalani.myschoolapp.com/app/core#dashboard/system")
    {
        $(".col-md-9").append('<h1>Favorite Lists</h><br>')

        var rawFavorites = localStorage.getItem("AdvancedListFavorites");

        if (rawFavorites == null)
        {
            $(".col-md-9").append("No favorites yet. Go to Advanced Lists to add some.")
            return;
        }

        var favorites = JSON.parse(rawFavorites);
        var favoriteHTML

        if (!favorites.length)
        {
            $(".col-md-9").append("No favorites yet. Go to Advanced Lists to add some.")
        } else
        {

            favorites.forEach(function(value){
                favoriteHTML = value.listName + ' | <a href="javascript:void(0)" class="fav-list-copy" data-id="' + value.listID + '" data-name="' + value.listName + '">Copy</a>' + ' | <a href="javascript:void(0)" class="fav-list-run" data-id="' + value.listID + '" data-name="' + value.listName + '">Run</a>' + ' | <a href="javascript:void(0)" class="fav-list-remove" data-id="' + value.listID + '" data-name="' + value.listName + '">Remove from Favorites</a><br>'
                $(".col-md-9").append(favoriteHTML)
            });

            $(document).on('click', ".fav-list-copy", function(){
                localStorage.setItem("FavoriteListRunID", $(this).attr("data-id"))
                localStorage.setItem("FavoriteListRunName", $(this).attr("data-name"))
                localStorage.setItem("FavoriteListRunType", "Copy")
                window.open("https://hanalani.myschoolapp.com/podium/default.aspx?t=23189&wapp=1")
            });

            $(document).on('click', ".fav-list-run", function(){
                localStorage.setItem("FavoriteListRunID", $(this).attr("data-id"))
                localStorage.setItem("FavoriteListRunName", $(this).attr("data-name"))
                localStorage.setItem("FavoriteListRunType", "Run")
                window.open("https://hanalani.myschoolapp.com/podium/default.aspx?t=23189&wapp=1")
            });

            $(document).on('click', ".fav-list-remove", function(){
                var rawFavorites = localStorage.getItem("AdvancedListFavorites");
                var favorites = [];

                if (rawFavorites != null)
                {
                    favorites = JSON.parse(rawFavorites);
                    var index = favorites.findIndex(x => x.ListID === $(this).attr("data-id"))
                    if (index)
                    {
                        favorites.splice(index, 1)
                        localStorage.setItem("AdvancedListFavorites", JSON.stringify(favorites));
                        alert($(this).attr("data-name") + " removed from favorites.")
                        location.reload()
                    }
                }
            });
        }
    }
}

function CheckIfRunningFavorite()
{
    // Loads when Advanced List Main Page loads
    var FavoriteListID
    var FavoriteListName
    var FavoriteListType

    FavoriteListID = localStorage.getItem("FavoriteListRunID")
    FavoriteListName = localStorage.getItem("FavoriteListRunName")
    FavoriteListType = localStorage.getItem("FavoriteListRunType")

    if (FavoriteListID != null)
    {
        localStorage.setItem("FavoriteListRunID", "")
        localStorage.setItem("FavoriteListRunName", "")
        if (FavoriteListType == "Copy")
        {
            __pdL('52568', 'Copy Advanced List: ' + FavoriteListName, '1', '~slid=' + FavoriteListID + '~copy=1', '', 'False', '0', '', 'default.aspx')
        } else if(FavoriteListType == "Run")
        {
            __pdL('52586', 'Advanced List: ' + FavoriteListName, '1', '~slid=' + FavoriteListID + '~ml=False~sln=' + FavoriteListName, '', 'False', '0', '', 'default.aspx')
        }
        localStorage.removeItem("FavoriteListRunType")
    }
}

function CreateAddToFavoritesLink()
{
    var ListName
    var ListID
    var pos
    var link

    $(".cal2listdayitem, .cal2listdayitemalt").each(function(){
        ListName = $(this).find(".cal2listdayitemtext:first").text().trim()
        pos = $(this).find(".cal2listdayitemtext").eq(1).children("a:last").attr("href").indexOf("slid")
        ListID = $(this).find(".cal2listdayitemtext").eq(1).children("a:last").attr("href").substring(pos+5, pos+10)
        link = ' | <a href="javascript:void(0)" class="add-list-to-favorites" data-id="' + ListID + '" data-name="' + ListName + '">Add to Favorites</a>'
        $(this).find(".cal2listdayitemtext").eq(1).append(link)
    });

    //$(document).on('click', ".add-list-to-favorites", function(){
    $(".add-list-to-favorites").unbind("click").bind("click", function(){
        AddAdvancedListFavorite($(this).attr("data-id"), $(this).attr("data-name"))
    });
}

function AdvancedListFavorite(listID, listName)
{
    var that=this;
    this.listID = listID;
    this.listName = listName;
}

function AddAdvancedListFavorite(listID, listName)
{
    var rawFavorites = localStorage.getItem("AdvancedListFavorites");
    var favorites = [];

    if (rawFavorites != null)
    {
        favorites = JSON.parse(rawFavorites);
    }

    var index = favorites.findIndex(x => x.ListID === listID)

    if (index != -1)
    {
        alert(listName + " is already in favorites.")
    } else
    {
        var newFavorite = new AdvancedListFavorite();
        newFavorite.listID = listID;
        newFavorite.listName = listName;
        favorites.push(newFavorite);
        localStorage.setItem("AdvancedListFavorites", JSON.stringify(favorites));
        alert(listName + " added to favorites.  View your favorites on Core->Dashboard.")
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

