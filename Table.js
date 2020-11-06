var studentPromise=d3.json("classData.json"); 


var getPics=function(penquin)
{
    return penquin.picture;
}

var getMean=function(quiz)
          {
              var getQuiz=function(quiz)
              
              {
                  return quiz.grade
              }
                  var meanArray=quiz.quizes.map(getQuiz)
                  return d3.mean(meanArray); 
          }

var getHome=function(homework)
          {
              var getGrade=function(homework)
              
              {
                  return homework.grade   
              }
                  var meanArray=homework.homework.map(getGrade)
                  return d3.mean(meanArray); 
          }
var getTest=function(test)
    {
    
    var getGrade=function(test)
    {
        return test.grade
        
    }
    
    var meanTest=test.test.map(getGrade)
    return d3.mean(meanTest);
}

var getFinal=function(student)

{
    var getGrade=function(student)
    {
    return student.grade;
}

 var answer=student.final.map(getFinal); 
}

    
var successFCN = function(student)
  {
    
  
    var rows=d3.select("tbody")
    .selectAll("tr")
    .data(student)
    .enter()
    .append("tr")
    
    rows.append("td")
    .append("img")
    .attr("src", getPics);
    
    rows.append("td")
    .text(getMean);
    
    rows.append("td")
    .text(getHome); 
    
    rows.append("td")
      .text(getTest);
      
    rows.append("td")
      .text(getFinal);
      
  }
   


      var failFCN = function(errorMsg)
  {
    console.log("You Got it wrong", errorMSG);
  }
    
     studentPromise.then(successFCN,failFCN);
