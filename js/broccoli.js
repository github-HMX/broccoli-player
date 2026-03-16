//Broccoli
var broccoliVersion = "1.0.2"
var broccoliWorkspace = Blockly.inject('blocklyDiv',
    {media: './media/',
      toolbox: document.getElementById('toolbox'),
      zoom:
      {controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
      pinch: true},
  trashcan: true
    });
Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), broccoliWorkspace);
var workspaceSearch;
try{
  workspaceSearch = new WorkspaceSearch(broccoliWorkspace);
  workspaceSearch.init();
  workspaceSearch.open();
  console.log("workspaceSearch initialized");
}
catch(e){
  console.error("workspaceSearch not initialized");
  console.error(e);
}

var minimap;
try{
  minimap = new PositionedMinimap(broccoliWorkspace);
  minimap.init();
  workspaceSearch.open();
  console.log("minimap initialized");
}
catch(e){
  console.error("minimap not initialized");
  console.error(e);
}


document.getElementById("btnLoadWS").style.width = document.getElementById("btnLoadWSBtn").clientWidth.toString() + "px";
document.getElementById("btnLoadWS").style.height = document.getElementById("btnLoadWSBtn").offsetHeight.toString() + "px";

/*
<!-- ADD one btn-group block per master sequence -->
  <div class="btn-group">
    <button id="btn_range_hood_cam2" type="button" class="btn btn-primary btn-sm">range_hood_cam2</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu dropdown-menu-right" id="sequencesToPlayRangeHood" style="">
      <button id="btn_rangehood_SHC2432FS_vis2" class="dropdown-item sequenceItem" type="button">rangehood_SHC2432FS_vis2</button>
    </div>
  </div>


  <div class="btn-group">
    <button id="btn_range_hood_cam2" type="button" class="btn btn-primary btn-sm">range_hood_cam2</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <!-- <button id="btn_range_hood_cam2" class="btn btn-primary btn-sm dropdown-toggle sequenceItem" type="button" data-toggle="dropdown" aria-expanded="false">range_hood_cam2</button> -->
    <div class="dropdown-menu dropdown-menu-right" id="sequencesToPlayRangeHood" style="">
      <button id="btn_rangehood_SHC2432FS_vis2" class="dropdown-item sequenceItem" type="button">rangehood_SHC2432FS_vis2</button>
    </div>
  </div>
*/

function createMasterPlaySequenceOption(sequenceName){

  //var checkbox_playchildren = block.getFieldValue('PlayChildren') === 'TRUE';

  var div = document.getElementById("blocklyBtn");
  //<div class="btn-group">
  var masterDiv = document.createElement("div");
  masterDiv.className = "btn-group masterDiv";
  masterDiv.parentDiv = div;
  div.appendChild(masterDiv);

  // <button id="btn_range_hood_cam2" type="button" class="btn btn-primary btn-sm">range_hood_cam2</button>
  var btn = document.createElement("button");
  btn.id = "btn_master" + sequenceName;
  btn.innerHTML = sequenceName;
  btn.className = "btn btn-primary btn-sm";
  btn.type = "button";
  btn.addEventListener("click", function () {
    runCode(this.innerHTML);
  });
  btn.parentDiv = masterDiv;

//<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//<span class="sr-only">Toggle Dropdown</span>
//</button>
  var btnDrop = document.createElement("button");
  btnDrop.id = "btn" + sequenceName;
  //btnDrop.innerHTML = sequenceName;
  btnDrop.className = "btn btn-primary dropdown-toggle dropdown-toggle-split";
  //btnDrop.data-toggle="dropdown";
  btnDrop.setAttribute("data-toggle", "dropdown");
  btnDrop.setAttribute("aria-haspopup", "true");
  btnDrop.setAttribute("aria-expanded", "false");
  //btnDrop.innerText="Toggle Dropdown";

  btnDrop.type = "button";
  btnDrop.parentDiv = masterDiv;

  masterDiv.appendChild(btn);
  masterDiv.appendChild(btnDrop);


  //<div class="dropdown-menu dropdown-menu-right" id="sequencesToPlayRangeHood" style="">
      //<button id="btn_rangehood_SHC2432FS_vis2" class="dropdown-item sequenceItem" type="button">rangehood_SHC2432FS_vis2</button>
  //</div>
  var dropDownDiv = document.createElement("div");
  dropDownDiv.className = "dropdown-menu dropdown-menu-right";
  dropDownDiv.id = "sequence_" + sequenceName;
  dropDownDiv.parentDiv = masterDiv;
  masterDiv.appendChild(dropDownDiv);
}

function createPlaySequenceOption(sequenceName, isMaster, masterName){
  if (isMaster)
    return createMasterPlaySequenceOption(sequenceName);
  //<div class="dropdown-menu dropdown-menu-right" id="sequencesToPlayRangeHood" style="">
      //<button id="btn_rangehood_SHC2432FS_vis2" class="dropdown-item sequenceItem" type="button">rangehood_SHC2432FS_vis2</button>
  //</div>
  var masterDivName = "sequence_" + masterName;
  var div = document.getElementById(masterDivName);
  var btn = document.createElement("button");
  btn.id = "btn_" + sequenceName;
  btn.innerHTML = sequenceName;
  btn.className = "dropdown-item sequenceItem";
  btn.type = "button";
  btn.addEventListener("click", function () {
    runCode(this.innerHTML);
  });
  btn.parentDiv = div;
  div.appendChild(btn);
}

function createMasterHotspotOption(){
  var div = document.getElementById("blocklyBtn");
  var masterDiv = document.createElement("div");
  masterDiv.className = "btn-group masterDiv";
  masterDiv.parentDiv = div;
  div.appendChild(masterDiv);

  var btn = document.createElement("button");
  btn.id = "btn_masterHotspotParent";
  btn.innerHTML = "Hotspots";
  btn.className = "btn btn-secondary btn-sm";
  btn.type = "button";
  btn.addEventListener("click", function () {
    //runCode(this.innerHTML);
  });
  btn.parentDiv = masterDiv;

  var btnDrop = document.createElement("button");
  btnDrop.id = "btnHotspotParent";
  btnDrop.className = "btn btn-secondary dropdown-toggle dropdown-toggle-split";
  btnDrop.setAttribute("data-toggle", "dropdown");
  btnDrop.setAttribute("aria-haspopup", "true");
  btnDrop.setAttribute("aria-expanded", "false");

  btnDrop.type = "button";
  btnDrop.parentDiv = masterDiv;

  masterDiv.appendChild(btn);
  masterDiv.appendChild(btnDrop);

  var dropDownDiv = document.createElement("div");
  dropDownDiv.className = "dropdown-menu dropdown-menu-right pre-scrollable";
  dropDownDiv.id = "hotspot_HotspotParent";
  dropDownDiv.parentDiv = masterDiv;
  masterDiv.appendChild(dropDownDiv);
}

