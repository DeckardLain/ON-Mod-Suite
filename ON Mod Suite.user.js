// ==UserScript==
// @name         ON Mod Suite
// @namespace    http://www.hanalani.org/
// @version      2.4.2
// @description  Collection of mods for Blackbaud ON system
// @author       Scott Yoshimura
// @match        https://hanalani.myschoolapp.com/*
// @grant        none
// @run-at       document-end
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

/* Copyright (C) 2018-2019  Hanalani Schools

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

---Table of Contents---
[INDEX001] Main Section
[INDEX002] User Module Selector
[INDEX003] People Finder Quick Select
[INDEX004] Switch Roster to Faculty
[INDEX005] Email All Parents of Student
[INDEX006] Enroll in All
[INDEX007] Remove Connect5 Info
[INDEX008] Roster Student Count
[INDEX009] Manual Attendance Sheet
[INDEX010] Convert Grad Year to Grade Level
[INDEX011] Advanced List ID Links
[INDEX012] Roster Student Select
[INDEX013] Team Roster Link to Grades
[INDEX014] Email Multiple Classes
[INDEX015] Classes Menu Sort Order
[INDEX016] Default Class Page
[INDEX017] Settings Page
[INDEX018] Reverse Attendance Default
[INDEX019] Page Number Navigation
[INDEX020] Advanced List Favorites
[INDEX021] WYSIWYG Editor Improvements
[INDEX022] Highlight Invalid Attendance
[INDEX023] Automatically Expand All
[INDEX024] Official Notes Improvements
[INDEX025] Email From Advanced List
[INDEX026] Pushpage Improvements
[INDEX027] ENR-12 Shortcuts
[INDEX028] Salutation Formulas
[INDEX029] Admin Field Auto-Add
[INDEX030] Highlight Row on Hover
[INDEX031] Manage Student Enrollments Shortcuts
[INDEX032] List Role Access Shortcuts
[INDEX033] Enter Grades by Class Textbox Size
[INDEX034] Fix Immunization Requirements Collapse
[INDEX035] Default Assignment Date Filter
[INDEX900] Misc. Helper Functions


Completed Mods:
1 - User Module Selector
     Adds links to user pages for quickly switching between module views

2 - People Finder Quick Select
     Hit enter when searching with People Finder to open the first result.
     Use number keys 1-9 to select the nth search result
     Added in v1.6.6 - Click on the People Finder menu button to put the cursor in the search box.  The
     script now prevents the menu from hiding as long as the cursor is in the search box. Click on the page
     or hit Escape to cancel and hide the menu.

3 - Switch Roster to Faculty
     Class rosters opened in Academics are missing the Send Communication menu.
     This adds a link to quickly switch between Faculty and Academics view of the roster.
     Updated in v0.7.1 - Send Communication menu simply added to Academics roster.

4 - Email all parents of a student from Roster Relationships
     View Relationships from a student's card in a roster now includes a mailto link that includes all
     emails for this student's parents.

5 - Enroll in All
     Button added when editing group enrollments, primarily for LS, who add all classes for a specific
     homeroom.

6 - Roster Student Count
     Rosters (class, activity, community, and athletic groups) show total members, including teachers/
     coaches.  This also displays the total number of students in the group, which is a more useful number.

7 - Manual Attendance Sheet Improvements
     Manual Attendance Sheet report added to roster reports menu and loads the class that you ran the
     report from.

8 - Convert Grad Year to Grade Level
     Roster cards can now display current grade level instead of graduation year or both, (global setting saved
     in browser local storage and selectable from a new menu added to roster pages).  Student profile pages
     (Core, Academics, Faculty) display the current grade level in addition to the grad year.

9 - Advanced List User Links
     Advanced lists that include a User ID column will now link the User ID to their profile page.  The module
     and page it opens to is customizable and saved per list.

10 - Roster Student Select
     Specific students can be selected on class rosters, and the Send Communication menu then used to email those
     students, parents of those students, or both.

11 - Team Roster Link to Grades
     Team rosters now have a View Grades link for each student, for quick access to Faculty->Progress page
     for the student.

12 - Email Multiple Classes
     Classes can be selected on Schedule & Performance page and email sent to students, parents, or everyone in
     selected classes.

13 - Classes Menu Sort Order
     Classes menu can be sorted by period instead of the default alphabetical order.  See the new Settings page on
     the resource board or click the link at the bottom of any page on the site.

14 - Classes Menu Default Page
     The default page that classes open to from the Classes menu can be changed to Topics, Assignments, Schedule, or
     Roster instead of the default Bulletin Board.

15 - Reverse Attendance Default
     Adds option on the Record Attendance screen to set all students to Unexcused Absence, then allowing the teacher to
     one-click mark students as Present.

16 - Page Number Navigation
     Various Podium pages that contain lists, such as Advanced Lists, have Back/Next and page number links for navigation,
     but only at the top of the page.  This copies the navigation area to the bottom of the page as well.

17 - Advanced List Favorites
     Advanced lists can be individually added to a list of favorite lists that you can Copy or Run from the Core Dashboard.
     Sharable link can be copied and sent to other users, so they can run a list without needing to find it first.

18 - WYSIWYG Editor Improvements
     Default font size in WYSIWYG editors throughout the system is very small and hard to read (10px).  Change this default on the
     script's settings page.  Note that this does not change the final font size of the edited item, which is different
     depending on where this item is displayed.  Ex: Announcement default is 15px, while pushpage appears to be 13px if no font
     size is selected in the editor.

     The (vertical) size of the editor is also very small.  Expand button has been added, which can be clicked on to
     increase the size of the box.  Added in v1.6.1: The starting height of all editor boxes can be customized on the Settings page.

19 - Highlight Invalid Attendance
     Invalid attendance (class codes in Homeroom or non-class codes in classes) will be highlighted on the Student Attendance
     page to easily see which attendance entries need to be fixed.

20 - Automatically Expand All
     When enabled (turn on in Settings), all collapsed areas (identified by the down chevron), such as financial aid will be
     expanded automatically when the page loads. Also causes the Checklist page to load grouped by milestone.

21 - Official Notes Improvements
     For Admissions Official Notes - options to move unread messages to top of the list and remove notes of type Admissions
     Only.  Candidate names are also now linked to their checklist page.

22 - Email from Advanced List
     Advanced lists that contain an "E-Mail" field now have an additional link in the preview's header that can be used to
     send an email to all addresses in the list.  v1.6.8 also added individual mailto links for each address in the table.

23 - Pushpage Improvements
     Increase Distribution Group List Box Size - When creating or editing a distribution group, increases the size of the
     list selection box so that it is actually usable.

24 - ENR-12 Shortcuts
     To improve ENR-12 processing speed, when viewing registries for the ENR-12 form, shortcuts to view contract status or send
     email to the parent have been added.  Also, when opening the contract list from the registration, the student link will
     open to their Academics->Groups page for adding additional programs.

25 - Salutation Formulas
     When entering address salutations, choose from a drop-down list of options generated from parent names.  Only works for two
     parents.  Optionally, name prefixes can be grabbed for the parents (requires some extra processing because their contact
     cards need to be opened).

26 - Admin Field Auto-Add
     When selecting an admin-viewable-only field, automatically add the field when selected from the drop-down.

27 - Highlight Row on Hover
     Hard-to-read lists on podium pages now highlight on mouseover.

28 - Manage Student Enrollments Shortcuts
     When in Manage Student Enrollments, hover over a student and press a keyboard shortcut to select Promote, Repeat, Withdraw,
     or No Change without needing to click the radio button.

29 - List Role Access Shortcuts
     When editing advanced list role access, hover over a role and press a keyboard shortcut to select Run, Copy, or No Access
     without needing to click the radio button.

30 - Enter Grades By Class Textbox Size
     Increases width of grade textboxes in Enter Grades by Class, which are too small to fit values using multiple decimal places.
     Also adjusts sizes for Faculty Record Grades.

31 - Fix Admissions Immunizations Requirements Collapse
     On student medical profile, clicking on the Admissions Immunizations Requirements header to collapse the section collapses the
     Forms section instead because sections use the same element ID.  This function gives the immunizations section a unique ID.

32 - Class Assignments Default Date Filter
     Set a default date filter (instead of always on Active) for class assignment pages.  Additional option "Current Quarter" pulls
     dates for the current quarter to fill in the start and end date for custom date range.

Notes:
- Also removes Connect5 emergency contact info from contact cards

*/

// ----------------------------------------[INDEX001]--------------------------------------
// ---------------------------------------Main Section-------------------------------------
// ----------------------------------------------------------------------------------------

this.$ = this.jQuery = jQuery.noConflict(true);
const schoolURL = "https://hanalani.myschoolapp.com/"
const settingsResourceBoardID = "16184"

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

    console.log("Function: " + arguments.callee.name)
    var strURL = window.location.href

    switch(GetModule(strURL))
    {
        case "Settings":
            waitForKeyElements(".conDefault b:first", GenerateSettingsPage, true)
            break;
        case "Core":
            waitForKeyElements("#userName", PostLinkCore)
            waitForKeyElements(".bb-page-heading", PostLinkCore)
            waitForKeyElements("#LabelSalutation", SalutationFormulas)
            waitForKeyElements(".bb-tile-header:contains('General information')", SavePrefixes, true)
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
            waitForKeyElements(".bb-btn-secondary", CreateRosterCheckboxes)
            EmailAllParentsOfStudent();
            break;
        case "Faculty-Roster":
            waitForKeyElements(".bb-page-heading", PostLinkRosterAcademics)
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".bb-btn-secondary", CreateRosterCheckboxes)
            waitForKeyElements(".dropdown-toggle:first", SaveRosterEmails)
            waitForKeyElements("#group-header-Classes", ClassesMenuSortOrder)
            EmailAllParentsOfStudent();
            break;
        case "Team Roster":
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".btn-contact-card:first", AddLinkToFacultyProgress)
        case "Other Roster":
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".bb-btn-secondary", CreateRosterCheckboxes)
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
            waitForKeyElements(".core-dashboard", AdvancedListFavorites)
            break;
        case "Student Attendance":
            waitForKeyElements(".inline-edit:first", HighlightInvalidAttendance)
            break;
        case "Official Notes Admissions":
            waitForKeyElements(".bb-tile-content-section:first", OfficialNotesImprovements)
            break;
        case "Create Distribution Group":
            waitForKeyElements("[style='height:75px;width:200px;visibility:visible !important;']", IncreaseDistributionGroupListBoxSize, true)
            break;
        case "Edit Registry":
            waitForKeyElements("#L_c1i0_cb88911_ct88911_ctl00_f_7", ENR12Shortcuts, true)
            break;
        case "Contracts List":
            waitForKeyElements(".bb-search-input-container", ContractListAutoSearch, true)
            break;
        case "Manage Student Enrollments Promote":
            waitForKeyElements(".tbl", ManageStudentEnrollmentsShortcuts, true)
            break;
        case "List Role Access":
            waitForKeyElements(".tbl", ListRoleAccessShortcuts, true)
            break;
        case "Enter Grades By Class":
            waitForKeyElements(".ch2", EnterGradesByClassTextboxSize, true)
            break;
        case "Record Grades":
            waitForKeyElements(".ch", EnterGradesByClassTextboxSize)
            break;
        case "Medical Profile":
            waitForKeyElements(".bb-tile-content", FixImmunizationCollapse)
            waitForKeyElements(".bb-page-heading", PostLinkFaculty)
            break;
        case "Assignments":
            waitForKeyElements(".assignment-filter-item", DefaultClassAssignmentDateFilter, true)
            waitForKeyElements("#group-header-Classes", ClassesMenuSortOrder)
    }

    // People Finder Quick Select
    waitForKeyElements(".people-finder-search-box", PeopleFinderQuickSelect)
    waitForKeyElements("sis-people-finder", PeopleFinderQuickSelect)

    // Remove Connect5 Info
    waitForKeyElements(".emergencyemaildetail p", RemoveConnect5Info)

    // Page footer
    waitForKeyElements("#site-footer-fixed", AddPageFooter)
    waitForKeyElements("sky-pages-app", AddPageFooter)

    // Page Number Navigation
    waitForKeyElements(".thCBarlink:first", CopyPageNumberNavigation)
    waitForKeyElements(".thCBarlinkD:first", CopyPageNumberNavigation)

    // WYSIWYG Editor Improvements
    if (strURL != schoolURL+"podium/default.aspx?t=52781")
    {
        waitForKeyElements("#tinymce", EditorImprovements, false, "iframe")
    }

    // Chevron Down
    waitForKeyElements(".fa-chevron-down", AutomaticallyExpandAll)

    // Admin Field Auto-Add
    waitForKeyElements(".available-field-dropdown", AdminFieldAutoAdd)

    // Highlight row on hover
    HighlightRowOnHover()

}


