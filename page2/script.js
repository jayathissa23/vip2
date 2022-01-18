const mobileNav=document.getElementById('mobile-nav');
const navLinks=document.getElementById('nav-links');
const closeBtn=document.getElementById('close-btn');
const body=document.querySelector('body');  
    
mobileNav.addEventListener('click',(e)=>{
    navLinks.style.right="0";     
    // body.style.filter= "blur(3px)";    
    // navLinks.style.filter= "blur(0px)";       

    console.log(body);        
});

closeBtn.addEventListener('click',(e)=>{
   navLinks.style.right="-500px";    
            
});