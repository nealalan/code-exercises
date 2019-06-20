
function mySplice(arr, start, deleteCount) {
    var deleted = [];
    var keep = [];
  
    if (deleteCount === undefined) {
      deleteCount = arr.length - start;
    }
  
    for (var i = 0; i < start; i++) {
      keep.push(arr.shift());
    }
  
    for (var x = 0; x < deleteCount; x++) {
      deleted.push(arr.shift());
    }
  
    for (var y = arguments.length - 1; y > 2; y--) {
      arr.unshift(arguments[y]);
    }
  
    for (var j = 0, length = keep.length; j < length; j++) {
      arr.unshift(keep.pop());
    }
  
    return deleted;
  }
  module.exports = mySplice;