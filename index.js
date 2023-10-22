for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",a);
    
    function a(){

        let ch=this.innerHTML;
       makesound(ch);
       press(ch);

    }
}



// In place of Switch case:->>>>
//________________________________________________________________________________
// if(this.innerHTML=="w"){
//     const audio=new Audio("sounds/tom-4.mp3");
//     audio.play();
// }
// if(this.innerHTML=="a"){
//     const audio=new Audio("sounds/tom-3.mp3");
//     audio.play();
// }
// if(this.innerHTML=="s"){
//     const audio=new Audio("sounds/tom-2.mp3");
//     audio.play();
// }
// if(this.innerHTML=="d"){
//     const audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
// }
// if(this.innerHTML=="j"){
//     const audio=new Audio("sounds/snare.mp3");
//     audio.play();
// }
// if(this.innerHTML=="k"){
//     const audio=new Audio("sounds/crash.mp3");
//     audio.play();
// }
// if(this.innerHTML=="l"){
//     const audio=new Audio("sounds/kick-bass.mp3");
//     audio.play();
// }
//________________________________________________________________________________________

// const randomsound=Math.floor(Math.random()*4)+1;
// const audio =new Audio("sounds/tom-"+randomsound+".mp3")
// audio.play();

        //alert("clicked");



document.addEventListener("keydown",function(event){

    makesound(event.key);
    press(event.key);
    
});


let makesound=(key)=>{
    switch(key){
        case "w":
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case "a":
                let tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                case "s":
                    let tom2=new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                    case "d": let tom1=new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
        case "j":
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
            case "k":
            let crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
                case "l":let kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
                default: console.log(key);
                
            }

}


let press=(current)=>{
    let cd=document.querySelector("."+current);
    cd.classList.add("pressed");

    setTimeout (function(){
        cd.classList.remove("pressed");

    },120);
}