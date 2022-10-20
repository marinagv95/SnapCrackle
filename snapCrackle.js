function snapCrackle(maxValue){
  let valor = ""

  for(let i = 1; i <= maxValue; i++){
    
    if(i % 2 !== 0 && i % 5 == 0){
      valor += "SnapCrackle"
    }
   else if(i % 2 !== 0){
      valor += "Snap"
    }
    else if(i % 5 == 0){
      valor += "Crackle"
    }
    else{
       valor += i; 
    }

    if(i !== maxValue){
      valor += ", "
    }
   
     
    }
    console.log(valor)
  }
  
let resultado = snapCrackle(12)






// Exercício feito com array


// function snapCrackle(maxValue){
//   let resultado = []

// for(let i = 1; i <= maxValue ; i++){

//   if(i % 2 !==0 && i % 5 == 0){
//     resultado.push("SnapCrackle")
//   }
//   else if(i % 2 !== 0){
//     resultado.push("Snap")
//   }
//   else if(i % 5 == 0){
//     resultado.push("Crackle")
//   }
//   else{
//     resultado.push(i)
//   }

// }
// console.log(resultado)

// }
// let resultadoCompleto = snapCrackle(15)