function GetModule(strURL)
{
    console.log("Function: " + arguments.callee.name + "(" + strURL + ")")
    if (strURL == schoolURL+"podium/default.aspx?t=1691&wapp=1&ch=1&_pd=gm_fv&pk=359")
    {
        return "Manual Attendance Sheet Report";
    } else if (strURL.substring(strURL.length-11) == "assignments")
    {
        return "Assignments";
    } else if (strURL.substring(0, schoolURL.length+19) == schoolURL+"app/faculty#profile" && strURL.substring(schoolURL.length+28, schoolURL.length+35) == "medical")
    {
        return "Medical Profile";
    } else if (strURL.indexOf("app/faculty#gradesrecord/") >= 0)
    {
        return "Record Grades";
    } else if (strURL == schoolURL+"podium/default.aspx?t=35230")
    {
        return "Enter Grades By Class";
    } else if (strURL == schoolURL+"app/enrollment-management#lists/contracts")
    {
        return "Contracts List"
    } else if (strURL == schoolURL+"podium/default.aspx?t=23193")
    {
        return "List Role Access"
    } else if (strURL == schoolURL+"podium/default.aspx?t=2948")
    {
        return "Manage Student Enrollments Promote"
    } else if (strURL == schoolURL+"podium/default.aspx?t=36655")
    {
        return "Edit Registry";
    } else if (strURL == schoolURL+"podium/default.aspx?t=52800" || strURL == schoolURL+"podium/default.aspx?t=52801" || strURL == schoolURL+"podium/default.aspx?t=52802")
    {
        return "Create Distribution Group";
    } else if (strURL.substring(strURL.length-25, strURL.length) == "#message/admofficialnotes")
    {
        return "Official Notes Admissions";
    } else if (strURL == schoolURL+"app/academics#studentattendance")
    {
        return "Student Attendance";
    } else if (strURL == schoolURL+"edu-core/dashboard")
    {
        return "Core Dashboard";
    } else if (strURL == schoolURL+"app/faculty#resourceboarddetail/"+settingsResourceBoardID)
    {
        return "Settings";
    } else if (strURL == schoolURL+"app/faculty#myday/schedule-performance")
    {
        return "Schedule and Performance";
    } else if (strURL.substring(0, schoolURL.length+8).toLowerCase() == schoolURL+"app/core")
    {
        return "Core";
    } else if (strURL.substring(0, schoolURL.length+37) == schoolURL+"app/academics#managestudentenrollment")
    {
        return "Manage Student Enrollment";
    } else if (strURL.substring(0, schoolURL.length+27) == schoolURL+"app/academics#academicclass" && strURL.substring(schoolURL.length+40, schoolURL.length+46) == "roster")
    {
        return "Academics-Roster";
    } else if (strURL.substring(0, schoolURL.length+25) == schoolURL+"app/faculty#academicclass" && strURL.substring(schoolURL.length+38, schoolURL.length+44) == "roster")
    {
        return "Faculty-Roster";
    } else if (strURL.substring(schoolURL.length+20, schoolURL.length+32) == "athleticteam" && strURL.substring(strURL.length-6, strURL.length) == "roster")
    {
        return "Team Roster";
    } else if (strURL.substring(strURL.length-6, strURL.length) == "roster")
    {
        return "Other Roster";
    } else if (strURL.substring(0, schoolURL.length+13) == schoolURL+"app/academics")
    {
        return "Academics";
    } else if (strURL.substring(0, schoolURL.length+25) == schoolURL+"app/enrollment-management")
    {
        return "Enrollment Management";
    } else if (strURL.substring(0, schoolURL.length+11) == schoolURL+"app/faculty")
    {
        return "Faculty";
    } else if (strURL.substring(0, schoolURL.length+19) == schoolURL+"app/extracurricular")
    {
        return "Extracurricular";
    } else if (strURL == schoolURL+"podium/default.aspx?t=52586")
    {
        return "Advanced List - Run";
    } else if (strURL == schoolURL+"podium/default.aspx?t=52568")
    {
        return "Advanced List - CopyEdit";
    } else if (strURL.substring(0, schoolURL.length+27) == schoolURL+"podium/default.aspx?t=23189")
    {
        return "Advanced List Main";
    }

    return;
}

function AddPageFooter()
{
    console.log("Function: " + arguments.callee.name)
    if (window.location.href != schoolURL+"app/faculty#resourceboarddetail/"+settingsResourceBoardID)
    {
        $("body").append('<div align="center" id="on-mod-suite-footer" style="font-size:12px">This site experience enhanced by ON Mod Suite v' + GM_info.script.version + '. | Copyright © 2018-2019 Hanalani Schools | Click <a href="'+schoolURL+'app/faculty#resourceboarddetail/'+settingsResourceBoardID+'" target="_blank">here</a> to change settings.</div>')
    }
}

// ---------------------------------------[INDEX002]---------------------------------------
// -----------------------------------User Module Selector---------------------------------
// ----------------------------------------------------------------------------------------

function PostLinkCore(jNode)
{
    console.log("Function: " + arguments.callee.name)
    var strURL = window.location.href
    var strLinks = "Open in: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 7){
        return;
    }

    if (strURL.substring(0, schoolURL.length+16) == schoolURL+"app/core#profile")
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
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
    var strURL = window.location.href
    var strLinks = "Open in: "
    var strID = GetID(strURL);
    if(strID == null || strID.length != 7){
        return;
    }

    strLinks = strLinks.concat(GetLink("Core", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Academics", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Faculty", strID));

    if (strURL.substring(0, schoolURL.length+33) == schoolURL+"app/enrollment-management#profile")
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
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
    var strHTMLPrefix = '<a href="';
    var strHTMLSuffix = '">[';
    var strHTMLSuffix2 = ']</a>  ';
    var strLinkPrefix;
    var strLinkSuffix;

    switch(strModule)
    {
        case "Core":
            strLinkPrefix = schoolURL+"app/Core#userprofile/";
            strLinkSuffix = "/access";
            break;
        case "Academics":
            strLinkPrefix = schoolURL+"app/academics#academicprofile/";
            strLinkSuffix = "/attendance";
            break;
        case "Enrollment Management":
            strLinkPrefix = schoolURL+"app/enrollment-management#candidate/";
            strLinkSuffix = "/contracts";
            break;
        case "Faculty":
            strLinkPrefix = schoolURL+"app/faculty#profile/";
            strLinkSuffix = "/progress";
            break;
        case "View Grades":
            strLinkPrefix = schoolURL+"app/faculty#profile/";
            strLinkSuffix = "/progress";
            break;
        case "Faculty-Roster":
            strLinkPrefix = schoolURL+"app/faculty#academicclass/";
            strLinkSuffix = "/0/roster";
            strModule = "Faculty";
            break;
        case "Academics-Roster":
            strLinkPrefix = schoolURL+"app/academics#academicclass/";
            strLinkSuffix = "/0/roster";
            strModule = "Academics";
    }

    var strLinkFull = strHTMLPrefix.concat(strLinkPrefix, strID, strLinkSuffix, strHTMLSuffix, strModule, strHTMLSuffix2);
    return strLinkFull;
}

