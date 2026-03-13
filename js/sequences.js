function * sequencePorts(){
console.log("sequencePorts. STEP 0");
  scene.gotoUINamedPosInTime("Render_Cam_F15_Rear", 1000, undefined, slowInOut); //TODO: Add seq=true
yield 0;
console.log("sequencePorts. STEP 1");
scene.groupApplyState("stand_off", {seq:true});
yield 0;
console.log("sequencePorts. STEP 2");
addSequencePause(1400);
yield 0;
console.log("sequencePorts. STEP 3");
scene.gotoUINamedPosInTime("Render_Cam_F21_Ports", 1000);
yield 0;
console.log("sequencePorts. STEP 4");
//window.localStorage.setItem('hotspot','top');
//  window.document.getElementById("hotspot1demo").focus();
  //animComplete();

}

function * sequenceShadingHood(){
  console.log("sequenceShadingHood. STEP 0");
    scene.gotoUINamedPosInTime("Render_Cam_F15_FL", 1000, undefined, slowInOut);
  yield 0;
  console.log("sequenceShadingHood. STEP 1");
  scene.groupApplyState("hood_on",{"seq":true});
  yield 0;
  console.log("sequenceShadingHood. STEP 2");
  window.localStorage.setItem('hotspot','hood');
    //To be added as a PlaySequence callback:
  yield 0;
  console.log("sequenceShadingHood. STEP 3");
  //if (isNextPrevious != true) {
    //window.document.getElementById("hotspot1demo").focus();
    //}
    //animComplete();
  }

function * sequenceColorometer(){
  console.log("sequenceColorometer. STEP 0");
    scene.gotoUINamedPosInTime("Render_Cam_F15_F", 1000, undefined, slowInOut);
  yield 0;
  console.log("sequenceColorometer. STEP 1");
  //isNextPrevious should be available here!
    //if (isNextPrevious != true) {
    //window.document.getElementById("hotspot1demo").focus();
    //}
    ;
    scene.animPlayInTime('calibration',2.55,1000); scene.clearRefine();
  yield 0;
  console.log("sequenceColorometer. STEP 2");
  scene.animPlayInTime('BOX',2.55,1800); scene.clearRefine();
  yield 0;
  console.log("sequenceColorometer. STEP 3");
  window.localStorage.setItem('hotspot','colorometer');
    window.videoHolder = window.setupVideo('./video/Colorimeter.mp4');
    window.playVideo = true;
    //Execute animComplete() on custom callback;
  }
  
  function * sequencePivotMonitor(){
    console.log("sequencePivotMonitor. STEP 0");
      scene.gotoUINamedPosInTime("Render_Cam_F15_F_NEW", 1000, undefined, slowInOut);
    yield 0;
    console.log("sequencePivotMonitor. STEP 1");
    scene.groupApplyState("90_degree_on",{"seq":true});
    yield 0;
    console.log("sequencePivotMonitor. STEP 2");
    scene.animPlayAllChildrenInTime('swivel_rotation',0.83333,1);
    yield 0;
    console.log("sequencePivotMonitor. STEP 3");
    scene.animPlayAllChildrenInTime('swivel_rotation',1.666,10000);
    
    }
    