var backlightStatus, openCloseStatus, selectedColor;

// Describe this function...
function screenfill() {
  if (selectedColor == 'graphite') {
    scene.addSequenceWaitValue(1);
    scene.groupApplyState("screenfill_magnetite",{"seq":true});

  }
  if (selectedColor == 'platinum') {
    scene.addSequenceWaitValue(1);
    scene.groupApplyState("screenfill_platinum",{"seq":true});

  }
}

// Describe this function...
function BacklightOnOffLogic() {
  if (backlightStatus == 'off') {
    scene.applySequence(Open_Lid);

  } else {
    scene.applySequence(Close_Lid);

  }
}

// Describe this function...
function OpenCloseLid() {
  if (openCloseStatus == 'on') {
    scene.applySequence(Open_Lid);

  } else {
    scene.applySequence(Close_Lid);

  }
}


function * FunctionMode(){
scene.resetSequenceWaitValue();
console.log("FunctionMode. STEP 0");
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_New", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("function_mode",{"seq":true});
yield 0;
console.log("FunctionMode. STEP 1");
scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});
yield 0;
console.log("FunctionMode. STEP 2");
screenfill();
}


function * Features(){
scene.resetSequenceWaitValue();
console.log("Features. STEP 0");
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_New", 1000, undefined , slowInOut);
yield 0;
console.log("Features. STEP 1");
scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
}


function * Magnetite_Screenfill(){
scene.resetSequenceWaitValue();
console.log("Magnetite_Screenfill. STEP 0");
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screenfill_magnetite",{"seq":true});
yield 0;
console.log("Magnetite_Screenfill. STEP 1");
scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
}


function * Screenfill(){
scene.resetSequenceWaitValue();
console.log("Screenfill. STEP 0");
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
}


function * Platinum_Screenfill(){
scene.resetSequenceWaitValue();
console.log("Platinum_Screenfill. STEP 0");
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screenfill_platinum",{"seq":true});
yield 0;
console.log("Platinum_Screenfill. STEP 1");
scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
}


function * MediaMode(){
scene.resetSequenceWaitValue();
console.log("MediaMode. STEP 0");
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_New", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("media_mode",{"seq":true});
yield 0;
console.log("MediaMode. STEP 1");
scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});
yield 0;
console.log("MediaMode. STEP 2");
screenfill();
}


backlightStatus = 'off';
openCloseStatus = 'off';
selectedColor = 'graphite';

function * backlight(){
scene.resetSequenceWaitValue();
console.log("backlight. STEP 0");
  BacklightOnOffLogic();
}


function * Color(){
scene.resetSequenceWaitValue();
console.log("Color. STEP 0");
}


function * OpenClose(){
scene.resetSequenceWaitValue();
console.log("OpenClose. STEP 0");
  OpenCloseLid();
}


function * GRAPHITE(){
scene.resetSequenceWaitValue();
console.log("GRAPHITE. STEP 0");
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("magnetite",{"seq":true});
yield 0;
console.log("GRAPHITE. STEP 1");
selectedColor = 'graphite';
}


function * ProductView(){
scene.resetSequenceWaitValue();
console.log("ProductView. STEP 0");
}


function * PLATINUM(){
scene.resetSequenceWaitValue();
console.log("PLATINUM. STEP 0");
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("platinum_silver",{"seq":true});
yield 0;
console.log("PLATINUM. STEP 1");
selectedColor = 'platinum';
}


function * Reset(){
scene.resetSequenceWaitValue();
console.log("Reset. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",50,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",50,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F50_FL", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Front_Zoomout(){
scene.resetSequenceWaitValue();
console.log("Front_Zoomout. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayAllChildrenInTime("screen",25,0);
  scene.addSequenceWaitValue(0);
  scene.animPlayAllChildrenInTime("DE_2078_pista",25,0);
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_cam_F25_JD_Zoomout", 0, undefined );
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Screenfill2(){
scene.resetSequenceWaitValue();
console.log("Screenfill2. STEP 0");
  if (selectedColor == 'graphite') {
    scene.addSequenceWaitValue(1);
    scene.groupApplyState("screenfill_magnetite",{"seq":true});

  }
  if (selectedColor == 'platinum') {
    scene.addSequenceWaitValue(1);
    scene.groupApplyState("screenfill_platinum",{"seq":true});

  }
}


function * OFF(){
scene.resetSequenceWaitValue();
console.log("OFF. STEP 0");
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_New", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("touch function_off",{"seq":true});
yield 0;
console.log("OFF. STEP 1");
scene.addSequenceWaitValue(1);
  scene.groupApplyState("screenfill_off",{"seq":true});
yield 0;
console.log("OFF. STEP 2");
scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Front(){
scene.resetSequenceWaitValue();
console.log("Front. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayAllChildrenInTime("screen",25,0);
  scene.addSequenceWaitValue(0);
  scene.animPlayAllChildrenInTime("DE_2078_pista",25,0);
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_cam_F25_JD", 1000, undefined );
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Top_Zoomout(){
scene.resetSequenceWaitValue();
console.log("Top_Zoomout. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_Zoomout", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Backlight_ON(){
scene.resetSequenceWaitValue();
console.log("Backlight_ON. STEP 0");
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_New", 1000, undefined , slowInOut);
yield 0;
console.log("Backlight_ON. STEP 1");
scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_on",{"seq":true});
yield 0;
console.log("Backlight_ON. STEP 2");
backlightStatus = 'on';
}


function * Top(){
scene.resetSequenceWaitValue();
console.log("Top. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_New", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Left_Zoomout(){
scene.resetSequenceWaitValue();
console.log("Left_Zoomout. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F25_L_Zoomout", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Backlight_OFF(){
scene.resetSequenceWaitValue();
console.log("Backlight_OFF. STEP 0");
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_F27_Top_New", 1000, undefined , slowInOut);
yield 0;
console.log("Backlight_OFF. STEP 1");
scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",27,1000); scene.clearRefine();
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});
yield 0;
console.log("Backlight_OFF. STEP 2");
backlightStatus = 'off';
}


function * Left(){
scene.resetSequenceWaitValue();
console.log("Left. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F25_L", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Right_Zoomout(){
scene.resetSequenceWaitValue();
console.log("Right_Zoomout. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F25_R_Zoomout", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Close_Lid(){
scene.resetSequenceWaitValue();
console.log("Close_Lid. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",0,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",0,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F01_Close", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});
yield 0;
console.log("Close_Lid. STEP 1");
openCloseStatus = 'on';
}


function * Right(){
scene.resetSequenceWaitValue();
console.log("Right. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",25,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F25_R", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});

}


function * Open_Lid(){
scene.resetSequenceWaitValue();
console.log("Open_Lid. STEP 0");
  scene._nav.ClearLimits();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("DE_2078_pista",50,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.animPlayInTime("screen",50,1000); scene.clearRefine();
  scene.addSequenceWaitValue(0);
  scene.gotoUINamedPosInTime("Render_Cam_F50_FL", 1000, undefined , slowInOut);
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,40,100,undefined,undefined,undefined,undefined);
  scene.setAnimUseFrames(true);
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlight_off",{"seq":true});
yield 0;
console.log("Open_Lid. STEP 1");
openCloseStatus = 'off';
}
