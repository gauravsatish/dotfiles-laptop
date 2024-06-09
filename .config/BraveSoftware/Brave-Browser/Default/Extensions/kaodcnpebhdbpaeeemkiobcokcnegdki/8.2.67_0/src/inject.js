!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=24)}({1:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={mainGreen:"#09af00",mainPink:"#b1006a",mainWhite:"#fff",mainPurple:"#9f00b1",grey50:"#FAFAFA",grey100:"#F5F5F5",grey200:"#EEEEEE",grey300:"#E0E0E0",grey400:"#BDBDBD",grey500:"#9E9E9E",grey600:"#757575",grey700:"#616161",grey800:"#424242",grey900:"#212121",pink50:"#FCE4EC",pink100:"#F8BBD0",pink200:"#F48FB1",pink300:"#F06292",pink400:"#EC407A",pink500:"#E91E63",pink600:"#D81B60",pink700:"#C2185B",pink800:"#AD1457",pink900:"#880E4F",pinkA100:"#FF80AB",pinkA200:"#FF4081",pinkA400:"#F50057",pinkA700:"#C51162"}},2:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o})),t.d(n,"f",(function(){return i})),t.d(n,"e",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return l}));var r="GitHub Gloc",o="github-gloc",i=5,a={POPUP:["addToken","github","shortName","indexWorksOnly","indexCountsFrom","indexProjectPage","indexUserPage","indexSearchPage","indexTrandingPage","indexEtc","attentionPlease","translateOurApp"],OPTIONS:["optionsTitle","github","shortName","optionsUlDescription","optionsAccess","optionsLimits","optionsCreateToken"]},c="Stat is unavailable",l="Loading..."},24:function(e,n,t){"use strict";function r(e,n){switch(e){case"i":console.info(i.b+": "+n);break;case"w":console.warn(i.b+": "+n);break;case"e":console.error(i.b+": "+n);break;default:console.info(n)}}t.r(n);var o,i=t(2);function a(e){return"number"==typeof e?function(e){var n=Math.log10(e)/3|0;if(0==n)return""+e;var t=c[n];return""+(e/Math.pow(10,3*n)).toFixed(1)+t}(e):i.c}(n=o=o||{}).DEFAULT="",n.KILO="k",n.MEGA="m",n.GIGA="g",n.TERA="t",n.PETA="p",n.EXA="e";var c=[o.DEFAULT,o.KILO,o.MEGA,o.GIGA,o.TERA,o.PETA,o.EXA];function l(e,n){var t=function(e){return"https://api.github.com/repos"+e+"/stats/code_frequency"}(e);e={method:"GET"};return n&&(e.headers={Authorization:"token "+n}),fetch(t,e)}function u(e){var n;return' <div\n            class=\'box\'\n            style=\'font-size: 0;\n            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";\n            display: inline-flex\';\n        >\n                <span\n                    style=\'\n                        '+(n="\n        padding: 2px 6px;\n        font-size: 12px;\n        font-weight: 500;\n    ")+"\n                        background-color: "+f.a.grey700+";\n                        color: "+f.a.mainWhite+";\n                        border-top-left-radius: "+"4px;\n                        border-bottom-left-radius: "+"4px;\n                    '\n                >\n                    "+chrome.i18n.getMessage("lines")+"\n                </span>\n                <span\n                    class='"+i.a+"'\n                    style='\n                        "+n+"\n                        background-color: "+((n=e)===i.c?f.a.mainPink:n===i.d?f.a.mainPurple:f.a.mainGreen)+";\n                        color: "+f.a.mainWhite+";\n                        border-top-right-radius: "+"4px;\n                        border-bottom-right-radius: "+"4px;\n                    '\n                >\n                    "+e+"\n                </span>\n            </div> "}var s,p=function(e,n,t){return 0===n?Promise.reject("Repo: "+e+"; Too many requests to API !"):l(e,t).then((function(n){return function(e,n,t,r){return new(t=t||Promise)((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):((n=e.value)instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))}(void 0,void 0,void 0,(function(){var r,o,i;return function(e,n){var t,r,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},a={next:c(0),throw:c(1),return:c(2)};return"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,(a=o?[2&a[0],o.value]:a)[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=0<(o=i.trys).length&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(a){switch(a.label){case 0:if(202!==n.status)return[3,5];r=1e3,o=4,a.label=1;case 1:return 0<o?[4,new Promise((function(e){return window.setTimeout(e,r)}))]:[3,4];case 2:return a.sent(),[4,l(e,t)];case 3:return 202!==(i=a.sent()).status?[2,i]:(r*=2,o--,[3,1]);case 4:return[3,6];case 5:if(200===n.status)return[2,n];a.label=6;case 6:return[2,Promise.reject()]}}))}))})).then((function(e){return e.json()})).then((function(n){return function(e){for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}(n)?(console.error("Error by calculating LOC for "+e+". Incoming stat --\x3e",n),null):n.reduce((function(e,n){return e+n[1]+n[2]}),0)})).catch((function(r){void 0!==r?(r.message&&console.error("Error by getting stat for "+e+". Response --\x3e",r),p(e,n-1,t)):console.error("Error by getting stat for "+e+".")}))},f=t(1);function d(e){return Array.isArray(e)&&0<e.length}function h(){(function(){var e=function(e){for(var n=0;n<e.length;n++){var t=(c=e[n]).locationName,r=c.selector,o=c.pathToSelect,i=c.pathToInsert,a=c.existenceChecker,c=c.wrapper;if(t===s.UNKNOWN)return{location:s.UNKNOWN,links:[],linksToInsert:[]};if(o=document[r](o),i=document[r](i),a(o))return console.log("scrapData.locationName",t),console.log("scrapData.links",c(o)),{location:t,links:c(o),linksToInsert:c(i)}}}(E);return e.location!==s.UNKNOWN&&d(e.links)?Promise.resolve(e):Promise.reject("Error: unknown location for counting LOC (lines of code)")})().then((function(e){var n,t;t=g,(n=e).links.map((function(e,r){var o=e.getAttribute("href"),c=n.linksToInsert[r]||e;o&&(function(e){var n=e.innerHTML;return function(t){e.innerHTML=n+u(t)}}(c)(i.d),p(o,i.f,t).then((function(e){return function(e,n,t){e.innerHTML=n.split("/").slice(-1)[0]+u(t)}(c,o,a(e))})).catch((function(e){return console.error("Error by setting LOC for "+o,e)})))})),r("info",e)})).catch((function(e){return r("err",e)}))}(t=s=s||{}).USER_REPOSITORIES="USER_REPOSITORIES",t.POPULAR_REPOS="POPULAR_REPOS",t.PINNED_REPOS="PINNED_REPOS",t.LIKED_REPOS="LIKED_REPOS",t.ORGANIZATION="ORGANIZATION",t.SEARCH="SEARCH",t.SINGLE="SINGLE",t.EXPLORE="EXPLORE",t.TRENDING="TRENDING",t.UNKNOWN="UNKNOWN";var y=window.location.pathname.replace("/",""),E=[{locationName:s.PINNED_REPOS,selector:"querySelectorAll",pathToSelect:".js-pinned-items-reorder-list .pinned-item-list-item-content div a",pathToInsert:".wb-break-all",existenceChecker:d,wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.POPULAR_REPOS,selector:"querySelectorAll",pathToSelect:".js-pinned-items-reorder-container ol li div div div a",pathToInsert:".wb-break-all",existenceChecker:d,wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.ORGANIZATION,selector:"querySelectorAll",pathToSelect:"#org-repositories div ul div.flex-auto > h3 > a",existenceChecker:d,wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.SEARCH,selector:"querySelectorAll",pathToSelect:".codesearch-results ul li a.v-align-middle",existenceChecker:d,wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.SINGLE,selector:"querySelector",pathToSelect:"#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > div > div > strong a",pathToInsert:".public",existenceChecker:function(e){return Boolean(e)},wrapper:function(e){return[e]}},{locationName:s.EXPLORE,selector:"querySelectorAll",pathToSelect:"article h1 a.text-bold",existenceChecker:function(e){return y===s.EXPLORE.toLowerCase()&&d(e)},wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.TRENDING,selector:"querySelectorAll",pathToSelect:"article h1 a",existenceChecker:function(e){return y===s.TRENDING.toLowerCase()&&d(e)},wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.USER_REPOSITORIES,selector:"querySelectorAll",pathToSelect:"#user-repositories-list ul li h3 a",existenceChecker:d,wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.LIKED_REPOS,selector:"querySelectorAll",pathToSelect:".page-profile h3 a",existenceChecker:d,wrapper:function(e){return Array.prototype.slice.call(e)}},{locationName:s.UNKNOWN,selector:void 0,pathToSelect:void 0,existenceChecker:void 0,wrapper:void 0}],g="";chrome.storage.sync.get({"x-github-token":""},(function(e){e&&null!==e["x-github-token"]&&(g=e["x-github-token"]),h()})),chrome.runtime.onMessage.addListener((function(e){"gloc-extension-page-update"===e.message&&h()}))}});