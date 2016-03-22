// ==UserScript==
// @name        pr0gramm - Title ID
// @namespace   pr0gramm - Title ID
// @description zeigt die aktuelle Post-ID im Title
// @include     *pr0gramm.com*
// @version     0.01
// @grant       none
// ==/UserScript==
document.title = "pr0"+document.location.href.substring( document.URL.lastIndexOf( '/' ) );
