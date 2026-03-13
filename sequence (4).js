var backlightStatus, val, openCloseStatus, mob, hotspotTypeWanLan, isipad, getcurreentwidth, animationStatus, previousAnimFrame, hotspotTypeCardReader;

// Describe this function...
function Open_LidSeq() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_FL_F50_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_FL_F50_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_FL_F50", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 50;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 50, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 50;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 50, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 50;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function checkAnimStatus(val) {
  if (animationStatus == 'on') {
    return val;
  }
  if (animationStatus == 'off') {
    return val;
  }
}

// Describe this function...
function CameraandDisplayView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_JD_F27_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_JD_F27_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_JD_F27", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

      scene.addSequenceWaitValue(1);
      currentAnimFrame = 27;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 27, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 27;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 27, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 27;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function CameraandDisplayZoomoutView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_JD_F27_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_JD_F27_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_JD_F27_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 27;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 27, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 27;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 27, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 27;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function ResetView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_FL_F50_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_FL_F50_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_FL_F50", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_fl_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.animPlayAllChildrenInTime("screen_2_in_1",50,(checkAnimStatus(1000)), function(){});

  scene.addSequenceWaitValue(1);
  scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1",50,(checkAnimStatus(1000)), function(){});

}

// Describe this function...
function TentView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Tent_F75_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Tent_F75_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Tent_F75", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_inverted",{"seq":true});

   scene.addSequenceWaitValue(1);
      currentAnimFrame = 75;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 75, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 75;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 75, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 75;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("tent_gp",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function SmartCardReaderSeq() {
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_R_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("with_smartcard",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  hotspotTypeCardReader = 'With_SmartCard';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("wwan_a_cover",{"seq":true});

  hotspotTypeWanLan = 'WWAN';
  scene.setAnimUseFrames(true);
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      }
             ;
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function NoSmartCardReaderSeq() {
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_R_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("without_smartcard",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  hotspotTypeCardReader = 'Without_SmartCard';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("wlan_a_cover",{"seq":true});

  hotspotTypeWanLan = 'WLAN';
  scene.setAnimUseFrames(true);
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function Close_LidSeq() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Close_F01_MOb", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Close_F01_MOb", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Close_F01", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 1;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 1, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 1;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 1, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 1;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function FPRONSeq() {
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("with_fpr",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  hotspotTypeWanLan = 'WithFPR';
  scene.setAnimUseFrames(true);
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 28;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function FPROFFSeq() {
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("without_fpr",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  hotspotTypeWanLan = 'WithoutFPR';
  scene.setAnimUseFrames(true);
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 28;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function KeyboardView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 28;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function KeyboardZoomOutView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 28;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function StandView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Stand_F100_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Stand_F100_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Stand_F100", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

  scene.addSequenceWaitValue(1);
      currentAnimFrame = 100;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 100, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 100;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 100, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 100;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("stand_gp",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function WLAN_Back_Seq() {
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_Rear_F25", (checkAnimStatus(1000)), undefined , slowInOut);

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("wlan_a_cover",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  hotspotTypeWanLan = 'WLAN';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("without_smartcard",{"seq":true});

  hotspotTypeCardReader = 'Without_SmartCard';
  scene.setAnimUseFrames(true);
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function Backlight_ON_seq() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_on",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 28;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function WWAN_Back_Seq() {
  scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  scene.addSequenceWaitValue(1);
  scene.gotoUINamedPosInTime("Render_Cam_Rear_F25", (checkAnimStatus(1000)), undefined , slowInOut);

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("wwan_a_cover",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  hotspotTypeWanLan = 'WWAN';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("with_smartcard",{"seq":true});

  hotspotTypeCardReader = 'With_SmartCard';
  scene.setAnimUseFrames(true);
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function RightPortsView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_L_F25_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_L_F25_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,30,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_L_F25", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function RightPortsZoomOutView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_L_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_L_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_L_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function TabletView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Tablet_F125_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Tablet_F125_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Tablet_F125", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("tablet_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

  scene.addSequenceWaitValue(1);
      currentAnimFrame = 125;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 125, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 125;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 125, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 125;
        }
      }   //Multiple lines;
             ;
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("tablet_gp",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function Backlight_OFF_seq() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Top_F28", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 28;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 28, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 28;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function LeftPortsView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_R_F25_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_R_F25_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_R_F25", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function LeftPortsZoomOutView() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_R_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_R_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_R_F25_Zoomout", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}

// Describe this function...
function BackSeq() {
  if (mob || getcurreentwidth <= 1280) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Rear_F25_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else if (isipad) {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Rear_F25_Mob", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  } else {
    scene.addSequenceWaitValue(1);
    scene.gotoUINamedPosInTime("Render_Cam_Rear_F25", (checkAnimStatus(1000)), undefined , slowInOut);

    scene._nav.SetLimits(undefined,undefined,undefined,undefined,11,25,4,(-10),12,(-5),undefined,undefined,undefined,0.5,0.48);
  }
  backlightStatus = 'off';
  openCloseStatus = 'open';
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("for_jd_cam",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("backlit_keyboard_off",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("cs_rgb",{"seq":true});

  scene.addSequenceWaitValue(1);
  scene.groupApplyState("screen_reguler",{"seq":true});

   if (currentAnimFrame != previousAnimFrame) {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_off",{"seq":true});

  };
      scene.addSequenceWaitValue(1);
      currentAnimFrame = 25;


      if (window.prevID == "tent" || window.prevID == "theater" || window.prevID == "tablet") {
        scene.addSequenceWaitValue(1);
        jumpValue = 10;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      } else {
        scene.addSequenceWaitValue(1);
        jumpValue = 0;
        if (currentAnimFrame != previousAnimFrame) {
          scene.addSequenceWaitValue(1);
          scene.animPlayAllChildrenInTime("DE_2381_Pro_Plus_13_2_in_1", 25, (checkAnimStatus(1000)), function () { }, undefined, undefined, true, previousAnimFrame, jumpValue);

          scene.addSequenceWaitValue(1);
          previousAnimFrame = 25;
        }
      };
  setTimeout(() => {;
  scene.addSequenceWaitValue(1);
  scene.groupApplyState("gp_reguler",{"seq":true});

  }, checkAnimStatus(1100));;
}


backlightStatus = 'off';
openCloseStatus = 'open';
hotspotTypeWanLan = 'WLAN';
animationStatus = 'on';
previousAnimFrame = 50;

function * Features(){
scene.resetSequenceWaitValue();
console.log("Features. STEP 0");
}


function * OpenCloseLid(){
scene.resetSequenceWaitValue();
console.log("OpenCloseLid. STEP 0");
  if (openCloseStatus == 'open') {
    setTimeout(function(){;
    scene.applySequence(Close_Lid);

    openCloseStatus = 'close';
    },100);
  } else {
    setTimeout(function(){;
    scene.applySequence(Open_Lid);

    openCloseStatus = 'open';
    },100);
  }
}


function * Open_Lid(){
scene.resetSequenceWaitValue();
console.log("Open_Lid. STEP 0");
  Open_LidSeq();
}


function * ProductView(){
scene.resetSequenceWaitValue();
console.log("ProductView. STEP 0");
  ResetView();
}


function * Reset(){
scene.resetSequenceWaitValue();
console.log("Reset. STEP 0");
  ResetView();
}


function * PositionView(){
scene.resetSequenceWaitValue();
console.log("PositionView. STEP 0");
}


function * Configuration(){
scene.resetSequenceWaitValue();
console.log("Configuration. STEP 0");
}


function * CameraandDisplay(){
scene.resetSequenceWaitValue();
console.log("CameraandDisplay. STEP 0");
  CameraandDisplayView();
}


function * CameraandDisplayZoomout(){
scene.resetSequenceWaitValue();
console.log("CameraandDisplayZoomout. STEP 0");
  CameraandDisplayZoomoutView();
}


false || false;

mob || getcurreentwidth <= 1280;

function * Tent(){
scene.resetSequenceWaitValue();
console.log("Tent. STEP 0");
  TentView();
}


function * SmartCardReader(){
scene.resetSequenceWaitValue();
console.log("SmartCardReader. STEP 0");
  SmartCardReaderSeq();
}


function * NoSmartCardReader(){
scene.resetSequenceWaitValue();
console.log("NoSmartCardReader. STEP 0");
  NoSmartCardReaderSeq();
}


function * Close_Lid(){
scene.resetSequenceWaitValue();
console.log("Close_Lid. STEP 0");
  Close_LidSeq();
}


function * FPRON(){
scene.resetSequenceWaitValue();
console.log("FPRON. STEP 0");
  FPRONSeq();
}


function * FPROFF(){
scene.resetSequenceWaitValue();
console.log("FPROFF. STEP 0");
  FPROFFSeq();
}


function * Keyboard(){
scene.resetSequenceWaitValue();
console.log("Keyboard. STEP 0");
  KeyboardView();
}


function * KeyboardZoomOut(){
scene.resetSequenceWaitValue();
console.log("KeyboardZoomOut. STEP 0");
  KeyboardZoomOutView();
}


function * backllit(){
scene.resetSequenceWaitValue();
console.log("backllit. STEP 0");
  if (backlightStatus == 'on') {
    setTimeout(function(){;
    scene.applySequence(Backlight_OFF);

    backlightStatus = 'off';
    },100);
  } else {
    setTimeout(function(){;
    scene.applySequence(Backlight_ON);

    backlightStatus = 'on';
    },100);
  }
}


function * Stand(){
scene.resetSequenceWaitValue();
console.log("Stand. STEP 0");
  StandView();
}


function * WLAN_Back(){
scene.resetSequenceWaitValue();
console.log("WLAN_Back. STEP 0");
  WLAN_Back_Seq();
}


function * Backlight_ON(){
scene.resetSequenceWaitValue();
console.log("Backlight_ON. STEP 0");
  Backlight_ON_seq();
}


function * WWAN_Back(){
scene.resetSequenceWaitValue();
console.log("WWAN_Back. STEP 0");
  WWAN_Back_Seq();
}


function * RightPorts(){
scene.resetSequenceWaitValue();
console.log("RightPorts. STEP 0");
  RightPortsView();
}


function * RightPortsZoomOut(){
scene.resetSequenceWaitValue();
console.log("RightPortsZoomOut. STEP 0");
  RightPortsZoomOutView();
}


function * Tablet(){
scene.resetSequenceWaitValue();
console.log("Tablet. STEP 0");
  TabletView();
}


function * Backlight_OFF(){
scene.resetSequenceWaitValue();
console.log("Backlight_OFF. STEP 0");
  Backlight_OFF_seq();
}


function * LeftPorts(){
scene.resetSequenceWaitValue();
console.log("LeftPorts. STEP 0");
  LeftPortsView();
}


function * LeftPortsZoomOut(){
scene.resetSequenceWaitValue();
console.log("LeftPortsZoomOut. STEP 0");
  LeftPortsZoomOutView();
}


function * Back(){
scene.resetSequenceWaitValue();
console.log("Back. STEP 0");
  BackSeq();
}
