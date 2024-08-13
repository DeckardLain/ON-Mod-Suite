// ==UserScript==
// @name         ON Mod Suite
// @namespace    http://www.hanalani.org/
// @version      2.25.0
// @description  Collection of mods for Blackbaud ON system
// @author       Scott Yoshimura
// @match        https://hanalani.myschoolapp.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @run-at       document-end
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource     IMPORTED_CSS https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css
// @require      https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/printThis/1.15.0/printThis.min.js
// @grant        GM.xmlHttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @connect      hanalani.myschoolapp.com
// ==/UserScript==

/* Copyright (C) 2018-2024  Hanalani Schools

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
[INDEX036] Math Year Averages
[INDEX038] Email Delimiter Default
[INDEX039] Word Count for Discussion Responses
[INDEX040] Impersonation Recent & Pinned
[INDEX041] Fix Classes Menu Off Screen
[INDEX042] Fix Gradebook Link
[INDEX043] Update Page Title
[INDEX044] Directory Medical Link
[INDEX045] Email Administrators
[INDEX046] Medical Visit Email
[INDEX047] Dialer
[INDEX048] Grade History
[INDEX049] Financial Aid Misc
[INDEX050] EMS Process Age
[INDEX051] Needs Checklist Sort
[INDEX052] Gradebook Highlight Row
[INDEX053] Course Request List Parent Emails
[INDEX054] Facilities Request Form
[INDEX055] Print Student Assessment
[INDEX056] Process Event Registrations User Links
[INDEX057] Lower School Injury Report Official Note Template
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
     Add user IDs and the ability to open contact cards to static user search, so that when there are users with the same last name,
     you can select the appropriate one more easily.

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
     or No Change without needing to click the radio button. Student ID numbers are displayed with their names. Multiple students
     can be selected for withdrawal at once by pasting in a list of ID numbers.

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

33 - Math Year Averages
     From Schedule & Performance gradebooks list, for A/B math classes, launch lookup with custom external API to get the class
     students' full year averages.

35 - Email Delimiter Default
     When sending email to students and/or parents from a roster, remember last used delimiter option and select it by default.

36 - Word Count for Discussion Responses
     Adds a word count for each response added to discussions.

37 - Impersonation Recent & Pinned
     Show recently impersonated users and enable pinning of any user in the recent/past list for quick access.

38 - Update Page Title
     When viewing a user profile page in Core, Academics, or Enrollment Management, set the page title in the browser to include the
     name and tab you're on, so you can actually use the browser history to see and navigate where you've been.

39 - Directory Medical Link
     Directory results Options menu includes a link to medical page.

40 - Medical Visit Email
     Create message in default email client with medical visit info.

41 - Dialer
     Phone numbers open a popup dialer to connect a user's extension with the destination number.

42 - Grade History
     When recording grades, click Load Past Grades to display past quarter(s) grades for reference.

43 - Age in EMS Process
     Add age to Enrollment Management Process (Inquiry/Applications/Needs Checklist/File Submissions) pages

44 - Needs Checklist Sort
     Sort the Needs Checklist process list in Admissions Management by date (most recent at the top).

45 - Gradebook Highlight Row
     When enabled in settings, the cursor position in gradebooks will highlight the entire row instead of just the
     student name.

46 - Course Request List Parent Emails
     Get parent emails for listed students in the Student Course Request Worklist.

47 - Print Student Assessment
     Print a student's assessment results from the assessment evaluation tab.

48 - Process Event Registrations User Links
     User IDs in Process (New) Event Registrations link to the user profile page.

49 - Lower School Injury Report Official Note Template
     Builds official note summary from Injury Report fields.

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

    fixURL()
    var module = GetModule(strURL);
    console.log("Module: "+module);

    switch(module)
    {
        case "Settings":
            waitForKeyElements("#on-mod-suite-school-settings", GenerateSettingsPage, true)
            break;
        case "Core":
            waitForKeyElements("#userName", PostLinkCore)
            waitForKeyElements(".bb-page-heading", PostLinkCore)
            waitForKeyElements("#LabelSalutation", SalutationFormulas)
            waitForKeyElements(".bb-tile-header:contains('General information')", SavePrefixes, true)
            break;
        case "Academics":
            waitForKeyElements("h1.bb-tile-header, #user-profile-full-name", PostLinkAcademics)
            waitForKeyElements(".bb-page-heading", PostLinkFaculty)
            UpdatePageTitle($("h1.bb-tile-header"))
            break;
        case "Enrollment Management":
            waitForKeyElements("#CandidateName", PostLinkEnrollmentManagement)
            waitForKeyElements(".bb-page-heading", PostLinkEnrollmentManagement)
            waitForKeyElements("#paperwork", FinancialAidFormsDate);
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
            waitForKeyElements(".bb-card-title",ConvertGradYearToGradeLevel)
            waitForKeyElements(".bb-btn-secondary", CreateRosterCheckboxes)
            waitForKeyElements(".delimiter-btn:first", EmailDelimiterDefault)
            EmailAllParentsOfStudent();
            DialerInterval()
            break;
        case "Faculty-Roster":
            waitForKeyElements(".bb-page-heading", PostLinkRosterAcademics)
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".bb-card-title",ConvertGradYearToGradeLevel)
            waitForKeyElements(".bb-btn-secondary", CreateRosterCheckboxes)
            waitForKeyElements("#group-header-Classes", ClassesMenuSortOrder)
            waitForKeyElements(".delimiter-btn:first", EmailDelimiterDefault)
            waitForKeyElements(".copy-addresses", EmailAdministrators)
            EmailAllParentsOfStudent();
            DialerInterval()
            break;
        case "Team Roster":
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".bb-card-title",ConvertGradYearToGradeLevel)
            waitForKeyElements(".btn-contact-card:first", AddLinkToFacultyProgress)
            waitForKeyElements(".delimiter-btn:first", EmailDelimiterDefault)
            DialerInterval()
        case "Other Roster":
            waitForKeyElements(".bb-card-actions:first", AddRosterStudentCount)
            waitForKeyElements(".bb-card-title",ConvertGradYearToGradeLevel)
            waitForKeyElements(".bb-btn-secondary", CreateRosterCheckboxes)
            waitForKeyElements(".delimiter-btn:first", EmailDelimiterDefault)
            EmailAllParentsOfStudent();
            DialerInterval()
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
            waitForKeyElements("[data-gradebook]", MathYearAverages, true)
            break;
        case "Core Dashboard":
            waitForKeyElements(".tasks-tile", AdvancedListFavorites)
            break;
        case "Student Attendance":
            waitForKeyElements(".inline-edit:first", HighlightInvalidAttendance)
            break;
        case "Official Notes Admissions":
            waitForKeyElements(".bb-tile-content-section:first", OfficialNotesImprovements)
            break;
        case "Create Distribution Group":
            waitForKeyElements("[style='height:75px;max-width:900px;visibility:visible !important;']", IncreaseDistributionGroupListBoxSize)
            waitForKeyElements("#L_c1i0_cb143638_ctl12_lstResult", AddUserIDsToList)
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
            waitForKeyElements(".ddlb-label", GradeHistory, true)
            break;
        case "Medical Profile":
            waitForKeyElements(".bb-tile-content", FixImmunizationCollapse)
            waitForKeyElements(".bb-page-heading", PostLinkFaculty)
            waitForKeyElements("#Invalid", EmailMedicalVisit)
            break;
        case "Assignments":
            waitForKeyElements(".assignment-filter-item", DefaultClassAssignmentDateFilter, true)
            waitForKeyElements("#group-header-Classes", ClassesMenuSortOrder)
            break;
        case "Discussion":
            waitForKeyElements(".discussion-name", WordCount)
            break;
        case "Impersonate":
            waitForKeyElements(".ImpUser:first", ImpersonationPage)
            waitForKeyElements(".SearchResultRow:first", ImpersonationSearchResults)
            break;
        case "New Assignments Page":
            //waitForKeyElements("#sky-tab-4-nav-btn", FixGradebookLink, true)
            break;
        case "Directory":
            waitForKeyElements("#directory-items-container", DirectoryMedicalLink)
            break;
        case "Nurse's Office":
            waitForKeyElements("#Invalid", EmailMedicalVisit)
            break;
        case "Medical Contact Card":
            waitForKeyElements("#contact-relationship", SaveParentEmails, true)
            break;
        case "Medical Contact Card Group":
            DialerInterval()
            break;
        case "ProcessChecklist":
            waitForKeyElements(".badge.count", SortNeedsChecklistWait, true);
            break;
        case "ProcessApplications":
        case "ProcessInquiries":
        case "ProcessFileSubmissions":
            waitForKeyElements(":contains(Birth Date:)", AddAgeApplication);
            break;
        case "Gradebook":
            waitForKeyElements(".gradebook-student-cell", GradebookHighlightRow);
            break;
        case "Course Request Worklist":
            waitForKeyElements(".approve-all", CourseRequestListParentEmails);
            break;
        case "Calendar":
            waitForKeyElements(".calendarTitle:contains('Facilities')", FacilitiesRequestForm);
            break;
        case "StudentAssessment":
            waitForKeyElements(".user-details", PrintStudentAssessment);
            break;
        case "NewEMSEvents":
            waitForKeyElements(".sky-toolbar-items", ProcessEventRegistrationsUserLinksMenu);
            waitForKeyElements(".sky-row:contains(UserId)", ProcessEventRegistrationsUserLinks);
            break;
    }

    // People Finder Quick Select
    waitForKeyElements(".people-finder-search-box", PeopleFinderQuickSelect)
    waitForKeyElements("sis-people-finder", PeopleFinderQuickSelect)
    waitForKeyElements("edu-people-finder", PeopleFinderQuickSelect)

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
        waitForKeyElements(".tox-tinymce", EditorImprovements, false)
    }

    // Chevron Down
    waitForKeyElements(".fa-chevron-down", AutomaticallyExpandAll)

    // Admin Field Auto-Add
    waitForKeyElements(".available-field-dropdown", AdminFieldAutoAdd)

    // Highlight row on hover
    HighlightRowOnHover()

    // Fix Classes Menu Off Screen
    waitForKeyElements(".subnav", FixClassesMenuOffScreen)

    waitForKeyElements(".userprofile", DialerInterval)
    waitForKeyElements(".candidate-header", DialerInterval)
    waitForKeyElements(".student-header", DialerInterval)

    // Injury Reports
    waitForKeyElements(".bb-dialog-header:contains('Compose official note')", InjuryReportInit, true);
    waitForKeyElements(".sky-modal-heading:contains('Add official note')", InjuryReportInit, true);
}


function GetModule(strURL)
{
    console.log("Function: " + arguments.callee.name + "(" + strURL + ")")

    if (strURL == schoolURL+"podium/default.aspx?t=1691&wapp=1&ch=1&_pd=gm_fv&pk=359")
    {
        return "Manual Attendance Sheet Report";
    } else if (strURL.includes("/ems-events/manage"))
    {
        return "NewEMSEvents"
    } else if (strURL.includes("/lms-assessment-builder/assessment-evaluation/"))
    {
        return "StudentAssessment"
    } else if (strURL.includes("#calendar"))
    {
        return "Calendar"
    } else if (strURL.includes("/academics#studentcourserequestworklist/"))
    {
        return "Course Request Worklist"
    } else if (strURL.includes("/sis-gradebook/gradebook/"))
    {
        return "Gradebook"
    } else if (strURL.includes("#process/checklist"))
    {
        return "ProcessChecklist"
    } else if (strURL.includes("#process/applications"))
    {
        return "ProcessApplications"
    } else if (strURL.includes("#process/inquiries"))
    {
        return "ProcessInquiries"
    } else if (strURL.includes("#process/files"))
    {
        return "ProcessFileSubmissions"
    } else if (strURL.indexOf("/app/faculty#myday/nurses-office") > 0)
    {
        return "Nurse's Office"
    } else if (strURL.indexOf("medical-contactcard-group/") > 0)
    {
        return "Medical Contact Card Group"
    } else if (strURL.indexOf("#directory/") > 0)
    {
        return "Directory"
    } else if (strURL.indexOf("lms-assignment/assignment-center/") > 0)
    {
        return "New Assignments Page"
    } else if (strURL.substring(strURL.length-12) == "#impersonate")
    {
        return "Impersonate"
    } else if (strURL.indexOf("#discussionsectiondetail/") >= 0)
    {
        return "Discussion"
    } else if (strURL.substring(strURL.length-11) == "assignments")
    {
        return "Assignments";
    } else if (strURL.substring(0, schoolURL.length+19) == schoolURL+"app/faculty#profile" && strURL.substring(schoolURL.length+28, schoolURL.length+35) == "medical")
    {
        return "Medical Profile";
    } else if (strURL.indexOf("/app/faculty#profile/") > 0 && strURL.indexOf("/contactcard") > 0)
    {
        return "Medical Contact Card";
    } else if (strURL.indexOf("/faculty#gradesrecord/") >= 0)
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
    } else if (strURL.substring(strURL.length-21-settingsResourceBoardID.length) == "#resourceboarddetail/"+settingsResourceBoardID)
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
    } else if (strURL.indexOf("/app/academics") >= 0 || strURL.indexOf("/sis-scheduling/user-profile/") >= 0)
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
    if (window.location.href.substring(window.location.href.length-21-settingsResourceBoardID.length) != "#resourceboarddetail/"+settingsResourceBoardID)
    {
        $("body").append('<div align="center" id="on-mod-suite-footer" style="font-size:12px">This site experience enhanced by ON Mod Suite v' + GM_info.script.version + '. | Copyright © 2018-2024 Hanalani Schools | Click <a href="'+schoolURL+'app/faculty#resourceboarddetail/'+settingsResourceBoardID+'" target="_blank">here</a> to change settings.</div>')

        // Check if first run of this version of the script--if so, open Settings page to load school-specific settings
        var skipNotificationVersions = []
        var oldVersion = GM_getValue("FirstRunVersionCheck")

        if (oldVersion != GM_info.script.version)
        {
            GM_setValue("FirstRunVersionCheck", GM_info.script.version)
            if (skipNotificationVersions.indexOf(oldVersion) < 0)
            {
                setTimeout(function(){
                    window.open("https://hanalani.myschoolapp.com/app/faculty#resourceboarddetail/"+settingsResourceBoardID)
                }, 1000);
            }
        }
    }
}

function fixURL()
{
    if (window.location.href.indexOf("//0/") >= 0)
    {
        window.location.href = window.location.href.replace("//0/","/0/")
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

    if (window.location.href.indexOf("contactcard") > 0)
    {
        waitForKeyElements("#contact-relationship", function (){
            UpdatePageTitle($("#userName h1 a").eq(0))
        });
    } else
    {
        UpdatePageTitle($("#userName h1 a").eq(0))
    }

    // Add grade level to name display
    $("#userName h1 a").append(GetGradeLevel($("#userName h1 a").text()));
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
    var nameDisplay = $("#user-profile-full-name").find("a");
    nameDisplay.append(GetGradeLevel(nameDisplay.text()));

    UpdatePageTitle();

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

    var nameDisplayNode = $("#userName a h1").contents().filter(function() {
        return this.nodeType === 3;
    });
    UpdatePageTitle(nameDisplayNode.eq(0))

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
            strLinkPrefix = schoolURL+"sis-scheduling/user-profile/";
            strLinkSuffix = "/progress";
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
        var searchInput = $(this).val();
        if (e.keyCode == 13)
        {
            $("#PeopleFinderContainer").find(".pf-user").eq(0).click();
            $(".result").eq(0).click();
            $("#PeopleFinderContainer, .results").hide();
        } else if (searchInput != "" && isNaN(searchInput))
        {
            switch (e.keyCode)
            {
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

    //ConvertGradYearToGradeLevel();

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

    // Remove Blackbaud's menu option because it still requires users to select the teacher/class
    $("#roster-reports").find("li:contains('Manual Attendance Sheet - By Teacher And Section')").remove()

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
            if ($("#show-menu").attr("selection-marked") != "true")
            {
                $("#gradyear").prepend(">");
                $("#show-menu").attr("selection-marked","true")
            }
            break;
        case "2":
            if ($("#show-menu").attr("selection-marked") != "true")
            {
                $("#gradelevel").prepend(">");
                $("#show-menu").attr("selection-marked","true")
            }
            $(".bb-card-title").each(function(index){
                if ($(this).attr("onmodsuite") != "true")
                {
                    name = $(this).text();
                    grade = GetGradeLevel(name);
                    if (grade)
                    {
                        name = name.substring(0, name.length-4);
                        name = name.concat(grade);
                        $(this).text(name);
                        $(this).attr("onmodsuite","true");
                    }
                }
            });
            break;
        case "3":
            if ($("#show-menu").attr("selection-marked") != "true")
            {
                $("#both").prepend(">");
                $("#show-menu").attr("selection-marked","true")
            }
            $(".bb-card-title").each(function(index){
                if ($(this).attr("onmodsuite") != "true")
                {
                    grade = GetGradeLevel($(this).text())
                    if (grade)
                    {
                        $(this).append(grade);
                        $(this).attr("onmodsuite","true");
                    }
                }
            });
            break;
        case "4":
            if ($("#show-menu").attr("selection-marked") != "true")
            {
                $("#none").prepend(">");
                $("#show-menu").attr("selection-marked","true")
            }
            $(".bb-card-title").each(function(index){
                if ($(this).attr("onmodsuite") != "true")
                {
                    name = $(this).text();
                    grade = GetGradeLevel(name);
                    if (grade)
                    {
                        name = name.substring(0, name.length-4);
                        $(this).text(name);
                        $(this).attr("onmodsuite","true");
                    }
                }
            });
            break;
        default:
            if ($("#show-menu").attr("selection-marked") != "true")
            {
                $("#gradelevel").text(">Grade Level (Default)");
                localStorage.setItem("GradeLevelSetting", 2);
                $("#show-menu").attr("selection-marked","true")
            }
            $(".bb-card-title").each(function(index){
                if ($(this).attr("onmodsuite") != "true")
                {
                    name = $(this).text();
                    grade = GetGradeLevel(name);
                    if (grade)
                    {
                        name = name.substring(0, name.length-4);
                        name = name.concat(grade);
                        $(this).text(name);
                        $(this).attr("onmodsuite","true");
                    }
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
    strHTMLPrefix = strHTMLPrefix + 'href="'+schoolURL
    var strHTMLSuffix = '</a>';

    switch (page)
    {
        case "Core->Access":
            moduleURL = "app/Core#userprofile";
            pageURL = "access";
            break;
        case "Core->Enrollment":
            moduleURL = "app/Core#userprofile";
            pageURL = "enrollment";
            break;
        case "Core->Settings":
            moduleURL = "app/Core#userprofile";
            pageURL = "settings";
            break;
        case "Core->Files & Forms":
            moduleURL = "app/Core#userprofile";
            pageURL = "files";
            break;
        case "Core->Contact Card":
            moduleURL = "app/Core#userprofile";
            pageURL = "contactcard";
            break;
        case "Academics->Progress":
            moduleURL = "sis-scheduling/user-profile";
            pageURL = "progress";
            break;
        case "Academics->Performance":
            moduleURL = "sis-grading/user-profile";
            pageURL = "performance";
            break;
        case "Academics->Official Notes":
            moduleURL = "sis-communications/user-profile";
            pageURL = "officialnotes";
            break;
        case "Academics->Conduct":
            moduleURL = "sis-conduct/user-profile";
            pageURL = "conduct";
            break;
        case "Academics->Schedule":
            moduleURL = "sis-scheduling/user-profile";
            pageURL = "schedule";
            break;
        case "Academics->Course Requests":
            moduleURL = "sis-scheduling/user-profile";
            pageURL = "courserequests";
            break;
        case "Academics->Contact Card":
            moduleURL = "esc-profile/user-profile";
            pageURL = "contactcard";
            break;
        case "Enrollment Management->Record":
            moduleURL = "app/enrollment-management#candidate";
            pageURL = "record";
            break;
        case "Enrollment Management->Checklist":
            moduleURL = "app/enrollment-management#candidate";
            pageURL = "checklist";
            break;
        case "Enrollment Management->Schools":
            moduleURL = "app/enrollment-management#candidate";
            pageURL = "schools";
            break;
        case "Enrollment Management->Financial Aid":
            moduleURL = "app/enrollment-management#candidate";
            pageURL = "financialaid";
            break;
        case "Enrollment Management->Contracts":
            moduleURL = "app/enrollment-management#candidate";
            pageURL = "contracts";
            break;
        case "Enrollment Management->Contact Card":
            moduleURL = "app/enrollment-management#candidate";
            pageURL = "contactcard";
            break;
        case "Enrollment Management->Connections":
            moduleURL = "app/enrollment-management#candidate";
            pageURL = "connections";
            break;
        case "Faculty->Progress":
            moduleURL = "app/faculty#profile";
            pageURL = "progress";
            break;
        case "Faculty->Schedule":
            moduleURL = "app/faculty#profile";
            pageURL = "schedule";
            break;
        case "Faculty->Assignments":
            moduleURL = "app/faculty#profile";
            pageURL = "assignments";
            break;
        case "Faculty->Conduct":
            moduleURL = "app/faculty#profile";
            pageURL = "conduct";
            break;
        case "Faculty->Official Notes":
            moduleURL = "app/faculty#profile";
            pageURL = "officialnotes";
            break;
        case "Faculty->Contact Card":
            moduleURL = "app/faculty#profile";
            pageURL = "contactcard";
            break;
        case "Faculty->Medical":
            moduleURL = "app/faculty#profile";
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
            "Academics->Progress",
            "Academics->Performance",
            "Academics->Official Notes",
            "Academics->Conduct",
            "Academics->Schedule",
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

        // Remove duplicate menu
        $(".btn-group:contains('Send Communication to')").each(function(){
            //console.log($(this).find("li").length)
            if ($(this).find("li").length < 5)
            {
                $(this).remove()
            }
        });

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
                $("input[type='checkbox']").not(".Select_all, #dialer-remember").prop("checked", true);
                var selectedCount = $('input[type="checkbox"]:checked').not('.Select_all, #dialer-remember').length;
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
                $("input[type='checkbox']").not(".Select_all, #dialer-remember").prop("checked", false);
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
        selectedCount = $('input[type="checkbox"]:checked').not('.Select_all, #dialer-remember').length;
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
    var count = $('input[type="checkbox"]:checked').not('.Select_all, #dialer-remember').length;

    if (count>0) // only if there are selected students
    {
        $("#roster-count").closest("h4").append('<span id="email-parents"> Gathering Parent Emails...</span>')

        try
        {
            var delim = ";";
            switch (localStorage.getItem("EmailDelimiter"))
            {
                case 0:
                    delim = ",";
                    break;
                case 1:
                    delim = ";";
                    break;
                case 2:
                    delim = " ";
                    break;
                case 3:
                    delim = "\r\n";
                    break;
            }

            var emails = [];
            var token = $("#__AjaxAntiForgery input").val();
            GetEmails(0);

            function GetEmails(index)
            {
                if (index >= count)
                {
                    LaunchMailto();
                    return;
                }

                var studentID = $('input[type="checkbox"]:checked').not('.Select_all').eq(index).siblings("#context-menu").find(".user-relationships-initial").data("user-id");
                var url = "https://hanalani.myschoolapp.com/api/datadirect/studentrelationshipsget/"+studentID+"/?format=json";
                if (studentsToo)
                    emails.push($('input[type="checkbox"]:checked').not('.Select_all').eq(index).closest(".roster-card").find("[href^='mailto']").text());

                GM.xmlHttpRequest({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json",
                        "requestverificationtoken": token
                    },
                    onload: function(response) {
                        try
                        {
                            var relEmails = JSON.parse(response.responseText);
                            for (var i = 0; i < relEmails.length; i++)
                            {

                                emails.push(relEmails[i].email);
                            }
                        } catch (e)
                        {
                            console.log(e);
                            console.log(response.responseText);
                        }

                        // Make the next request
                        GetEmails(index + 1);
                    }
                });
            }

            function LaunchMailto()
            {
                var uniqueEmails = [...new Set(emails)];
                mailtoLink = mailtoLink + uniqueEmails.join(delim);
                document.location.href = mailtoLink;
                $("#email-parents").remove();
            }

        } catch (e)
        {
            console.log(e);
            toastr.error("Error: "+e.message);
        }

    } else
    {
        alert("No students selected!");
    }
}

function EmailSelectedStudents()
{
    console.log("Function: " + arguments.callee.name)
    var mailtoLink = "mailto:?bcc=";

    if ($('input[type="checkbox"]:checked').not('.Select_all, #dialer-remember').length)
    {
        $('input[type="checkbox"]:checked').not('.Select_all, #dialer-remember').each(function(index){
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


        var classesInGrid = [];
        var classesInMenu = [];
        var classesInMenuNames = [];

        $("#group-header-Classes").closest("li").find(".group-page-link-1").each(function() {
            var classURL = $(this).attr("href");
            var start = classURL.indexOf("#academicclass/")+15;
            var end = classURL.indexOf("/",start+1);
            classesInMenu.push(classURL.substring(start,end));
            classesInMenuNames.push($(this).text());
        });

        // Create checkboxes for each class
        $("#accordionSchedules").find("[href]").not(".all-present").each(function(index){
            input = document.createElement("input");
            input.type = "checkbox";
            input.className = "checkbox-class";
            $(this).before(input);

            var classURL = $(this).attr("href");
            var start = classURL.indexOf("#academicclass/")+15;
            var end = classURL.indexOf("/",start+1);
            classesInGrid.push(classURL.substring(start,end));
        });

        // Add classes that aren't scheduled
        for (var i = 0; i < classesInMenu.length; i++)
        {
            if (!classesInGrid.includes(classesInMenu[i]))
            {
                var html = '<tr><td data-heading="Time">None</td><td data-heading="Block">None</td><td data-heading="Activity"><h4><input type="checkbox" class="checkbox-class"><a href="#academicclass/'+classesInMenu[i]+'/0/bulletinboard">'+classesInMenuNames[i]+'</a></h4></td><td></td><td></td></tr>'
                $("#accordionSchedules").append(html);
            }
        }

        // Click event for Select All, to check/uncheck all students
        $("input[type='checkbox'].Select_all").bind("click", function(){
            if ($(this).is(":checked"))
            {
                $("input[type='checkbox']").not(".Select_all, #dialer-remember").prop("checked", true);
            } else
            {
                $("input[type='checkbox']").not(".Select_all, #dialer-remember").prop("checked", false);
            }
        });

        // Click events for Send Communication menu items
        $("#selected-classes-students").unbind("click").bind("click", function(){
            EmailSelectedClassesv2("Student");
        });
        $("#selected-classes-parents").unbind("click").bind("click", function(){
            EmailSelectedClassesv2("Parent");
        });
        $("#selected-classes-all").unbind("click").bind("click", function(){
            EmailSelectedClassesv2("All");
        });
    }
}

function EmailSelectedClassesv2(type)
{
    console.log("Function: " + arguments.callee.name)
    var numSelectedClasses = $('input[type="checkbox"]:checked').not('.Select_all').length

    if (numSelectedClasses)
    {
        toastr.success("Getting emails... Please wait...");
        try
        {
            var delim = ";";
            switch (localStorage.getItem("EmailDelimiter"))
            {
                case 0:
                    delim = ",";
                    break;
                case 1:
                    delim = ";";
                    break;
                case 2:
                    delim = " ";
                    break;
                case 3:
                    delim = "\r\n";
                    break;
            }

            var emails = [];
            var token = $("#__AjaxAntiForgery input").val();
            GetEmails(0);

            function GetEmails(index)
            {
                if (index >= numSelectedClasses)
                {
                    CopyEmailsToClipboard();
                    return;
                }

                var classID = GetID($('input[type="checkbox"]:checked').not('.Select_all').eq(index).next("[href]").attr("href"));
                var url = "https://hanalani.myschoolapp.com/api/DataDirect/SectionEmailList/?format=json&sectionId="+classID;

                GM.xmlHttpRequest({
                    method: "GET",
                    url: url,
                    headers: {
                        "Content-Type": "application/json",
                        "requestverificationtoken": token
                    },
                    onload: function(response) {
                        var classEmails = JSON.parse(response.responseText);
                        for (var i = 0; i < classEmails.length; i++)
                        {
                            if (type == "All" || type == classEmails[i].type_description)
                            {
                                emails.push(classEmails[i].email);
                            }
                        }

                        // Make the next request
                        GetEmails(index + 1);
                    }
                });
            }

            function CopyEmailsToClipboard()
            {
                var uniqueEmails = [...new Set(emails)];
                var emailString = uniqueEmails.join(delim);
                GM_setClipboard(emailString, "text");
                toastr.clear();
                toastr.success(uniqueEmails.length+" email(s) copied to clipboard.");
            }
        } catch (e)
        {
            console.log(e);
            toastr.clear();
            toastr.error("Error: "+e.message);
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
        var classes = jNode.siblings(".subnav").find("li:not(:contains('View Other Classes')):not(:empty)")

        var orderedClasses = classes.sort(function (a, b) {
            return GetPeriodSortOrder(GetPeriod($(a).find(".title").text())) - GetPeriodSortOrder(GetPeriod($(b).find(".title").text()));
            })

        orderedClasses.each(function (index) {
            if ($(this).find(".title").text().indexOf("(") != -1)
            {
                $(this).find(".title").text("[" + GetPeriod($(this).find(".title").text()) + "] " + $(this).find(".title").text().substring(0, $(this).find(".title").text().indexOf("(")))
            }
        });

        var numPerColumn = jNode.siblings(".subnav").find("ul").eq(0).find("li:not(:contains('View Other Classes')):not(:empty)").length

        orderedClasses.each(function (index) {
            var column = Math.floor(index / numPerColumn)
            jNode.siblings(".subnav").find("ul").eq(column).append($(this))
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
        return "None"
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

    // Check for first run
    if (GM_info.script.version != localStorage.getItem("FirstRunVersionCheck"))
    {
        $(".conDefault").eq(1).prepend('<p><b>Script updated to version '+GM_info.script.version+'! See what changed <a href="https://raw.githubusercontent.com/DeckardLain/ON-Mod-Suite/master/Changelog" target="_blank">here</a>.</b>')
        localStorage.setItem("FirstRunVersionCheck", GM_info.script.version)
    }


    // Load school-specific settings
    localStorage.setItem("math-averages-api-url", $("#math-averages-api-url").val())
    localStorage.setItem("dialer-url", $("#dialer-url").val())
    localStorage.setItem("grade-history-url", $("#grade-history-url").val())
    localStorage.setItem("facilities-request-form-link", $("#facilities-request-form-link").val())


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

    // Gradebook Highlight Row
    str += '<tr><td valign="top"><label for="GradebookHighlightRow">Gradebook Highlight Row&nbsp</label>'
    str += '<a class="notificationIcon" title="In gradebooks, the cursor position will highlight the entire row instead of just the student name."><i class="p3icon-notification-2"></i></a></td>'
    str += '<td><input type="checkbox" id="GradebookHighlightRow"><br>'
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

    // Gradebook Highlight Row
    if (localStorage.getItem("GradebookHighlightRow") != null)
    {
        if (localStorage.getItem("GradebookHighlightRow") == "True")
        {
            $("#GradebookHighlightRow").prop("checked", true)
        }
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

    $("#GradebookHighlightRow").unbind("click change").bind("click change", function(){
        if ($("#GradebookHighlightRow").prop("checked") == true)
        {
            localStorage.setItem("GradebookHighlightRow", "True")
        } else
        {
            localStorage.setItem("GradebookHighlightRow", "False")
        }
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
        $(".modal-body").prepend('<br><a href="javascript:void(0)" id="virtual-present">Click to set all students to Virtual-Present</a>')
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

        $("#virtual-present").unbind("click").bind("click", function(){
            if ($(".slide").find("th").text().trim().substring(0, 8) != "Homeroom")
            {
                $(".form-control:contains('Attended Class'):not(:disabled)").val("7717")
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
    if (window.location.href == schoolURL+"podium/default.aspx?t=12200" || window.location.href == schoolURL+"podium/default.aspx?t=52555&wapp=1")
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
            var ListName = ListName.replace("[","-").replace("]","-")  // Can't have brackets in the URL, even if encoded
            var shareLink = ' | <a href="javascript:void(0)" class="list-link" data="'+schoolURL+'podium/default.aspx?t=23189&id='+ListID+'&name='+ListName+'&type=Run">Copy Link to List</a>'
            $(this).find(".cal2listdayitemtext").eq(1).append(shareLink)
            // Add List ID to displayed info
            $(this).find("tr").eq(1).children("td").eq(0).append(" | List ID: "+ListID)
        }
    });

    $(".add-list-to-favorites").unbind("click").bind("click", function(){
        AddAdvancedListFavorite($(this).attr("data-id"), $(this).attr("data-name"))
    });

    $(".list-link").unbind("click").bind("click", function(){
        GM_setClipboard(encodeURI($(this).attr("data")), "text")
        $(this).text("Copied to Clipboard!")
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
        $(jNode).find("head").append('<style>body {font-size:' + localStorage.getItem("EditorDefaultSize") + 'px;}</style>')
    }

    // Default Height
    if (localStorage.getItem("EditorBoxHeight") > 0)
    {
        $(jNode).css("height", localStorage.getItem("EditorBoxHeight") + 'px')
    }

    // Expand Editor Size
    if (!$(jNode).siblings(".expand-editor").length)
    {
        $(jNode).after('<div align="right"><a href="javascript:void(0)" class="expand-editor"><font size="-1">&#9660Expand&#9660</font></a></div>')
    }

    $(".expand-editor").unbind("click").bind("click", function(){
        var editorBox = $(this).closest("div").prev();
        editorBox.css("height", +editorBox.css("height").substr(0, editorBox.css("height").length-2)+100+"px");
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

    if (localStorage.getItem("OfficialNotesRemoveAdmissionsOnly") == "True")
    {
        $("#RemoveAdmissionsOnly").prop("checked", true)
        waitForKeyElements(".bb-emphasized", OfficialNotesRemoveAdmissionsOnly)
    }

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

function OfficialNotesRemoveAdmissionsOnly()
{
    console.log("Function: " + arguments.callee.name)
    $(".detail").each(function(){
        if ($(this).text().includes("Admissions Only"))
        {
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
    jNode.css({"height": "200px"});
}

function AddUserIDsToList(jNode)
{
    console.log("Function: " + arguments.callee.name)
    jNode.children("option").each(function() {
        $(this).text($(this).text()+" ["+$(this).val()+"]")
    });

    AddContactCardLink(jNode)
}

function AddContactCardLink(jNode)
{
    console.log("Function: " + arguments.callee.name)
    if (!$("#contact-card-link").length)
    {
        $(jNode).after('<td class="tblcell" width="25%" align="left" style="padding-left:14px;padding-right:12px;"><a class="link" id="contact-card-link" href="javascript:void()" title="Select one or more names in the list, then click this link to open all of their contact cards.">Open Contact Card(s)</a></td>')
        $("#contact-card-link").unbind("click").bind("click", function(){
            var idsFlat = $(jNode).val()
            var ids = idsFlat.toString().split(",")
            for (var i = 0; i < ids.length; i++)
            {
                var link = schoolURL+"app/Core#userprofile/"+ids[i]+"/contactcard"
                window.open(link, "_blank")
            }
        });
    }
    $(jNode).attr("style", "height:150px;width:551px;visibility:visible !important;")
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
                p1name = $(this).closest("tr").find("h4").text().trim();
                localStorage.setItem("GetPrefixesP1ID", GetID($(this).closest("tr").find("a").attr("href")))
            } else if (p2name == "" && p1name != $(this).closest("tr").find("h4").text().trim())
            {
                p2name = $(this).closest("tr").find("h4").text().trim();
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
            salutationsInformal.push(p1names[0] + " and " + p2names[0])
            salutationsInformal.push(p2names[0] + " and " + p1names[0])
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
            salutationsInformal.push(p1names[0] + " and " + p2names[0])
            salutationsInformal.push(p2names[0] + " and " + p1names[0])
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
    $(".tbl:first:not(.onMod)").find("br:eq(3)").before(' Hover over a row and use one of the following keyboard shortcuts to select the corresponding option: R=Promote / E=Repeat / W=Withdraw  / N=No Change<br><span id="withdraw-multiple-clickable" style="cursor:pointer;"><i><u>Withdraw Multiple</i></u></span><div id="withdraw-multiple-container" style="display:none;"><textarea id="withdraw-multiple-input" rows="4" cols="50" placeholder="Paste User ID numbers to select for withdrawal, one per line"></textarea><button id="withdraw-multiple-submit">Select</button></div>');
    $(".tbl:first").addClass("onMod");

    // Select multiple students for withdrawal
    $("#withdraw-multiple-clickable").on("click", function() {
        $("#withdraw-multiple-container").show().find("#withdraw-multiple-input").focus();
    });

    $("#withdraw-multiple-submit").on("click", function() {
        event.preventDefault();
        const textareaValue = $('#withdraw-multiple-input').val();
        const ids = textareaValue.split('\n').map(id => id.trim()).filter(id => id.length > 0);
        ids.forEach(id => {
            // Find the span with the attribute pk=id and f="withdraw"
            const spanElement = $(`span[pk='${id}'][f='withdraw']`);

            // Check if the span element exists
            if (spanElement.length > 0) {
                // Find the radio input element that is a child of the span
                const radioInput = spanElement.find('input[type="radio"]');

                // Check if the radio input element exists
                if (radioInput.length > 0) {
                    // Simulate a click/select on the radio input element
                    radioInput.prop('checked', true).trigger('click');
                } else {
                    console.log(`Radio input not found for ID: ${id}`);
                }
            } else {
                console.log(`Span element not found for ID: ${id}`);
            }
        });
        $('#withdraw-multiple-input').val("");
        $("#withdraw-multiple-container").hide()
    });

    // Show User IDs
    $(".tblrow").each(function() {
        var elName = $(this).children("td:first");
        var name = elName.text();
        if (name.substring(name.length - 1) != "]")
        {
            var id = $(this).children("td").eq(1).children("span").attr("pk");
            if (id)
                elName.text(name+" ["+$(this).children("td").eq(1).children("span").attr("pk")+"]")
        }
    });
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
                $(".assignment-time-filter[data-type-id='3']")[0].click()

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
                $(".assignment-time-filter[data-type-id='3']")[0].click()

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

// -----------------------------------------[INDEX036]-------------------------------------
// ------------------------------------Math Year Averages----------------------------------
// ----------------------------------------------------------------------------------------

function MathYearAverages()
{
    console.log("Function: " + arguments.callee.name)

    $("[data-gradebook]").each(function(){
        if (!$(this).siblings().find(".math-averages").length)
        {
            var course = $(this).text()
            course = course.substring(0,course.indexOf(" - "))
            if (course.substring(course.length-1) == "A" || course.substring(course.length-1) == "B")
            {
                var url = localStorage.getItem("math-averages-api-url")

                if (url === null || url === undefined || url == "undefined")
                {
                    var html = '<br><small><small><a href = "https://hanalani.myschoolapp.com/app/faculty#resourceboarddetail/'+settingsResourceBoardID+'" class="math-averages" target="_blank">[Open Settings Page to Enable Year Averages]</a></small></small>'
                } else
                {
                    course = encodeURIComponent(course)
                    url += "&course="+course
                    var html = '<br><small><a href = "'+url+'" class="math-averages" target="_blank">[Year Averages]</a></small>'
                }
                    $(this).after(html)
            }
        }
    });
}

// -----------------------------------------[INDEX038]-------------------------------------
// ----------------------------------Email Delimiter Default-------------------------------
// ----------------------------------------------------------------------------------------

function EmailDelimiterDefault(jNode)
{
    console.log("Function: " + arguments.callee.name)

    var lastUsedOption = localStorage.getItem("EmailDelimiter")

    // If delimiter was changed previously, select the same option
    if (lastUsedOption != null)
    {
        SetEmailDelimiter(lastUsedOption);
    }

    // On change, save delimiter option to local storage
    $("[data-delimiter-value]").bind("click", function(){
        localStorage.setItem("EmailDelimiter", $(this).attr("data-delimiter-value"))
    });
}

function SetEmailDelimiter(lastUsedOption)
{
    console.log("Function: " + arguments.callee.name)
    if ($("#email-list-textarea").text().length == 0)
    {
        setTimeout(SetEmailDelimiter, 100, lastUsedOption);
    } else
    {
        var event = document.createEvent("Event")
        event.initEvent("click", true, false)
        $("[data-delimiter-value='"+lastUsedOption+"']")[0].dispatchEvent(event)
    }
}

// -----------------------------------------[INDEX039]-------------------------------------
// ----------------------------Word Count for Discussion Responses-------------------------
// ----------------------------------------------------------------------------------------

function WordCount(jNode)
{
    console.log("Function: " + arguments.callee.name)

    if ($(jNode).find(".word-count").length == 0 && $(jNode).closest(".discussion-message").length == 0)
    {
        var discussion = $(jNode).closest("div").find("[style='font-size:14px; line-height:20px; margin-right:50px']").eq(0)
        var count = 0
        var text = discussion.text().trim()
        if (text.length == 0)
        {
            if (discussion.next().text().trim().length == 0)
            {
                count = 0
            } else
            {
                count = discussion.next().text().trim().split(/\s+/).length
            }
        } else
        {
            count = text.split(/\s+/).length
        }

        $(jNode).append('<span class="word-count"> ('+count+' words)</span>')
    }

}

// -----------------------------------------[INDEX040]-------------------------------------
// -------------------------------Impersonation Recent & Pinned----------------------------
// ----------------------------------------------------------------------------------------

function ImpersonationPage(jNode)
{
    console.log("Function: " + arguments.callee.name)
    var pinImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADCSURBVDhPvdLNCgFhFIfx8ZGSlAU3odyAu7BQVspFYG9hpeQiLKzsxdbeQi7Bxk52xPOfztQ742PGFE/9Os2U875lvH9WshkqZzNJU9Sw859StMANXf/pywa4m9CSjE23Clqo4oAGxgjSTU4Y4qIX0YqYY4QzgpOlj0RpyRruj3XiU1mb0a7QEre9zVDvFkzQxBYbvaC6zdg60JVnKEA3WaGH2HTKEVripiX6dz5WxhKJr+qm76ENLUlVHq8+ql/neQ+f5yBZW+N1ugAAAABJRU5ErkJggg=='

    if ($(".RecentImpersonations").length)
    {
        return;
    }

    // Display pins
    $(".DelImp").each(function(){
        if (!$(this).find(".PinImp").length)
        {
            var id = $(this).attr("curruser")
            var name = $(this).closest(".row").find(".ImpUser:first").text()
            $(this).after('<a href="javascript:void(0)" class="PinImp" curruser="'+id+'" currname="'+name.replace(/"/g, '&quot;')+'"><img src="'+pinImage+'"></a>')
            $(this).parent().attr("class","col-md-3")
            $(this).closest(".row").find(".col-md-10").attr("class","col-md-9")
        }
    });

    // Display recent impersonations
    var recentImpersonationsString = localStorage.getItem("RecentImpersonations")
    var recentHeading = '<div class="row RecentImpersonations"><div class="col-md-12"><span style="font-weight:600;">Recent</span></div></div>'
    var names = "";

    if (recentImpersonationsString != null)
    {
        var recentImpersonations = JSON.parse(recentImpersonationsString)

        for (var i = recentImpersonations.length-1; i >= 0; i--)
        {
            names += '<div class="row" style="line-height:30px;">'
            names += '<div class="col-md-10"><a href="#" class="ImpUser" curruser="'+recentImpersonations[i].id+'">'+recentImpersonations[i].name+'</a></div>'
            names += '<div class="col-md-2"><a href="javascript:void(0)" class="PinImp pull-right" curruser="'+recentImpersonations[i].id+'" currname="'+recentImpersonations[i].name.replace(/"/g, '&quot;')+'"><img src="'+pinImage+'"></a></div>'
            names += '</div>'
        }

    }

    $("#pastImpCol").children("div:first").prepend(recentHeading+names+'<div>&nbsp;</div>')

    // Click Handlers
    $(".ImpUser").unbind("click").bind("click", function(){
        var newImpersonation = {};
        newImpersonation.id = $(this).attr("curruser")
        newImpersonation.name = $(this).text()

        var recentImpersonationsString = localStorage.getItem("RecentImpersonations")
        if (recentImpersonationsString == null)
        {
            var recentImpersonations = [];
        } else
        {
            var recentImpersonations = JSON.parse(recentImpersonationsString)
        }

        var found = false;
        for (var i = 0; i < recentImpersonations.length; i++)
        {
            if (recentImpersonations[i].id == newImpersonation.id)
            {
                found = true;
                break;
            }
        }

        if (!found)
        {
            recentImpersonations.push(newImpersonation);

            if (recentImpersonations.length > 10)
            {
                recentImpersonations.splice(0,1)
            }

            localStorage.setItem("RecentImpersonations", JSON.stringify(recentImpersonations))
        }
    });

    $(".PinImp").unbind("click").bind("click", function(){
        console.log("pin")
        var newPin = {};
        newPin.id = $(this).attr("curruser")
        newPin.name = $(this).attr("currname")

        var pinnedImpersonationsString = localStorage.getItem("PinnedImpersonations")
        if (pinnedImpersonationsString == null)
        {
            var pinnedImpersonations = [];
        } else
        {
            var pinnedImpersonations = JSON.parse(pinnedImpersonationsString);
        }

        var found = false;
        for (var i = 0; i < pinnedImpersonations.length; i++)
        {
            if (pinnedImpersonations[i].id == newPin.id)
            {
                found = true;
                break;
            }
        }

        if (!found)
        {
            pinnedImpersonations.push(newPin);
            localStorage.setItem("PinnedImpersonations", JSON.stringify(pinnedImpersonations))
            DisplayPinnedImpersonations()
        }
    });

    // Display pinned impersonations
    DisplayPinnedImpersonations()

}

function DisplayPinnedImpersonations()
{
    console.log("Function: " + arguments.callee.name)

    var pinnedImpersonationsString = localStorage.getItem("PinnedImpersonations")

    $(".PinnedImpersonation").remove()

    if (pinnedImpersonationsString != null)
    {
        var pinnedImpersonations = JSON.parse(pinnedImpersonationsString)

        if (pinnedImpersonations.length > 0)
        {
            var pinnedHeading = '<div class="row PinnedImpersonation"><div class="col-md-12"><span style="font-weight:600;">Pinned</span></div></div>'
            var names = "";

            for (var i = 0; i < pinnedImpersonations.length; i++)
            {
                names += '<div class="row PinnedImpersonation" style="line-height:30px;">'
                names += '<div class="col-md-10"><a href="#" class="ImpUser" curruser="'+pinnedImpersonations[i].id+'">'+pinnedImpersonations[i].name+'</a></div>'
                names += '<div class="col-md-2"><a href="javascript:void(0)" class="UnpinImp pull-right" currindex="'+i+'"><i style="font-size: 13px; color: #292a2b" class="fa fa-close"></i></a></div>'
                names += '</div>'
            }

            $("#pastImpCol").children("div:first").prepend(pinnedHeading+names+'<div class="PinnedImpersonation">&nbsp;</div>')
        }
    }

    $(".UnpinImp").unbind("click").bind("click", function(){

        var pinnedImpersonations = JSON.parse(localStorage.getItem("PinnedImpersonations"))

        pinnedImpersonations.splice(parseInt($(this).attr("currindex")), 1)

        localStorage.setItem("PinnedImpersonations", JSON.stringify(pinnedImpersonations))
        DisplayPinnedImpersonations()
    });
}

function ImpersonationSearchResults(jNode)
{
    console.log("Function: " + arguments.callee.name)

    $(".SearchResultRow").unbind("click").bind("click", function(){
        var newImpersonation = {};
        newImpersonation.id = $(this).attr("curruser")
        newImpersonation.name = $(this).children(".impersonateColumnMax90:first").text()

        var recentImpersonationsString = localStorage.getItem("RecentImpersonations")
        if (recentImpersonationsString == null)
        {
            var recentImpersonations = [];
        } else
        {
            var recentImpersonations = JSON.parse(recentImpersonationsString)
        }

        recentImpersonations.push(newImpersonation);

        if (recentImpersonations.length > 10)
        {
            recentImpersonations.splice(0,1)
        }

        localStorage.setItem("RecentImpersonations", JSON.stringify(recentImpersonations))
    });
}

// -----------------------------------------[INDEX041]-------------------------------------
// --------------------------------Fix Classes Menu Off Screen-----------------------------
// ----------------------------------------------------------------------------------------

function FixClassesMenuOffScreen(jNode)
{
    console.log("Function: " + arguments.callee.name)

    $("#topnav-containter").find(".subnav").mouseover(function() {
        var left = $(this).css("left")
        if (left.length > 0)
        {
            left = left.substring(0,left.length-2);
        }

        if(left < 0)
        {
            $(this).css("left", 0);
        }
    });
}

// -----------------------------------------[INDEX042]-------------------------------------
// -------------------------------------Fix Gradebook Link---------------------------------
// ----------------------------------------------------------------------------------------

function FixGradebookLink(jNode)
{
    console.log("Function: " + arguments.callee.name)

    var url = window.location.href
    var pos = url.indexOf("/course/")+8
    var classID = url.substring(pos, url.indexOf("/", pos))

    var gradebookURL = schoolURL+"app/faculty#gradebook/"+classID

    $(jNode).changeElementType("span")

    $("#sky-tab-4-nav-btn").unbind().bind("click", function(event){
        window.open(gradebookURL, "_blank", "location=0");
    });

}

// -----------------------------------------[INDEX043]-------------------------------------
// -------------------------------------Update Page Title----------------------------------
// ----------------------------------------------------------------------------------------

function UpdatePageTitle(jNode)
{
    console.log("Function: " + arguments.callee.name)

    var url = window.location.href.split("/")

    var pos = document.title.indexOf(":")
    if (pos < 0)
    {
        pos = document.title.indexOf("|")
    }

    if (pos > 0)
    {
        document.title = document.title.substring(0,pos-1)+" | "+$(jNode).text()+" | "+url[url.length-1]
    } else
    {
        document.title = document.title+" | "+$(jNode).text()+" | "+url[url.length-1]
    }
}

// -----------------------------------------[INDEX044]-------------------------------------
// ----------------------------------Directory Medical Link--------------------------------
// ----------------------------------------------------------------------------------------

function DirectoryMedicalLink(jNode)
{
    console.log("Function: " + arguments.callee.name)

    $(".medical-link").remove()

    $(jNode).find(".user-options-button").each(function () {
        $(this).siblings(".dropdown-menu").append('<li class="medical-link"><a href="#profile/'+$(this).data("userid")+'/medical">Medical</a></li>')
    });
}

// -----------------------------------------[INDEX045]-------------------------------------
// ------------------------------------Email Administrators--------------------------------
// ----------------------------------------------------------------------------------------

function EmailAdministrators(jNode)
{
    console.log("Function: " + arguments.callee.name)
    var adminEmails = ";blee@hanalani.org;mlemon@hanalani.org"

    var timer = setInterval(function() {
        if ($("#email-list-textarea").text() != "")
        {
            clearInterval(timer)

            if (!$("#email-administrators").length)
            {
                $("#copy-message").before('<div id="email-administrators"><input type="checkbox" id="email-administrators-checkbox"><label style="padding-left:4px;" for="email-administrators-checkbox">Also email LS administrators (blee/mlemon)</label></div>')
            }

            $("#email-administrators").data("original-mailto", $("#email-list-launch-mail").attr("href"))
            $("#email-administrators").data("original-list", $("#email-list-textarea").text())

            if (localStorage.getItem("EmailAdministrators") == "Y")
            {
                $("#email-administrators-checkbox").prop("checked", true)
                $("#email-list-launch-mail").attr("href", $("#email-administrators").data("original-mailto")+adminEmails)
                $("#email-list-textarea").text($("#email-administrators").data("original-list")+adminEmails)
            }

            $("#email-administrators-checkbox").bind("change", function() {
                if ($("#email-administrators-checkbox").is(":checked"))
                {
                    $("#email-list-launch-mail").attr("href", $("#email-administrators").data("original-mailto")+adminEmails)
                    $("#email-list-textarea").text($("#email-administrators").data("original-list")+adminEmails)
                    localStorage.setItem("EmailAdministrators", "Y")
                } else
                {
                    $("#email-list-launch-mail").attr("href", $("#email-administrators").data("original-mailto"))
                    $("#email-list-textarea").text($("#email-administrators").data("original-list"))
                    localStorage.setItem("EmailAdministrators", "N")
                }
            });
        }
    }, 500);
}

// -----------------------------------------[INDEX046]-------------------------------------
// ------------------------------------Medical Visit Email---------------------------------
// ----------------------------------------------------------------------------------------

function EmailMedicalVisit(jNode)
{
    console.log("Function: " + arguments.callee.name)
    const subject = "Note from the Nurse"

    if (!$("#email-visit").length)
    {
        $(".modal-footer").append('<button class="btn btn-link" id="email-visit">Create Email</button>')
    }

    $("#email-visit").unbind().bind("click", function() {
        var emails = [];

        if ($(".bb-dialog-header").text().indexOf("Edit a visit") >= 0)
        {
            // Existing visit

            // Get parent emails from contact card
            localStorage.setItem("SaveParentEmailsString", "")
            localStorage.setItem("SaveParentEmailsActive", 1)
            var url = 'https://hanalani.myschoolapp.com/app/faculty#profile/'+GetID(window.location.href)+'/contactcard'
            window.open(url)

            var timer = setInterval(function() {
                if (localStorage.getItem("SaveParentEmailsActive") == 0)
                {
                    clearInterval(timer)
                    var emailString = localStorage.getItem("SaveParentEmailsString")
                    var datetime = $("#Summary .row div:first").text()
                    var name = $("label[for='Summary']").text()
                    var reason = $("#MedicalVisitReasons").text()
                    var assessment = $("#Assessment").text()
                    var intervention = $("#Intervention").text()
                    var outcome = $("#MedicalVisitOutcomeId").find("option:selected:not(:contains('-- Select --'))").text()

                    var notes = $("#VisitNotes").text()

                    console.log(datetime)
                    console.log(name)
                    console.log(reason)
                    console.log(assessment)
                    console.log(intervention)
                    console.log(notes)

                    var mailtoLink = "mailto:"+emailString

                    var body = 'Medical Visit Recorded: '+datetime+'\n'+
                        'Student: '+name+'\n'+
                        'Reason: '+reason+'\n\n'+
                        'Assessment:\n'+assessment+'\n\n'+
                        'Intervention:\n'+intervention+'\n\n'+
                        'Outcome:\n'+outcome+'\n\n'
                    if (notes.length > 0)
                        body += 'Notes:\n'+notes;

                    body += '\n\n'

                    mailtoLink += '?subject='+subject
                    mailtoLink += '&body='+encodeURIComponent(body)

                    document.location.href = mailtoLink
                }
            }, 500);
        } else
        {
            // New visit
            $(".vertical-align-top:contains('(Email)')").each(function() {
                emails.push($(this).text().substring(0,$(this).text().indexOf(" (Email)")))
            });
            var emailString = emails.join(";")

            var datetime = $("#Date").val() + " " + $("#TimeIn").val()
            var name = $(".token-input-token:first-child").text().substring(0,$(".token-input-token:first-child").text().indexOf(" '"))
            var reason = $("#ReasonList").find("option:selected:not(:contains('-- Select --'))").text()
            if ($.isArray(reason))
                reason = reason.join(" / ")
            var assessment = $("#Assessment").val()
            var intervention = $("#Intervention").val()
            var outcome = $("#MedicalVisitOutcome").find("option:selected:not(:contains('-- Select --'))").text()
            var notes = $("#Notes").text()

            var mailtoLink = "mailto:"+emailString

            var body = 'Medical Visit Recorded: '+datetime+'\n'+
                'Student: '+name+'\n'+
                'Reason: '+reason+'\n\n'+
                'Assessment:\n'+assessment+'\n\n'+
                'Intervention:\n'+intervention+'\n\n'+
                'Outcome:\n'+outcome+'\n\n'
            if (notes.length > 0)
                body += 'Notes:\n'+notes;

            body += '\n\n'

            mailtoLink += '?subject='+subject
            mailtoLink += '&body='+encodeURIComponent(body)

            document.location.href = mailtoLink
        }
    });
}

function SaveParentEmails()
{
    console.log("Function: " + arguments.callee.name)
    if (localStorage.getItem("SaveParentEmailsActive") == 1)
    {
        setTimeout(function() {
            var emails = []
            console.log($("div:contains('Parental Access')").closest("tr").find("[href^='mailto']").length)
            $("div:contains('Parental Access')").closest("tr").find("[href^='mailto']").each(function() {
                emails.push($(this).text())
            })
            var emailString = emails.join(";")
            localStorage.setItem("SaveParentEmailsString", emailString)
            localStorage.setItem("SaveParentEmailsActive", 0)
            window.close()
        }, 1000)
    }
}

// -----------------------------------------[INDEX047]-------------------------------------
// -------------------------------------------Dialer---------------------------------------
// ----------------------------------------------------------------------------------------

function LoadDialer()
{
    console.log("Function: " + arguments.callee.name)
    $(":not(:has(*)):not(.phone-link):not(#dialer-number)").each(function() {
        var rxNumber = $(this).text().match(/(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})/)
        if ($(this).text().length < 35 && rxNumber)
        {
            $(this).addClass("phone-link")
            $(this).css("color","#007ca6")
            $(this).css("text-decoration","underline")
            $(this).css("cursor","pointer")
        }
    });
    waitForKeyElements("#on-mod-suite-footer", InsertDialerInterface)

    $(".phone-link").unbind().bind("click", function() {
        ShowDialer(this)
    });
}

function ShowDialer(elm)
{
    var ext = localStorage.getItem("DialerExt")
    $("#dialer-ext").val(ext)
    $("#dialer-number").text(GetCleanPhoneNumber($(elm).text().match(/(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{3}[-\.\s]??\d{4})/)[0]))
    $("#dialer-container").show()
    $("#dialer-container").position({
        my: "top",
        at: "bottom",
        of: elm
    })
    $("#dialer-call").text("Call").prop("disabled", false);
}

function InsertDialerInterface()
{
    if ($("#dialer-container").length == 0)
    {
        $("#on-mod-suite-footer").after('<div id="dialer-container" style="display:none; border-style: ridge;border-radius: 16px;border: 1px solid;background-color: #E3F2FD;height: 150px;width: 150px;font-size: smaller;padding: 8px;"><div id="dialer-heading" style="display: flex;justify-content: center;font-weight: bold;padding-bottom: 6px;"><span>Dialer</span><div class="help-icon" style="font-size: inherit;position: absolute;right: 6px;display: flex;justify-content: center;align-items: center;font-family: sans-serif;font-weight: 700;width: 2.5ex;height: 2.5ex;font-size: 12px;border-radius: 100%;box-sizing: content-box;cursor: default;" title="Phone system will dial your extension first. After you pick up, the destination number will be dialed automatically.">?</div></div>Ext: <input type="number" min="100" max="999" id="dialer-ext" style="width:60px;"><br><div id="dialer-remember-container"><input type="checkbox" id="dialer-remember"><label for="dialer-remember">Remember</label></div>to call: <span id="dialer-number" style="font-weight: bold;"></span><br><div id="dialer-buttons" style="display: flex;justify-content: space-evenly;padding-top: 8px;"><button id="dialer-call">Call</button><button id="dialer-cancel">Cancel</button></div></div>')

        $("#dialer-call").bind("click", function() {
            $("#dialer-call").text("Calling...").prop("disabled", true);
            var ext = $("#dialer-ext").val()
            if (ext != "")
            {
                DialerCall(ext, $("#dialer-number").text())
            }

            if ($("#dialer-remember").is(":checked"))
            {
                localStorage.setItem("DialerExt", ext)
            }
        })

        $("#dialer-cancel").unbind().bind("click", function() {
            $("#dialer-container").hide();
        });
    }
}

function DialerCall(ext, number)
{
    if (localStorage.getItem("dialer-url") == undefined)
    {
        window.open("https://hanalani.myschoolapp.com/app/faculty#resourceboarddetail/"+settingsResourceBoardID);
        return;
    }
    var url = localStorage.getItem("dialer-url")+'&ext='+ext+'&number='+number+'&callerid=ONModSuite'
    GM.xmlHttpRequest({
        method: "GET",
        url: url,
        onreadystatechange: function(response) {
            if (response.readyState == 4)
            {
                if (response.status == 200)
                {
                    if (this.responseText == "Success")
                    {
                        toastr.success("Call initiated successfully")
                        $("#dialer-call").text("Call").prop("disabled", false)
                        $("#dialer-container").hide(2000)
                        return;
                    }
                }
                toastr.error("Dialer error")
                $("#dialer-call").text("Call").prop("disabled", false)
            }
        }
    })
}

function DialerInterval()
{
    setTimeout(function() {
        LoadDialer()
        setTimeout(LoadDialer, 5000)
    }, 5000);
}

function GetCleanPhoneNumber(number)
{
    var cleaned = number;

    // Remove extension
    cleaned = cleaned.replace(/x(.*)/g, "");

    // Remove non-numeric characters
    cleaned = cleaned.replace(/\D+/g, "");

    // Remove leading 1
    if (cleaned.substr(0,1) == "1")
    {
        cleaned = cleaned.substring(1);
    }

    // If 7-digit, add area code
    if (cleaned.length == 7)
    {
        cleaned = "808"+cleaned
    }

    if (cleaned.length == 10)
    {
        return cleaned;
    } else
    {
        // Not 10 digits, invalid
        return "";
    }
}

// -----------------------------------------[INDEX048]-------------------------------------
// ---------------------------------------Grade History------------------------------------
// ----------------------------------------------------------------------------------------

function GradeHistory(jNode)
{
    console.log("Function: " + arguments.callee.name)

    $("#header").find(".ddlb-container").prepend('<button id="load-past-grades" class="btn btn-default" style="float:right;">Load Past Grades</button>')

    $("#load-past-grades").unbind().bind("click", LoadGradeHistory)
}

function LoadGradeHistory()
{
    console.log("Function: " + arguments.callee.name)

    var selectedClass = $("#header").find(".active").find("a")
    var groupID = selectedClass.attr("href").substring(selectedClass.attr("href").indexOf("|")+1)
    $("#load-past-grades").text("Loading...").prop("disabled", true)

    if (selectedClass.text().substring(0,9) == "K5 Skills" || selectedClass.text().substring(0,19) == "Character & Conduct")
    {
        // Assessment format
        if (sessionStorage.getItem("grade-history-group-id") == groupID)
        {
            // Cached
            LoadStudentAssessmentGrades()
        } else
        {
            if (selectedClass.text().substring(0,2) == "K5")
            {
                GetGradeHistory(groupID, "K5")
            } else
            {
                GetGradeHistory(groupID, "CC")
            }
        }

    } else
    {
        // Standard format
        if (sessionStorage.getItem("grade-history-group-id") == groupID)
        {
            LoadStandardGrades()
        } else
        {
            GetGradeHistory(groupID, "ST")
        }
    }
}

function LoadStudentAssessmentGrades()
{
    if ($(".StudentList").find(".active").attr("id") != undefined)
    {
        var studentID = $(".StudentList").find(".active").attr("id")
        var data = JSON.parse(sessionStorage.getItem("grade-history-data"))
        var gradePlan = $("#gpddlb option:selected").text()
        var currentQuarter = gradePlan.substr(gradePlan.indexOf(" - ")+4,1)
        var headersAdded = false;
        $(".grade-history").remove()

        $("#AssesmentGrades").find("tr").each(function() {
            if ($(this).find(".assessment-type-description").length && !$(this).text().includes("Comment"))
            {
                // Category header - add row below with marking column headings
                var html = '<tr class="gr-field grade-history"><td></td>'
                for (var i = 1; i <= currentQuarter; i++)
                {
                    html += '<td style="width:27px;text-align:center;">Q'+i+'</td>'
                }
                html += '</tr>'
                $(this).after(html)
                headersAdded = true;
            } else if ($(this).find(".assessment-grade[data-category-use!='c']").length)
            {
                // Grade
                var gradeDesc = $(this).find("td:first").text().trim()
                if (gradeDesc.substr(0,1) == "*")
                    gradeDesc = gradeDesc.substr(1)

                for (var i = 1; i < currentQuarter; i++)
                {
                    $(this).children("td:first").after('<td class="grade-history grade-cell" style="text-align:center;border:1px dashed black;">'+GetAssessmentGrade(data,studentID,gradeDesc,i)+'</td>')
                }
            }
        });

        if (!headersAdded)
        {
            var html = '<tr class="gr-field grade-history"><td></td>'
            for (var i = 1; i <= currentQuarter; i++)
            {
                html += '<td style="width:25px;text-align:center;">Q'+i+'</td>'
            }
            html += '</tr>'
            $("#AssesmentGrades").find("tbody").prepend(html);
        }
    }

    $("#load-past-grades").text("Load Past Grades").prop("disabled", false)
}

function GetAssessmentGrade(data,studentID,gradeDesc,quarter)
{
    var list = data["q"+quarter]
    for (var i = 0; i < list.length; i++)
    {
        if (list[i][1] == studentID && list[i][2].trim() == gradeDesc)
        {
            return list[i][3];
        }
    }
    return "";
}

function GetStandardGrade(data,studentID,quarter)
{
    for (var i = 0; i < data.length; i++)
    {
        if (data[i][1] == studentID && data[i][2] == "Q"+quarter)
        {
            switch (data[i][4].substr(0,1))
            {
                case "S":
                case "N":
                case "U":
                    return data[i][4];
                default:
                    return data[i][3];
            }
        }
    }
}

function LoadStandardGrades()
{
    var data = JSON.parse(sessionStorage.getItem("grade-history-data"))
    var gradePlan = $("#gpddlb option:selected").text()
    var currentQuarter = gradePlan.substr(gradePlan.indexOf(" - ")+4,1)
    $(".grade-history").remove()

    // Headers
    var html = "";
    for (var i = 1; i < currentQuarter; i++)
    {
        html += '<td class="bold grade-history" style="vertical-align:bottom;text-align:center;">Q'+i+'</td>'
    }
    $("table tr:first td:first").after(html)

    // Students
    $("table").find("tr").each(function() {
        var rowLabel = $(this).find("td").eq(0)
        if (rowLabel.hasClass("student"))
        {
            var studentID = rowLabel.data("student-id")
            for (var i = 1; i < currentQuarter; i++)
            {
                rowLabel.after('<td class="grade-history" style="vertical-align:middle;text-align:center;">'+GetStandardGrade(data,studentID,i)+'</td>')
            }
        }
    });

    $("#load-past-grades").text("Load Past Grades").prop("disabled", false)
}

function GetGradeHistory(groupID, type)
{
    var url = localStorage.getItem("grade-history-url")+"&groupID="+groupID+"&type="+type

    GM.xmlHttpRequest({
        method: "GET",
        url: url,
        onreadystatechange: function(response) {
            if (response.readyState == 4)
            {
                if (response.status == 200)
                {
                    if (this.responseText.substring(0,6) == "Failed")
                    {
                        toastr.error(this.responseText)
                    } else
                    {
                        sessionStorage.setItem("grade-history-data", this.responseText)
                        sessionStorage.setItem("grade-history-group-id", groupID)
                        if (type == "ST")
                        {
                            LoadStandardGrades()
                        } else
                        {
                            LoadStudentAssessmentGrades()
                        }
                        return;
                    }
                } else
                {
                    toastr.error("Error loading past grades")
                }

                $("#load-past-grades").text("Load Past Grades").prop("disabled", false)
            }
        }
    })
}

// -----------------------------------------[INDEX049]-------------------------------------
// -------------------------------------Financial Aid Misc---------------------------------
// ----------------------------------------------------------------------------------------

function FinancialAidFormsDate()
{
    console.log("Function: " + arguments.callee.name);

    $("#paperwork").unbind().bind("change", function() {
        if ($("#paperwork").is(":checked"))
        {
            $("#PaperworkDate").val(moment().format("M/D/YYYY"));
            var event = document.createEvent("Event")
            event.initEvent("change", true, false)
            $("#PaperworkDate")[0].dispatchEvent(event)
        }
    });
}

// -----------------------------------------[INDEX050]-------------------------------------
// ---------------------------------------EMS Process Age----------------------------------
// ----------------------------------------------------------------------------------------

function AddAgeApplication(jNode)
{
    console.log("Function: " + arguments.callee.name);
    var age = calcAge(moment(jNode.children("strong").text()));
    jNode.children("strong").append(' ('+age+')');
}

// -----------------------------------------[INDEX051]-------------------------------------
// ------------------------------------Needs Checklist Sort--------------------------------
// ----------------------------------------------------------------------------------------

function SortNeedsChecklistWait(jNode)
{
    console.log("Function: " + arguments.callee.name);

    setTimeout(SortNeedsChecklist, 1000);
}

function SortNeedsChecklist()
{
    console.log("Function: " + arguments.callee.name);

    $(".process-sidebar-item").sort(function (a,b) {
        var aDate = moment($(a).children("div").eq(0).text(), "M/D/YYYY");
        var bDate = moment($(b).children("div").eq(0).text(), "M/D/YYYY");
        return moment(aDate).isSameOrBefore(bDate) ? 1 : -1;
    }).appendTo(".process-sidebar-content");

   $(".process-sidebar-content").children(".divider").remove();
   $(".process-sidebar-content").prepend('<hr class="divider">');
   $(".process-sidebar-item").after('<hr class="divider">');
}

// -----------------------------------------[INDEX052]-------------------------------------
// ----------------------------------Gradebook Highlight Row-------------------------------
// ----------------------------------------------------------------------------------------

function GradebookHighlightRow()
{
    console.log("Function: " + arguments.callee.name);

    if (localStorage.getItem("GradebookHighlightRow") == "True")
    {
        // Configuration for the MutationObserver
        const observerConfig = {
            attributes: true,
            attributeFilter: ['class'],
            subtree: true,
        };

        // Select the specific set of td elements within tr elements you want to observe
        const elementsToObserve = $('.gradebook-student-cell');

        // Create a new MutationObserver instance
        const observer = new MutationObserver(handleClassChange);

        // Start observing the elements for class changes
        elementsToObserve.each(function () {
            observer.observe(this, observerConfig);
        });
    }
}

// Helper function to check if an element has a specific class
function hasClass(element, className) {
  return element.classList.contains(className);
}

// Function to handle the class change event
function handleClassChange(mutationsList, observer) {
  mutationsList.forEach(mutation => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const targetElement = mutation.target;
      if (hasClass(targetElement, 'gradebook-active-student-assignment')) {
        // Get the index of the corresponding row in the original table
        const rowIndex = $(targetElement).closest('tr').index();

        // Get the corresponding row in the different table
        const correspondingRow = $('.gradebook-grid tr').eq(rowIndex);

          $(".onmodsuite-gradebook-highlight-row").removeClass("onmodsuite-gradebook-highlight-row gradebook-active-student-assignment");
          $(correspondingRow).children("td").addClass("onmodsuite-gradebook-highlight-row gradebook-active-student-assignment");
      }
    }
  });
}

// -----------------------------------------[INDEX053]-------------------------------------
// ------------------------------Course Request List Parent Emails-------------------------
// ----------------------------------------------------------------------------------------
var lastPayload = "";
function CourseRequestListParentEmails(jNode)
{
    console.log("Function: " + arguments.callee.name);
    if (!$("#on-mod-suite-parent-emails").length)
    {
        jNode.after('<a class="btn bb-btn-secondary" id="on-mod-suite-parent-emails" style="width:auto;">&#x2709;&nbsp;Get Parent Emails</a>');
        $("#on-mod-suite-parent-emails").bind("click", GetCourseRequestParentEmails);
    }
}

function GetCourseRequestParentEmails()
{
    console.log("Function: " + arguments.callee.name);
    $("#on-mod-suite-parent-emails").prop("disabled",true);
    $("#on-mod-suite-parent-emails-data").remove();
    toastr.success("Getting parent emails... Please wait...");

    (function() {
        var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
            var payload;

            var origSend = this.send;
            this.send = function() {
                payload = JSON.parse(arguments[0]);
                payload.PageSize = 9999;
                arguments[0] = JSON.stringify(payload);
                origSend.apply(this, arguments);
                this.send = origSend;
            };

            this.addEventListener('load', function() {
                ProcessStudentListForParentEmails(JSON.parse(this.responseText), $("#__AjaxAntiForgery input").val());
                XMLHttpRequest.prototype.open = origOpen;
            });

            origOpen.apply(this, arguments);
        };
    })();

    var event = document.createEvent("Event")
    event.initEvent("click", true, false)
    $(".list-refresh-link")[0].dispatchEvent(event)
}

function ProcessStudentListForParentEmails(students, token)
{
    console.log("Function: " + arguments.callee.name);

    try
    {
        var emails = [];
        GetParentEmail(0);

        function GetParentEmail(index)
        {
            if (index >= students.Results.length)
            {
                CopyParentEmailsToClipboard();
                return;
            }

            var studentID = students.Results[index].StudentId;
            $("#on-mod-suite-parent-emails").text("Copy Parent Emails (student "+(+index+1)+"of"+students.Results.length+")");

            GM.xmlHttpRequest({
                method: "GET",
                url: schoolURL+"api/datadirect/studentrelationshipsget/"+studentID+"/?format=json",
                headers: {
                    "Content-Type": "application/json",
                    "requestverificationtoken": token
                },
                onload: function(response) {
                    var parentEmails = JSON.parse(response.responseText);
                    for (var i = 0; i < parentEmails.length; i++)
                    {
                        emails.push(parentEmails[i].email);
                    }

                    // Make the next request
                    GetParentEmail(index + 1);
                }
            });
        }

        function CopyParentEmailsToClipboard()
        {
            var uniqueEmails = [...new Set(emails)];
            var emailString = uniqueEmails.join(";");
            GM_setClipboard(emailString, "text");
            toastr.success(uniqueEmails.length+" parent email(s) copied to clipboard.");
            $("#on-mod-suite-parent-emails").prop("disabled",false);
            $("#on-mod-suite-parent-emails").html("&#x2709;&nbsp;Get Parent Emails");

            if (!$("#on-mod-suite-parent-emails-data").length)
                $("#on-mod-suite-parent-emails").after('<a class="btn bb-btn-secondary" id="on-mod-suite-parent-emails-data" style="width:auto;">&#x1F4CB;</a>');

            var dataEl = $("#on-mod-suite-parent-emails-data");

            dataEl.attr("title",emails.length+" emails grabbed. Click to copy to clipboard again");
            dataEl.data("emails", emailString);
            dataEl.bind("click", function() {
                GM_setClipboard($(this).data("emails"), "text");
            });
        }
    } catch(e)
    {
        console.log(e);
        toastr.error("Error: "+e.message);
    }
}

// -----------------------------------------[INDEX054]-------------------------------------
// -----------------------------------Facilities Request Form------------------------------
// ----------------------------------------------------------------------------------------

function FacilitiesRequestForm(jNode)
{
    console.log("Function: " + arguments.callee.name);
    if (!$("#facilities-request-form").length)
    {
        var link = localStorage.getItem("facilities-request-form-link");
        if (link != null)
        {
            jNode.after('<span id="facilities-request-form" style="padding-left:4px;"><a title="Facilities Request Form" target="_blank" href="'+link+'">&#128221;</a></span>');
            GetEmailAddress();
        }
    }

    function GetEmailAddress()
    {
        console.log("Function: " + arguments.callee.name);
        GM.xmlHttpRequest({
            method: "GET",
            url: schoolURL+"api/webapp/context",
            headers: {
                "Content-Type": "application/json"
            },
            onload: function(response) {
                try
                {
                    var data = JSON.parse(response.responseText);
                    var name = data.MasterUserInfo.FirstName+" "+data.MasterUserInfo.LastName;
                    var link = localStorage.getItem("facilities-request-form-link")+"?usp=pp_url&entry.417340921="+encodeURIComponent(name);
                    $("#facilities-request-form > a").attr("href", link);
                } catch (e)
                {
                    console.log(e);
                }

            }
        });
    }
}

// -----------------------------------------[INDEX055]-------------------------------------
// ----------------------------------Print Student Assessment------------------------------
// ----------------------------------------------------------------------------------------

function PrintStudentAssessment(jNode)
{
    console.log("Function: " + arguments.callee.name);
    if (!$("#oms-print-student-assessment").length)
    {
        $(".user-details").children("div:last").append('<div id="oms-print-student-assessment" style="cursor:pointer; font-size:larger; width:17px;">&#9113;</div>');

        $("#oms-print-student-assessment").bind("click", function() {
            // Function to grab all styles
            function grabAllStyles() {
                let styleTags = document.querySelectorAll('style, link[rel="stylesheet"]');
                let styles = '';
                styleTags.forEach((tag) => {
                    styles += tag.outerHTML;
                });
                return styles;
            }

            // Collect all styles from the original document
            let allStyles = grabAllStyles();

            // Print the div using printThis
            $('.evaluation-student').printThis({
                importStyle: true, // Existing settings
                header: allStyles,  // Insert the styles here
            });
        });
    }
}

// -----------------------------------------[INDEX056]-------------------------------------
// ---------------------------Process Event Registrations User Links-----------------------
// ----------------------------------------------------------------------------------------

function ProcessEventRegistrationsUserLinksMenu(jNode)
{
    console.log("Function: " + arguments.callee.name);

    if ($("#openin-menu").length)
        return;

    var pages = [
        "Core->Access",
        "Core->Enrollment",
        "Core->Settings",
        "Core->Files and Forms",
        "Core->Contact Card",
        "Academics->Progress",
        "Academics->Performance",
        "Academics->Official Notes",
        "Academics->Conduct",
        "Academics->Schedule",
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

    // Get saved value from local storage or use default value
    var savedValue = localStorage.getItem("EventRegistrationIDLinkPage") || "Enrollment Management->Contact Card";

    // Create a dropdown element
    var dropdown = $('<select id="openin-menu"></select>');

    // Populate dropdown with options based on the pages array
    for (var i = 0; i < pages.length; i++) {
        var option = $('<option></option>');
        option.val(pages[i]);
        option.text(pages[i]);
        dropdown.append(option);
    }

    // Function to update the text of the selected option
    function updateSelectedOptionText() {
        var selectedValue = dropdown.val();
        dropdown.find('option').each(function() {
            $(this).text($(this).val());
        });
        dropdown.find('option:selected').text("Open ID Links in " + selectedValue);
    }

    // Set the dropdown's value to the saved or default value
    dropdown.val(savedValue);
    updateSelectedOptionText();

    // Add event listener for value change
    dropdown.on('change', function() {
        var selectedValue = $(this).val();

        // Save to local storage
        localStorage.setItem("EventRegistrationIDLinkPage", selectedValue);

        // Update the text of the selected option
        updateSelectedOptionText();

        var existingLink = $(".sky-row:contains(UserId)").find("a");
        if (existingLink.length)
        {
            existingLink.each(function() {
                $(this).closest("sky-column").html(GetUserLink($(this).text(), selectedValue, true));
            });
        }

    });

    // Append dropdown to the target element
    $(".sky-toolbar-items > sky-toolbar-item:last").after(dropdown);

}

function ProcessEventRegistrationsUserLinks(jNode)
{
    console.log("Function: " + arguments.callee.name);

    var savedSetting = localStorage.getItem("EventRegistrationIDLinkPage");
    if (savedSetting == null)
        savedSetting = "Enrollment Management->Contact Card";


    var idNode = $(jNode).children("sky-column:last");
    if (idNode.html().length < 10)
    {
        idNode.html(GetUserLink(idNode.text(), savedSetting, true));
    }
}

// -----------------------------------------[INDEX057]-------------------------------------
// ----------------------------------------Injury Report-----------------------------------
// ----------------------------------------------------------------------------------------

function InjuryReportInit(jNode)
{
    console.log("Function: " + arguments.callee.name);
    waitForKeyElements(".comment-types-detail>.control-group", InjuryReportCreateFields, true);
}

function InjuryReportCreateFields(jNode)
{
    console.log("Function: " + arguments.callee.name);
    if ($("#comment-type").val() == "7379")
    {
        // Define the HTML structure for the input controls
        var formControls = `
        <div class="incident-report-controls"><br>
    <label class="control-label">Time: <input type="text" id="time" value="${new Date().toLocaleTimeString()}"></label><br>
    <label class="control-label">Location:
        <select id="location">
            <option value="Classroom">Classroom</option>
            <option value="Field">Field</option>
            <option value="Park">Park</option>
            <option value="Playground">Playground</option>
            <option value="Other">Other</option>
        </select>
    </label>
    <input type="text" id="location-other" placeholder="Specify other location" style="display:none;"><br><br>
    <label class="control-label">Describe what caused the incident and how it happened -- BE SPECIFIC, do not name other students involved:<br>
        <textarea id="incident-description" style="width:480px; height:120px;"></textarea>
    </label><br><br>
    <div class="control-label">Type of Injury:</div>
    <div id="injury-group">
        <label class="control-label"><input type="checkbox" name="injury" value="Bruise"> Bruise</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Broken Bone"> Broken Bone</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Cut"> Cut</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Eye Injury"> Eye Injury</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Head Injury"> Head Injury</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Nose Bleed"> Nose Bleed</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Scratch"> Scratch</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Splinter"> Splinter</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Sting"> Sting</label><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Other"> Other</label>
        <input type="text" id="injury-other" placeholder="Specify other injury" style="display:none;"><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Allergic Reaction"> Allergic Reaction</label>
        <input type="text" id="injury-allergic-reaction" placeholder="Specify allergic reaction" style="display:none;"><br>
        <label class="control-label"><input type="checkbox" name="injury" value="Equipment Injury"> Equipment Injury</label>
        <input type="text" id="injury-equipment-injury" placeholder="Specify equipment injury" style="display:none;"><br>
    </div><br>
    <div class="control-label">What type of treatment was provided?</div>
    <div id="treatment-group">
        <label class="control-label"><input type="checkbox" name="treatment" value="Band-aid"> Band-aid</label><br>
        <label class="control-label"><input type="checkbox" name="treatment" value="Ice Pack"> Ice Pack</label><br>
        <label class="control-label"><input type="checkbox" name="treatment" value="Sent to the nurse"> Sent to the nurse</label><br>
        <label class="control-label"><input type="checkbox" name="treatment" value="Wash with soap and water"> Wash with soap and water</label><br>
        <label class="control-label"><input type="checkbox" name="treatment" value="Other"> Other</label>
        <input type="text" id="treatment-other" placeholder="Specify other treatment" style="display:none;"><br>
    </div><br>
    <div class="control-label">Who witnessed the injury?</div>
    <div id="witness-group">
        <label class="control-label"><input type="checkbox" name="witness" value="Teacher"> Teacher</label>
        <input type="text" id="witness-teacher" placeholder="Specify teacher" style="display:none;"><br>
        <label class="control-label"><input type="checkbox" name="witness" value="Chaperone"> Chaperone</label>
        <input type="text" id="witness-chaperone" placeholder="Specify chaperone" style="display:none;"><br>
        <label class="control-label"><input type="checkbox" name="witness" value="Other"> Other</label>
        <input type="text" id="witness-other" placeholder="Specify other witness" style="display:none;"><br>
    </div><br>
    <div class="control-label">Notified Parent/Guardian:</div>
    <div id="notified-group">
        <label class="control-label"><input type="checkbox" name="notified" value="Phone call"> Phone call</label><br>
        <label class="control-label"><input type="checkbox" name="notified" value="Note"> Note</label><br>
        <label class="control-label"><input type="checkbox" name="notified" value="Sent to the nurse"> Sent to the nurse</label><br>
        <label class="control-label"><input type="checkbox" name="notified" value="None"> None</label><br>
    </div><br>
    <label class="control-label">Injury Details:<br>
        <textarea id="intentional-injury-details" style="width:480px; height:120px;"></textarea>
    </label><br>
    <button id="insert-button">Insert Summary Below</button><br><hr>
</div>`;

        // Append the form controls to the specified container
        $('.comment-types-detail').next('.form-group').prepend(formControls);

        // Add event listeners for dynamic input displays
        $('#location').change(function() {
            if ($(this).val() === 'Other') {
                $('#location-other').show();
            } else {
                $('#location-other').hide();
            }
        });

        $('input[name="injury"]').change(function() {
            if ($(this).val() === 'Other' && $(this).is(':checked')) {
                $('#injury-other').show();
            } else if ($(this).val() === 'Allergic Reaction' && $(this).is(':checked')) {
                $('#injury-allergic-reaction').show();
            } else if ($(this).val() === 'Equipment Injury' && $(this).is(':checked')) {
                $('#injury-equipment-injury').show();
            } else {
                if ($(this).val() === 'Other') $('#injury-other').hide();
                if ($(this).val() === 'Allergic Reaction') $('#injury-allergic-reaction').hide();
                if ($(this).val() === 'Equipment Injury') $('#injury-equipment-injury').hide();
            }
        });

        $('input[name="treatment"]').change(function() {
            if ($(this).val() === 'Other' && $(this).is(':checked')) {
                $('#treatment-other').show();
            } else {
                if ($(this).val() === 'Other') $('#treatment-other').hide();
            }
        });

        $('input[name="witness"]').change(function() {
            if ($(this).val() === 'Student' && $(this).is(':checked')) {
                $('#witness-student').show();
            } else if ($(this).val() === 'Teacher' && $(this).is(':checked')) {
                $('#witness-teacher').show();
            } else if ($(this).val() === 'Chaperone' && $(this).is(':checked')) {
                $('#witness-chaperone').show();
            } else if ($(this).val() === 'Other' && $(this).is(':checked')) {
                $('#witness-other').show();
            } else {
                if ($(this).val() === 'Student') $('#witness-student').hide();
                if ($(this).val() === 'Teacher') $('#witness-teacher').hide();
                if ($(this).val() === 'Chaperone') $('#witness-chaperone').hide();
                if ($(this).val() === 'Other') $('#witness-other').hide();
            }
        });

        // Handle the insert button click event
        $('#insert-button').click(function(event) {
            event.preventDefault();

            // Reset previous validation styles
            $('.incident-report-controls input, .incident-report-controls textarea, .incident-report-controls select').css('border', '');
            $('#injury-group, #treatment-group, #witness-group, #notified-group').css('border', '');

            var isValid = true;
            var firstInvalidElement = null;

            // Validate required fields
            function validateField(selector, condition) {
                if (!condition) {
                    $(selector).css('border', '2px solid red');
                    if (isValid) {
                        firstInvalidElement = $(selector);
                        isValid = false;
                    }
                }
            }

            // Check for required text inputs based on checkboxes
            $('input[name="injury"]:checked').each(function() {
                var injuryValue = $(this).val();
                if (injuryValue === 'Other' || injuryValue === 'Allergic Reaction' || injuryValue === 'Equipment Injury') {
                    validateField('#injury-' + injuryValue.toLowerCase().replace(' ', '-'), $('#injury-' + injuryValue.toLowerCase().replace(' ', '-')).val().trim() !== '');
                }
            });

            $('input[name="treatment"]:checked').each(function() {
                var treatmentValue = $(this).val();
                if (treatmentValue === 'Other') {
                    validateField('#treatment-other', $('#treatment-other').val().trim() !== '');
                }
            });

            $('input[name="witness"]:checked').each(function() {
                var witnessValue = $(this).val();
                validateField('#witness-' + witnessValue.toLowerCase(), $('#witness-' + witnessValue.toLowerCase()).val().trim() !== '');
            });

            // Check that at least one checkbox in each group is selected
            validateField('#injury-group', $('input[name="injury"]:checked').length > 0);
            validateField('#treatment-group', $('input[name="treatment"]:checked').length > 0);
            validateField('#witness-group', $('input[name="witness"]:checked').length > 0);
            validateField('#notified-group', $('input[name="notified"]:checked').length > 0);

            // Check non-checkbox fields
            validateField('#time', $('#time').val().trim() !== '');
            validateField('#location', $('#location').val().trim() !== '');
            if ($('#location').val() === 'Other') {
                validateField('#location-other', $('#location-other').val().trim() !== '');
            }
            validateField('#incident-description', $('#incident-description').val().trim() !== '');

            if (!isValid) {
                // Scroll to the first invalid element
                $('.modal-body').animate({
                    scrollTop: $('.modal-body').scrollTop() + firstInvalidElement.offset().top - $('.modal-body').offset().top - 100
                }, 500);
                return;
            }

            var reportText = '';

            var time = $('#time').val();
            var location = $('#location').val() === 'Other' ? $('#location-other').val() : $('#location').val();
            var description = $('#incident-description').val();

            if (time) reportText += '<b>Time:</b> ' + time + '<br>';
            if (location) reportText += '<b>Location:</b> ' + location + '<br>';
            if (description) reportText += '<b>Description:</b> ' + description + '<br>';

            var injuries = '';
            $('input[name="injury"]:checked').each(function() {
                var injuryValue = $(this).val();
                var injuryDetail = '';
                if (injuryValue === 'Other' || injuryValue === 'Allergic Reaction' || injuryValue === 'Equipment Injury') {
                    injuryDetail = $('#injury-' + injuryValue.toLowerCase().replace(' ', '-')).val();
                }
                injuries += injuryDetail ? injuryDetail + ', ' : injuryValue + ', ';
            });
            if (injuries) reportText += '<b>Injuries:</b> ' + injuries.slice(0, -2) + '<br>';

            var treatments = '';
            $('input[name="treatment"]:checked').each(function() {
                var treatmentValue = $(this).val();
                var treatmentDetail = treatmentValue === 'Other' ? $('#treatment-other').val() : '';
                treatments += treatmentDetail ? treatmentDetail + ', ' : treatmentValue + ', ';
            });
            if (treatments) reportText += '<b>Treatments:</b> ' + treatments.slice(0, -2) + '<br>';

            var witnesses = '';
            $('input[name="witness"]:checked').each(function() {
                var witnessValue = $(this).val();
                var witnessDetail = $('#witness-' + witnessValue.toLowerCase()).val();
                witnesses += witnessDetail ? witnessValue + ': ' + witnessDetail + ', ' : witnessValue + ', ';
            });
            if (witnesses) reportText += '<b>Witnesses:</b> ' + witnesses.slice(0, -2) + '<br>';

            var notified = '';
            $('input[name="notified"]:checked').each(function() {
                notified += $(this).val() + ', ';
            });
            if (notified) reportText += '<b>Notification:</b> ' + notified.slice(0, -2) + '<br>';

            var details = $('#intentional-injury-details').val();
            if (details) reportText += '<b>Details:</b> ' + details;

            // Retrieve TinyMCE editor for the comment box
            let editor = tinymce.get('comment-text');
            editor.setContent(reportText);
        });

    }
}

// -----------------------------------------[INDEX900]-------------------------------------
// -----------------------------------Misc. Helper Functions-------------------------------
// ----------------------------------------------------------------------------------------

// Change element type, taken from https://stackoverflow.com/questions/8584098/how-to-change-an-element-type-using-jquery
(function($) {
    $.fn.changeElementType = function(newType) {
        var attrs = {};

        $.each(this[0].attributes, function(idx, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        this.replaceWith(function() {
            return $("<" + newType + "/>", attrs).append($(this).contents());
        });
    };
})(jQuery);

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

// ----------------------------------------------------------------------------------------
// https://stackoverflow.com/questions/52678602/calculate-age-using-momentjs-and-get-different-output-strings

const pluralize = (str, n) => n > 1 ? `${n} ${str.concat('s')}` : n == 0 ? '' :`${n} ${str}`

const calcAge = (dob) => {
  const age = moment.duration(moment().diff(moment(dob)))
  const ageInYears = Math.floor(age.asYears())
  const ageInMonths = Math.floor(age.asMonths())
  const ageInDays = Math.floor(age.asDays())

  if (age < 0)
    throw 'DOB is in the future!'

  let pluralYears = pluralize('year', ageInYears)
  let pluralDays = pluralize('day', age.days())

  if (ageInYears < 18) {
    if (ageInYears >= 1) {
      return (`${pluralYears} ${pluralize('month', age.months())}`).trim();
    } else if (ageInYears < 1 && ageInMonths >= 1) {
      return (`${pluralize('month', ageInMonths)} ${pluralDays}`).trim();
    } else {
      return pluralDays.trim();
    }
  } else {
    return pluralYears.trim();
  }

}
