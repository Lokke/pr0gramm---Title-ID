// ==UserScript==
// @name        pr0gramm-Title ID
// @namespace   pr0gramm-Title ID
// @description Zeigt die aktuelle Post-ID im Title
// @match        https://pr0gramm.com/*
// @match        http://pr0gramm.com/*
// @updateURL    https://raw.githubusercontent.com/Lokke/pr0gramm---Title-ID/master/pr0gramm_-_Title_ID.user.js
// @downloadURL  https://raw.githubusercontent.com/Lokke/pr0gramm---Title-ID/master/pr0gramm_-_Title_ID.user.js
// @version     1.0
// @grant       none
// ==/UserScript==
'use strict';
(function() {
    var old = p.currentView.showItem;
    p.currentView.showItem = function($item, scrollTo) {
        var res = old.apply(p.currentView, [$item, scrollTo]);
        changeTitle(this.currentItemId);
        return res;
    }

    function changeTitle(id) {
        document.title = id !== null ? id + ' — pr0gramm.com' : 'pr0gramm.com';
    }
})();
