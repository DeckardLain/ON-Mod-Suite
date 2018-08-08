// ==UserScript==
// @name         ON Mod Suite
// @namespace    http://www.hanalani.org/
// @version      0.1
// @description  Collection of mods for Blackbaud ON system
// @author       Scott Yoshimura
// @match        https://hanalani.myschoolapp.com/app/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==


// Completed Mods:
// - User Module Selector
//      Adds links to user pages for quickly switching between module views
// - People Finder Quick Select
//      Hit enter when searching with People Finder to open the first result

// ----------------------------------------------------------------------------------------
// ---------------------------------------Main Section-------------------------------------
// ----------------------------------------------------------------------------------------

// Check for page hashchanges
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
            waitForKeyElements("h1:first", PostLinkAcademics)
            break;
        case "Enrollment Management":
            waitForKeyElements("#CandidateName", PostLinkEnrollmentManagement)
    }

    // People Finder Quick Select
    waitForKeyElements("#people-finder-search-box", PeopleFinderQuickSelect)

}

// ----------------------------------------------------------------------------------------
// -----------------------------------User Module Selector---------------------------------
// ----------------------------------------------------------------------------------------

function PostLinkCore(jNode)
{
    var strURL = window.location.href
    var strLinks = "Open in: "

    strLinks = strLinks.concat(GetLink("Academics", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Enrollment Management", GetID(strURL)));
    jNode.append(strLinks);
}

function PostLinkAcademics(jNode)
{
    var strURL = window.location.href
    var strLinks = "Open in: "

    strLinks = strLinks.concat(GetLink("Core", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Enrollment Management", GetID(strURL)));
    jNode.after(strLinks);
}

function PostLinkEnrollmentManagement(jNode)
{
    var strURL = window.location.href
    var strLinks = "Open in: "

    strLinks = strLinks.concat(GetLink("Core", GetID(strURL)));
    strLinks = strLinks.concat(GetLink("Academics", GetID(strURL)));
    jNode.append(strLinks);
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


function GetModule(strURL)
{

    if (strURL.substring(0, 41).toLowerCase() == "https://hanalani.myschoolapp.com/app/core")
    {
        return "Core";
    } else if (strURL.substring(0, 46) == "https://hanalani.myschoolapp.com/app/academics")
    {
        return "Academics";
    } else if (strURL.substring(0, 58) == "https://hanalani.myschoolapp.com/app/enrollment-management")
    {
        return "Enrollment Management";
    }

    return;
}

// ----------------------------------------------------------------------------------------
// ------------------------------People Finder Quick Select---------------------------------
// ----------------------------------------------------------------------------------------

function PeopleFinderQuickSelect(jNode)
{
    $("#people-finder-search-box").keypress(function (e){
        if(e.keyCode == 13){
            $(".pf-user:first").click();
        }
    })
}

// ----------------------------------------------------------------------------------------
// -----------------------------------Misc. Helper Functions-------------------------------
// ----------------------------------------------------------------------------------------

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}
