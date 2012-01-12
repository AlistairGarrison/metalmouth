var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;b=b.substring(0,b.lastIndexOf("."));){if(goog.getObjectByName(b))break;goog.implicitNamespaces_[b]=!0}}goog.exportPath_(a)};
goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};if(!COMPILED)goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={};goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};
goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};
goog.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=goog.dependencies_,f=0;d=b[f];f++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){return a.instance_||(a.instance_=new a)}};
if(!COMPILED&&goog.ENABLE_DEBUG_LOADER)goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return typeof a!="undefined"&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"),
d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){return goog.inHtmlDocument_()?(goog.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>'),!0):!1},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=
!0,e in d.requires))for(var j in d.requires[e])if(!goog.isProvided_(j))if(j in d.nameToPath)a(d.nameToPath[j]);else throw Error("Undefined nameToPath for "+j);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),
goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js");
goog.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b};goog.propertyIsEnumerableCustom_=function(a,b){if(b in a)for(var c in a)if(c==b&&Object.prototype.hasOwnProperty.call(a,b))return!0;return!1};goog.propertyIsEnumerable_=function(a,b){return a instanceof Object?Object.prototype.propertyIsEnumerable.call(a,b):goog.propertyIsEnumerableCustom_(a,b)};goog.isDef=function(a){return a!==void 0};goog.isNull=function(a){return a===null};goog.isDefAndNotNull=function(a){return a!=null};
goog.isArray=function(a){return goog.typeOf(a)=="array"};goog.isArrayLike=function(a){var b=goog.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};goog.isDateLike=function(a){return goog.isObject(a)&&typeof a.getFullYear=="function"};goog.isString=function(a){return typeof a=="string"};goog.isBoolean=function(a){return typeof a=="boolean"};goog.isNumber=function(a){return typeof a=="number"};goog.isFunction=function(a){return goog.typeOf(a)=="function"};
goog.isObject=function(a){a=goog.typeOf(a);return a=="object"||a=="array"||a=="function"};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};goog.UID_PROPERTY_="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;
goog.cloneObject=function(a){var b=goog.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b){if(!a)throw Error();if(arguments.length>2){var c=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d,c);return a.apply(b,d)}}else return function(){return a.apply(b,arguments)}};goog.bind=function(){goog.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(goog.evalWorksForGlobals_==null)goog.global.eval("var _et_ = 1;"),typeof goog.global._et_!="undefined"?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1;if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d;d=goog.cssNameMapping_?goog.cssNameMappingStyle_=="BY_WHOLE"?c:function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")}:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
goog.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b){var c=arguments.callee.caller;if(c.superClass_)return c.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var d=Array.prototype.slice.call(arguments,2),e=!1,f=a.constructor;f;f=f.superClass_&&f.superClass_.constructor)if(f.prototype[b]===c)e=!0;else if(e)return f.prototype[b].apply(a,d);if(a[b]===c)return a.constructor.prototype[b].apply(a,d);else throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var mm_applicationData={},applicationData;mm_applicationData.connect=function(){applicationData=localStorage.getItem("MetalmouthApplicationData")==null?new ApplicationDataModel:new ApplicationDataModel(JSON.parse(localStorage.getItem("MetalmouthApplicationData")))};mm_applicationData.update=function(a){localStorage.setItem("MetalmouthApplicationData",JSON.stringify(a));applicationData=new ApplicationDataModel(JSON.parse(localStorage.getItem("MetalmouthApplicationData")))};
mm_applicationData.getSpecificData=function(a){return applicationData[a]};mm_applicationData.getData=function(){return applicationData};
function ApplicationDataModel(a){a==void 0&&(a={});if(!a.newTabPage)a.newTabPage="";if(!a.turnOnMetalmouthAlwaysOn)a.turnOnMetalmouthAlwaysOn=!1;if(!a.speechRate)a.speechRate="0.9";if(!a.turnOnVoiceInput)a.turnOnVoiceInput=!1;return{newTabPage:a.newTabPage,turnOnMetalmouthAlwaysOn:a.turnOnMetalmouthAlwaysOn,speechRate:a.speechRate,turnOnVoiceInput:a.turnOnVoiceInput}}var mm_speech={},audioStack=null,howToSayUtterance=null;
function urlBasedSpeechAvailable(){var a=new XMLHttpRequest;a.open("GET","http://www.google.com/speech-api/v1/synthesize?lang=en-us&text=",!1);a.send();return a.status==404?!1:!0}mm_speech.speechFunction=null;
mm_speech.speak=function(a,b){if(!mm_speech.speechFunction)navigator.platform=="MacIntel"&&urlBasedSpeechAvailable()==!0?(audioStack=new AudioStackModel,mm_speech.speechFunction=speakExtTTS):mm_speech.speechFunction=speakIntTTS;a=a.replace(/(\.)(?=[a-z])/gi," dot ");a=a.replace(/(\.)(?=[0-9])/gi," point ");a=a.replace(/\!/g," exclamation mark ");a=a.replace(/\?/g," question mark ");a=a.replace(/\:/g," colon ");a=a.replace(/\//g," forward slash ");a=a.replace(/\@/g," at ");mm_speech.speechFunction(a,
b)};function speakIntTTS(a,b){chrome.tts.stop();var c={lang:"en-US",rate:parseFloat(mm_applicationData.getSpecificData("speechRate")),enqueue:!1},d=function(){b()};b!=null&&(c.onEvent=function(a){a.type=="interrupted"&&(d=function(){});a.type=="end"&&d()});a!=null&&chrome.tts.speak(a,c)}function speakExtTTS(a,b){audioStack.speakDirectly(a,b)}
function AudioStackModel(){var a=null;this.speakDirectly=function(b,c){var d=function(){a.currentTime==9223372013568&&(a.removeEventListener("timeupdate",d),c())},e=function(){a.removeEventListener("ended",e);c()},f=function(){a.duration=="Infinity"?a.addEventListener("timeupdate",d):a.addEventListener("ended",e)};if(b!=null)a&&a.ended==!1&&a.pause(),a=new Audio,a.addEventListener("play",function(){a.src=""},!1),c&&a.addEventListener("durationchange",f),a.src="http://www.google.com/speech-api/v1/synthesize?lang=en-us&text="+
escape(b),a.play()}}
var metalmouthInit={load:function(){function a(){chrome.browserAction.onClicked.addListener(k);chrome.omnibox.onInputStarted.addListener(k)}function b(){chrome.browserAction.onClicked.removeListener(k);chrome.omnibox.onInputStarted.removeListener(k)}function c(){chrome.tabs.getSelected(null,function(a){var b=a.url;b=="chrome://newtab/"&&(b=mm_applicationData.getSpecificData("newTabPage"),b==""&&(b="http://www.google.com/cse/home?cx=000183394137052953072%3Azc1orsc6mbq"));chrome.tabs.update(a.id,{url:b,
selected:!0})})}function d(){chrome.tabs.getAllInWindow(null,function(a){for(var b=a.length;b--;){var c=a[b],d=c.url;d=="chrome://newtab/"&&(d=mm_applicationData.getSpecificData("newTabPage"),d==""&&(d="http://www.google.com/cse/home?cx=000183394137052953072%3Azc1orsc6mbq"));chrome.tabs.update(c.id,{url:d,selected:!0})}})}function e(){chrome.tabs.getAllInWindow(null,function(a){for(var b=a.length;b--;){var c=a[b];chrome.tabs.update(c.id,{url:c.url})}})}function f(){b();g=i=0;h=null;chrome.tabs.onUpdated.addListener(m);
chrome.tabs.onCreated.addListener(n);chrome.tabs.onRemoved.addListener(o);chrome.tabs.onActiveChanged.addListener(p);chrome.extension.onConnect.addListener(q);chrome.browserAction.setIcon({path:"MetalMouthLogo_On.png"});chrome.browserAction.setTitle({title:"metalmouth on"});mm_speech.speak("metalmouth extension on",function(){l=!0;a();c()})}function j(){b();chrome.tabs.onUpdated.removeListener(m);chrome.tabs.onCreated.removeListener(n);chrome.tabs.onRemoved.removeListener(o);chrome.tabs.onActiveChanged.removeListener(p);
chrome.extension.onConnect.removeListener(q);chrome.browserAction.setIcon({path:"MetalMouthLogo_Off.png"});chrome.browserAction.setTitle({title:"metalmouth off"});e();mm_speech.speak("metalmouth extension off",function(){l=!1;a()})}function k(){mm_applicationData.getSpecificData("turnOnMetalmouthAlwaysOn")==!1&&(l==!1?f():j())}function m(a,b){b.status=="complete"&&chrome.tabs.get(a,function(b){b=b.url;if(b.indexOf("chrome-devtools://")==-1&&b.indexOf("chrome://")==-1&&b.indexOf("chrome-extension://")==
-1&&b.indexOf("options.html")==-1)var c=function(){chrome.tabs.executeScript(a,{file:"metalmouth-compiled.js"},function(){chrome.tabs.executeScript(a,{code:"metalmouth.start();"},null)})},d=setInterval(function(){g==0&&(clearInterval(d),c())},100)})}function n(a){g=0;a=a.url;h=a.indexOf("chrome-extension://")!=-1&&a.indexOf("/options.html")!=-1?"Options page":"Opening new"}function o(){h="Closing tab moving focus to"}function p(a){chrome.tabs.get(a,function(b){var c=function(){var a="moving focus to ";
h&&(a=h+" ",h=null);return a},d=function(){var a=e;a=="chrome://newtab/"&&(a=mm_applicationData.getSpecificData("newTabPage"),a==""&&(a="http://www.google.com/cse/home?cx=000183394137052953072%3Azc1orsc6mbq"));mm_speech.speak(c()+"tab",function(){chrome.tabs.update(b.id,{url:a,selected:!0})})},e=b.url;h=="Opening new"?d():e.indexOf("chrome-extension://")!=-1&&e.indexOf("/options.html")!=-1?console.log("metalmouth options"):e.indexOf("chrome-devtools://")!=-1||e.indexOf("chrome://")!=-1||e.indexOf("chrome-extension://")!=
-1?d():mm_speech.speak(c()+"tab showing "+e,function(){chrome.tabs.executeScript(a,{code:"var injectedResult = true;try{metalmouth.injected();}catch(e){injectedResult = false};var mmInjectedTest = chrome.extension.connect();mmInjectedTest.postMessage({injected: injectedResult});"},null)})})}function q(a){var b={voice:function(b){mm_speech.speak(b,function(){i==1&&a.postMessage({complete:"true"});g=0})},openTab:function(a){g=0;chrome.tabs.create({url:a})},retrieveData:function(b){i==1&&a.postMessage({complete:"true",
results:JSON.stringify(mm_applicationData.getSpecificData(b))});g=0},optionsOpen:function(){g=0;chrome.tabs.create({url:"options.html"})},optionsGetData:function(){i==1&&a.postMessage({complete:"true",results:JSON.stringify(mm_applicationData.getData())});g=0},optionsClose:function(b){g=0;mm_applicationData.update(b);chrome.tabs.remove(a.tab.id,function(){c()})}};a.onDisconnect.addListener(function(){i=0});a.onMessage.addListener(function(a){if(a.backgroundFunction!=void 0){g=i=1;var d=JSON.parse(a.backgroundFunction);
b[d.name](d.value)}a.injected==!1&&c()})}var l=!1,i,g,h;mm_applicationData.connect();a();mm_applicationData.getSpecificData("turnOnMetalmouthAlwaysOn")==!0?(g=i=0,h=null,chrome.tabs.onUpdated.addListener(m),chrome.tabs.onCreated.addListener(n),chrome.tabs.onRemoved.addListener(o),chrome.tabs.onActiveChanged.addListener(p),chrome.extension.onConnect.addListener(q),chrome.browserAction.setIcon({path:"MetalMouthLogo_On.png"}),chrome.browserAction.setTitle({title:"metalmouth on"}),mm_speech.speak("metalmouth extension on",
function(){l=!0;d()})):(chrome.browserAction.setIcon({path:"MetalMouthLogo_Off.png"}),chrome.browserAction.setTitle({title:"metalmouth off"}))}};goog.exportSymbol("metalmouthInit.load",metalmouthInit.load);
