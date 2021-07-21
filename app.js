const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn=document.querySelector(".btn");
const color=document.querySelector(".color");

btn.addEventListener('click',()=>{
    // generate random color
    let hexColor="#";
    for(let i=0;i<6;i++)
    {
        hexColor=hexColor+hex[getIndex()];
    }
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
});

function getIndex()
{
    // generate a random number
    let num=Math.floor(Math.random()*hex.length);
    return num;
}