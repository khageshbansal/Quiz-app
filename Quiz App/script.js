
 let questions=
[ 
{ "question": "Inside which HTML element do we put the JavaScript??", "choice1": "<script>", "choice2": "<javascript>", "choice3": "<js>", "choice4": "<scripting>", "answer": 1 }, { "question": "What is the correct syntax for referring to an external script called 'xxx.js'?", "choice1": "<script href='xxx.js'>", "choice2": "<script name='xxx.js'>", "choice3": "<script src='xxx.js'>", "choice4": "<script file='xxx.js'>", "answer": 3 }, { "question": " How do you write 'Hello World' in an alert box?", "choice1": "msgBox('Hello World');", "choice2": "alertBox('Hello World');", "choice3": "msg('Hello World');", "choice4": "alert('Hello World');", "answer": 4 }

,{
"question":"Which of the following tag is used for inserting the largest heading in HTML?"

,"choice1":"<h3>"

,"choice2":"<h1>"

,"choice3":"<h5>"

,"choice4":"<h6>"
,"answer": 2 
}

,{
"question":"How to insert an image in HTML?"

,"choice1":"<img href = 'jtp.png' />"

,"choice2":"<img url = 'jtp.png' />"

,"choice3":"<img link = 'jtp.png' />"

,"choice4":"<img src = 'jtp.png' />"
,"answer":4
}

]

 
 
 
 
    
    
//all dom elements selected

 quest=document.querySelector(".ques");
opt=document.getElementsByClassName("option")
chngnumb=document.getElementById("chng_num");
ques_num=0;//question number
nextbutton=document.getElementById("next");

downnum=document.getElementsByClassName("number")
td=document.getElementsByTagName("td")
let attempt=0;
let corectansw=0;
document.getElementById("max_num").innerText= questions.length;



function show(n){

chng_num.innerHTML=ques_num+1;

//question logic
quest. innerHTML="<h3>"+questions[n].question+"</h3>";

//option logic

//opt[0]innerHTML="<p>A."+questions[n].choice1+"</p><i>X</i>";

opt[0]. innerText=questions[n].choice1;

opt[1]. innerText=questions[n].choice2;

opt[2]. innerText=questions[n].choice3;

opt[3]. innerText=questions[n].choice4;



//answer logic keeping ans inside fuction so that everytime new value is taken and value is not constant and is dynamic.
ans=questions[ques_num].answer-1;

document.querySelector(".num").innerHTML=15;
//timer starts
if(ques_num<5){
timeleft=14;
document.querySelector(".num").innerHTML=15;
timerfunc=setInterval(function(){
/*
    if(any options clicked){
        clearInterval(timerfunc);
*/
    if(timeleft==0){
        clearInterval(timerfunc); 
      if(ques_num<4){next();}
        document.querySelector(".num").innerHTML=0;        
    
    }//if timeleft closes
    else{
        document.querySelector(".num").innerHTML=timeleft;
        timeleft--;
        }//else closes
            }//function closes of setinterval
,1000);
        

}//if closes ques num max 5



}//show func closed

show(ques_num);//show fumction called once

function check(e){
clearInterval(timerfunc);


if(e.innerHTML!=opt[ans].innerHTML)
{e.classList.add("wrong")
e.innerHTML+="<i>X</i>";}//if closes
else{corectansw++;}

td[5].innerHTML=corectansw;
td[7].innerHTML=corectansw/questions.length*100+"%";




opt[ans].classList.add("correct");
opt[ans].innerHTML+="<i>✓</i>";


for(i=0;i<opt.length;i++)
   {
opt[i].removeAttribute("onclick")
}//makes other options unclickable
    
if(e.innerHTML!=opt[ans].innerHTML)
{downnum[0].children[ques_num].classList.add("wrong");}
//usingdownnum[0] because getclasslist return an array
else{downnum[0].children[ques_num].classList.add("correct");}
attempt++;
td[3].innerHTML=attempt;
}//check closes


function next(){

clearInterval(timerfunc );

for(i=0;i<opt.length;i++)
   {opt[i].setAttribute("onclick","check(this)");
}//for loop closes also makes options clickable again which was removed in check func

    ques_num++;
   show(ques_num );
   if(ques_num ==4)nextbutton.removeAttribute("onclick")
   for(i=0;i<opt.length;i++)
   {
    opt[i].classList.remove("wrong"); //removes clases added by check
    opt[i].classList.remove("correct");
   }//for loop closes
   }//next func closes


   //table manipution starts
 


   function finish(){
       document.querySelector(".container").style.display="none";
       document.querySelector(".result").style.display="block";

       if(corectansw<4)document.querySelector(".win").style.display="none";
else{document.querySelector(".lost").style.display="none";
document.querySelector(".win").style.display="block";}//removing display none added by if
   }