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
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myfunc(num){

            if(num==1){
                document.getElementById("about").scrollIntoView();
            }

            else if(num==2){
                document.getElementById("service").scrollIntoView();
            }

            else if(num==3){
                document.getElementById("contactus").scrollIntoView();
            }
        }

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

