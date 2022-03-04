document.addEventListener('DOMContentLoaded',()=>{
    const grid=document.querySelector('.grid');
    function createBoard(){
        for(let i=0;i<15;i++){
            var square=document.createElement('div');
            square.setAttribute('class','da');
            square.setAttribute('data-id',i);
            grid.appendChild(square);
        }
    }
    createBoard();  
   
})

function myFunction() {
    const y=Math.floor(Math.random() * 15);
    const x=document.querySelector('[data-id='+CSS.escape(y)+']');
    document.querySelector(".grid1").classList.remove("grid1");
    x.classList.add("grid1");
    console.log(y);
   }
   