
$(window).load(function() {
     resizePage(window.document.documentElement.clientWidth,window.document.documentElement.clientHeight);    
    $(window).live('resize',function(){
                 resizePage(window.innerWidth,window.innerHeight);
        });
        window.onresize = function (event) {
             resizePage(window.innerWidth,window.innerHeight);
        }
});

$(function() {
    $('nodrag').on('dragstart', function(event) {
        event.preventDefault();
    });
    $('.nodrag').mousedown(function() {
        return false
    });

});

var updateEnabled = true;
var canvas = null,
    canvas2 = null;
var canvasDummy=null;
var scene = null,
    scene2 = null;
var _scenePollInterval;
var outstandingJobs;
var totalJobs;
var firstTime = true;
var tempW = 5;
var animationLoading;
var ReferenceRadius = 2.0;

function isSIRTReady() {
     if (scene) {
                scene.start();
                outstandingJobs = scene.getOutstandingJobs();
               if (!(scene._projectparsed /*&& scene._started*/)) {
                        if(firstTime){
                            firstTime=false;
                        }
                } else if (outstandingJobs <= 0 && scene._prepared) {
                    onSIRTReady();
                    clearInterval(_scenePollInterval);
                } else if (scene._projectparsed /*&& scene._started*/) {
                     clearInterval(animationLoading);
                     updateProgressBar();
                }
            }
}

function updateProgressBar() {
    totalJobs = scene.getTotalJobs();
    outstandingJobs = scene.getOutstandingJobs();
    var perc = 100 - Math.round(outstandingJobs / totalJobs * 100);
    var newwidth = 50 + 215*perc/100;
   // console.log("updateProgressBar -- loaderbar "+newwidth+"px perc "+perc+" jobs "+outstandingJobs+"/"+totalJobs);
    $("#loaderbar", window.parent.document).css("width", newwidth + "px");
}


/*var baseurl=window.location.href;
var newconfigurl=baseurl.split('html')[1];
newconfigurl=decodeURIComponent(newconfigurl);

function getconfigval(){
	var s=newconfigurl.replace("?config=",'');
	console.log("s"+s);
	var pieces = s.split('|');
	var values = {};
	for (var i=0,len=pieces.length;i<len;++i){
	  var pair = pieces[i].split(',');
	  values[pair[0]] = pair[1];
	}
}*/


function onSIRTReady() {

     scene._zNearMin = 15.0;
    // if (mob) scene._bDoF = false;
    scene.enableFenceSync(true); // Enable fenceSync if available
    window.addEventListener('focus', onWindowFocus, false);
    window.addEventListener('blur', onWindowBlur, false);
	//getconfigval();
     end = new Date().getTime();
        var time = end - start;
        console.log('End time: ' + time);        
    //if (time <= 60000) RT_RecordTiming("Load", time, "[Project Name]");

    
    
    setTimeout(function() {
        $("#loader", window.parent.document).css('display', 'none');
        $("#loaderbar", window.parent.document).css('width', '0px');
        $("#canvasContainer").css("visibility", "visible");
        $("#InfinityRTWrapper", window.parent.document).css('display', 'block');
        $("#InfinityRT").css('display', 'block');
        if (mob || (navigator.userAgent.indexOf('iPad') != -1)) {
            $("#fullScreen").css('display', 'none');
        } else {
            $("#fullScreen").css('display', 'block');
        }
        //scene._slowinoutfac=.3;
        scene.setAnimUseFrames(true);
    	$("#scenediv").css("visibility", "visible");
    }, 500);
    resizePage();
}

