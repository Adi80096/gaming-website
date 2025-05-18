const nextButton = document.querySelector('.next-btn')
const video = document.querySelector('.hero-video')

const movielist = ['videos/[Cinematic] AK - Blue Flame Draco l Garena Free Fire.mp4;  [Animation] Ghost Criminal  👻🤡   Free Fire NA.mp4,scriptgw.js [EVO] M1014 - Green Flame Draco l Garena Free Fire.mp4,Evo Gun - Predatory Cobra MP40   Free Fire Collection.mp4,Evo Gun - UMP BOOYAH DAY 2021    Free Fire Collection.mp4,Evo M1887 returns on December 17   Free Fire NA.mp4,scriptgw.js Free Fire x Demon Slayer Kimetsu no Yaiba” Live Now   Free Fire NA.mp4']

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movielist[index];

    if (index === 3)(
        index = 1
    )
})