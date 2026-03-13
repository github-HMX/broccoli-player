This is the main controller script for your Broccoli Blockly editor: broccoli.js.

In short, it does 4 big jobs:

Initializes Blockly UI and workspace tools
It sets up Blockly, workspace search, minimap, load/save workspace XML, and the sequence/hotspot dropdown buttons.

Defines custom Blockly blocks
It registers blocks like Play Animation, Go To Camera, Define Sequence, Apply State, Sequence Pause, etc.

Generates executable JavaScript from blocks
It maps each custom block to scene API calls (for example scene.animPlayAllChildrenInTime, scene.gotoUINamedPosInTime, scene.groupApplyState, scene.applySequence).

Runs/exports the generated code
It builds code from the workspace, evals it to run sequences/hotspots, and can export JS or workspace XML.

The selected symbol animPlayAllChildrenInTime is the generated call used when the Play Children checkbox is enabled in the Play Animation block.