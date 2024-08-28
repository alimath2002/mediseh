let slideIndex=1;
window.stopcon= true;


function setSlide(index){
    slideIndex=index;
let  item=document.querySelector(`#s${index}`);
let  item2=document.querySelector(`#r${index}`);
let  item3=document.querySelector(`#l${index}`);
let slides= [ ...document.querySelector('.slides').children];

slides.forEach((element)=>{
    
    element.classList.remove('active') ;
    element.classList.remove('activeate') ;
    
})

item.classList.add('active');
item2.classList.add('activeate');
item3.classList.add('activeate');

}


setInterval(() => {
  
  if(window.stopcon==true){
    
  slideIndex=slideIndex+1;
   
  if(slideIndex<=3)
  {
  setSlide(slideIndex) ;

  }
  if(slideIndex>3){
    slideIndex=1;
    setSlide(slideIndex);
  }
  }
}, 2000);



function stopSlide(){

  this.stopcon=~this.stopcon;
  let  item=document.querySelector(`#slidestatus`);
  if(item.textContent=="| |")
    {item.textContent="| >";}
  else{
    item.textContent="| |";
  }
  }


  function opendroplis(){
    let  item1=document.querySelector(`#abfa`);
    let  item2=document.querySelector(`#tehran`);
    
    item1.textContent="آبفای کل کشور";
    item2.textContent="آب و فاضلاب استان تهران";

    setTimeout(() => {
      let  item1=document.querySelector(`#abfa`);
      let  item2=document.querySelector(`#tehran`);
    
     item1.textContent="";
     item2.textContent="";
    }, 5500);


  }