function createHotspotOption(hotspotName){
  var masterDivName = "hotspot_HotspotParent";
  var div = document.getElementById(masterDivName);
  var btn = document.createElement("button");
  btn.id = "btn_" + hotspotName;
  btn.innerHTML = hotspotName;
  btn.className = "dropdown-item sequenceItem";
  btn.type = "button";
  btn.addEventListener("click", function () {
    runHotspotCode(this.innerHTML, this);
  });
  btn.parentDiv = div;
  div.appendChild(btn);
}


function removeDOMElement(elem) {
  elem.parentNode.removeChild(elem);
}

function removeAllPlaySequenceOptions(){
  var div = document.getElementById("sequencesToPlay");
  if (div){
    var sequenceLength = div.children.length-1;
    for (var i=sequenceLength; i>=0; i--)
      removeDOMElement(div.children[0]);
  }
  var divMasters = document.getElementsByClassName("masterDiv");
  var mastersLength = divMasters.length;
  for (var i=0; i<mastersLength; i++){
    removeDOMElement(divMasters[0]);
  }
}

function updateSequencePlayDropDown(){
  var blocks = broccoliWorkspace.getAllBlocks();
  var masterSequences = [];
  var childrenSequences = [];
  for (var i=0; i<blocks.length; i++){
    if (blocks[i].type === "define_sequence"){
      var seq = {};
      seq.text = blocks[i].childBlocks_[0].inputList[0].fieldRow[1].getText();
      seq.isMaster = blocks[i].inputList[2].fieldRow[1].value_;
      seq.masterName = blocks[i].inputList[3].fieldRow[1].value_;
      if (seq.isMaster)
        masterSequences.push(seq);
      else
        childrenSequences.push(seq);
    }
  }

  masterSequences.sort((a, b) => a.text.localeCompare(b.text));
  childrenSequences.sort((a, b) => a.text.localeCompare(b.text));

  for (var i=0; i<masterSequences.length; i++){
    createPlaySequenceOption(masterSequences[i].text, masterSequences[i].isMaster, masterSequences[i].masterName);
  }
  for (var i=0; i<childrenSequences.length; i++){
    createPlaySequenceOption(childrenSequences[i].text, childrenSequences[i].isMaster, childrenSequences[i].masterName);
  }

  //Hotspot list
  var hotspotTag = "HOTSPOT";
  var hotspotList = [];
  for (var h = 0; h < scene._lstInstances.length; h++) {
      if (scene._lstInstances[h].name.toUpperCase().includes(hotspotTag)) {
      if (!scene._lstInstances[h].name.endsWith("-0"))
        hotspotList.push(scene._lstInstances[h].name);
      }
  }
  hotspotList.sort((a, b) => a.localeCompare(b));
  createMasterHotspotOption();
  for (var i=0; i<hotspotList.length; i++){
    createHotspotOption(hotspotList[i]);
  }

}

function refreshSequenceButtons(){
  removeAllPlaySequenceOptions();
  updateSequencePlayDropDown();
}

// var btnPlayDropDown= document.getElementById("btnPlayDropDown");
// btnPlayDropDown.addEventListener("mouseenter", function(){
//   console.log("mouseenter");
//   //list all the Define sequence blocks and fill the dropdown list
//   refreshSequenceButtons();
// });

//***********************************************************************************
//TODO: Custom BLOCK DEFINITION code from BlockFactory
Blockly.Blocks['groupapplystate'] = {
  init: function() {
    this.appendValueInput("state")
        .setCheck("String")
        .appendField("Apply State");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
this.setTooltip("groupApplyState(name of the state, options, callback)");
this.setHelpUrl("dddd");
  }
};
Blockly.Blocks['stopanim'] = {
  init: function() {
    this.appendValueInput("animName")
        .setCheck("String")
        .appendField("Stop Anim");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("getAnim('animName').stop()");
 this.setHelpUrl("dddd");
  }
};
Blockly.Blocks['materialanim'] = {
  init: function() {
    this.appendStatementInput("state")
        .setCheck("groupapplystate")
        .appendField("Animate Material State");
    this.appendValueInput("reverseMode")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Reverse Mode");
    this.appendValueInput("durationMs")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Duration (ms)");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
this.setTooltip("groupApplyState(name of the state, options, callback)");
this.setHelpUrl("dddd");
  }
};


Blockly.Blocks['animnames'] = {
  init: function() {
    // Get the list of states automatically from scene.animObjArray
    var animsArray = [];
    var defaultAnimsArray = [["Open","Open"]];
     if (scene && scene.animObjArray){
       Object.values(scene.animObjArray).forEach(value => {
        if (value.name)
          animsArray.push([value.name,value.name]);
       });
     } else 
    {
      animsArray = defaultAnimsArray;
    }

    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(animsArray), "animOptions");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("List of available animation names");
 this.setHelpUrl("");
  }
};

// Get the list of states automatically from scene._grps
Blockly.Blocks['statenames'] = {
  init: function() {
    var statesArray = [];
    var defaultStatesArray = [["ext_paint:pc0127_standard_vermillionred","ext_paint:pc0127_standard_vermillionred"], ["ext_paint:ec0007e_elite_volcanoyellow","ext_paint:ec0007e_elite_volcanoyellow"], ["ext_paint:ec0027e_elite_vegablue","ext_paint:ec0027e_elite_vegablue"]];
    if (scene && scene._grps){
      Object.keys(scene._grps).forEach(key => {
        statesArray.push([key,key]);
      });
    } else {
      statesArray = defaultStatesArray;
    }
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(statesArray), "stateOptions");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(150);
this.setTooltip("list of available state names");
this.setHelpUrl("");
  }
};

// Get the list of cameras automatically from skin.ui.positions
Blockly.Blocks['cameranames'] = {
  init: function() {
    var cameraArray = [];
    var defaultCameraArray = [["Door_cam","Door_cam"], ["exterior_front","exterior_front"], ["exterior_back","exterior_back"]];
    if (skin && skin.ui && skin.ui.positions){
      Object.keys(skin.ui.positions).forEach(key => {
        //console.log(key, skin.ui.positions[key]);
        cameraArray.push([key,key]);
      });
    } else {
      cameraArray = defaultCameraArray;
    }
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(cameraArray), "cameraOptions");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(150);
this.setTooltip("list of available cameras names");
this.setHelpUrl("");
  }
};

