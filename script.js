sideNave = document.querySelector('.nav-link');
document.querySelector('.fa-bars').addEventListener('click',()=>{
    sideNave.style.visibility = "visible";
});
document.querySelector('.fa-times-circle').addEventListener('click',()=>{
    sideNave.style.visibility = "hidden";
});