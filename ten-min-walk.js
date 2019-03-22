function isValidWalk(walk) {
  var blocks = {'n': 0, 's': 0, 'e': 0, 'w': 0};
  for (i = 0; i < walk.length; i++)
    blocks[walk[i]] += 1;

  //console.log(Math.abs(blocks['n'] - blocks['s'] + blocks['e'] - blocks['w']));

  if (Math.abs(blocks['n'] - blocks['s'] + blocks['e'] - blocks['w']) == 0) {
    //console.log('true');
    return true;
  }
  else 
    return false;
}
