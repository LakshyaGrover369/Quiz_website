loadTestRecord();


function loadTestRecord(){
 

  let testPerformance=localStorage.getItem('testPerformance');
  let testDetailsArray=JSON.parse(testPerformance);
       

  let testRecord=document.getElementById(`testRecord`);

   let html=`

   <table>
       <tr>
               <th>TOPIC OF TEST GIVEN</th>
               <th>MARKS OF TEST GIVEN</th>
               <th>RATINGS OF THE TEST GIVEN</th>
               <hr>
       </tr>
               
               `;
                  
   Array.from(testDetailsArray).forEach(function(element, index){

               
   html+=`
         
             <tr>
                 <td>${element.testName}</td>
                 <td>${element.testMarks}</td>
                 <td>  ${element.testStar} </td>
             </tr>  
               
  `;

   })

   if(testDetailsArray!=0){
       testRecord.innerHTML=html;
       }
       else{
           testRecord.innerHTML=`GIVE A TEST`;
           testRecord.style.margin="auto";
       }

       let totalMarks=0;
       for (let j = 0; j < testDetailsArray.length; j++) {
           totalMarks+=testDetailsArray[j].testMarks;
            
       }
      
     
       let maximumMarks=testDetailsArray.length;
     
       
       let percentage=(totalMarks/maximumMarks)*10;
     

       document.getElementById('pr1').innerHTML=`${maximumMarks} tests are given`;
       document.getElementById('pr2').innerHTML=`${totalMarks}/${maximumMarks*10}`;

           if(percentage<=20){
                document.getElementById('pr3').innerHTML='&#9733;';
           }

           else if(percentage<=40 && percentage>20){
               document.getElementById('pr3').innerHTML='&#9733; &#9733;';
           }

           else if(percentage<=60 && percentage>40){
                document.getElementById('pr3').innerHTML='&#9733; &#9733; &#9733;';
           }

           else if(percentage<=80 && percentage>60){

               document.getElementById('pr3').innerHTML='&#9733; &#9733; &#9733; &#9733;';
           }
           else if(percentage<=100 && percentage>80){
                document.getElementById('pr3').innerHTML='&#9733; &#9733; &#9733; &#9733; &#9733;';
           }

}
