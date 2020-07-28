window.onload = function(){
    show(0);
}
// objects
let questions  = [
    {
        id :1,
        question : "HTML stands for? " ,
        answer : "Hyper Text Markup Language",
        options : ["Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
        "None of these"]
    },

    { 
        id :2,
        question : "which of the following tag is used to mark a begining of paragraph",
        answer : "P",
        options : ["TD",
        "P",
        "BR",
        "None of these"]
    },
    
    { 
        id :3,
        question : "From which tag descriptive list starts ?",
        answer : "DL",
        options : ["TD",
        "TR",
        "DL",
        "None of these"]
    },

    { 
        id :4,
        question : "Correct HTML tag for the largest heading is",
        answer : "h1",
        options : ["h1",
        "P",
        "BR",
        "None of these"]
    },

    { 
        id :5,
        question : "The attribute of form tag",
        answer : "Both a and b",
        options : ["Method",
        "Action",
        "Both a and b",
        "None of these"]
    },

    {
        id :6,
        question : "Markup tags tell the web browser" ,
        answer : "How to display the page",
        options : ["How to display the page",
        "How to display message box on page",
        "How to organise the page",
        "None of these"]
    },

    {
        id :7,
        question : "www is based on which model?" ,
        answer : "Client-server",
        options : ["Client-server",
        "Local-server",
        "3-tier",
        "None of these"]
    },

    {
        id :8,
        question : "Which of the following attributes of text box control allow to limit the maximum character?",
        answer : "maxlength",
        options : ["size",
        "len",
        "maxlength",
        "all of these"]
    },

    {
        id :9,
        question : "The attribute, which define the relationship between current document and HREF'ed URL is",
        answer : "REL",
        options : ["URL",
        "REV",
        "REL",
        "all of these"]
    },

    {
        id :10,
        question : "Which of the tag is used to creates a number list?",
        answer : "LI",
        options : ["LI",
        "OL",
        "LI and OL",
        "all of these"]
    },
    
]




let quiz_points = 0
let question_count = 0;
function next(){
    
    let user_answer = document.querySelector("li.options.active").innerHTML; 
// verify answer
    if (user_answer === questions[question_count].answer){
        // console.log("right answer")
        quiz_points +=10 
        sessionStorage.setItem("points",quiz_points)
    }

    if (question_count ==questions.length-1){
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`)
        // clearInterval(mytime)
        location.href="endpage.html"
        return;
    }


    // let user_answer = document.querySelector("li.options.active").innerHTML;   
    question_count ++;
    show(question_count)
}


function show(count){
    let question = document.getElementById("questions");
    // question.innerHTML= "<h2>" + questions[count].question + "</h2>";
    question.innerHTML =   `
    <h2>Q${question_count+1}.${questions[count].question}</h2> 
    <ul class="option_group">
                    <li class="options">${questions[count].options[0]}</li>
                    <li class="options">${questions[count].options[1]}</li>
                    <li class="options">${questions[count].options[2]}</li>
                    <li class="options">${questions[count].options[3]}</li>
                </ul>`;
    toggleActive(); 
}

function toggleActive(){
    let option = document.querySelectorAll("li.options");
    for(let i = 0; i<option.length; i++){
        option[i].onclick=  function(){
            for(let j=0; j<option.length;j++){
                if (option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

