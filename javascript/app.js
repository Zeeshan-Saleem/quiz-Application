


function submit_Form(e){

    var a = document.getElementById("namee")


    if(a.value!=""){
        e.preventDefault()
        let name = document.forms["welcomeForm"]["name"].value
        console.log(name)
        // store player name in session storage
        sessionStorage.setItem("name", name);
        location.href="quiz.html"
    }
    else{
        alert("Enter your name")
    }
    


    

}
