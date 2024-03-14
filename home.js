function submitform() {
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("passsword").value;

console.log("Username :" + username)
console.log("Email" + email)
console.log("Password" + password)
}


function searchFunction() {
    let input,filter,ul,li,a,i,txtValue;
    input=document.getElementById('searchinput');
    filter=input.value.toUpperCase();
    ul=document.getElementById("searchResults");
    li=ul.getElementsByTagName('div');

    for (i=0,i<li.length,i++){
        a=li[i].getElementsByTagName("a")[0];
        txtValue=a.textcontent ||a.innerText;
        if (txtValue.toUpperCase().indexOf(filter)>-1){
            li[i].style.display ="";
        } else {
            li[i].style.display ="none";
        }
    }
}


$(document),ready(function(){
    $('.slider').slick({
        dots:true,//show navigation dots
        autoplay:true,//Autoplay slides
        autoplaysppe:2000//Autoplay speed in milisecond
        //Add more options as needed
        
    })
})

document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
