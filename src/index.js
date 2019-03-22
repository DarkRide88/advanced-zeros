module.exports = function getZerosCount(number, base) {
    let newBase = base;
    let divider = 2; //Минимальный делитель
    let zeroes = []; // Массив с кол-вом нулей при различных множителях
    let Pows = [];  //Массив множителей
    let divsCount = {} //Объект c кол-вом каждого из множителей
    let i = 0;
  
    while(newBase != 1){
        if(newBase % divider == 0){
            newBase = newBase / divider;
            Pows.push(divider);
          if(!divsCount[divider]){
            divsCount[divider] = 0;
          };
          if(divsCount[divider] != undefined){
            divsCount[divider]++;
          }
        }
        else{
            divider++;
        }
      }

      
    while(i < Pows.length){
        let temp = 0;
        let currentPow = Pows[i];  
          while(number > currentPow){
            temp += Math.floor(number / currentPow);
          currentPow = currentPow * Pows[i];
        }
        zeroes.push(Math.floor(temp / divsCount[Pows[i]]));     
        i++;
    }
      let zeroCount = Math.min.apply('', zeroes);
      return zeroCount;
  }
