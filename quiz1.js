function scoreChecker(tn){



    let sum=0;
    let a=["","correct","correct","correct","correct","correct","correct","correct","correct","correct","correct"];


for (let i = 1; i < 11; i++) {
    
    let q=document.querySelector(`input[name="q${i}"]:checked`);
     if(q.value==a[i]){
         sum+=1;
     }
    }
    



let scoredMarks=document.getElementById("scoredMarks");
let comment=document.getElementById("comment");
let stars=document.getElementById("stars");

let resultObj={
  line1: ['&#9733; &#9733; &#9733; &#9733;', ' &#9733; &#9733; &#9733;',' &#9733; &#9733;','&#9733;'],
  line2: ['EXCELENT !','GOOD !','NOT GOOD! DO HARD WORK.','POOR ! WORK TOO MUCH HARD.']
}



scoredMarks.innerHTML=sum;

if(sum<2){
comment.innerHTML=resultObj.line2[3];
stars.innerHTML=resultObj.line1[3];

}
else if(sum<4 && sum>=2){
comment.innerHTML=resultObj.line2[2];
stars.innerHTML=resultObj.line1[2];
}
else if(sum<6 && sum>=4){
comment.innerHTML=resultObj.line2[1];
stars.innerHTML=resultObj.line1[1];
}
else if(sum<=8 && sum>=6){
comment.innerHTML=resultObj.line2[0];
stars.innerHTML=resultObj.line1[0];
}
else{
console.log('you should go to high level');
}



let result=document.getElementById('result');
result.style.display='flex';

let testName;

if(tn===1){
  testName=`HTML Test`
}
if(tn===2){
  testName=`CSS Test`
}
if(tn===3){
  testName=`JavaScript Test`
}
if(tn===4){
  testName=`React Test`
}
if(tn===5){
  testName=`Vue Test`
}

let testMarks;  
let testDetailsObj={
  testName:testName,
  testMarks:sum,
  testStar: JSON.stringify(document.getElementById('stars').innerHTML)
};

let testDetailsArray;

let TestPerformance=localStorage.getItem('testPerformance');
if(TestPerformance==null){
    testDetailsArray=[];
  
}
else {
     testDetailsArray=JSON.parse(TestPerformance);
   
}
testDetailsArray.push(testDetailsObj)

localStorage.setItem('testPerformance' , JSON.stringify(testDetailsArray));


}



function reset(){
location.reload();
}



