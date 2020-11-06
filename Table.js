var setTitle=function (msg)
{
    d3.select("h2")
    .text(msg);
}


var getImage=function(bStudent)
{
    console.log 
    return "imgs/"+bStudent.picture; 
}; 

var getGrade=function(john){

    return john.grade; 
    
}

var getQuizeAverage=function(bStudent)
{
    var Qstut=bStudent.quizes; 
    
    var ScoreQ=Qstut.map(getGrade); 
    var avg=d3.mean(ScoreQ);
    return avg.toFixed(2);     
}

var getTestAvg=function(bStudent){

     var Tstud=bStudent.test; 
    var ScoreT=Tstud.map(getGrade); 
    var avg=d3.mean(ScoreT); 
    return avg.toFixed(2);};

var getHmwAvg=function(bStudent){
    
    var Hstud=bStudent.homework; 
    var HomeScore=Hstud.map(getGrade);
    var avg=d3.mean(HomeScore); 
    return avg.toFixed(2);};

var getFinalgrade=function(bStudent){

     return bStudent.final[0].grade; 
}
    

var penguinPromise=d3.json("classData.json"); 

    
var successFCN = function(students){
    
    console.log("Student Datas", students);
    setTitle("Table of Students");
    drawTable(students);
    initHeaders(students);
}

   var failFCN = function(errorMsg)
  {
    console.log(errorMSG);
  };

   
var drawTable=function(students){
    
    var rows=d3.select("#fulltable tbody")
    .selectAll("tr")
    .data(students)
    .enter()
    .append("tr"); 
    
    rows.append("td")
    .append("img")
    .attr("class", "pic")
    .attr("src", getImage);
    
    rows.append("td")
    .append("td")
    .attr("class", "quiz")
    .text(getQuizeAverage);
    
    rows.append("td")
    .append("td")
    .attr("class", "home")
    .text(getHmwAvg);
    
    rows.append("td")
    .append("td")
    .attr("class", "test")
    .text(getTestAvg);
    
    rows.append("td")
    .append("td")
    .attr("class", "final")
    .text(getFinalgrade); };

var clearTable=function(){
    
    d3.selectAll("#fulltable tbody tr")
    .remove();
}
              

var initHeaders=function (students) {
    d3.select("#quiz")
    .on("click", function() {
        console.log("clicked quiz"); 
        students.sort(function(a,b){
            var av1=getQuizeAverage(a);
            var av2=getQuizeAverage(b);
            if (av1<av2) {return -1;}
            else if (av1==av2) {return 0;}
            else {return 1;}
            
        });
        
        clearTable();
        drawTable(students);
        d3.selectAll(".quiz")
            .attr("class", "selected");
        
    });
  d3.select("#home")
    .on("click", function() {
        console.log("clicked home"); 
        students.sort(function(a,b){
            var av1=getQuizeAverage(a);
            var av2=getQuizeAverage(b);
            if (av1<av2) {return -1;}
            else if (av1==av2) {return 0;}
            else {return 1;}
            
        });
        
        clearTable();
        drawTable(students);
        d3.selectAll(".home")
            .attr("class", "selected");
        
    });
    
    d3.select("#test")
    .on("click", function() {
        console.log("clicked test"); 
        students.sort(function(a,b){
            var av1=getQuizeAverage(a);
            var av2=getQuizeAverage(b);
            if (av1<av2) {return -1;}
            else if (av1==av2) {return 0;}
            else {return 1;}
            
        });
        
        clearTable();
        drawTable(students);
        d3.selectAll(".test")
            .attr("class", "selected");
        
    });
    
    d3.select("#final")
    .on("click", function() {
        console.log("clicked final"); 
        students.sort(function(a,b){
            var av1=getQuizeAverage(a);
            var av2=getQuizeAverage(b);
            if (av1<av2) {return -1;}
            else if (av1==av2) {return 0;}
            else {return 1;}
            
        });
        
        clearTable();
        drawTable(students);
        d3.selectAll(".final")
            .attr("class", "selected");
        
    });
    
}
     penguinPromise.then(successFCN,failFCN);


  