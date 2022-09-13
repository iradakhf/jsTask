//task 1-encapsulation example

/*
const count = () => {
    let count = 0;
  return ({
      count: () => count += 1,
      getCount: () => count.toString()
    });
  };
  const counter = count();
  counter.count();
  console.log(counter.getCount());
  */

//task2 2-inheritence

const superOne = {
    value: 2,
    method() {
      return this.value + 1;
    }
  };
  console.log(superOne.method());
  
  const subOne = {
    __proto__: superOne,
  };
  console.log(subOne.method());


//task3
/*let input=10
let input2=15;

function multiply(){
    let mult = 1;
    
    for (let i = input+1; i < input2 ; i++) {
          mult= mult * i;
        
         }
         return mult;

 }
        
        
        console.log(multiply());
 */



//task4


/*function multiply() {
    var number1 = document.getElementById('num1').value;
    var number2 = document.getElementById('num2').value;
    var multiplication = parseFloat(number1) * parseFloat(number2);     
    alert(multiplication);
    
    }
    */

