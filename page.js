const gallaryItems = document.querySelector(".gallery-items").children;
const prev = document.querySelector(".prev");
const next =  document.querySelector(".next");
const page  = document.querySelector(".page-num");
const maxiTem =  8 ;
let index = 1 ;

const pagination  = Math.ceil(gallaryItems.length / maxiTem);
console.log(pagination);
prev.addEventListener("click",function(){
    index--
    check();
    showItems();
})


next.addEventListener("click",function(){
    index++
    check();
    showItems();

})

  function check(){
       if(index == pagination){
           next.classList.add("disabled");
       }else{
           next.classList.remove("disabled");
       }

       if(index == 1){
           prev.classList.add("disabled");
       }else{
     prev.classList.remove("disabled");

       }

  }


  function showItems(){
        for(let i = 0 ; i <gallaryItems.length ;i++){
            gallaryItems[i].classList.remove("show");
            gallaryItems[i].classList.add("hide");

             if( i >= (index * maxiTem) - maxiTem && i <index * maxiTem){
                 gallaryItems[i].classList.remove("hide");
                 gallaryItems[i].classList.add("show")
             }
             page.innerHTML  = index;
        }


  

  }

  
  window.onload = function(){
        showItems();
        check();
     
  }


  