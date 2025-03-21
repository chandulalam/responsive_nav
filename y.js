document.addEventListener("DOMContentLoaded",function(){
    const hamburger=document.querySelector(".hamburger");
    const links=document.querySelector(".links");
    hamburger.addEventListener("click",()=>{
        links.classList.toggle("active");
    });
});