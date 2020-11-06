 var studentPromise=d3.json("classData.json"); 

  var successFCN = function(student)
  {
    console.log("Data of Class", student);
  }
    var failFCN = function(errorMsg)
  {
    console.log("You Got it wrong", errorMSG);
  }
    
     studentPromise.then(successFCN,failFCN);