Blockly.Blocks['gotoposintime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go To Camera");
    this.appendValueInput("camera")
        .setCheck("String")
        .appendField("cam:");
    this.appendValueInput("durationMs")
        .setCheck("Number")
        .appendField("durationMs:");
    this.appendValueInput("onComplete")
        .setCheck("String")
        .appendField("onComplete:");
    this.appendValueInput("onSample")
        .setCheck("String")
        .appendField("sampleFunc:");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DON'T Wait")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "noWait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
this.setTooltip("Play camera animation specifying a stored camera name");
this.setHelpUrl("");
  }
};

Blockly.Blocks['gotoposintimeraw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gotoPosInTime");
    this.appendValueInput("xang")
        .setCheck("Number")
        .appendField("xang:");
    this.appendValueInput("yang")
        .setCheck("Number")
        .appendField("yang:");
    this.appendValueInput("xpan")
        .setCheck("Number")
        .appendField("xpan:");
    this.appendValueInput("ypan")
        .setCheck("Number")
        .appendField("ypan:");
    this.appendValueInput("dolly")
        .setCheck("Number")
        .appendField("dolly:");
    this.appendValueInput("durationMs")
        .setCheck("Number")
        .appendField("durationMs:");
    this.appendValueInput("onComplete")
        .setCheck("String")
        .appendField("onComplete:");
    this.appendValueInput("onSample")
        .setCheck("String")
        .appendField("onSample:");
    this.appendValueInput("optional")
        .setCheck(null)
        .appendField("optional:");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DON'T Wait")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "noWait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Play camera animation specifying numerical values");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gotoposintimeintermediate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go To Camera With Intermediate");
    this.appendValueInput("camera")
        .setCheck("String")
        .appendField("cam:");
    this.appendValueInput("cameraI")
        .setCheck("String")
        .appendField("cam Int:");
    this.appendValueInput("durationMs")
        .setCheck("Number")
        .appendField("durationMs:");
    this.appendValueInput("onComplete")
        .setCheck("String")
        .appendField("onComplete:");
    this.appendValueInput("onSample")
        .setCheck("String")
        .appendField("sampleFunc:");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DON'T Wait")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "noWait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
this.setTooltip("Play camera animation specifying a stored camera name and an intermediate camera name");
this.setHelpUrl("");
  }
};

Blockly.Blocks['gotoposintimeintermediateraw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gotoPosInTimeWithIntermediate");
    this.appendValueInput("xang")
        .setCheck("Number")
        .appendField("xang:");
    this.appendValueInput("yang")
        .setCheck("Number")
        .appendField("yang:");
    this.appendValueInput("xpan")
        .setCheck("Number")
        .appendField("xpan:");
    this.appendValueInput("ypan")
        .setCheck("Number")
        .appendField("ypan:");
    this.appendValueInput("dolly")
        .setCheck("Number")
        .appendField("dolly:");

    this.appendValueInput("xangI")
        .setCheck("Number")
        .appendField("xangI:");
    this.appendValueInput("yangI")
        .setCheck("Number")
        .appendField("yangI:");
    this.appendValueInput("xpanI")
        .setCheck("Number")
        .appendField("xpanI:");
    this.appendValueInput("ypanI")
        .setCheck("Number")
        .appendField("ypanI:");
    this.appendValueInput("dollyI")
        .setCheck("Number")
        .appendField("dollyI:");
    this.appendValueInput("durationMs")
        .setCheck("Number")
        .appendField("durationMs:");
    this.appendValueInput("onComplete")
        .setCheck("String")
        .appendField("onComplete:");
    this.appendValueInput("onSample")
        .setCheck("String")
        .appendField("onSample:");
    this.appendValueInput("optional")
        .setCheck(null)
        .appendField("optional:");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DON'T Wait")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "noWait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Play camera animation specifying numerical values with both, dest and intermediate coordinates");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['applysequence'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Play Sequence");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
this.setTooltip("Apply a sequence of states and/or camera movements previously defined with \"Create new Sequence\"");
this.setHelpUrl("");
  }
};

Blockly.Blocks['sequencepause'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pause");
    this.appendValueInput("delay")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("(ms)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(280);
this.setTooltip("Sequence pause in milliseconds");
this.setHelpUrl("");
  }
};

Blockly.Blocks['define_sequence'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String");
    this.appendStatementInput("sequenceParameter")
        .setCheck(null)
        .appendField("Define Sequence");
    this.appendDummyInput()
        .appendField("Master")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "masterField");
    this.appendDummyInput()
        .appendField("ChildOf")
        .appendField(new Blockly.FieldTextInput(""), "ChildOf");
    this.setInputsInline(true);
    this.setColour(240);
this.setTooltip("Create a new sequence of states and/or camera movements");
this.setHelpUrl("");
//console.log("define_sequence INIT");
  }
  // ,
  // onchange: function() {
  //   console.log("define_sequence ONCHANGE");
  //   console.log("define_sequence:", this.getFieldValue("NAME"));
  //   //var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // }
};