function InfinityRTStart(gl) {
    try {
        parent.document;
        resizePage(window.parent.document.documentElement.clientWidth, window.parent.document.documentElement.clientHeight);
        $(window.parent).resize(function() {
            resizePage(window.parent.document.documentElement.clientWidth, window.parent.document.documentElement.clientHeight);

        });
       
    } catch (e) {
        resizePage(document.documentElement.clientWidth, document.documentElement.clientHeight);
        $(window).resize(function() {
            resizePage(document.documentElement.clientWidth, document.documentElement.clientHeight);

        });
        
    }
    canvas = document.getElementById("infinityrt-canvas");
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var urlDataPath = 'model_gl/';

    // if (mob || isipad) {
    //     // smartDeferralValue = false;
    //     infinityrt_codeprefix = "./model_gl_mob/";
    // } else {
        // smartDeferralValue = true;
        infinityrt_codeprefix = "./model_gl/";
    // }

		scene = new infinityrt_scene({rtgl: gl}, urlDataPath, canvas.width, canvas.height);
		// scene = new infinityrt_scene({rtgl: gl, useDraco: false}, urlDataPath, canvas.width, canvas.height);
		scene._nav = new infinityrt_navigation(scene, canvas.width, canvas.height);
		scene._jitRadius = 3;
		scene.gotoPosInTime(0,0,0,100,549.9999999999998, 0);


    //scene.ConfigReadXML("config.xml");
    scene.start();
    _scenePollInterval = setInterval("isSIRTReady()", 100);
     start = new Date().getTime();
   // NavInit(canvas.width, canvas.height);
    canvasDummy = document.getElementById("dummy-canvas");
    addMouseListeners(canvas);
    if (scene != null) {

    
        window.requestAnimationFrame(frameUpdate);
        $(this).bind("contextmenu", onRightClick); //prevents a right click     
        document.body.oncontextmenu = onRightClick;
        //window.addEventListener('oncontextmenu',onRightClick,false);
        //if (typeof(onInit()) != 'undefined') onInit();
    }
    initDragCursor();
}
var mob = (navigator.userAgent.indexOf("iPhone") != -1) || ((navigator.userAgent.indexOf("Android") != -1) || (navigator.userAgent.indexOf("Mobile") != -1)) || (navigator.userAgent.indexOf('iPod') != -1);

var FullscreenOff = false;
function launchFullscreen(element) {
    window.parent.fullScreen=true;

    resizePage(window.parent.document.documentElement.clientWidth,window.parent.document.documentElement.clientHeight);

    if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
        //console.log("IE 11");
        $("#fullScreenOff").css('display','none'); 
        $("#fullScreen").css('display','none');
        
    }else{
        //console.log("Not IE 11");
        $("#fullScreenOff").css('display','block'); 
        $("#fullScreen").css('display','none');
    }

    //console.log(" full screen ");
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
       //setTimeout(function(){resizePage(window.parent.document.documentElement.clientWidth,window.parent.document.documentElement.clientHeight);;}, 2000);
}
function exitFullscreen() {
    //console.log("Exit full screen");
    window.parent.fullScreen=false;
    $("#fullScreenOff").css('display','none'); 
    $("#fullScreen").css('display','block');  
    if (window.parent.document.exitFullscreen) {
        window.parent.document.exitFullscreen();
    } else if (window.parent.document.mozCancelFullScreen) {
        window.parent.document.mozCancelFullScreen();
    } else if (window.parent.document.webkitExitFullscreen) {
        window.parent.document.webkitExitFullscreen();
    }
    setTimeout(function() {
        resizePage(window.parent.document.documentElement.clientWidth, window.parent.document.documentElement.clientHeight);
    }, 40);

}

window.document.onkeyup = function (e){
    //console.log("ECS pressed IE1");
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        // if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
        //     console.log("ECS pressed IE");
        // }
        //console.log("ECS pressed"); 
        // exitFullscreen(window.parent.document.documentElement);
        var iE = 0;
        var _intervalEsc = setInterval(function () {
            if(iE < 5){
                //console.log("func"+iE);
                exitFullscreen(window.parent.document.documentElement);
                iE++;
            }else{
                clearInterval(_intervalEsc);
            }
        }, 10);
    }
}

var FullscreenOn = false;
     function resizePage() {
         
            if (canvas != null) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                if (scene != null) {
                    scene._nav.canvasResize(canvas.width, canvas.height);
                    scene.resize(canvas.width, canvas.height);
               
                }
            }
		}
function addMouseListeners(canvas) {
    canvas.addEventListener('mousemove', mouseMove, false);
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousewheel', mouseWheel, false);
    canvas.addEventListener('DOMMouseScroll', mouseWheel, false);
    canvas.addEventListener('mouseout', mouseOut, false);
    canvas.addEventListener('touchstart', touchStart, false);
    canvas.addEventListener('touchmove', touchMove, false);
    canvas.addEventListener('touchend', touchEndCan, false);
}
function close_window(){
   window.parent.close();
}

document.onselectstart = function() {
    return false;
};

var btnDrag = false;

function mouseOverBtnDrag() {
    btnDrag = true;
}

function mouseOutBtnDrag() {
    setTimeout(function() {
        btnDrag = false;
    }, 100);
}

var updateId = 0;

function onRightClick(event) {
    //console.log("press right");
    //mdown = true;
    //panNav = true;
    return false; //surpress theright menu 
}
function onWindowFocus() {
    updateEnabled = true;
}

