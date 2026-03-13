function addSequencePause(delayInMS){
  scene.sequenceReady = false;
  setTimeout(function () {
      scene.sequenceReady = true;
      scene.sequenceReadyCounter++;
      scene.clearRefine();
  }, delayInMS);
}


//USAGE: 
//scene.applySequence(sequence01);

