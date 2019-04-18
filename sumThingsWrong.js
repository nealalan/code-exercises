/*
Sum Things Wrong: The function sumThingsWrong is failing some of its tests. Why? Fix the code so it works.
*/
// sum was declared outside of the function, globally holding the sum.
function sumThingsWrong(num1, num2) {
  let sum = 0;
  sum += num1;
  sum += num2;

  return sum;
}
