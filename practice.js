const ButtonChanger=document.querySelector(".Btn");

function getrandomColor(){
    const letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color +=letters[Math.floor(Math.random() *16) ];
    }
    return color;
}

ButtonChanger.addEventListener("click", () => {
   document.body.style.backgroundColor=getrandomColor();
});

//or 

// const ButtonChanger=document.querySelector(".Btn");

// ButtonChanger.addEventListener("click", () => {
// const getrandomColor="#" + Math.floor(Math.random() *16777215).toString(16) ;
//     document.body.style.backgroundColor=getrandomColor;
// }); 