function onWindowBlur() {
    updateEnabled = false;
}

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
var sceneViewMatrix;
var configApplied = false;
function frameUpdate() { 
    if (!configApplied && scene.configdbready && scene._started) {
        scene.ConfigApply(QueryString["config"]);
        configApplied = true;
    }
    //setTimeout(function () {
    //    window.requestAnimationFrame(frameUpdate);
    //}, scene.backoff);
    if (scene._refineCount < 64) frameUpdateForScene(scene);
    else {
        setTimeout(function () {
            window.requestAnimationFrame(frameUpdate);
        }, 5);
    }
       // console.log(scene._nav._navYAng+","+scene._nav._navXAng+","+scene._nav._navPan[0]+","+scene._nav._navPan[1]+","+scene._nav._navDolly);

    if (mob || (navigator.userAgent.indexOf('iPad') != -1)) {
        // Do nothing
    } else {
        $(window).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        var event = state ? 'FullscreenOn' : 'FullscreenOff';
        window.parent.fullScreen = state; 
        resizePage();  
        });
    }
}

function frameUpdateForScene(scene) {
            //var numJobs = scene.getTotalJobs();
            //var numDone = numJobs-scene.getOutstandingJobs();
            //if (numDone != numJobs)
            //    console.log("Scene ("+scene.urlRoot+") Progress "+numDone+"/"+numJobs);

            var bGotoPosUpdate = scene._nav._navGotoPosActive;
            scene.setViewMatrix(scene._nav.NavCreateViewMatrix(scene._initialNavMatrix));
            scene.setModelMatrix(scene._nav.NavCreateModelMatrix(scene._initialNavMatrix));
            scene.draw();
            if (bGotoPosUpdate)
                scene.clearRefine();
            if (scene.isFenceSyncEnabled())
                setTimeout(function () {
                    scene.callbackOnSync(frameUpdate);
                }, 0);
            else
                setTimeout(function () {
                    window.requestAnimationFrame(frameUpdate);
                }, scene.backoff);

        }

var mpos = [0, 0];
var mdown = false;
var panNav = false;

function mouseDown(ev) {
    handClosed();
    if (ev.which == 3) {
        panNav = true;
    }
    var mouseDownPos = [ev.clientX - canvas.offsetLeft, ev.clientY - canvas.offsetTop];
    if (!scene.onClick(mouseDownPos, ev.button)) {
        mdown = true;
        mpos = mouseDownPos;
    }
}

function mouseUp(ev) {
    mdown = false;
    if (ev.which == 3 || panNav) panNav = false;
    handOpen();
}

function mouseOut(ev) {
    mdown = false;
    if (ev.which == 3 || panNav) panNav = false;
    handOpen();
}

function mouseMove(ev) {
    if (!mdown || !animStoped) return;
    var s = getScene(ev);
    var mousePos = [ev.clientX - canvas.offsetLeft, ev.clientY - canvas.offsetTop];
    var mdelta = [(mpos[0]-mousePos[0]),(mpos[1]-mousePos[1])];
    mpos = [mousePos[0],mousePos[1]];
    //pan nav is initialized and set in ui\_ui.js for now.
     if (!panNav) {
        if (s._nav.NavRotation(mpos, mdelta)) s.clearRefine();
    } else {
        var mdelta2 = [mdelta[0] * 3, mdelta[1] * 3];
        if (s._nav.NavPan(mdelta2)) s.clearRefine();
    }
}
function mouseWheel(ev) {
    if (!updateEnabled || mdown || !animStoped) return;
    if (!ev) {
        ev = window.event;
    } /* IE7, IE8, Chrome, Safari */
    if (ev.preventDefault) {
        ev.preventDefault();
    } /* Chrome, Safari, Firefox */
    ev.returnValue = false; /* IE7, IE8 */
    
    var s = getScene(ev);    
    var delta = ev.wheelDelta ? ev.wheelDelta : (-ev.detail * 10.0);
    var deltaScene = (delta*0.08)*(0.8)*20;
    //var deltaScene = (delta*0.05)*(scene.sceneRadius*0.01);
    
    if (s._nav.NavChangeDolly(deltaScene))
                s.clearRefine();
}

function calDof(){
    // Nothing Calling
}


function getScene(ev) {
		    var s = scene;
		    if (scene2 != null && ev.currentTarget == canvas2)
		        s = scene2;
		    return s;
		}

var animStoped = true;

function animComplete() {
    animStoped = true;
    scene._navEnabled = true;
}

var dragCursor;
var curBrowser = BrowserDetect.browser;
// IE doesn't support co-ordinates
var cursCoords = (curBrowser == "Explorer") ? "" : " 4 4";

