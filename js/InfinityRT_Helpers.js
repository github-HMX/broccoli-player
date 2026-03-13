const slowInOut = (x) => {
  var a = 2.1;
  var x2 = 1.0 - x;
  var px = Math.pow(x,a);
  var px2 = Math.pow(x2,a);

  return px / (px + px2);
}

//TODO: Include reversAll()       reverAnimation()      hideGraphics() ??