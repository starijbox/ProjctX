let menu = document.querySelector(".fixed-menu")
menu.addEventListener("click", function(event){
    let currentActive = document.querySelector(".active")
    let clicktarget = event.target
    if(clicktarget.classList.contains("nav-link")){
        clicktarget.classList.add("active")
        currentActive.classList.remove("active")
    }
})

let classLink = ".main-link"
window.onscroll = function(){
    let h = document.documentElement.clientHeight;
    if(window.scrollY>=h*4){
        classLink = ".comments-link"
    }else if (window.scrollY>=h*3){
        classLink = ".works-link"
    }else if (window.scrollY>=h*2){
        classLink = ".skills-link"
    }else if (window.scrollY>=h){
        classLink = ".about-link"
    }else{
        classLink = ".main-link"
    }
    let activeBtn = document.querySelector(".active")
    let newactiveBtn = document.querySelector(classLink)

    if(!newactiveBtn.classList.contains("active")){
        activeBtn.classList.remove("active")
        newactiveBtn.classList.add("active")
    }
}