function GetID(strURL)
{
    console.log("Function: " + arguments.callee.name)

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


// --------------------------------------[INDEX003]----------------------------------------
// ------------------------------People Finder Quick Select--------------------------------
// ----------------------------------------------------------------------------------------

function PeopleFinderQuickSelect(jNode)
{
    console.log("Function: " + arguments.callee.name)
    $(".people-finder-userlist-link").remove()
    $(".people-finder-search-box, input[placeholder='Type a name, ID or email']").keypress(function (e){
        switch (e.keyCode)
        {
            case 13:
            case 49:
                $("#PeopleFinderContainer").find(".pf-user").eq(0).click();
                $(".result").eq(0).click();
                break;
            case 50:
                $("#PeopleFinderContainer").find(".pf-user").eq(1).click();
                $(".result").eq(1).click();
                break;
            case 51:
                $("#PeopleFinderContainer").find(".pf-user").eq(2).click();
                $(".result").eq(2).click();
                break;
            case 52:
                $("#PeopleFinderContainer").find(".pf-user").eq(3).click();
                $(".result").eq(3).click();
                break;
            case 53:
                $("#PeopleFinderContainer").find(".pf-user").eq(4).click();
                $(".result").eq(4).click();
                break;
            case 54:
                $("#PeopleFinderContainer").find(".pf-user").eq(5).click();
                $(".result").eq(5).click();
                break;
            case 55:
                $("#PeopleFinderContainer").find(".pf-user").eq(6).click();
                $(".result").eq(6).click();
                break;
            case 56:
                $("#PeopleFinderContainer").find(".pf-user").eq(7).click();
                $(".result").eq(7).click();
                break;
            case 57:
                $("#PeopleFinderContainer").find(".pf-user").eq(8).click();
                $(".result").eq(8).click();
                break;
        }

    })

    $(".people-finder-search-box, input[placeholder='Type a name, ID or email']").keyup(function (e){
        if (e.key ==="Escape")
        {
            $("#PeopleFinderContainer, .results").hide();
        }
    });

    $("#PeopleFinderContainer").parent().find(".subnavtrigger").unbind("click").bind("click", function(){
        $("#PeopleFinderContainer").find(".people-finder-search-box")[0].focus();
        $("#PeopleFinderContainer").find(".people-finder-search-box")[0].select();
    });

    $(".root-nav-item").eq(4).unbind("click").bind("click", function(){
        $("input[placeholder='Type a name, ID or email']").focus();
        $("input[placeholder='Type a name, ID or email']").select();
    });

    $(document).bind("mousemove", function(){
        if ($(".people-finder-search-box:focus").length)
        {
            $("#PeopleFinderContainer").show();
        }
    });

    $(".site-main-wrap").bind("click", function(){
        $("#PeopleFinderContainer, .results").hide();
    });

    $("#lPg").bind("click", function(){
        $("#PeopleFinderContainer, .results").hide();
    });


}

// -------------------------------------[INDEX004]-----------------------------------------
// ------------------------------Switch Roster to Faculty----------------------------------
// ----------------------------------------------------------------------------------------

function PostLinkRosterFaculty(jNode)
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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

// -------------------------------------[INDEX005]-----------------------------------------
// ----------------------------Email All Parents of Student--------------------------------
// ----------------------------------------------------------------------------------------

function EmailAllParentsOfStudent()
{
    console.log("Function: " + arguments.callee.name)
    setInterval(function(){
    waitForKeyElements(".roster-relationships", CreateEmailLink);}, 1000);
}

function CreateEmailLink(jNode)
{
    console.log("Function: " + arguments.callee.name)
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

// -----------------------------------------[INDEX006]-------------------------------------
// ----------------------------------------Enroll in All-----------------------------------
// ----------------------------------------------------------------------------------------

function EnrollInAll(jNode)
{
    console.log("Function: " + arguments.callee.name)
    if (!$(".custom-add-all").length){

        $(".corner .white-bgc:first").append('<a class="btn btn-default custom-add-all">Enroll in All</a>');

        $(".custom-add-all").click(function() {
            if (!$("#search").val().length){
                alert("You should filter the courses by searching first!");
            } else
            {

                if (confirm("Are you sure you want to enroll this student in all displayed classes?")){
                    $(".fa-plus-circle").each(function(index) {
                        this.click();
                    });
                }
            }
        });
    }
}

// -----------------------------------------[INDEX007]-------------------------------------
// ------------------------------------Remove Connect5 Info--------------------------------
// ----------------------------------------------------------------------------------------

function RemoveConnect5Info(jNode)
{
    console.log("Function: " + arguments.callee.name)
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

// ----------------------------------------[INDEX008]--------------------------------------
// -----------------------------------Roster Student Count---------------------------------
// ----------------------------------------------------------------------------------------

function AddRosterStudentCount(jNode)
{
    console.log("Function: " + arguments.callee.name)
    var memberCount = $("#roster-count").text();
    var teacherCount = 0;
/*
    var nonStudentConditions = ["Teacher", "Co-Teacher", "Assistant Teacher", "Activity Leader", "Owner", "Coach"]

    $(".bb-card-title").each(function(index){
       var str = $(this).text();
        if(nonStudentConditions.some(el => str.includes(el)))
       {
           teacherCount++;
       }
    });
*/
    if (!($("#RosterCardContainer").length))
    {
        memberCount = $("h4.pull-left").text();
        memberCount = memberCount.replace(" Members", "");
    }

    $(".bb-btn-secondary").next().each(function(index){
        if ($(this).find(".bb-dropdown-item").length == 1)
        {
            teacherCount++;
        }
    });

    var studentCount = memberCount - teacherCount;

    var studentCountText = "  /  ";
    studentCountText = studentCountText.concat(studentCount, " Students");

    if ($("#RosterCardContainer").length)
    {
        if (!$("#RosterCardContainer").siblings("h4").text().includes("Students"))
        {
            $("#RosterCardContainer").siblings("h4").append(studentCountText);
        }
        $("#RosterCardContainer").attr("count", studentCount);
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

// -----------------------------------------[INDEX009]-------------------------------------
// ----------------------------------Manual Attendance Sheet-------------------------------
// ----------------------------------------------------------------------------------------


function LaunchManualAttendanceSheet()
{
    console.log("Function: " + arguments.callee.name)
    SaveClassAndTeacher();
    window.open("/podium/default.aspx?t=1691&wapp=1&ch=1&_pd=gm_fv&pk=359", "_blank");
}

function AddManualAttendanceSheetToMenu()
{
    console.log("Function: " + arguments.callee.name)
    var html = '<li><a href="javascript:void(0)" id="ManualAttendanceSheet">Manual Attendance Sheet</a></li>'
    $("#roster-reports .dropdown-menu").append(html);
}

function SaveClassAndTeacher()
{
    console.log("Function: " + arguments.callee.name)
    var userID;

    // Save class ID
    localStorage.setItem("ClassID", GetID(window.location.href));

    // Save teacher's user ID
    $(".bb-card-title").each(function(index){
       var str = $(this).text();
       if (str == "Teacher")
       {
           userID = GetID($(this).closest("header").next().next().find(".bb-dropdown-item").html());
           return false;
       }
    });
    localStorage.setItem("TeacherID", userID);

    // Save class school level
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

    // Save term
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
    console.log("Function: " + arguments.callee.name)
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

// ---------------------------------------[INDEX010]---------------------------------------
// ----------------------------Convert Grad Year to Grade Level----------------------------
// ----------------------------------------------------------------------------------------

function ConvertGradYearToGradeLevel()
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
    str = str.trim()
    if (str.substring(str.length-3, str.length-2)=="'" && isInt(str.substring(str.length-2, str.length)))
    {
        var d = new Date();
        var yearnum = d.getFullYear();
        var year = yearnum.toString();
        year = year.substring(2, 4);
        var offset = str.substring(str.length-2, str.length) - year - ((d.getMonth() < 5) ? 0:1);

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

// ----------------------------------------[INDEX011]--------------------------------------
// -----------------------------------Advanced list ID Links-------------------------------
// ----------------------------------------------------------------------------------------

function CreateAdvancedListDefaultButton(jNode)
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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
    EmailFromAdvancedList();
}

function CreateUserLinks(page)
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
    var that= this;

    this.listName = listName;
    this.page = page;
}

function GetAdvancedListIDLinkSetting(listName)
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
    var moduleURL;
    var pageURL;
    var strHTMLPrefix = '<a '
    if (newWindow){
        strHTMLPrefix = strHTMLPrefix + 'target="_blank" '
    }
    strHTMLPrefix = strHTMLPrefix + 'href="'+schoolURL+'app/'
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
            pageURL = "officialnotes";
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
    console.log("Function: " + arguments.callee.name)
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

// ----------------------------------------[INDEX012]--------------------------------------
// -----------------------------------Roster Student Select--------------------------------
// ----------------------------------------------------------------------------------------

function CreateRosterCheckboxes(jNode)
{
    console.log("Function: " + arguments.callee.name)
    var input;
    var cardHeader;
    var nonStudentConditions = ["Teacher", "Co-Teacher", "Assistant Teacher", "Activity Leader", "Owner", "Coach"]
    var selectedCount = 0;

    // Check if the checkboxes already exist on the page and make sure on a roster page
    if (!$(".Select_all").length && window.location.href.substr(window.location.href.length - 6, window.location.href.length) == "roster")
    {

        // Add menu items to Send Communication
        if (window.location.href.indexOf("communitypage") > 0)
        {
            $("#rosterManageButton").next().find("li:eq(1)").after('<li><a id="selected-students" href="javascript:void(0)">Selected Students</a></li>');
            $("#rosterManageButton").next().find("li:eq(2)").after('<li><a id="selected-parents" href="javascript:void(0)">Selected Students\x27 Parents</a></li>');
            $("#rosterManageButton").next().find("li:eq(3)").after('<li><a id="selected-students-and-parents" href="javascript:void(0)">Selected Students and Parents</a></li>');
        } else
        {
            $("#roster-reports").prev().find("li:eq(2)").after('<li><a id="selected-students" href="javascript:void(0)">Selected Students</a></li>');
            $("#roster-reports").prev().find("li:eq(3)").after('<li><a id="selected-parents" href="javascript:void(0)">Selected Students\x27 Parents</a></li>');
            $("#roster-reports").prev().find("li:eq(4)").after('<li><a id="selected-students-and-parents" href="javascript:void(0)">Selected Students and Parents</a></li>');
        }

        // Create Select All checkbox
        $("#roster-count").closest("h4").after('<label><input type="checkbox" class="Select_all">Select All</label>');


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
                var selectedCount = $('input[type="checkbox"]:checked').not('.Select_all').length;
                var studentCount = $("#RosterCardContainer").attr("count")
                if (selectedCount > 0 && selectedCount != studentCount)
                {
                    waitForKeyElements("#selected-count", function(){
                        $("#selected-count").after('<span id="warning"> **Not all student cards are loaded on the page.  Scroll down until all students appear, then toggle Select All again.**</span>')
                    }, true);
                    $("#selected-count").after('<span id="warning"> **Not all student cards are loaded on the page.  Scroll down until all students appear, then toggle Select All again.**</span>')

                }

            } else
            {
                $("input[type='checkbox']").not(".Select_all").prop("checked", false);
                $("#warning").remove()
            }
        });


    }

    // Student cards can be loaded dynamically for large rosters
    // Create checkboxes for each student's card
    $(".bb-btn-secondary").each(function(index){
        if (!$(this).closest(".bb-card-actions").find("input[type='checkbox']").length)
        {  // Create checkbox only if doesn't already exist
            cardHeader = $(this).closest(".roster-card").find(".bb-card-title:first").text()
            //if(!nonStudentConditions.some(el => cardHeader.includes(el)) && !$(this).closest(".roster-relationships").length)
            // Only if not a teacher and not for relationships popup (Changed to checking for View Relationships option instead)
            if($(this).next().find(".user-relationships-initial").length && !$(this).closest(".roster-relationships").length)
            {  // Only if View Relationships option exists; should handle students who are also owners of community groups
                input = document.createElement("input");
                input.type = "checkbox";
                $(this).before(input);
            }
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
        if (!$(this).hasClass("Select_all"))
        {
            $("#warning").remove()
        }
    });
}

function EmailSelectedParents(studentsToo)
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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

// ----------------------------------------[INDEX013]--------------------------------------
// --------------------------------Team Roster Link to Grades------------------------------
// ----------------------------------------------------------------------------------------

function AddLinkToFacultyProgress()
{
    console.log("Function: " + arguments.callee.name)
     $(".btn-contact-card").each(function(index){
         if ($(this).closest("div").attr("class") != "bb-card-actions")
         {
            $(this).after(GetLink("View Grades", GetID($(this).attr("href"))))
         }
     });
}

// ----------------------------------------[INDEX014]--------------------------------------
// ----------------------------------Email Multiple Classes--------------------------------
// ----------------------------------------------------------------------------------------

function CreateClassCheckboxes()
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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
                    url = schoolURL+"app/faculty#academicclass/" + GetID($('input[type="checkbox"]:checked').not('.Select_all').eq(currClass).next("[href]").attr("href")) + "/0/roster"
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
                                window.open(mailtoLinks[CurrMailtoLink])
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
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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

// -----------------------------------------[INDEX015]-------------------------------------
// ----------------------------------Classes Menu Sort Order-------------------------------
// ----------------------------------------------------------------------------------------

function ClassesMenuSortOrder(jNode)
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
    if (className.indexOf("(") == -1)
    {
        return null
    } else
    {
        return className.substring(className.indexOf("(")+1, className.indexOf(")"))
    }
}

// ----------------------------------------[INDEX016]--------------------------------------
// ------------------------------------Default Class Page----------------------------------
// ----------------------------------------------------------------------------------------

function UpdateClassMenuLinks()
{
    console.log("Function: " + arguments.callee.name)
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
    console.log("Function: " + arguments.callee.name)
    var urlPrefix = schoolURL+"app/faculty#academicclass/"
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

// ----------------------------------------[INDEX017]--------------------------------------
// ---------------------------------------Settings Page------------------------------------
// ----------------------------------------------------------------------------------------

function GenerateSettingsPage(jNode)
{
    console.log("Function: " + arguments.callee.name)
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

    // WYSIWYG Editor Default Font Size 8,10,12,14,16,24,36
    str += '<tr><td valign="top">WYSIWYG Editor Default Font Size&nbsp'
    str += '<a class="notificationIcon" title="This only changes the default text size that you see in the editor box, and does not affect the size of text actually displayed on the page after saving.  Most editor boxes default to size 10, while the saved content default can vary from 13-16."><i class="p3icon-notification-2"></i></a></td>'
    str += '<td><select id="EditorDefaultSize"><option value="default">Default</option><option value="8">8</option><option value="10">10</option><option value="12">12</option><option value="14">14</option><option value="16">16 (Recommended)</option><option value="24">24</option><option value="36">36</option></select>'
    str += '</td></tr>'

    //WYSIWYG Editor box starting height
    str += '<tr><td valign="top">WYSIWYG Editor Box Starting Height'
    str += '<a class="notificationIcon" title="Most editor boxes start at height 100.  If you are frequently expanding editor boxes, select a larger starting height with this option.  Each manual expand of the editor box increases the height by 100."><i class="p3icon-notification-2"></i></a></td>'
    str += '<td><select id="EditorBoxHeight"><option value="default">Default</option><option value="100">100</option><option value="200">200</option><option value="300">300</option><option value="400">400</option><option value="500">500</option><option value="600">600</option><option value="700">700</option></select>'
    str += '</td></tr>'

    // Automatically Expand All
    str += '<tr><td valign="top"><label for="AutomaticallyExpandAll">Automatically Expand All&nbsp</label>'
    str += '<a class="notificationIcon" title="When enabled, all collapsed areas (identified by the down chevron), such as financial aid will be expanded automatically when the page loads. Also causes the Checklist page to load grouped by milestone."><i class="p3icon-notification-2"></i></a></td>'
    str += '<td><input type="checkbox" id="AutomaticallyExpandAll"><br>'
    str += '</td></tr>'

    // Default Class Assignments Date Filter
    str += '<tr><td valign="top"><label for="DefaultClassAssignmentsDateFilter">Default Class Assignments Date Filter</label>'
    str += '<td><input type="radio" id="ClassAssignmentsDefaultPrevious" name="class-assignment-default-date" value="previous"><label for="ClassAssignmentsDefaultPrevious">Previous</label><br>'
    str += '<input type="radio" id="ClassAssignmentsDefaultActive" name="class-assignment-default-date" value="active"><label for="ClassAssignmentsDefaultActive">Active</label><br>'
    str += '<input type="radio" id="ClassAssignmentsDefaultFuture" name="class-assignment-default-date" value="future"><label for="ClassAssignmentsDefaultFuture">Future</label><br>'
    str += '<input type="radio" id="ClassAssignmentsDefaultCurrentQuarter" name="class-assignment-default-date" value="currentquarter"><label for="ClassAssignmentsDefaultCurrentQuarter">Current Quarter</label><br>'
    str += '<input type="radio" id="ClassAssignmentsDefaultRange" name="class-assignment-default-date" value="range"><label for="ClassAssignmentsDefaultRange">Range</label><br>'
    str += '<label for="ClassAssignmentsDefaultStart">Start:&nbsp</label><input type="text" size="12" id="ClassAssignmentsDefaultStart" disabled><br>'
    str += '<label for="ClassAssignmentsDefaultEnd">End:&nbsp</label><input type="text" size="12" id="ClassAssignmentsDefaultEnd" disabled>'

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

    // WYSIWYG Editor Default Font Size
    if (localStorage.getItem("EditorDefaultSize") != null)
    {
        $("#EditorDefaultSize").val(localStorage.getItem("EditorDefaultSize"))
    }

    // WYSIWYG Editor Box Starting Height
    if (localStorage.getItem("EditorBoxHeight") != null)
    {
        $("#EditorBoxHeight").val(localStorage.getItem("EditorBoxHeight"))
    }

    // Automatically Expand All
    if (localStorage.getItem("AutomaticallyExpandAll") != null)
    {
        if (localStorage.getItem("AutomaticallyExpandAll") == "True")
        {
            $("#AutomaticallyExpandAll").prop("checked", true)
        }
    }

    // Default Class Assignments Date Filter
    switch (localStorage.getItem("ClassAssignmentsDefaultDate"))
    {
        case "Previous":
            $("#ClassAssignmentsDefaultPrevious").prop("checked", true)
            break;
        case "Active":
        default:
            $("#ClassAssignmentsDefaultActive").prop("checked", true)
            break;
        case "Future":
            $("#ClassAssignmentsDefaultFuture").prop("checked", true)
            break;
        case "Current Quarter":
            $("#ClassAssignmentsDefaultCurrentQuarter").prop("checked", true)
            $("#ClassAssignmentsDefaultStart").prop("disabled", false)
            $("#ClassAssignmentsDefaultEnd").prop("disabled", false)

            $("#ClassAssignmentsDefaultStart").val(localStorage.getItem("ClassAssignmentsDefaultStart"))
            $("#ClassAssignmentsDefaultEnd").val(localStorage.getItem("ClassAssignmentsDefaultEnd"))

            // Update quarter start and end dates
            GetUpdatedQuarterDates("Settings")
            break;
        case "Range":
            $("#ClassAssignmentsDefaultRange").prop("checked", true)
            $("#ClassAssignmentsDefaultStart").prop("disabled", false)
            $("#ClassAssignmentsDefaultEnd").prop("disabled", false)
            $("#ClassAssignmentsDefaultStart").val(localStorage.getItem("ClassAssignmentsDefaultStart"))
            $("#ClassAssignmentsDefaultEnd").val(localStorage.getItem("ClassAssignmentsDefaultEnd"))
    }

    // Save changes
    $("#ClassSortByName").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassesMenuSortOrder", "name")
    });
    $("#ClassSortByPeriod").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassesMenuSortOrder", "period")
    });
    $("#ClassPageDefaultBulletinBoard").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassesDefaultPage", "bulletinboard")
    });
    $("#ClassPageDefaultTopics").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassesDefaultPage", "topics")
    });
    $("#ClassPageDefaultAssignments").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassesDefaultPage", "assignments")
    });
    $("#ClassPageDefaultSchedule").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassesDefaultPage", "schedule")
    });
    $("#ClassPageDefaultRoster").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassesDefaultPage", "roster")
    });
    $("#EditorDefaultSize").unbind("click change").bind("click change", function(){
        localStorage.setItem("EditorDefaultSize", $("#EditorDefaultSize").val())
    });
    $("#EditorBoxHeight").unbind("click change").bind("click change", function(){
        localStorage.setItem("EditorBoxHeight", $("#EditorBoxHeight").val())
    });
    $("#AutomaticallyExpandAll").unbind("click change").bind("click change", function(){
        if ($("#AutomaticallyExpandAll").prop("checked") == true)
        {
            localStorage.setItem("AutomaticallyExpandAll", "True")
        } else
        {
            localStorage.setItem("AutomaticallyExpandAll", "False")
        }
    });
    $("#ClassAssignmentsDefaultPrevious").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassAssignmentsDefaultDate", "Previous")
        $("#ClassAssignmentsDefaultStart").prop("disabled", true)
        $("#ClassAssignmentsDefaultEnd").prop("disabled", true)
    });
    $("#ClassAssignmentsDefaultActive").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassAssignmentsDefaultDate", "Active")
        $("#ClassAssignmentsDefaultStart").prop("disabled", true)
        $("#ClassAssignmentsDefaultEnd").prop("disabled", true)
    });
    $("#ClassAssignmentsDefaultFuture").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassAssignmentsDefaultDate", "Future")
        $("#ClassAssignmentsDefaultStart").prop("disabled", true)
        $("#ClassAssignmentsDefaultEnd").prop("disabled", true)
    });
    $("#ClassAssignmentsDefaultCurrentQuarter").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassAssignmentsDefaultDate", "Current Quarter")
        $("#ClassAssignmentsDefaultStart").prop("disabled", false)
        $("#ClassAssignmentsDefaultEnd").prop("disabled", false)

        if (!$("#temp-loading").length)
        {
            $("#ClassAssignmentsDefaultEnd").after('<div id="temp-loading">Loading quarter dates...please wait...</div>')
        }
        GetUpdatedQuarterDates("Settings-First")
    });
    $("#ClassAssignmentsDefaultRange").unbind("click change").bind("click change", function(){
        localStorage.setItem("ClassAssignmentsDefaultDate", "Range")
        $("#ClassAssignmentsDefaultStart").prop("disabled", false)
        $("#ClassAssignmentsDefaultEnd").prop("disabled", false)
        $("#ClassAssignmentsDefaultStart").focus()
    });
    $("#ClassAssignmentsDefaultStart").on('input', function(){
        localStorage.setItem("ClassAssignmentsDefaultStart", $("#ClassAssignmentsDefaultStart").val())
    });
    $("#ClassAssignmentsDefaultEnd").on('input', function(){
        localStorage.setItem("ClassAssignmentsDefaultEnd", $("#ClassAssignmentsDefaultEnd").val())
    });

}

