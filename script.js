// for single image ==>
    /*
    let elem1 = document.querySelector('.elem1' );       
    let eleimg = document.querySelector('.elem img')
     elem1.addEventListener( "mousemove",function(e) {
    console.log(e)
    eleimg.style.left = e.x + "px";
     eleimg.style.top =  e.y + "px";
     })
    elemimg.addEventListener('mouseenter' , function(e){
     elem1.style.opacity = 1;
    })
    elemimg.addEventListener('mouseleave' , function(e){
    elem1.style.opacity = 0;
    })   
    */

    //  APPLYING this efect to all

     let elem = document.querySelectorAll('.elem');

     elem.forEach(function(e) {
     e.addEventListener('mouseenter' , function() {
    console.log(e.childNodes)
     //    e.style.backgroundColor = "#f9f"
    e.childNodes[1].style.opacity = "1";
               
   });
   e.addEventListener('mouseleave' , function() {
   console.log(e.childNodes)
   //    e.style.backgroundColor = "black" 
   e.childNodes[1].style.opacity = "0";
   });
   e.addEventListener('mousemove' , function(dir){
   e.childNodes[1].style.left = dir.x+"px"
   e.childNodes[1].style.top = dir.y+"px"
   });
   });