Blockly.Blocks['inline_script'] = {
  init: function() {
      this.appendDummyInput()
        .appendField("Inline Script")
        .appendField(new Blockly.FieldMultilineInput("//Place your Javascript code here;\n//Multiple lines allowed"), "JSCode");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(280);
      this.setTooltip("Place your Javascript code here; Use with caution. No syntax validation.");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['window_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Window Value")
        .appendField("path")
        .appendField(new Blockly.FieldTextInput("selectedConfig.submenu_positionView"), "pathExpr");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(280);
    this.setTooltip("Reads a value from window using a path. Examples: selectedConfig, selectedConfig.submenu_positionView, selectedConfig.menuList[0]");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['set_timeout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Timeout")
        .appendField("store handle as")
        .appendField(new Blockly.FieldTextInput("myTimeout"), "VAR");
    this.appendValueInput("DELAY")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("delay (ms)");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip("Executes the inner blocks after a delay (ms). Stores the handle in a named variable so it can be cancelled with Clear Timeout.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['clear_timeout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear Timeout")
        .appendField("handle")
        .appendField(new Blockly.FieldTextInput("myTimeout"), "VAR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip("Cancels a pending timeout using the handle variable name set in Set Timeout.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['stopanim'] = function(block) {
  var value_animName = Blockly.JavaScript.valueToCode(block, 'animName', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '';
  code += 'scene.addSequenceWaitValue(1);\n';
  code += 'if(scene.animIsPlaying(' + value_animName + ')) {scene.getAnim(' + value_animName + ').stop(); } ' + yieldBlockTerminator;
  return code;
};

Blockly.Blocks['play_animation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play Animation in Time");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Play Children")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "PlayChildren");
    this.appendValueInput("animation")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Animation");
    this.appendValueInput("positionS")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pos");
    this.appendValueInput("durationMs")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Duration (ms)");
    this.appendStatementInput("callBackFunction")
        .setCheck(null)
        .appendField("Callback function");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DON'T Wait")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "noWait");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
 this.setTooltip("groupApplyState(name of the state, options, callback)");
 this.setHelpUrl("dddd");
  }
};

Blockly.Blocks['play_animation_jump'] = {
  init: function() {
  this.appendDummyInput()
    .appendField("Play Animation in Time (Jump)");
  this.appendValueInput("animation")
    .setCheck("String")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Animation");
  this.appendValueInput("positionS")
    .setCheck("Number")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Pos");
  this.appendValueInput("durationMs")
    .setCheck("Number")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Duration (ms)");
  this.appendStatementInput("callBackFunction")
    .setCheck(null)
    .appendField("Callback function");
  this.appendValueInput("numloops")
    .setCheck("Number")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Num Loops");
  this.appendValueInput("onSample")
    .setCheck(null)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("On Sample");
  this.appendValueInput("bypass")
    .setCheck("Boolean")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Bypass");
  this.appendValueInput("previousAnimFrame")
    .setCheck(null)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("From");
  this.appendValueInput("jumpValue")
    .setCheck(null)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Jump");
  this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("DON'T Wait")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "noWait");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setColour(320);
 this.setTooltip("Play all animation children with jump mode and previous frame support");
 this.setHelpUrl("dddd");
  }
};

Blockly.Blocks['setanimuseframes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set Anim Use Frames");
    this.appendValueInput("useFrames")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("Use true if you want all animations to use frames. False will use time");
  }
};

Blockly.Blocks['setrotationcenter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Rotation Center");
    this.appendValueInput("centerX")
        .setCheck("Number")
        .appendField("X:");
    this.appendValueInput("centerY")
        .setCheck("Number")
        .appendField("Y:");
    this.appendValueInput("centerZ")
        .setCheck("Number")
        .appendField("Z:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("setRotationCenter using X,Y,Z coordinates");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setrotationcenterfromobject'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Rotation Center");
    this.appendValueInput("centerObject")
        .setCheck("String")
        .appendField("Object:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("setRotationCenter using Object coordinates");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setdoftargetobject'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set DoF Target");
    this.appendValueInput("DoFObject")
        .setCheck("String")
        .appendField("Object:");
    this.appendValueInput("nearAperture")
        .setCheck("Number")
        .appendField("NearAperture:");
    this.appendValueInput("farAperture")
        .setCheck("Number")
        .appendField("FarAperture:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("set DoF Target Object");
 this.setHelpUrl("");
  }
};

//this._panMax = [16,10];    //[left, bottom];
//this._panMin = [-16,-10];  //[right, top];
Blockly.Blocks['setnavigationlimits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Navigation Limits");
    this.appendValueInput("minRotHorz")
        .setCheck("Number")
        .appendField("minRotH:");
    this.appendValueInput("maxRotHorz")
        .setCheck("Number")
        .appendField("maxRotH:");
    this.appendValueInput("minRotVert")
        .setCheck("Number")
        .appendField("minRotV:");
    this.appendValueInput("maxRotVert")
        .setCheck("Number")
        .appendField("maxRotV:");
    this.appendValueInput("minDolly")
        .setCheck("Number")
        .appendField("minDolly:");
    this.appendValueInput("maxDolly")
        .setCheck("Number")
        .appendField("maxDolly:");
    this.appendValueInput("panLeft")
        .setCheck("Number")
        .appendField("panLeft:");
    this.appendValueInput("panRight")
        .setCheck("Number")
        .appendField("panRight:");
    this.appendValueInput("panBottom")
        .setCheck("Number")
        .appendField("panBottom:");
    this.appendValueInput("panTop")
        .setCheck("Number")
        .appendField("panTop:");
    this.appendValueInput("minDollyEllipticalX")
        .setCheck("Number")
        .appendField("minDollyEllipticalX:");
    this.appendValueInput("minDollyEllipticalZ")
        .setCheck("Number")
        .appendField("minDollyEllipticalZ:");
    this.appendValueInput("minDollyEllipticalOpt")
        .setCheck("Number")
        .appendField("minDollyEllipticalOpt:");
    this.appendValueInput("rotLimitConst")
        .setCheck("Number")
        .appendField("rotLimitConst:");
    this.appendValueInput("rotMinLimitConst")
        .setCheck("Number")
        .appendField("rotMinLimitConst:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("setLimits using min/max in degrees and Dolly limits in distance units. All the parameters are optional.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clearnavigationlimits'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear Navigation Limits");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Clear Navigation Limits");
 this.setHelpUrl("");
  }
};
//***********************************************************************************
var yieldBlockTerminator = '\t\n\t\n';

Blockly.JavaScript['groupapplystate'] = function(block) {
  var value_state = Blockly.JavaScript.valueToCode(block, 'state', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Add extra opts. And callback?
  var opts = {};
  opts.seq = true;
  var opts_stateEnd =  JSON.stringify(opts);

  var code = '';
  code += 'scene.addSequenceWaitValue(1);\n';
  code += 'scene.groupApplyState(' + value_state + ','+ opts_stateEnd +');' + yieldBlockTerminator;
  return code;
};

//Call to animPlayAllChildrenInTime
Blockly.JavaScript['play_animation'] = function(block) {
  var checkbox_playchildren = block.getFieldValue('PlayChildren') === 'TRUE';
  var value_animation = Blockly.JavaScript.valueToCode(block, 'animation', Blockly.JavaScript.ORDER_ATOMIC);
  var value_positions = Blockly.JavaScript.valueToCode(block, 'positionS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_durationms = Blockly.JavaScript.valueToCode(block, 'durationMs', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callbackfunction = Blockly.JavaScript.statementToCode(block, 'callBackFunction');
  var checkbox_nowait = block.getFieldValue('noWait') === 'TRUE';
  var playFunction = checkbox_playchildren ? 'scene.animPlayAllChildrenInTime(' : 'scene.animPlayInTime(';
  var additionalCode = checkbox_playchildren ? '' : ' scene.clearRefine();'
  var strNoWait = checkbox_nowait ? '0' : '1';
  var code = '';
  code += 'scene.addSequenceWaitValue(' + strNoWait + ');\n';
  code += playFunction + value_animation + ',' + value_positions + ',' + value_durationms + ', function(){'+ statements_callbackfunction + '});' + additionalCode;
  if (checkbox_nowait)
    code+= '\n';
  else
    code+= yieldBlockTerminator;
  return code;
};

Blockly.JavaScript['play_animation_jump'] = function(block) {
  var value_animation = Blockly.JavaScript.valueToCode(block, 'animation', Blockly.JavaScript.ORDER_ATOMIC);
  var value_positions = Blockly.JavaScript.valueToCode(block, 'positionS', Blockly.JavaScript.ORDER_ATOMIC);
  var value_durationms = Blockly.JavaScript.valueToCode(block, 'durationMs', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callbackfunction = Blockly.JavaScript.statementToCode(block, 'callBackFunction');
  var value_numloops = Blockly.JavaScript.valueToCode(block, 'numloops', Blockly.JavaScript.ORDER_ATOMIC);
  var value_onsample = Blockly.JavaScript.valueToCode(block, 'onSample', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bypass = Blockly.JavaScript.valueToCode(block, 'bypass', Blockly.JavaScript.ORDER_ATOMIC);
  var value_previousanimframe = Blockly.JavaScript.valueToCode(block, 'previousAnimFrame', Blockly.JavaScript.ORDER_ATOMIC);
  var value_jumpvalue = Blockly.JavaScript.valueToCode(block, 'jumpValue', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_nowait = block.getFieldValue('noWait') === 'TRUE';
  var strNoWait = checkbox_nowait ? '0' : '1';

  if (!value_numloops.length)
    value_numloops = 'undefined';
  if (!value_onsample.length)
    value_onsample = 'undefined';
  if (!value_bypass.length)
    value_bypass = 'true';
  if (!value_previousanimframe.length)
    value_previousanimframe = 'undefined';
  if (!value_jumpvalue.length)
    value_jumpvalue = 'undefined';

  var code = '';
  // code += 'if (currentAnimFrame != previousAnimFrame) {\n';
  code += 'scene.addSequenceWaitValue(' + strNoWait + ');\n';
  code += 'scene.animPlayAllChildrenInTime(' + value_animation + ',' + value_positions + ',' + value_durationms + ', function(){'+ statements_callbackfunction + '}, ' + value_numloops + ', ' + value_onsample + ', ' + value_bypass + ', ' + value_previousanimframe + ', ' + value_jumpvalue + ');\n';
  // code += 'previousAnimFrame = ' + value_positions + ';\n';
  // code += '}';
  if (checkbox_nowait)
    code+= '\n';
  else
    code+= yieldBlockTerminator;
  return code;
};

Blockly.JavaScript['setanimuseframes'] = function(block) {
  var value_useframes = Blockly.JavaScript.valueToCode(block, 'useFrames', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scene.setAnimUseFrames(' + value_useframes + ');\n'; 
  return code;
};

Blockly.JavaScript['materialanim'] = function(block) {
  var statements_state = Blockly.JavaScript.statementToCode(block, 'state');
  var value_reversemode = Blockly.JavaScript.valueToCode(block, 'reverseMode', Blockly.JavaScript.ORDER_ATOMIC);
  var value_durationms = Blockly.JavaScript.valueToCode(block, 'durationMs', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '';
  code += 'scene.addSequenceWaitValue(1);\n';
  code += 'scene.setMaterialTransition(true, ' + value_reversemode +',' + value_durationms + ');\n'; 
  code += statements_state+ yieldBlockTerminator;
  return code;
};

Blockly.JavaScript['animnames'] = function(block) {
  var dropdown_animoptions = block.getFieldValue('animOptions');
  var code = '"' + dropdown_animoptions +'"'; //'...';
  // Changed ORDER_NONE to ORDER_ATOMIC to avoid parenthesis.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['statenames'] = function(block) {
  var dropdown_stateoptions = block.getFieldValue('stateOptions');
  var code = '"' + dropdown_stateoptions +'"'; //'...';
  // Changed ORDER_NONE to ORDER_ATOMIC to avoid parenthesis.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['cameranames'] = function(block) {
  var dropdown_cameraoptions = block.getFieldValue('cameraOptions');
  var code = '"' + dropdown_cameraoptions +'"'; //'...';
  // Changed ORDER_NONE to ORDER_ATOMIC to avoid parenthesis.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['gotoposintime'] = function(block) {
  var value_camera = Blockly.JavaScript.valueToCode(block, 'camera', Blockly.JavaScript.ORDER_ATOMIC);
  var value_durationMs = Blockly.JavaScript.valueToCode(block, 'durationMs', Blockly.JavaScript.ORDER_ATOMIC);
  var value_onsample = Blockly.JavaScript.valueToCode(block, 'onSample', Blockly.JavaScript.ORDER_ATOMIC);
  var value_callback = Blockly.JavaScript.valueToCode(block, 'onComplete', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_nowait = block.getFieldValue('noWait') === 'TRUE';
  value_onsample = value_onsample.replace(/['"]+/g, ''); //Remove quotes from onSample, as it is a function name, not a string
  value_callback = value_callback.replace(/['"]+/g, ''); //Remove quotes from onComplete, as it is a function name, not a string
  var strNoWait = checkbox_nowait ? '0' : '1';
  var code = '';
  code += 'scene.addSequenceWaitValue(' + strNoWait + ');\n';
  code +='scene.gotoUINamedPosInTime(' + value_camera + ', '+ value_durationMs;
  if (value_callback.length)
    code += ', ' + value_callback;
  else
    code += ', undefined ';
  if (value_onsample.length)
    code += ', ' + value_onsample;
  code += ');';
  if (checkbox_nowait)
    code+= '\n';
  else
    code+= yieldBlockTerminator;
  return code;
};

//gotoPosInTime = function (xang, yang, xpan, ypan, dolly, durationInMS, onComplete, onSample, optional)
Blockly.JavaScript['gotoposintimeraw'] = function(block) {
  var value_xang = Blockly.JavaScript.valueToCode(block, 'xang', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yang = Blockly.JavaScript.valueToCode(block, 'yang', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xpan = Blockly.JavaScript.valueToCode(block, 'xpan', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ypan = Blockly.JavaScript.valueToCode(block, 'ypan', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dolly = Blockly.JavaScript.valueToCode(block, 'dolly', Blockly.JavaScript.ORDER_ATOMIC);
  var value_durationms = Blockly.JavaScript.valueToCode(block, 'durationMs', Blockly.JavaScript.ORDER_ATOMIC);
  var value_oncomplete = Blockly.JavaScript.valueToCode(block, 'onComplete', Blockly.JavaScript.ORDER_ATOMIC);
  var value_onsample = Blockly.JavaScript.valueToCode(block, 'onSample', Blockly.JavaScript.ORDER_ATOMIC);
  var value_optional = Blockly.JavaScript.valueToCode(block, 'optional', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_nowait = block.getFieldValue('noWait') === 'TRUE';
  var strNoWait = checkbox_nowait ? '0' : '1';

  var code = '';
  code += 'scene.addSequenceWaitValue(' + strNoWait + ');\n';
  code += 'scene.gotoPosInTime(' + value_xang + ', ';
  code+= value_yang + ', ';
  code+= value_xpan + ', ';
  code+= value_ypan + ', ';
  code+= value_dolly + ', ';
  code+= value_durationms;
  if (!value_oncomplete.length)
    value_oncomplete = 'undefined';
    code += ', ' + value_oncomplete;
  
  if (!value_onsample.length)
    value_onsample = 'undefined';
  code += ', ' + value_onsample;
  
  if (!value_optional.length)
    value_optional = 'undefined';
  code += ', ' + value_optional;
  
  code += ');';
  if (checkbox_nowait)
    code+= '\n';
  else
    code+= yieldBlockTerminator;
  return code;
};


Blockly.JavaScript['gotoposintimeintermediate'] = function(block) {
  var value_camera = Blockly.JavaScript.valueToCode(block, 'camera', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cameraI = Blockly.JavaScript.valueToCode(block, 'cameraI', Blockly.JavaScript.ORDER_ATOMIC);
  var value_durationMs = Blockly.JavaScript.valueToCode(block, 'durationMs', Blockly.JavaScript.ORDER_ATOMIC);
  var value_onsample = Blockly.JavaScript.valueToCode(block, 'onSample', Blockly.JavaScript.ORDER_ATOMIC);
  var value_callback = Blockly.JavaScript.valueToCode(block, 'onComplete', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_nowait = block.getFieldValue('noWait') === 'TRUE';
  value_onsample = value_onsample.replace(/['"]+/g, ''); //Remove quotes from onSample, as it is a function name, not a string
  value_callback = value_callback.replace(/['"]+/g, ''); //Remove quotes from onComplete, as it is a function name, not a string
  var strNoWait = checkbox_nowait ? '0' : '1';
  var code = '';
  code += 'scene.addSequenceWaitValue(' + strNoWait + ');\n';
  code +='scene.gotoUINamedPosInTimeWithIntermediate(' + value_camera + ', '+ value_cameraI + ', '+ value_durationMs;
  if (value_callback.length)
    code += ', ' + value_callback;
  else
    code += ', undefined ';
  if (value_onsample.length)
    code += ', ' + value_onsample;
  code += ');';
  if (checkbox_nowait)
    code+= '\n';
  else
    code+= yieldBlockTerminator;
  return code;
};

//gotoPosInTime = function (xang, yang, xpan, ypan, dolly, durationInMS, onComplete, onSample, optional)
Blockly.JavaScript['gotoposintimeintermediateraw'] = function(block) {
  var value_xang = Blockly.JavaScript.valueToCode(block, 'xang', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yang = Blockly.JavaScript.valueToCode(block, 'yang', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xpan = Blockly.JavaScript.valueToCode(block, 'xpan', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ypan = Blockly.JavaScript.valueToCode(block, 'ypan', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dolly = Blockly.JavaScript.valueToCode(block, 'dolly', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xangI = Blockly.JavaScript.valueToCode(block, 'xangI', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yangI = Blockly.JavaScript.valueToCode(block, 'yangI', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xpanI = Blockly.JavaScript.valueToCode(block, 'xpanI', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ypanI = Blockly.JavaScript.valueToCode(block, 'ypanI', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dollyI = Blockly.JavaScript.valueToCode(block, 'dollyI', Blockly.JavaScript.ORDER_ATOMIC);
  var value_durationms = Blockly.JavaScript.valueToCode(block, 'durationMs', Blockly.JavaScript.ORDER_ATOMIC);
  var value_oncomplete = Blockly.JavaScript.valueToCode(block, 'onComplete', Blockly.JavaScript.ORDER_ATOMIC);
  var value_onsample = Blockly.JavaScript.valueToCode(block, 'onSample', Blockly.JavaScript.ORDER_ATOMIC);
  var value_optional = Blockly.JavaScript.valueToCode(block, 'optional', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_nowait = block.getFieldValue('noWait') === 'TRUE';
  var strNoWait = checkbox_nowait ? '0' : '1';

  var code = '';
  code += 'scene.addSequenceWaitValue(' + strNoWait + ');\n';
  code += 'scene.gotoPosInTimeWithIntermediate(' + value_xang + ', ';
  code+= value_yang + ', ';
  code+= value_xpan + ', ';
  code+= value_ypan + ', ';
  code+= value_dolly + ', ';
  code+= value_xangI + ', ';
  code+= value_yangI + ', ';
  code+= value_xpanI + ', ';
  code+= value_ypanI + ', ';
  code+= value_dollyI + ', ';
  code+= value_durationms;
  if (!value_oncomplete.length)
    value_oncomplete = 'undefined';
    code += ', ' + value_oncomplete;
  
  if (!value_onsample.length)
    value_onsample = 'undefined';
  code += ', ' + value_onsample;
  
  if (!value_optional.length)
    value_optional = 'undefined';
  code += ', ' + value_optional;
  
  code += ');';
  if (checkbox_nowait)
    code+= '\n';
  else
    code+= yieldBlockTerminator;
  return code;
};

Blockly.JavaScript['applysequence'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  value_name = value_name.replace(/['"]+/g, ''); //Remove quotes from sequence name, as it is a function name, not a string
  // TODO: Assemble JavaScript into code variable.
  var code = 'scene.applySequence(' + value_name + ');' + yieldBlockTerminator;
  return code;
};

Blockly.JavaScript['sequencepause'] = function(block) {
  //var number_delayms = block.getFieldValue('delayms');
  var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);

  var code = '';
  code += 'scene.addSequenceWaitValue(1);\n';
  code += 'addSequencePause(';
    //code += number_delayms.toString();
    code += value_delay;
    code += ');' + yieldBlockTerminator;
  return code;
};

Blockly.JavaScript['define_sequence'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_sequenceparameter = Blockly.JavaScript.statementToCode(block, 'sequenceParameter');
  value_name = value_name.replace(/['"]+/g, ''); //Remove quotes from sequence name, as it is a function name, not a string
  //TODO: Split by statements_sequenceparameter  blockTerminator
  var codeStatements = statements_sequenceparameter.split('\t\n  \t\n  ');
  
  var code = 'function * ' + value_name + '(){\n';
  var i=0;
  //Init sequenceStepWait and counter
  code += 'scene.resetSequenceWaitValue();\n'; 

  for(i=0; i < codeStatements.length - 1; i++){
    code += 'console.log("'+ value_name +'. STEP '+ i +'");\n';
    code += codeStatements[i];
    code += '\nyield 0;\n';
  }
  i = codeStatements.length - 1;
  code += 'console.log("'+ value_name +'. STEP '+ i +'");\n';
  code += codeStatements[i];
  code += '}' + yieldBlockTerminator;
  //var code = statements_sequenceparameter;
  return code;
};

Blockly.JavaScript['inline_script'] = function(block) {
  var text_jscode = block.getFieldValue('JSCode');
  // TODO: Assemble JavaScript into code variable.
  var code = text_jscode + ";\n";
  return code;
};

Blockly.JavaScript['window_value'] = function(block) {
  var pathExpr = (block.getFieldValue('pathExpr') || '').trim();
  var normalized = pathExpr.replace(/^window(?=\.|\[|$)/, '');
  var code = 'window';

  if (normalized.length) {
    if (normalized.charAt(0) === '[' || normalized.charAt(0) === '.')
      code += normalized;
    else
      code += '.' + normalized;
  }

  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['set_timeout'] = function(block) {
  var varName = block.getFieldValue('VAR') || 'myTimeout';
  var delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var statements = Blockly.JavaScript.statementToCode(block, 'DO');
  var code = varName + ' = setTimeout(function() {\n' + statements + '}, ' + delay + ');\n';
  return code;
};

Blockly.JavaScript['clear_timeout'] = function(block) {
  var varName = block.getFieldValue('VAR') || 'myTimeout';
  var code = 'clearTimeout(' + varName + ');\n';
  return code;
};

Blockly.JavaScript['setrotationcenter'] = function(block) {
  var value_centerx = Blockly.JavaScript.valueToCode(block, 'centerX', Blockly.JavaScript.ORDER_ATOMIC);
  var value_centery = Blockly.JavaScript.valueToCode(block, 'centerY', Blockly.JavaScript.ORDER_ATOMIC);
  var value_centerz = Blockly.JavaScript.valueToCode(block, 'centerZ', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scene._nav.SetRotationCenter(';
    code += '[';
    code += value_centerx + ',';
    code += value_centery + ',';
    code += value_centerz;
    code += ']);\n';
  return code;
};

Blockly.JavaScript['setrotationcenterfromobject'] = function(block) {
  var value_centerobject = Blockly.JavaScript.valueToCode(block, 'centerObject', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'scene._nav.SetRotationCenter(scene.getObjectLocation(';
    code += value_centerobject;
    code += ', true));\n';
  return code;
};

Blockly.JavaScript['setdoftargetobject'] = function(block) {
  var value_dofobject = Blockly.JavaScript.valueToCode(block, 'DoFObject', Blockly.JavaScript.ORDER_ATOMIC);
  var value_nearaperture = Blockly.JavaScript.valueToCode(block, 'nearAperture', Blockly.JavaScript.ORDER_ATOMIC);
  var value_faraperture = Blockly.JavaScript.valueToCode(block, 'farAperture', Blockly.JavaScript.ORDER_ATOMIC);
  //TODO: modify nearaperture and faraperture, extending setDoFTargetObject functionallity,
  // So it keeps the old near/far values if nothing is passed as near/far parameters
  if (!value_nearaperture.length)
    value_nearaperture = 'undefined';
  if (!value_faraperture.length)
    value_faraperture = 'undefined';

  var code = 'scene.setDoFTargetObject(';
    code += value_dofobject;
    code += ', ' + value_nearaperture;
    code += ', ' + value_faraperture;
    code += ');\n';
  return code;
};

Blockly.JavaScript['setnavigationlimits'] = function(block) {
  var value_minrothorz = Blockly.JavaScript.valueToCode(block, 'minRotHorz', Blockly.JavaScript.ORDER_ATOMIC);
  var value_maxrothorz = Blockly.JavaScript.valueToCode(block, 'maxRotHorz', Blockly.JavaScript.ORDER_ATOMIC);
  var value_minrotvert = Blockly.JavaScript.valueToCode(block, 'minRotVert', Blockly.JavaScript.ORDER_ATOMIC);
  var value_maxrotvert = Blockly.JavaScript.valueToCode(block, 'maxRotVert', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mindolly = Blockly.JavaScript.valueToCode(block, 'minDolly', Blockly.JavaScript.ORDER_ATOMIC);
  var value_maxdolly = Blockly.JavaScript.valueToCode(block, 'maxDolly', Blockly.JavaScript.ORDER_ATOMIC);
  var value_panleft = Blockly.JavaScript.valueToCode(block, 'panLeft', Blockly.JavaScript.ORDER_ATOMIC);
  var value_panright = Blockly.JavaScript.valueToCode(block, 'panRight', Blockly.JavaScript.ORDER_ATOMIC);
  var value_panbottom = Blockly.JavaScript.valueToCode(block, 'panBottom', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pantop = Blockly.JavaScript.valueToCode(block, 'panTop', Blockly.JavaScript.ORDER_ATOMIC);
  var value_minDollyEllipticalX = Blockly.JavaScript.valueToCode(block, 'minDollyEllipticalX', Blockly.JavaScript.ORDER_ATOMIC);
  var value_minDollyEllipticalZ = Blockly.JavaScript.valueToCode(block, 'minDollyEllipticalZ', Blockly.JavaScript.ORDER_ATOMIC);
  var value_minDollyEllipticalOpt = Blockly.JavaScript.valueToCode(block, 'minDollyEllipticalOpt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotLimitConst = Blockly.JavaScript.valueToCode(block, 'rotLimitConst', Blockly.JavaScript.ORDER_ATOMIC);
  var value_rotMinLimitConst = Blockly.JavaScript.valueToCode(block, 'rotMinLimitConst', Blockly.JavaScript.ORDER_ATOMIC);
  if (!value_minrothorz.length)
    value_minrothorz = 'undefined';
  if (!value_maxrothorz.length)
    value_maxrothorz = 'undefined';
  if (!value_minrotvert.length)
    value_minrotvert = 'undefined';
  if (!value_maxrotvert.length)
    value_maxrotvert = 'undefined';
  if (!value_mindolly.length)
    value_mindolly = 'undefined';
  if (!value_maxdolly.length)
    value_maxdolly = 'undefined';
  if (!value_panleft.length)
    value_panleft = 'undefined';
  if (!value_panright.length)
    value_panright = 'undefined';
  if (!value_panbottom.length)
    value_panbottom = 'undefined';
  if (!value_pantop.length)
    value_pantop = 'undefined';
  if (!value_minDollyEllipticalX.length)
    value_minDollyEllipticalX = 'undefined';
  if (!value_minDollyEllipticalZ.length)
    value_minDollyEllipticalZ = 'undefined';
  if (!value_minDollyEllipticalOpt.length)
    value_minDollyEllipticalOpt = 'undefined';
  if (!value_rotLimitConst.length)
    value_rotLimitConst = 'undefined';
  if (!value_rotMinLimitConst.length)
    value_rotMinLimitConst = 'undefined';

  var code = 'scene._nav.SetLimits(';
  code += value_minrothorz + ',';
  code += value_maxrothorz + ',';
  code += value_minrotvert + ',';
  code += value_maxrotvert + ',';
  code += value_mindolly + ',';
  code += value_maxdolly + ',';
  code += value_panleft + ',';
  code += value_panright + ',';
  code += value_panbottom + ',';
  code += value_pantop+ ',';
  code += value_minDollyEllipticalX+ ',';
  code += value_minDollyEllipticalZ+ ',';
  code += value_minDollyEllipticalOpt+ ',';
  code += value_rotLimitConst+ ',';
  code += value_rotMinLimitConst
  code += ');\n';
  return code;
};

Blockly.JavaScript['clearnavigationlimits'] = function(block) {
  var code = 'scene._nav.ClearLimits();\n';
  return code;
};
//***********************************************************************************

function getCode(){
  var code = Blockly.JavaScript.workspaceToCode(broccoliWorkspace);
  return code;
}


function saveWorkspace() {
  if (typeof(Storage) !== "undefined")
  {
    var xmlWorkspace = Blockly.Xml.workspaceToDom(broccoliWorkspace);
    /*var filename = prompt('Enter the file name under which to save your current Broccoli Workspace.', 'sequence.xml');
    // Download file if all necessary parameters are provided.
    if (filename) {
      localStorage.setItem(filename, Blockly.Xml.domToText(xmlWorkspace));
      //broccoliWorkspace.clear(); //??
    }*/
    var filename = "workspace_sequence.xml";
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(Blockly.Xml.domToText(xmlWorkspace)));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}

document.getElementsByName('btnLoadWS')[0].addEventListener('change', function(){
  if(document.querySelector("#btnLoadWS").files.length === 0) {
    alert('Error : No file selected');
    return;
  }

  broccoliWorkspace.clear();

  // file selected by user
  let file = document.querySelector("#btnLoadWS").files[0];

  // new FileReader object
  let reader = new FileReader();
  // event fired when file reading finished
  reader.addEventListener('load', function(e) {
    let text = e.target.result;
    var xmlWorkspace = Blockly.utils.xml.textToDom(text);//var xmlWorkspace = Blockly.Xml.textToDom(text);
    Blockly.Xml.domToWorkspace( xmlWorkspace, broccoliWorkspace);
    //update sequences
    refreshSequenceButtons();
  });

  // event fired when file reading failed
  reader.addEventListener('error', function() {
    alert('Error : Failed to read file');
  });

  // read file as text file
  reader.readAsText(file);
});

// function onSequenceNameChanged(event) {
//   console.log('EVENT:', event);
//   if (event.type !== Blockly.Events.BLOCK_CHANGE)
//     return;
//   var isDefineSequenceChange = event.blockId && event.blockId.parentBlock_ && broccoliWorkspace.getBlockById(event.blockId).parentBlock_.type === "define_sequence";
//   if (isDefineSequenceChange && event.element === 'field' &&
//       event.name === 'TEXT') {
//     console.log('Sequence name changed to:', event.newValue);
//     //removeAllPlaySequenceOptions();
//     //workspace.removeChangeListener(onSequenceNameChanged);
//   }
// }
// broccoliWorkspace.addChangeListener(onSequenceNameChanged);

function showCode() {
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = getCode();
  alert(code);
}

function hideBlockly(){
    document.getElementById("blocklyDiv").style.display = 'none';
    document.getElementById("btnToggleVis").classList.add("fa-eye");
    document.getElementById("btnToggleVis").classList.remove("fa-eye-slash");
}

function runCode(sequenceName) {
  hideBlockly();
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap === 0) throw "Infinite loop.";\n';
  var code = getCode();

  if (sequenceName && sequenceName.length)
    code += "scene.applySequence(" + sequenceName + ");";
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    //console.log(code);
    eval(code);
  } catch (e) {
    alert(e);
  }
}

function runHotspotCode(objName, button) {
  hideBlockly();
  // Generate JavaScript code and run it.
  var display = true;
  if (button.classList.contains("active")){
    display = false;
    button.classList.remove("active");
  } else {
    button.classList.add("active");
  }
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap === 0) throw "Infinite loop.";\n';
  var code = "";
  if (objName && objName.length){
    code += "var instanceObj = scene.getInstanceByName(objName, scene);\n";
    code += "if (instanceObj != undefined)\n";
    code += "scene.recurseSetVisible(instanceObj, "+ display +");\n";
    code += "var objNameChild = objName + '-0';\n";
    code += "var instanceObjChild = scene.getInstanceByName(objNameChild, scene);\n";
    code += "if (instanceObjChild != undefined)\n";
    code += "scene.recurseSetVisible(instanceObjChild, "+ display +");\n";
    code += "scene.clearRefine();\n";
  }
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    //console.log(code);
    eval(code);
  } catch (e) {
    alert(e);
  }
}

function exportCode() {
  // Generate JavaScript code and save it to local file.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = getCode();
  var filename = prompt('Enter the file name under which to save your sequence to Javascript code.', 'sequence.js');
  // Download file if all necessary parameters are provided.
  if (filename) {
    var element = document.createElement('a');
    //element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(code)));
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}

function toggleBlocklyVisibility(){
  if (document.getElementById("blocklyDiv").style.display === 'none'){
    document.getElementById("blocklyDiv").style.display = 'block';
    document.getElementById("btnToggleVis").classList.remove("fa-eye");
    document.getElementById("btnToggleVis").classList.add("fa-eye-slash");
  }
  else{
    hideBlockly();
  }
}

// We need the skin (not visible) in order to use scene.gotoUINamedPosInTime 
window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    if (typeof(skin) == "undefined")
      skin = new infinityrt_skin("./model_gl/config.json", false); 
  }, 500);
});