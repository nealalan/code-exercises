function getMiddle(s) {
  var len = s.length;
  // empty set and over 999 chars is out of scope, but breaks testing
  //if (len < 1 || len > 1000) return false;
  // handle even lengths, which return 2 charagers
  if (len % 2 == 0) {
    return s[(len/2)-1] + s[(len/2)];
  }
  // handle odd values by removing 1 before dividing so you have an int
  else if (len % 2 == 1) {
    return s[((len-1)/2)];
  }
}
