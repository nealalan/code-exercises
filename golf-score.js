//  have the par value for each hole on the golf course and my stroke score on each hole. Im tired of calculating it by hand. Can you write a program that calculates my golf score for me?
// test: golfScoreCalculator("453454444344544443", "354445334534445344") => -1

function golfScoreCalculator(parList, scoreList){
  var j = parList.length;
  var score = 0;
  for (i = 0; i < j; i++) {
    score = score + (scoreList[i] - parList[i]);
  }
  return score;
}
