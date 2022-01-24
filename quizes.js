loadTestRecord();


function loadTestRecord(){
    console.log('i am in the function');
    let htmlTestRecord=localStorage.getItem('html test');
    let testRecord=document.getElementById(`testRecord`);
    let htmlTestObj=JSON.parse(htmlTestRecord);
 console.log(htmlTestObj);
 let htmlTestMarks=htmlTestObj.testMarks;
 let htmlTestName=htmlTestObj.testName;
    if(htmlTestMarks<2){
testRecord.innerHTML=`

<table>
         <tr>
             <th>TOPIC OF TEST GIVEN</th>
             <th>MARKS OF TEST GIVEN</th>
             <th>RATINGS OF THE TEST GIVEN</th>
             <hr>
         </tr>
         <tr>
             <tr>${htmlTestName}</tr>
             <tr>${htmlTestMarks}</tr>
             <tr> &#9733;</tr>
             </tr>  
 </table>

`;


}
else if(htmlTestMarks<4 && htmlTestMarks>=2){
testRecord.innerHTML=`

 
<table>
         <tr>
             <th>TOPIC OF TEST GIVEN</th>
             <th>MARKS OF TEST GIVEN</th>
             <th>RATINGS OF THE TEST GIVEN</th>
         </tr>
         <tr>
             <tr>${htmlTestName}</tr>
             <tr>${htmlTestMarks}</tr>
             <tr> &#9733; &#9733;</tr>
             </tr>  
             <hr>
     </table>
`;

}
else if(htmlTestMarks<6 && htmlTestMarks>=4){
testRecord.innerHTML=`

 
<table>
         <tr>
             <th>TOPIC OF TEST GIVEN</th>
             <th>MARKS OF TEST GIVEN</th>
             <th>RATINGS OF THE TEST GIVEN</th>
         </tr>
         <tr>
             <tr>${htmlTestName}</tr>
             <tr>${htmlTestMarks}</tr>
             <tr>  &#9733; &#9733; &#9733;</tr>
             </tr>  
             <hr>
     </table>
`;

}
else if(htmlTestMarks<=8 && htmlTestMarks>=6){
testRecord.innerHTML=`

 
<table>
         <tr>
             <th>TOPIC OF TEST GIVEN</th>
             <th>MARKS OF TEST GIVEN</th>
             <th>RATINGS OF THE TEST GIVEN</th>
             
         </tr>
         <tr>
             <td>${htmlTestName}</td>
             <td>${htmlTestMarks}</td>
             <td>  &#9733; &#9733; &#9733; &#9733;</td>
             </tr>  

     </table>
`;

}
else if(htmlTestMarks<=10 && htmlTestMarks>8){
testRecord.innerHTML=`

 
<table>
         <tr>
             <th>TOPIC OF TEST GIVEN</th>
             <th>MARKS OF TEST GIVEN</th>
             <th>RATINGS OF THE TEST GIVEN</th>
         </tr>
         <tr>
             <tr>${htmlTestName}</tr>
             <tr>${htmlTestMarks}</tr>
             <tr>  &#9733; &#9733; &#9733; &#9733; &#9733;</tr>
             </tr>  
             <hr>
     </table>
`;

}


 

    
}
