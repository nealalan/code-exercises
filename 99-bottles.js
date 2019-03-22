// return the lyrics to 99 bottles of beer in an array of 200 strings

var sing = function () {
  // return the lyrics as a string ...
  var song = [];
  var lyric_count = 0
  for (i = 99; i > 2; i--) {
    song[lyric_count++] = i + " bottles of beer on the wall, " + i + " bottles of beer.";
    song[lyric_count++] = "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.";
  }
  // The last 6 lyrics are special conditions, so write them out explicitly
  song[lyric_count++] = "2 bottles of beer on the wall, 2 bottles of beer.";
  song[lyric_count++] = "Take one down and pass it around, 1 bottle of beer on the wall.";
  song[lyric_count++] = "1 bottle of beer on the wall, 1 bottle of beer.";
  song[lyric_count++] = "Take one down and pass it around, no more bottles of beer on the wall.";
  song[lyric_count++] = "No more bottles of beer on the wall, no more bottles of beer.";
  song[lyric_count++] = "Go to the store and buy some more, 99 bottles of beer on the wall.";
  return song;
};