// ----------------------------------------[INDEX018]--------------------------------------
// ---------------------------------Reverse Attendance Default-----------------------------
// ----------------------------------------------------------------------------------------

function ReverseAttendanceDefault(jNode)
{
    console.log("Function: " + arguments.callee.name)
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
                    if (!$(this).find("select").attr("disabled"))
                    {
                        $(this).find("td").eq(1).append('<br><a href="javascript:void(0)" class="mark-present"> Present--&gt</a>')
                    }
                });
            }
        });

        // Click handler for Present link
        $(document).on('click', ".mark-present", function(){
            $(this).parents("tr").find("select").val("3384")
        });
    }
}

// -----------------------------------------[INDEX019]-------------------------------------
// -----------------------------------Page Number Navigation-------------------------------
// ----------------------------------------------------------------------------------------

function CopyPageNumberNavigation(jNode)
{
    console.log("Function: " + arguments.callee.name)
    if (window.location.href == schoolURL+"podium/default.aspx?t=12200")
    {
        return;
    }
    if (!$("#bottom-page-navigation").length)
    {
        $("#lPg").append(jNode.closest("table").clone().attr("id", "bottom-page-navigation"));
    } else
    {
        $("#bottom-page-navigation").replaceWith(jNode.closest("table").clone().attr("id", "bottom-page-navigation"))
    }
    window.scrollTo(0, 0);
}

