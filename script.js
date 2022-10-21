console.log("welcome to spotify");
// initialize the variables

let songindex = 0;
let audioElement = new Audio('1.mp3.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');

let songs = [
    {songname: "salam-e-ishq", filepath: "song/1.mp3",coverpath:"covers/1.jpg"},
    {songname: "salam-e-ishq", filepath: "song/2.mp3",coverpath:"covers/2.jpg"},
    {songname: "salam-e-ishq", filepath: "song/3.mp3",coverpath:"covers/3.jpg"},
    {songname: "salam-e-ishq", filepath: "song/4.mp3",coverpath:"covers/4.jpg"},
    {songname: "salam-e-ishq", filepath: "song/4.mp3",coverpath:"covers/5.jpg"},
    {songname: "salam-e-ishq", filepath: "song/5.mp3",coverpath:"covers/6.jpg"},
]
// audioElement.play();

// handle play/pause click 
masterplay.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
   }
   else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
   } 
})

// listen to event

audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;

})
