let btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btn.offsetLeft);
    const y = (event.pageY - btn.offsetTop);

    btn.style.setProperty("--xpos", x + "px");
    btn.style.setProperty("--ypos", y + "px");
});