
const INPUT = document.querySelector('.input');
const BUTTONS = document.querySelector('.buttons');
const numbers = ['0','1','2','3','4','5','6','7','8','9'];

const calc = {
    "+":function(a,b){ return a + b },
    "-":function(a,b){ return a - b },
    "*":function(a,b){ return a * b },
    "/":function(a,b){ return a / b },
}

let array = [];
let result;


function calculateResult(arr){

  result = 0;

  return arr.map(( val , idx ) => {

      if(typeof val === 'string' && result === 0){
         return result = calc[val](array[idx - 1 ] , array[idx + 1])
      }else if(typeof val === 'string' && result !== 0) {
          return result = calc[val](result , array[idx + 1] )
      }else {
          return;
      }
  })

}

BUTTONS.onclick = function({target: {innerText}}){

    if(innerText === 'C'){
        array = [];
        return INPUT.value = null;
    }

    if(innerText === '='){
        console.log(array)
        calculateResult(array);
        return INPUT.value = result;
    }

 INPUT.value += innerText;

    if(numbers.includes(innerText)){
        if(array[array.length - 1] === '.'){
            const oldNumber = array[array.length - 2];
            array.pop();
            array.pop();
            return array.push(Number(`${oldNumber}.${innerText}`))
        }
        if(typeof array[array.length - 1] === 'number'){
            const oldNumber = array[array.length - 1]
            array.pop()
            return array.push(Number(`${oldNumber}${innerText}`))
        }else {
            return array.push(Number(innerText))
        }

    }
    return array.push(innerText)
}

