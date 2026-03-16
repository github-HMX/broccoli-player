# Broccoli Player

A visual scripting editor built on top of [Google Blockly](https://developers.google.com/blockly) for authoring and executing 3D scene sequences in an InfinityRT/HMX WebGL viewer.

---

## Overview

Broccoli Player embeds a Blockly workspace directly over a 3D WebGL canvas. Users build sequences visually using drag-and-drop blocks, then run or export the generated JavaScript to control animations, camera movements, material states, and scene logic — no hand-coding required.

---

## File Structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Main entry point — loads Blockly, defines the toolbox XML, bootstraps the editor |
| `js/broccoli.js` | All custom Blockly block definitions + JavaScript code generators |
| `js/broccoli-nw.js` | NW.js desktop variant of `broccoli.js` (trimmed version) |
| `js/gl_script.js` | WebGL scene initialisation and InfinityRT scene API |
| `js/libRT.js` | InfinityRT runtime helpers |
| `js/generator.js` | Blockly workspace-to-code utilities |
| `js/sequences.js` | Sequence management helpers |
| `js/InfinityRT_Helpers.js` | Common scene helper functions |
| `RT_Navigation.js` | Camera navigation controller |
| `model_gl/` | 3D model assets, config, skin, and level data |
| `XML/` | Example workspace XML files |

---

## Toolbar Buttons

| Button | Action |
|---|---|
| Eye | Show / hide the Blockly panel |
| Download | Save workspace as XML |
| Upload | Load a workspace XML file |
| `</>` | Preview generated JavaScript code |
| Refresh | Rebuild the sequence run buttons |
| Export | Export generated code to a `.js` file |

---

## Toolbox Categories

### Logic / Loops / Math / Text / Variables / Functions
Standard Blockly built-in categories.

---

### HMX scene

Custom blocks for controlling the 3D scene.

#### `define_sequence`
Defines a named sequence to be registered and run later.
- Input: **Name** (string)
- Generated: `addSequence(name, function(){ ... })`

#### `applysequence`
Executes a previously defined sequence by name.
- Input: **Name** (string)
- Generated: `applySequenceByName(name)`

#### `groupapplystate`
Applies a named visual state to a group of objects.
- Input: **state** (statenames block)
- Generated: `scene.groupApplyState(state)`

#### `materialanim`
Runs a material animation to a target state over a duration, with optional reverse mode.
- Inputs: **state**, **reverseMode** (boolean), **durationMs** (number)
- Statement body: state blocks
- Generated: `scene.materialAnimToState(...)`

#### `play_animation`
Plays an animation on all children of a node over a specified duration, from a given position.
- Fields: **Play Children** (checkbox)
- Inputs: **animation**, **positionS**, **durationMs**, callback statement
- Generated: `scene.animPlayAllChildrenInTime(...)` or `scene.animPlayInTime(...)`

#### `play_animation_jump`
Like `play_animation` but with jump-to-frame support and a previous-frame guard (skips if already at target frame).
- Inputs: **animation**, **positionS**, **durationMs**, **callBackFunction** (statement), **numloops**, **onSample**, **bypass**, **previousAnimFrame**, **jumpValue**
- Field: **DON'T Wait** (checkbox) — skips the sequence yield
- Generated: `if (currentAnimFrame != previousAnimFrame) { scene.animPlayAllChildrenInTime(...) }`

#### `setanimuseframes`
Switches animation time mode between seconds and frames.
- Input: **useFrames** (boolean)
- Generated: `scene.setAnimUseFrames(value)`

#### `stopanim`
Stops a playing animation by name.
- Input: **animName** (animnames block)
- Generated: `if(scene.animIsPlaying(name)) { scene.getAnim(name).stop(); }`

#### `sequencepause`
Pauses sequence execution for a given number of milliseconds.
- Input: **delay** (number)
- Generated: `addSequencePause(delay)`

#### `inline_script`
Embeds raw JavaScript directly into the generated code. Use with caution — no syntax validation.
- Field: **JSCode** (multiline text)

#### `window_value` *(output block)*
Reads a value from the `window` object using a flexible path expression.
- Field: **path** — supports dot notation, bracket notation, and array indices
- Strips a leading `window` if typed explicitly

| Path input | Generated code |
|---|---|
| `selectedConfig` | `window.selectedConfig` |
| `selectedConfig.submenu_positionView` | `window.selectedConfig.submenu_positionView` |
| `selectedConfig.menuList[0]` | `window.selectedConfig.menuList[0]` |

#### `set_timeout`
Executes inner blocks after a delay using `setTimeout`. Stores the handle in a named variable for later cancellation.
- Field: **store handle as** (variable name, default `myTimeout`)
- Input: **delay (ms)** (number)
- Statement: **do** (inner blocks)
- Generated: `myTimeout = setTimeout(function() { ... }, 1000);`

#### `clear_timeout`
Cancels a pending timeout created by `set_timeout`.
- Field: **handle** — must match the variable name used in `set_timeout`
- Generated: `clearTimeout(myTimeout);`

#### `statenames` *(value block)*
Dropdown selector populated at runtime with available scene state names.

#### `animnames` *(value block)*
Dropdown selector populated at runtime with available animation names.

---

### HMX camera

Custom blocks for controlling the 3D camera.

#### `gotoposintime`
Moves the camera to a named position over a duration using a named easing sample.
- Inputs: **camera** (cameranames), **durationMs**, **onSample** (string)
- Generated: `scene.gotoUINamedPosInTime(...)`

#### `gotoposintimeraw`
Moves the camera to an explicit set of angles/pan/dolly values over a duration.
- Inputs: **xang**, **yang**, **xpan**, **ypan**, **dolly**, **durationMs**

#### `gotoposintimeintermediate`
Moves the camera through an intermediate named position before reaching the final position.
- Inputs: **camera**, **cameraI** (intermediate), **durationMs**, **onSample**

#### `gotoposintimeintermediateraw`
Same as above but with raw angle/pan/dolly values for both intermediate and final positions.

#### `setrotationcenter`
Sets the camera rotation pivot to explicit X/Y/Z world coordinates.
- Inputs: **centerX**, **centerY**, **centerZ**
- Generated: `scene._nav.SetRotationCenter([x, y, z])`

#### `setrotationcenterfromobject`
Sets the camera rotation pivot to the centre of a named scene object.
- Input: **centerObject** (string — instance name)
- Generated: `scene._nav.SetRotationCenterFromObject(name)`

#### `setdoftargetobject`
Sets the Depth of Field target to a named scene object.
- Input: **DoFObject** (string — instance name)

#### `setnavigationlimits`
Constrains camera rotation within horizontal and vertical angle ranges.
- Inputs: **minRotHorz**, **maxRotHorz**, **minRotVert**, **maxRotVert**

#### `clearnavigationlimits`
Removes all camera navigation angle constraints.

#### `cameranames` *(value block)*
Dropdown selector populated at runtime with available camera/view names.

---

## How Code Execution Works

1. Blockly generates JavaScript from the visual blocks via `Blockly.JavaScript.workspaceToCode(workspace)`.
2. Sequences are registered with `addSequence(name, fn)` when blocks are evaluated.
3. `applySequenceByName(name)` looks up and runs a registered sequence.
4. The sequence runner uses `addSequencePause` and `addSequenceWaitValue` to yield execution between steps, enabling async-style animation chaining without Promises.
5. Generated code is either `eval`'d directly (run mode) or written to a `.js` file (export mode).

---

## Development Notes

- `js/broccoli-nw.js` is a trimmed variant for the NW.js desktop build. It is kept in sync manually — do **not** auto-update it.
- The `Variables` and `Functions` toolbox categories use `custom="VARIABLE"` / `custom="PROCEDURE"` — manually added `<block>` entries in those categories will not render. Place custom blocks in `HMX scene` or `HMX camera` instead.
- Block colours follow category conventions: `280` (purple) for scripting/value blocks, `135` (green) for timer blocks, `320` (pink) for animation blocks, `#9fa55b` for HMX scene/camera categories.
