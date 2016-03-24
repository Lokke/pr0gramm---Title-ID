// ==UserScript==
// @name        pr0gramm - Title ID
// @namespace   pr0gramm - Title ID
// @description zeigt die aktuelle Post-ID im Title
// @match        https://pr0gramm.com/*
// @match        http://pr0gramm.com/*
// @updateURL    https://raw.githubusercontent.com/Lokke/pr0gramm---Title-ID/master/pr0gramm_-_Title_ID.user.js
// @downloadURL  https://raw.githubusercontent.com/Lokke/pr0gramm---Title-ID/master/pr0gramm_-_Title_ID.user.js
// @version     0.02
// @grant       none
// ==/UserScript==
'use strict';

// generic change listener
var addChangeListener = (function(){
	var interval, listeners = [];
	function changeChecker(){
		listeners.forEach(function(listener){
			try{
				var value = listener.checkFn();
				if(value !== listener.oldValue){
					listener.oldValue = value;
					listener.callback(value);
				}
			}catch(e){
                    // Well, lets ignore that
                }
            });
	}
	return function(checkFn, callback){
		if(typeof(checkFn) !== 'function' || typeof(callback) !== 'function'){
			throw new Error('checkFunction and callback need to be functions');
		}
		listeners.push({
			checkFn: checkFn,
			callback: callback,
			oldValue: undefined
		});
		if(!interval){
			interval = setInterval(changeChecker, 250);
		}
	};
})();


addChangeListener(getPostID, changeTitle);

function getPostID(){
	return p.currentView.currentItemId;
}

function changeTitle(id){
	document.title = id ? id + ' - pr0gramm.com' : 'pr0gramm.com';
}