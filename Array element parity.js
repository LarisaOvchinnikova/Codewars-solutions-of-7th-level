//Array element parity
//https://www.codewars.com/kata/5a092d9e46d843b9db000064

function solve(arr){
  return arr.find(el=>!arr.includes(-el));
};


//2 case:

function solve(arr){
 return Number(arr.filter((el,i) => !(arr.includes(el) && arr.includes(-el)) && i === arr.indexOf(el)));
};
