const menu= document.querySelector('.menu');
const left_nav= document.querySelector('.left-nav');

let x= 1;

menu.onclick= ()=>{
     if(x==1){
    left_nav.style.display= 'block';
    x=2;
    }
    else{
        left_nav.style.display= 'none';   
        x=1; 
    }
    
}
let search = document.querySelector()