// ----------------------------------------[INDEX020]--------------------------------------
// ----------------------------------Advanced List Favorites-------------------------------
// ----------------------------------------------------------------------------------------

function AdvancedListFavorites()
{
    console.log("Function: " + arguments.callee.name)
    if (location.href == schoolURL+"edu-core/dashboard")
    {
        $(".core-dashboard").append('<h1>Favorite Lists</h><br>')

        var rawFavorites = localStorage.getItem("AdvancedListFavorites");

        if (rawFavorites == null)
        {
            $(".core-dashboard").append("No favorites yet. Go to Advanced Lists to add some.")
            return;
        }

        var favorites = JSON.parse(rawFavorites);
        var favoriteHTML

        if (!favorites.length)
        {
            $(".core-dashboard").append("No favorites yet. Go to Advanced Lists to add some.")
        } else
        {

            favorites.forEach(function(value){
                favoriteHTML = value.listName + ' | <a href="javascript:void(0)" class="fav-list-copy" data-id="' + value.listID + '" data-name="' + value.listName + '">Copy</a>' + ' | <a href="javascript:void(0)" class="fav-list-run" data-id="' + value.listID + '" data-name="' + value.listName + '">Run</a>' + ' | <a href="javascript:void(0)" class="fav-list-remove" data-id="' + value.listID + '" data-name="' + value.listName + '">Remove from Favorites</a><br>'
                $(".core-dashboard").append(favoriteHTML)
            });
            $(".core-dashboard").append("<p>")

            $(document).on('click', ".fav-list-copy", function(){
                localStorage.setItem("FavoriteListRunID", $(this).attr("data-id"))
                localStorage.setItem("FavoriteListRunName", $(this).attr("data-name"))
                localStorage.setItem("FavoriteListRunType", "Copy")
                window.open(schoolURL+"podium/default.aspx?t=23189&wapp=1")
            });

            $(document).on('click', ".fav-list-run", function(){
                localStorage.setItem("FavoriteListRunID", $(this).attr("data-id"))
                localStorage.setItem("FavoriteListRunName", $(this).attr("data-name"))
                localStorage.setItem("FavoriteListRunType", "Run")
                window.open(schoolURL+"podium/default.aspx?t=23189&wapp=1")
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
    console.log("Function: " + arguments.callee.name)
    // Loads when Advanced List Main Page loads
    var FavoriteListID
    var FavoriteListName
    var FavoriteListType

    FavoriteListID = localStorage.getItem("FavoriteListRunID")
    FavoriteListName = localStorage.getItem("FavoriteListRunName")
    FavoriteListType = localStorage.getItem("FavoriteListRunType")

    if (FavoriteListID == null || FavoriteListID == "" || FavoriteListID == undefined)
    {
        // Check if page was opened from link
        var urlParams = new URLSearchParams(window.location.search)
        FavoriteListID = urlParams.get('id')
        FavoriteListName = urlParams.get('name')
        FavoriteListType = urlParams.get('type')
    }

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
    console.log("Function: " + arguments.callee.name)
    var ListName
    var ListID
    var pos
    var link

    $(".cal2listdayitem, .cal2listdayitemalt").each(function(){
        ListName = $(this).find(".cal2listdayitemtext:first").text().trim()
        pos = $(this).find(".cal2listdayitemtext").eq(1).children("a:last").attr("href").indexOf("slid")
        var pos2 = $(this).find(".cal2listdayitemtext").eq(1).children("a:last").attr("href").indexOf("~ml")
        if (pos2 > 0)
        {
            ListID = $(this).find(".cal2listdayitemtext").eq(1).children("a:last").attr("href").substring(pos+5, pos2)
            link = ' | <a href="javascript:void(0)" class="add-list-to-favorites" data-id="' + ListID + '" data-name="' + ListName + '">Add to Favorites</a>'
            $(this).find(".cal2listdayitemtext").eq(1).append(link)
            // Also add shareable link
            var shareLink = ' | <a href="'+schoolURL+'podium/default.aspx?t=23189&id='+ListID+'&name='+ListName+'&type=Run">Link</a>'
            $(this).find(".cal2listdayitemtext").eq(1).append(shareLink)
            // Add List ID to displayed info
            $(this).find("tr").eq(1).children("td").eq(0).append(" | List ID: "+ListID)
        }
    });

    //$(document).on('click', ".add-list-to-favorites", function(){
    $(".add-list-to-favorites").unbind("click").bind("click", function(){
        AddAdvancedListFavorite($(this).attr("data-id"), $(this).attr("data-name"))
    });
}

function AdvancedListFavorite(listID, listName)
{
    console.log("Function: " + arguments.callee.name)
    var that=this;
    this.listID = listID;
    this.listName = listName;
}

function AddAdvancedListFavorite(listID, listName)
{
    console.log("Function: " + arguments.callee.name)
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

// --------------------------------------[INDEX021]----------------------------------------
// ------------------------------WYSIWYG Editor Improvements-------------------------------
// ----------------------------------------------------------------------------------------

function EditorImprovements(jNode)
{
    console.log("Function: " + arguments.callee.name)
    // Default Size
    if (localStorage.getItem("EditorDefaultSize") > 0)
    {
        $(jNode).siblings("head").append('<style>body {font-size:' + localStorage.getItem("EditorDefaultSize") + 'px;}</style>')
    }

    // Default Height
    if (localStorage.getItem("EditorBoxHeight") > 0)
    {
        $("iframe").css("height", localStorage.getItem("EditorBoxHeight") + 'px')
    }

    // Expand Editor Size
    if (!$("#expand-" + $("iframe").attr("id")).length)
    {
        if ($("iframe").closest(".row").length)
        {
            $("iframe").closest(".row").append('<div id="expand-' + $("iframe").attr("id") + '" align="right"><a href="javascript:void(0)" class="expand-editor"><font size="-1">&#9660Expand&#9660</font></a></div>')
        } else if ($("iframe").closest(".form-group").length)
        {
            $("iframe").closest(".form-group").append('<div id="expand-' + $("iframe").attr("id") + '" align="right"><a href="javascript:void(0)" class="expand-editor"><font size="-1">&#9660Expand&#9660</font></a></div>')
        } else
        {
            $("iframe").closest("tr").after('<div id="expand-' + $("iframe").attr("id") + '" align="right"><a href="javascript:void(0)" class="expand-editor"><font size="-1">&#9660Expand&#9660</font></a></div>')
        }
    }

    $(".expand-editor").unbind("click").bind("click", function(){
        if ($(this).closest(".row").length)
        {
            $(this).closest(".row").find("iframe").css("height", +$(this).closest(".row").find("iframe").css("height").substr(0, $(this).closest(".row").find("iframe").css("height").length-2)+100 + "px")
        } else if ($("iframe").closest(".form-group").length)
        {
            $(this).closest(".form-group").find("iframe").css("height", +$(this).closest(".form-group").find("iframe").css("height").substr(0, $(this).closest(".form-group").find("iframe").css("height").length-2)+100 + "px")
        } else
        {
            $(this).closest("tr").find("iframe").css("height", +$(this).closest("tr").find("iframe").css("height").substr(0, $(this).closest("tr").find("iframe").css("height").length-2)+100 + "px")
        }
    });
}

// -----------------------------------------[INDEX022]-------------------------------------
// --------------------------------Highlight Invalid Attendance----------------------------
// ----------------------------------------------------------------------------------------

function HighlightInvalidAttendance(jNode)
{
    console.log("Function: " + arguments.callee.name)
    $("tbody").children("tr").each(function(index){
        HighlightInvalidAttendanceRow(this)
    });

    $(".inline-edit[data-action='reason']").bind("click", function(){
        HighlightInvalidAttendanceRow($(this).closest("tr"));
    });
}

function HighlightInvalidAttendanceRow(jNode)
{
    console.log("Function: " + arguments.callee.name)
    if (window.location.href == schoolURL+"app/academics#studentattendance")
    {
        if ($(jNode).children("td").eq(4).text() == "HR" || $(jNode).children("td").eq(4).text() == "HRK5")
        {
            // Block: Homeroom
            if ($(jNode).children("td").eq(6).text().includes("[Class]"))
            {
                // Class code
                $(jNode).css("background-color", "red");
            } else
            {
                $(jNode).css("background-color", "");
            }
        } else
        {
            // Block: Not Homeroom
            if (!$(jNode).children("td").eq(6).text().includes("[Class]"))
            {
                // Not Class code
                $(jNode).css("background-color", "red");
            } else
            {
                $(jNode).css("background-color", "");
            }
        }
    }
}

// ---------------------------------------[INDEX023]---------------------------------------
// --------------------------------Automatically Expand All--------------------------------
// ----------------------------------------------------------------------------------------

function AutomaticallyExpandAll()
{
    console.log("Function: " + arguments.callee.name)
    if (localStorage.getItem("AutomaticallyExpandAll") == "True")
    {
        $(".fa-chevron-down:visible").not(".fa-lg").click()
    }
}

// -----------------------------------------[INDEX024]-------------------------------------
// --------------------------------Official Notes Improvements-----------------------------
// ----------------------------------------------------------------------------------------

function OfficialNotesImprovements(jNode)
{
    console.log("Function: " + arguments.callee.name)
    var html;
    html = '<section class="bb-tile filter-tile" id="options"><div class="bb-tile-title"><div class="bb-tile-header-with-content"><h2 class="bb-tile-header p1-0">Options</h2></div></div><div class="bb-tile-content">'
//    html += '<input type="checkbox" id="UnreadAtTop"><label for="UnreadAtTop" title="NOTE: The script currently cannot find unread messages that have not been loaded on the page.">Unread Messages At Top</label><br>'
    html += '<input type="checkbox" id="RemoveAdmissionsOnly"><label for="RemoveAdmissionsOnly" title="Remove all notes of type Admissions Only.  The page needs to be scrolled manually to load more notes.">Remove [Admissions Only]</label><br>'
    html += '</div></section>'

    if (!$("#options").length)
    {
        $("#filters").after(html)
    }

    // Get existing settings
    /* *Feature removed after Blackbaud's 9/18/19 update added Unread filter
    if (localStorage.getItem("OfficialNotesUnreadAtTop") == "True")
    {
        $("#UnreadAtTop").prop("checked", true)
        waitForKeyElements(".detail", OfficialNotesUnreadAtTop)
    }
    */
    if (localStorage.getItem("OfficialNotesRemoveAdmissionsOnly") == "True")
    {
        $("#RemoveAdmissionsOnly").prop("checked", true)
        waitForKeyElements(".bb-emphasized", OfficialNotesRemoveAdmissionsOnly)
    }

    // Save settings changes
    /* *Feature removed after Blackbaud's 9/18/19 update added Unread filter
    $("#UnreadAtTop").unbind("click change").bind("click change", function(){
        if ($("#UnreadAtTop").prop("checked") == true)
        {
            localStorage.setItem("OfficialNotesUnreadAtTop", "True")
            OfficialNotesUnreadAtTop()
            waitForKeyElements(".detail", OfficialNotesUnreadAtTop)
        } else
        {
            localStorage.setItem("OfficialNotesUnreadAtTop", "False")
            location.reload()
        }
    });
    */
    $("#RemoveAdmissionsOnly").unbind("click change").bind("click change", function(){
        if ($("#RemoveAdmissionsOnly").prop("checked") == true)
        {
            localStorage.setItem("OfficialNotesRemoveAdmissionsOnly", "True")
            OfficialNotesRemoveAdmissionsOnly()
            waitForKeyElements(".bb-emphasized", OfficialNotesRemoveAdmissionsOnly)
        } else
        {
            localStorage.setItem("OfficialNotesRemoveAdmissionsOnly", "False")
            location.reload()
        }
    });

    // Create links
    waitForKeyElements(".p-5", function(){
        $(".detail:not(.linked)").each(function(){
            $(this).addClass("linked")
            var userID = GetID($(this).closest("td").children("div").eq(0).children("a").attr("href"));
            var link = schoolURL+"app/enrollment-management#candidate/" + userID + "/checklist";
            var html = '<a target="_blank" href="' + link + '">' + $(this).closest("td").children("div").eq(1).text() + '</a>'
            $(this).closest("td").children("div").eq(1).html(html)
        })
    }, false);

}

/* *Feature removed after Blackbaud's 9/18/19 update added Unread filter
function OfficialNotesUnreadAtTop()
{
    console.log("Function: " + arguments.callee.name)
    $(".message-list").prepend($(".sky-background-color-info-light"))

    console.log($(".site-badge-sb-adm-notes").text() * 1)
}
*/

function OfficialNotesRemoveAdmissionsOnly()
{
    console.log("Function: " + arguments.callee.name)
    $(".detail").each(function(){
        if ($(this).text().includes("Admissions Only"))
        {
            /*
            if ($(this).closest("tr").attr("class") == " sky-background-color-info-light")
            {
                $(this)[0].click();
                waitForKeyElements("[data-dismiss='modal']", function(jNode){
                    $(jNode)[0].click();
                }, true);
            }
            */
            $(this).closest("tr").remove()
        }
    });

}

// -----------------------------------------[INDEX025]-------------------------------------
// ----------------------------------Email from Advanced List------------------------------
// ----------------------------------------------------------------------------------------

function EmailFromAdvancedList()
{
    console.log("Function: " + arguments.callee.name)

    if ($('th:contains("E-Mail")').index())
    {
        $('th:contains("E-Mail")').append('&nbsp<a href="javascript:void(0)" id="SendToAll">&ltSend to All&gt</a>')

        $("#SendToAll").unbind("click").bind("click", function(){
            EmailFromAdvancedListGatherAndSend()
        });
    }

    $('.tblcell > td:contains("@")').each(function(){
        var EmailLink = '<a href="mailto:' + $(this).text() + '">' + $(this).text() + '</a>'
        $(this).html(EmailLink)
    })

}

function EmailFromAdvancedListGatherAndSend()
{
    console.log("Function: " + arguments.callee.name)

    if ($("[title='Previous Page']").length)
    {
        $("[title='Previous Page']").next()[0].click()
    }

    var mailtoLink;
    var mailtoLinks = [];
    var emails;
    var uniqueEmails = [];
    var morePages = false;
    var pageInfo = "";

    var timerID = setInterval(function(){
        if ($("[title='Next Page'], [title='Previous Page']").closest("td").text() != pageInfo || !$("[title='Next Page'], [title='Previous Page']").closest("td").length)
        {
            $(".tblcell").each(function(){
                var email = $(this).children("td").eq($('th:contains("E-Mail")').index()).text()
                if($.inArray(email, uniqueEmails) === -1) uniqueEmails.push(email);
            });

            if ($("[title='Next Page']").length)
            {
                morePages = true
                pageInfo = $("[title='Next Page']").closest("td").text()
                $("[title='Next Page']")[0].click()
            } else
            {
                morePages = false
            }
        }

        if (!morePages){
            clearInterval(timerID)
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
                        window.open(mailtoLinks[CurrMailtoLink])
                        CurrMailtoLink++
                    } else
                    {
                        clearInterval(timerID2)
                    }
                }, 1500);
            }
            if ($("[title='Previous Page']").length)
            {
                $("[title='Previous Page']").next()[0].click()
            }
        }
    }, 500);
}

// -----------------------------------------[INDEX026]-------------------------------------
// -----------------------------------Pushpage Improvements--------------------------------
// ----------------------------------------------------------------------------------------

function IncreaseDistributionGroupListBoxSize(jNode)
{
    console.log("Function: " + arguments.callee.name)
    jNode.css({"height": "200px", "width": "400px"});
}

// -----------------------------------------[INDEX027]-------------------------------------
// --------------------------------------ENR-12 Shortcuts----------------------------------
// ----------------------------------------------------------------------------------------

function ENR12Shortcuts(jNode)
{
    console.log("Function: " + arguments.callee.name)

    if ($(".thHistoryLink").find("span").text().includes("ENR-12") || $(".thHistoryLink").find("span").text().includes("SUM-02") || $(".thHistoryLink").find("span").text().includes("SUM-03"))
    {
        // Add Email hyperlink
        var mailToHTML = '<a href="mailto:' + $(".maintext:contains('Parent E-Mail Address')").next(".maintext").find("input").val() + '">Send Email</a>'
        $(".maintext:contains('Parent E-Mail Address')").next(".maintext").find("input").after(mailToHTML)

        // Add button to view contract status
        $("#L_c1i0_cb88911_ct88911_ctl00_f_1_txtf_1").after('<a href="javascript:void(0)" id="ViewContractStatus">View Contract Status</a>')

        $("#ViewContractStatus").unbind("click").bind("click", function(){
            var StudentName = $("#L_c1i0_cb88911_ct88911_ctl00_f_1_txtf_1").val() + " " + $("#L_c1i0_cb88911_ct88911_ctl00_f_3_txtf_3").val()
            localStorage.setItem("ContractListSearchName", StudentName)
            window.open(schoolURL+"app/enrollment-management#lists/contracts", "Contract List", "top=0,left=0,menubar=yes,toolbar=yes")
        });
    }
}

function ContractListAutoSearch(jNode)
{
    console.log("Function: " + arguments.callee.name)

    if (localStorage.getItem("ContractListSearchName"))
    {
        console.log(localStorage.getItem("ContractListSearchName"))
        $(jNode).find("input").focus()
        $(jNode).find("input").val(localStorage.getItem("ContractListSearchName"))
        $("#search-button").eq(0).click()
        localStorage.removeItem("ContractListSearchName")

        waitForKeyElements("td[aria-describedby*='ContractStatus']", function(jNode){
            switch ($(jNode).text())
            {
                case "Submitted":
                case "Processed":
                    $(jNode).css('background-color', 'green')
                    break;
                case "None":
                case "Saved":
                    $(jNode).css('background-color', 'red')
                    break;
            }
        });

        waitForKeyElements('[aria-describedby*="FullName"]', function(jNode){
            var link = schoolURL+"app/academics#academicprofile/" + GetID($(jNode).find("a").attr("href")) + "/enrollment"
            $(jNode).find("a").attr("href", link)
        });

    }
}

// -----------------------------------------[INDEX028]-------------------------------------
// ------------------------------------Salutation Formulas---------------------------------
// ----------------------------------------------------------------------------------------

function SalutationFormulas()
{
    console.log("Function: " + arguments.callee.name)

    var p1name = "";
    var p2name = "";
    var p1namefirst;
    var p1namelast;
    var p2namefirst;
    var p2namelast;
    var p1names;
    var p2names;
    var p1prefix = "";
    var p2prefix = "";
    var salutationsInformal = [];
    var salutationsHousehold = [];
    var salutationsFormal = [];
    var UsalutationsInformal = [];
    var UsalutationsHousehold = [];
    var UsalutationsFormal = [];
    var defaultPrefix = false;

    // Get parent names from relationships (only 2)
    localStorage.setItem("GetPrefixesP1ID", "")
    localStorage.setItem("GetPrefixesP2ID", "")
    p1prefix = ""
    p2prefix = ""

    if ($("#relationship-table").find("tr:contains('Child')").length > 0)
    {
        // Parent's contact card
        p1name = $("#contact-generalinformation").find("td:contains('First name')").siblings("td").text() + " " + $("#contact-generalinformation").find("td:contains('Last Name')").siblings("td").text()
        p1prefix = $("#contact-generalinformation").find("td:contains('Prefix')").siblings("td").text()
        if ($("#relationship-table").find("tr:contains('Spouse')").length == 0)
        {
            // No spouse, single parent
        } else
        {
            // Has spouse
            p2name = $("#relationship-table").find("tr:contains('Spouse')").closest("tr").find("h4").text()
            localStorage.setItem("GetPrefixesP2ID", GetID($("#relationship-table").find("tr:contains('Spouse')").closest("tr").find("a").attr("href")))
            if (p1prefix == "Mrs." || p1prefix == "Ms.")
            {
                p2prefix = "Mr."
            }
        }
    } else
    {
        // Student's contact card
        $("#relationship-table").find("tr:contains('Parental Access')").each(function(index){
            if (p1name == "")
            {
                p1name = $(this).closest("tr").find("h4").text()
                localStorage.setItem("GetPrefixesP1ID", GetID($(this).closest("tr").find("a").attr("href")))
            } else if (p2name == "")
            {
                p2name = $(this).closest("tr").find("h4").text()
                localStorage.setItem("GetPrefixesP2ID", GetID($(this).closest("tr").find("a").attr("href")))
            }
        });
    }

    // If prefixes were grabbed, use those
    if (localStorage.getItem("GetPrefixesFresh") == "1")
    {
        if (p1prefix == "") { p1prefix = localStorage.getItem("GetPrefixesP1Prefix") }
        p2prefix = localStorage.getItem("GetPrefixesP2Prefix")
        $("#GetPrefixes").text("<Prefixes for formulas grabbed from contact cards: " + p1prefix + "/" + p2prefix + ">")
        $("#GetPrefixes").unbind("click")
        $("#GetPrefixes").removeAttr("href")
        if (p1prefix == "")
        {
            p1prefix = "Mr."
            defaultPrefix = true
        }
        if (p2prefix == "")
        {
            p2prefix = "Mrs."
            defaultPrefix = true
        }
        localStorage.setItem("GetPrefixesFresh", "0")
        $("#InformalFormula").remove()
        $("#HouseholdFormula").remove()
        $("#FormalFormula").remove()
    } else
    {
        if (p1prefix == "")
        {
            p1prefix = "Mr."
            defaultPrefix = true
        }
        if (p2prefix == "")
        {
            p2prefix = "Mrs."
            defaultPrefix = true
        }

        // Button to open parent contact cards to grab prefixes
        $(".control-label:contains('Salutation')").after('&nbsp&nbsp<a href="javascript:void(0)" id="GetPrefixes">&ltGet Prefixes for Formulas&gt</a>')
        $("#GetPrefixes").unbind("click").bind("click", function(){
            GetPrefixes()
        });
    }

    // Parse names and generate preset salutations
    if (p1name == "")
    {
        // No parents found
    } else if (p2name == "")
    {
        // Single parent
        p1names = p1name.split(" ")
        salutationsInformal.push(p1names[0])
        salutationsHousehold.push(p1prefix + " " + p1name)
        if (p1names.length == 2)
        {
            // simple case: first and last name each one word
            salutationsFormal.push(p1prefix + " " + p1names[1])
        } else
        {
            // First alternate: first word and last word only
            salutationsHousehold.push(p1prefix + " " + p1names[0] + " " + p1names[p1names.length-1])
            salutationsFormal.push(p1prefix + " " + p1names[p1names.length-1])

            // Second alternate: first word as first name, rest as last name
            salutationsFormal.push(p1prefix + " " + p1name.substr(p1names[0].length+1))

            // Third alternate: last word as last name, rest as first name
            salutationsInformal.push(p1name.substr(0,p1name.length-p1names[p1names.length-1].length-1))
        }
    } else
    {
        // 2 Parents
        p1names = p1name.split(" ")
        p2names = p2name.split(" ")

        if (p1names.length == 2 && p2names.length == 2)
        {
            // simple case: first and last name each one word
            salutationsInformal.push(p1names[0] + " and " + p2name)
            salutationsInformal.push(p2names[0] + " and " + p1name)
            salutationsHousehold.push(p1prefix + " and " + p2prefix + " " + p1name)
            salutationsFormal.push(p1prefix + " and " + p2prefix + " " + p1names[1])
            if (defaultPrefix)
            {
                // Reverse prefixes in case default had it backwards
                salutationsHousehold.push(p1prefix + " and " + p2prefix + " " + p2name)
                salutationsFormal.push(p1prefix + " and " + p2prefix + " " + p2names[1])
            } else
            {
                // Parent 2 prefix will only come first if not using defaults
                salutationsHousehold.push(p2prefix + " and " + p1prefix + " " + p2name)
                salutationsFormal.push(p2prefix + " and " + p1prefix + " " + p2names[1])
            }
        } else
        {
            // First alternate: first word and last word only
            salutationsInformal.push(p1names[0] + " and " + p2names[0] + " " + p2names[p2names.length-1])
            salutationsInformal.push(p2names[0] + " and " + p1names[0] + " " + p1names[p1names.length-1])
            salutationsHousehold.push(p1prefix + " and " + p2prefix + " " + p1names[0] + " " + p1names[p1names.length-1])
            salutationsFormal.push(p1prefix + " and " + p2prefix + " " + p1names[p1names.length-1])
            if (defaultPrefix)
            {
                // Reverse prefixes in case default had it backwards
                salutationsHousehold.push(p1prefix + " and " + p2prefix + " " + p2names[0] + " " + p2names[p2names.length-1])
                salutationsFormal.push(p1prefix + " and " + p2prefix + " " + p2names[p2names.length-1])
            } else
            {
                // Parent 2 prefix will only come first if not using defaults
                salutationsHousehold.push(p2prefix + " and " + p1prefix + " " + p2names[0] + " " + p2names[p2names.length-1])
                salutationsFormal.push(p2prefix + " and " + p1prefix + " " + p2names[p2names.length-1])
            }

            // Second alternate: first word as first name, rest as last name
            salutationsInformal.push(p1names[0] + " and " + p2name)
            salutationsInformal.push(p2names[0] + " and " + p1name)
            salutationsHousehold.push(p1prefix + " and " + p2prefix + " " + p1name)
            salutationsFormal.push(p1prefix + " and " + p2prefix + " " + p1name.substr(p1names[0].length+1))
            if (defaultPrefix)
            {
                // Reverse prefixes in case default had it backwards
                salutationsHousehold.push(p1prefix + " and " + p2prefix + " " + p2name)
                salutationsFormal.push(p1prefix + " and " + p2prefix + " " + p2name.substr(p2names[0].length+1))
            } else
            {
                // Parent 2 prefix will only come first if not using defaults
                salutationsHousehold.push(p2prefix + " and " + p1prefix + " " + p2name)
                salutationsFormal.push(p2prefix + " and " + p1prefix + " " + p2name.substr(p2names[0].length+1))
            }

            // Third alternate: last word as last name, rest as first name
            salutationsInformal.push(p1name.substr(0,p1name.length-p1names[p1names.length-1].length-1) + " and " + p2name)
            salutationsInformal.push(p2name.substr(0,p2name.length-p2names[p2names.length-1].length-1) + " and " + p1name)
        }
    }

    // Remove duplicates
    $.each(salutationsInformal, function(i, el){
        if($.inArray(el, UsalutationsInformal) === -1) UsalutationsInformal.push(el);
    });
    $.each(salutationsHousehold, function(i, el){
        if($.inArray(el, UsalutationsHousehold) === -1) UsalutationsHousehold.push(el);
    });
    $.each(salutationsFormal, function(i, el){
        if($.inArray(el, UsalutationsFormal) === -1) UsalutationsFormal.push(el);
    });

    // Create dropdown boxes
    var s;
    var i;

    s = $('<select />', {id: "InformalFormula"})
    $('<option />', {value: "NA", text: "-- Select from Formula --"}).appendTo(s)
    for (i = 0; i < UsalutationsInformal.length; i++)
    {
        $('<option />', {value: UsalutationsInformal[i], text: UsalutationsInformal[i]}).appendTo(s)
    }
    $("#LabelSalutation").after(s)

    s = $('<select />', {id: "HouseholdFormula"})
    $('<option />', {value: "NA", text: "-- Select from Formula --"}).appendTo(s)
    for (i = 0; i < UsalutationsHousehold.length; i++)
    {
        $('<option />', {value: UsalutationsHousehold[i], text: UsalutationsHousehold[i]}).appendTo(s)
    }
    $("#HouseholdSalutation").after(s)

    s = $('<select />', {id: "FormalFormula"})
    $('<option />', {value: "NA", text: "-- Select from Formula --"}).appendTo(s)
    for (i = 0; i < UsalutationsFormal.length; i++)
    {
        $('<option />', {value: UsalutationsFormal[i], text: UsalutationsFormal[i]}).appendTo(s)
    }
    $("#FormalSalutation").after(s)

    // Dropdown box click handlers
    $("#InformalFormula").unbind("click change").bind("click change", function(){
        if ($("#InformalFormula").val() != "NA")
        {
            $("#LabelSalutation").val($("#InformalFormula").val())
            var event = document.createEvent("Event")
            event.initEvent("change", true, false)
            $("#LabelSalutation")[0].dispatchEvent(event)
        }
    });
    $("#HouseholdFormula").unbind("click change").bind("click change", function(){
        if ($("#HouseholdFormula").val() != "NA")
        {
            $("#HouseholdSalutation").val($("#HouseholdFormula").val())
            var event = document.createEvent("Event")
            event.initEvent("change", true, false)
            $("#HouseholdSalutation")[0].dispatchEvent(event)
        }
    });
    $("#FormalFormula").unbind("click change").bind("click change", function(){
        if ($("#FormalFormula").val() != "NA")
        {
            $("#FormalSalutation").val($("#FormalFormula").val())
            var event = document.createEvent("Event")
            event.initEvent("change", true, false)
            $("#FormalSalutation")[0].dispatchEvent(event)
        }
    });

}

function GetPrefixes()
{
    console.log("Function: " + arguments.callee.name)

    localStorage.setItem("GetPrefixesActive", "1")
    localStorage.setItem("GetPrefixesParentDone", "1")
    localStorage.setItem("GetPrefixesParentDone", "0")
    localStorage.setItem("GetPrefixesWaiting", "0")
    localStorage.setItem("GetPrefixesP1Prefix", "")
    localStorage.setItem("GetPrefixesP2Prefix", "")
    var p1link = schoolURL+"app/core#userprofile/" + localStorage.getItem("GetPrefixesP1ID") + "/contactcard"
    var p2link = schoolURL+"app/core#userprofile/" + localStorage.getItem("GetPrefixesP2ID") + "/contactcard"
    var contactCardWindow

    var timerID = setInterval(function(){
        if (localStorage.getItem("GetPrefixesWaiting") == "1")
        {
            // wait for new window to finish saving prefixes
        } else
        {
            switch (localStorage.getItem("GetPrefixesParentDone"))
            {
                case "0":
                    // First parent
                    //alert("first")
                    if (localStorage.getItem("GetPrefixesP1ID") != "")
                    {
                        localStorage.setItem("GetPrefixesWaiting", "1")
                        contactCardWindow = window.open(p1link)
                    } else
                    {
                        localStorage.setItem("GetPrefixesParentDone", "1")
                    }
                    break;
                case "1":
                    // Second parent
                    //alert("second")
                    if (localStorage.getItem("GetPrefixesP2ID") != "")
                    {
                        localStorage.setItem("GetPrefixesWaiting", "1")
                        contactCardWindow = window.open(p2link)
                    } else
                    {
                        localStorage.setItem("GetPrefixesParentDone", "2")
                    }
                    break;
                case "2":
                    // Done
                    clearInterval(timerID)
                    localStorage.setItem("GetPrefixesActive", "0")
                    localStorage.setItem("GetPrefixesFresh", "1")
                    SalutationFormulas()
                    break;
            }
        }

    }, 100);
}

function SavePrefixes(jNode)
{
    if (localStorage.getItem("GetPrefixesActive") == "1")
    {
        console.log("Function: " + arguments.callee.name)
        switch (localStorage.getItem("GetPrefixesParentDone"))
        {
            case "0":
                // First parent
                if (GetID(window.location.href) == localStorage.getItem("GetPrefixesP1ID"))
                {
                    localStorage.setItem("GetPrefixesP1Prefix", $(".bb-page-content-tile-column > #contact-generalinformation").find("td:contains('Prefix')").siblings("td").text())
                    localStorage.setItem("GetPrefixesParentDone", "1")
                    localStorage.setItem("GetPrefixesWaiting", "0")
                    window.close()
                } else
                {
                    // Something went wrong, reset flag
                    localStorage.setItem("GetPrefixesActive", "0")
                }
                break;
            case "1":
                // Second parent
                if (GetID(window.location.href) == localStorage.getItem("GetPrefixesP2ID"))
                {
                    localStorage.setItem("GetPrefixesP2Prefix", $(".bb-page-content-tile-column > #contact-generalinformation").find("td:contains('Prefix')").siblings("td").text())
                    localStorage.setItem("GetPrefixesParentDone", "2")
                    localStorage.setItem("GetPrefixesWaiting", "0")
                    window.close()
                } else
                {
                    // Something went wrong, reset flag
                    localStorage.setItem("GetPrefixesActive", "0")
                }
                break;
        }
    }
}

// -----------------------------------------[INDEX029]-------------------------------------
// -----------------------------------Admin Field Auto-Add---------------------------------
// ----------------------------------------------------------------------------------------

function AdminFieldAutoAdd()
{
    console.log("Function: " + arguments.callee.name)

    $(".available-field-dropdown").bind("change", function(){
        var event = document.createEvent("Event")
        event.initEvent("click", true, false)
        $(".add-field-link")[0].dispatchEvent(event)
    });

}

// -----------------------------------------[INDEX030]-------------------------------------
// ----------------------------------Highlight Row on Hover--------------------------------
// ----------------------------------------------------------------------------------------

function HighlightRowOnHover()
{
    if (window.location.href.substr(schoolURL.length, 6) == "podium")  // Only for podium pages--doesn't seem like the pages in the newer UI have this problem.
    {
        console.log("Function: " + arguments.callee.name)

        $("table:not(.thCBar) > tbody").each(function(index){  // Exclude class thCBar, used in some areas just for formatting
            if ($(this).children("tr").length > 3)  // Only for tables with more than 3 rows
            {
                $(this).children("tr").not(':first').hover(
                    function () {
                        $(this).css("background","AliceBlue");
                    },
                    function () {
                        $(this).css("background","");
                    }
                );
            }
        });
    }
}

// -----------------------------------------[INDEX031]-------------------------------------
// ---------------------------Manage Student Enrollments Shortcuts-------------------------
// ----------------------------------------------------------------------------------------

function ManageStudentEnrollmentsShortcuts()
{
    console.log("Function: " + arguments.callee.name)

    $(document).on('keypress', function(e) {
        switch (e.keyCode)
        {
            case 114:  // R
                $('tr[style*="background: aliceblue"]').find('span[f="graduated"]').find("input").prop("checked", true).trigger("click")
                break;
            case 101:  // E
                $('tr[style*="background: aliceblue"]').find('span[f="repeated"]').find("input").prop("checked", true).trigger("click")
                break;
            case 119:  // W
                $('tr[style*="background: aliceblue"]').find('span[f="withdraw"]').find("input").prop("checked", true).trigger("click")
                break;
            case 110:  // N
                $('tr[style*="background: aliceblue"]').find('span[f="nochange"]').find("input").prop("checked", true).trigger("click")
                break;
            default:
                return;
        }
        // Flash student name to indicate to user that shortcut key was pressed
        $('tr[style*="background: aliceblue"]').children("td:eq(0)").fadeOut(100).fadeIn(100)
    });

    // Add note to top
    $(".tbl:first:not(.onMod)").find("br:eq(3)").before(" Hover over a row and use one of the following keyboard shortcuts to select the corresponding option: R=Promote / E=Repeat / W=Withdraw  / N=No Change")
    $(".tbl:first").addClass("onMod")
}

// -----------------------------------------[INDEX032]-------------------------------------
// --------------------------------List Role Access Shortcuts------------------------------
// ----------------------------------------------------------------------------------------

function ListRoleAccessShortcuts()
{
    console.log("Function: " + arguments.callee.name)

    $(document).on('keypress', function(e) {
        switch (e.keyCode)
        {
            case 114:  // R
                $('tr[style*="background: aliceblue"]').find("input:eq(0)").prop("checked", true).trigger("click")
                break;
            case 99:   // C
                $('tr[style*="background: aliceblue"]').find("input:eq(1)").prop("checked", true).trigger("click")
                break;
            case 110:  // N
                $('tr[style*="background: aliceblue"]').find("input:eq(2)").prop("checked", true).trigger("click")
                break;
            default:
                return;
        }
        // Flash role name to indicate to user that shortcut key was pressed
        $('tr[style*="background: aliceblue"]').children("td:eq(1)").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    });

    // Add note to top
    $(".mobile-word-break:not(.onMod)").find("br:eq(2)").after("Hover over a row and use one of the following keyboard shortcuts to select the corresponding option: R=Run / C=Copy / N=No Access")
    $(".mobile-word-break").addClass("onMod")
}

// -----------------------------------------[INDEX033]-------------------------------------
// ----------------------------Enter Grades by Class Textbox Size--------------------------
// ----------------------------------------------------------------------------------------

function EnterGradesByClassTextboxSize()
{
    console.log("Function: " + arguments.callee.name)

    $("input.textbox").attr("style", "width:70px;")
    $(":text").attr("style", "width:60px;")
}

// -----------------------------------------[INDEX034]-------------------------------------
// --------------------------Fix Immunization Requirements Collapse------------------------
// ----------------------------------------------------------------------------------------

function FixImmunizationCollapse(jNode)
{
    console.log("Function: " + arguments.callee.name)

    if ($(jNode).parent().find("h3").text().indexOf("immunization") >= 0)
    {
        $(jNode).attr("id", "tile-body-immunizations")
        $(jNode).prev(".bb-tile-title").attr("data-target", "#tile-body-immunizations")
    }
}

// -----------------------------------------[INDEX035]-------------------------------------
// ------------------------------Default Assignment Date Filter----------------------------
// ----------------------------------------------------------------------------------------

function DefaultClassAssignmentDateFilter(jNode)
{
    console.log("Function: " + arguments.callee.name)

    if (!$("#DefaultLink").length)
    {
        $(".assignmentFiltersContainer").children(".bb-tile").eq(1).find(".bb-tile-header-with-content").after('<div id="DefaultLink"><h5><a href="'+schoolURL+'app/faculty#resourceboarddetail/'+settingsResourceBoardID+'" target="_blank">Change Default</a></h5></div>')

        switch (localStorage.getItem("ClassAssignmentsDefaultDate"))
        {
            case "Previous":
                $(".assignmentTimeFilter[data-type-id='0']")[0].click()
                break;
            case "Active":
                $(".assignmentTimeFilter[data-type-id='1']")[0].click()
                break;
            case "Future":
                $(".assignmentTimeFilter[data-type-id='2']")[0].click()
                break;
            case "Current Quarter":
                $(".assignmentTimeFilter[data-type-id='3']")[0].click()

                $("#assignmentFilterStartDatePicker").val(localStorage.getItem("ClassAssignmentsDefaultStart"))
                var event = document.createEvent("Event")
                event.initEvent("change", true, false)
                $("#assignmentFilterStartDatePicker")[0].dispatchEvent(event)

                $("#assignmentFilterEndDatePicker").val(localStorage.getItem("ClassAssignmentsDefaultEnd"))
                event = document.createEvent("Event")
                event.initEvent("change", true, false)
                $("#assignmentFilterEndDatePicker")[0].dispatchEvent(event)

                $(".active-filter").first().html('<i class="pull-right p3icon-radioOn" style="margin-right: 5px"></i>Range (Current Quarter)')

                // Get updated quarter start/end dates
                GetUpdatedQuarterDates("Assignments")
                break;
            case "Range":
                $(".assignmentTimeFilter[data-type-id='3']")[0].click()

                $("#assignmentFilterStartDatePicker").val(localStorage.getItem("ClassAssignmentsDefaultStart"))
                var event = document.createEvent("Event")
                event.initEvent("change", true, false)
                $("#assignmentFilterStartDatePicker")[0].dispatchEvent(event)

                $("#assignmentFilterEndDatePicker").val(localStorage.getItem("ClassAssignmentsDefaultEnd"))
                event = document.createEvent("Event")
                event.initEvent("change", true, false)
                $("#assignmentFilterEndDatePicker")[0].dispatchEvent(event)
        }
    }
}

function GetUpdatedQuarterDates(page)
{
    var http = new XMLHttpRequest()
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200)
            UpdateQuarterDates(http.responseText, page);
    }
    http.open("GET", "https://script.google.com/macros/s/AKfycbzNa_Z-M7IfQr3c5tdoaUcvqgcInOgZFIs6BvbN-bQ833he-9Af/exec?key=Royals&callback=?", true)
    http.send(null)
}

