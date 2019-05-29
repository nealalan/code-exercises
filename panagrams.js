/*
2019-05-28
https://www.hackerrank.com/challenges/pangrams/problem
*/

let pangrams = (s) => (/(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i).test(s)
    ? 'pangram' : 'not pangram';



// TEST CONDITIONS
console.log(pangrams('thequickbrownfxjmpsvrlazydg')); // T
console.log(pangrams('thequickbrownfxjmpsvlazydg')); // T
console.log(pangrams('abcdefghijklmnopqrstuvwxyz')); // T
console.log(pangrams('qwertyuioplkjhgfdsazxcvbnm'));  //T
console.log(pangrams('abbbbbaaaaaaaqwertyuioplkjhgqwertyuio  pasdfghjklzxzzzzfdsazxcvbNm'));  //T
console.log(pangrams('abcdefghijklmnopqrstuvwxyza'));  // T
console.log(pangrams('abcdefghijklmnopqrstuvwxyz')); // T
console.log(pangrams('jocknymphswaqfdrugvexblitz')); // T
console.log(pangrams('squdgykilpjobzarfnthcwmvexhmfjordwaltzcinqbuskpyxveg'));  //T
console.log(pangrams('qwertyuioplkjhgfdsazxcvbnnnn'));  //F
console.log(pangrams('aaaaaaaaaaaaaaaaaaaaaaaaaa')); // F