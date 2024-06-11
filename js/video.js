//filtr button to show only certain group of videos
function filterVideo(word){
    let videos = document.getElementsByClassName('reponsiveVideo');

    for(let i = 0 ; i < videos.length; i++){

        videos[i].style.visibility = "hidden";


        if(word == "all"){
            videos[i].style.visibility = "visible"
            videos[i].style.position = "initial";
        }

    }
   
    if(word == "mBlock"){
       
        document.querySelector('.mblockVideos').style.visibility = "visible";
       
    }

    else if(word == "blender"){
        document.querySelector(".blenderVideos").style.visibility = "visible";
        document.querySelector(".blenderVideos").style.position = "absolute";
        document.querySelector(".blenderVideos").style.top = "20px";

    }

    else if(word == "work"){
        document.querySelector(".ourworVideos").style.visibility = "visible";
        document.querySelector(".ourworVideos").style.position = "absolute";
        document.querySelector(".ourworVideos").style.top = "10px";
     }
}

let iframes =document.querySelectorAll('iframe');
let cont =document.querySelectorAll('.videooCont');
let bacgroundfd =document.querySelector('.bacgroundfd');

let openBtn = document.getElementsByClassName("openVideo");
let closee = document.querySelector(".close");

//style video to work in middle screen with transparent background 
//and x icon for close video 
for(let i = 0; i < openBtn.length; i++){
    openBtn[i].addEventListener('click',()=>{
        iframes[i].classList.add("ifactive")
        closee.classList.add("closeVideo")
        bacgroundfd.classList.add("bacgrounddd")
        closee.addEventListener('click',()=>{
            iframes[i].classList.remove("ifactive")
            closee.classList.remove("closeVideo") 
            bacgroundfd.classList.remove("bacgrounddd")
        })     
    }) 
}





