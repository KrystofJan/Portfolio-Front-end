<script setup>
let is_shown = false;
function showIcons(){
    let icons = document.getElementsByClassName("icon");
    let root = document.querySelector(':root');
    var rs = getComputedStyle(root);
    let center_img = document.getElementsByClassName("center-image")[0];
    const middleX = center_img.offsetWidth/2;
    const middleY = center_img.offsetHeight/2;
    const img_diameter = document.getElementById("profile-pic").offsetWidth / 2 + 50 ;
    let deg = 0;
    let positionX = 0;
    let positionY = 0;
    if (!is_shown){
        handleNotShown(icons, deg, positionX, positionY, img_diameter);
    }
    else{
        for(let i = 0; i < icons.length; i++){ 
            icons[i].style.transform = "translate(0,0)";
        }
        is_shown = false;
    }
    console.log(middleX + " " + middleY + " " + rs.getPropertyValue("--icon-1-X"));
}
function handleNotShown(icons, deg, positionX, positionY, img_diameter){
    
    for(let i = 0; i < icons.length; i++){ 
        var radians = (Math.PI / 180) * deg;   
        positionY = Math.sin(radians) * img_diameter;
        positionX = Math.sqrt((img_diameter*img_diameter) - (positionY*positionY));
        positionX += icons[i].offsetWidth/2;
        positionY += icons[i].offsetHeight/2;
        positionX *= -1;
        positionY *= -1;
        if (deg>1.5&&i>2){
            positionX *= -1;
            positionX -= icons[i].offsetWidth;
        }
        icons[i].style.transform = "translate(" + positionX + "px, " + positionY + "px)";
        console.log("Translate Coordinates: " + positionX +", " + positionY)
        deg += 45;
        }
        is_shown = true;
}
</script>

<template>
    <div class="menu">
        <div class="center-image">
            <img src="../assets/profile_photo.png" alt="" id="profile-pic" v-on:click="showIcons()">
        </div>
    </div>
    
    <div class="icon"><img src="../assets/code-solid.svg" alt="</>" id="icon-img"><span>My Work</span></div>
    <div class="icon"><img src="../assets/user-solid.svg" alt="</>" id="icon-img"><span>About me</span></div>
    <div class="icon"><img src="../assets/code-solid.svg" alt="</>" id="icon-img"><span>My Work</span></div>
    <div class="icon"><img src="../assets/code-solid.svg" alt="</>" id="icon-img"><span>My Work</span></div>
    <div class="icon"><img src="../assets/code-solid.svg" alt="</>" id="icon-img"><span>My Work</span></div>
    
</template>

<style scoped>

</style>