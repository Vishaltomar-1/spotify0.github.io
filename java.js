console.log("welcome t");
let songIndex = 0;

let audioElement = new Audio('song/b.mp3');
let masterPlay = document.getElementById('masterPlay');
let Myprogressbar = document.getElementById('Myprogressbar');

let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let song = [

    { songname: " cheque", filePath: "songs/b.mp3 ", coverPath: " cover/ll.jpg" },
    { songname: " DON'T GO", filePath: "songs/1.mp3 ", coverPath: " cover/mm.jpg" },
    { songname: " BEAUTIFUL LOVE", filePath: "songs/2.mp3 ", coverPath: " cover/vv.jpg" },
    { songname: " HONEST", filePath: " songs/3.mp3 ", coverPath: " cover/pp.jpg" },
]

songItem.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = song[i].coverPath;

    element.getElementsByClassName("songname")[0].innerText = song[i].songname;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle')

        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;


    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circlr');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//audioElement.play();
audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    Myprogressbar.value = progress;


})
Myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = Myprogressbar.value * audioElement.duration / 100
})
const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = song[songIndex].songname;
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })


})
document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=4)
{
songIndex = 0;
}
else{
    songIndex += 1;
}
    
audioElement.src = `song/${songIndex}.mp3`;

masterSongName.innerText = song[songIndex].songname;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
    songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
        
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = song[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
    