function UpdateQuarterDates(response, page)
{
    var dates = response.substring(1).split("|")
    if (dates[0] != "error" && dates[1] != "error")
    {
        if (localStorage.getItem("ClassAssignmentsDefaultStart") != dates[0] || localStorage.getItem("ClassAssignmentsDefaultEnd") != dates[1])
        {
            localStorage.setItem("ClassAssignmentsDefaultStart", dates[0])
            localStorage.setItem("ClassAssignmentsDefaultEnd", dates[1])

            switch (page)
            {
                case "Settings-First":
                    $("#temp-loading").remove()
                case "Settings":
                    $("#ClassAssignmentsDefaultStart").val(dates[0])
                    $("#ClassAssignmentsDefaultEnd").val(dates[1])
                    break;
                case "Assignments":
                    $("#assignmentFilterStartDatePicker").val(dates[0])
                    var event = document.createEvent("Event")
                    event.initEvent("change", true, false)
                    $("#assignmentFilterStartDatePicker")[0].dispatchEvent(event)

                    $("#assignmentFilterEndDatePicker").val(dates[1])
                    event = document.createEvent("Event")
                    event.initEvent("change", true, false)
                    $("#assignmentFilterEndDatePicker")[0].dispatchEvent(event)
            }
        }
    } else if (page == "Settings-First")
    {
        $("#temp-loading").text("Error loading quarter dates")
    }
}

// -----------------------------------------[INDEX900]-------------------------------------
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

