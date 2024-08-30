

// function findEvenNumber(tillnum) {
//     let evenNumber = [];
//     for (let i = 0; i <= tillnum; i++){
//         if(i%2 === 0) {
//             evenNumber.push(i);
//         }
//     }
//     return evenNumber;
// }


function createGreet(name) {
    return function() {
      return `Hello,${name}!`;
    }
  }
  const greet = createGreet('Alice');
  console.log(greet());
  
