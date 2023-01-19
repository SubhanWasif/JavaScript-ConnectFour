



const button = document.querySelector(".BUTTONS")
console.log(button.children)
for(i =0;i<button.children.length;i++){
    console.log("disabling buttons")
    button.children[i].disabled=true;
}