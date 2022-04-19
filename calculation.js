function printData(data){
    var arr = (data.split('\n'))
    var removedEdgeSpace = (removeEdgeSpaces(arr));
    var operation = removedEdgeSpace[0].split(" ");
    
    
    if(operation[1] == 2){
      twoBhk(removedEdgeSpace, operation)
    }else{
      threeBhk(removedEdgeSpace, operation)
    }
  }
  var cost = 0;
  
  function twoBhk(array, operation){
  
    var [x, y] = (operation[2].split(":").map(Number))
    var lessQuantity = 900 / (x + y) 
    if(x < y){
      var xAmount = (lessQuantity) * x;
      var yAmount = (900 - xAmount) * 1.5;
      cost = (xAmount + yAmount)
    }else{
      var yAmount = (lessQuantity) * y;
      var xAmount = (900 - yAmount) ;
      cost = (xAmount + yAmount * 1.5)
    }
    var n = array.length;
    var quantity = 900;
    var numberOfPeople = 0;
    for(var i = 1; i < n-1; i++){
      var expression = array[i].split(" ")
      numberOfPeople += +expression[1]
    }
    quantity += (numberOfPeople) * 300;
    var calQuantity = numberOfPeople * 300;
    remainingCost(calQuantity)
    console.log(quantity, cost)
  }
  
  function remainingCost(calQuantity){
    if(calQuantity <= 500){
      return cost += calQuantity * 2
    }else if(calQuantity <= 1500){
      return (cost += (500 * 2) + ((calQuantity - 500) * 3 ))
    }else if(calQuantity <= 3000){
      return (cost += (500 * 2) + (1500 * 3) + ((calQuantity - 2000) * 5))
    }else if(calQuantity> 3000){
      return (cost += (500 *2) + (1500 * 3) + (3000 * 5) + ((calQuantity - 5000) * 8))
    }
  }
  
  
  function threeBhk(array, operation){
    var [x, y] = (operation[2].split(":").map(Number))
    var lessQuantity = 1500 / (x + y) 
    if(x < y){
      var xAmount = (lessQuantity) * x;
      var yAmount = (1500 - xAmount) * 1.5;
      cost = (xAmount + yAmount)
    }else{
      var yAmount = (lessQuantity) * y;
      var xAmount = (1500 - yAmount) ;
      cost = (xAmount + yAmount * 1.5)
    }
    var n = array.length;
    var quantity = 1500;
    var numberOfPeople = 0;
    for(var i = 1; i < n-1; i++){
      var expression = array[i].split(" ")
      numberOfPeople += +expression[1]
    }
    quantity += (numberOfPeople) * 300;
    var calQuantity = numberOfPeople * 300;
    remainingCost(calQuantity)
    console.log(quantity, cost)
    // console.log(array, 3)
  }
  
  function removeEdgeSpaces(arr){
    return arr.map((itme) => itme.trim())
  }

  module.exports = {printData};