function initDragCursor() {
    handOpen();
    $('#sliderBG').mousedown(function() {
        handClosed();
    });
    $('.ui-slider-handle').mousedown(function() {
        handClosed();
    });
    $('body').mouseup(function() {
        handOpen();
    });
    $('body').mouseup(function() {
        handOpen();
    });
}

function handClosed() {
    dragCursor = (curBrowser == "Firefox") ? "-moz-grabbing" : "url(images_gl/closedhand.cur)" + cursCoords + ", move";
    // Opera doesn't support url cursors and doesn't fall back well...
    if (curBrowser == "Opera") dragCursor = "move";
    $('.ui-slider-handle').css("cursor", dragCursor);
    $('#sliderBG').css("cursor", dragCursor);
    $('#dummy-canvas').css("cursor", dragCursor);
}

function handOpen() {
    dragCursor = (curBrowser == "Firefox") ? "-moz-grab" : "url(images_gl/openhand.cur)" + cursCoords + ", move";
    $('.ui-slider-handle').css("cursor", dragCursor);
    $('#sliderBG').css("cursor", dragCursor);
    $('#dummy-canvas').css("cursor", dragCursor);
}

var mouseIsDown = false;
var loopCtr = 0;
var touch = new Vector3();
var touches = [new Vector3(), new Vector3(), new Vector3()];
var prevTouches = [new Vector3(), new Vector3(), new Vector3()];
var prevDistance = null;

function touchStart(event) {
     if (!animStoped) return;
            switch (event.touches.length) {
                case 1:
                    touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
                    touches[1].set(event.touches[0].pageX, event.touches[0].pageY, 0);
                    break;
                case 2:
                    touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
                    touches[1].set(event.touches[1].pageX, event.touches[1].pageY, 0);
                    prevDistance = touches[0].distanceTo(touches[1]);
                    break;
            }
            prevTouches[0].copy(touches[0]);
            prevTouches[1].copy(touches[1]);
        }

var doubleTouch = false;

function touchMove(event) {
    if (!animStoped) return;
            var s = getScene(event);
            event.preventDefault();
            event.stopPropagation();
            var getClosest = function(touch, touches) {
                var closest = touches[0];
                for (var i in touches) {
                    if (closest.distanceTo(touch) > touches[i].distanceTo(touch)) closest = touches[i];
                }
                return closest;
            }
            switch (event.touches.length) {
                case 1:
                    if (doubleTouch == false) {
                        touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
                        touches[1].set(event.touches[0].pageX, event.touches[0].pageY, 0);
                        if (s._nav.NavRotation([touches[0].x, touches[0].y], [(prevTouches[0].x - touches[0].x) * 0.5, (prevTouches[0].y - touches[0].y) * 0.5])) s.clearRefine();
                        //scope.rotate( touches[ 0 ].sub( getClosest( touches[ 0 ] ,prevTouches ) ).multiplyScalar( - 0.005 ) );
                    }
                    break;
                case 2:
                    doubleTouch = true;
                    //alert("double");
                    touches[0].set(event.touches[0].pageX, event.touches[0].pageY, 0);
                    touches[1].set(event.touches[1].pageX, event.touches[1].pageY, 0);
                    distance = touches[0].distanceTo(touches[1]);
                    var deltaScene = -(prevDistance - distance);
                    if (s._nav.NavChangeDolly(deltaScene)) {
                        s.clearRefine();
                    }
                    //scope.zoom( new Vector3( 0, 0, prevDistance - distance ) );
                    prevDistance = distance;
                    var offset0 = touches[0].clone().sub(getClosest(touches[0], prevTouches));
                    var offset1 = touches[1].clone().sub(getClosest(touches[1], prevTouches));
                    offset0.x = -offset0.x;
                    offset0.x = -offset0.x;
                    offset1.x = -offset1.x;
                    var mdelta2 = [offset1.x * 5, -offset1.y * 5];
                    if (s._nav.NavPan(mdelta2)) s.clearRefine();
                    //scope.pan( offset0.add( offset1 ).multiplyScalar( 0.5 ) );
                    break;
            }
            prevTouches[0].copy(touches[0]);
            prevTouches[1].copy(touches[1]);
        }

function touchEndCan(event) {
   setTimeout(function() { doubleTouch = false; }, 100);
}

function hotspotClick(){
    console.log("----")
      $("#hotspot_container").css('display', 'block');
       scene.applySequence("ovenCam");
//    document.getElementById("hotspot_container").css.display = "block";
};