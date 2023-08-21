<script>
export default {
  data() {
    return {
      is_shown: false,
    };
  },
  methods: {
    showIcons(){
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
    if (!this.is_shown){
        for(let i = 0; i < icons.length; i++){ 
            icons[i].style.zIndex = "1";
            icons[i].style.opacity = "1";
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
            this.is_shown = true;
    }
    else{
        for(let i = 0; i < icons.length; i++){ 
            icons[i].style.zIndex = "-1";
            icons[i].style.opacity = "0";

            icons[i].style.transform = "translate(0, 0)";
        }
        this.is_shown = false;
    }
    console.log(middleX + " " + middleY + " " + rs.getPropertyValue("--icon-1-X"));
    },
  },
};
</script>

<template>
    <div class="welcome"  v-if="!is_shown">
        <h1>Welcome to my site:</h1>
        <span class="click-me">Click on the photo to open menu.</span>
    </div>
    
    <div class="menu">
        <div class="center-image">
            <img src="../assets/profile_photo.png" alt="" id="profile-pic" v-on:click="showIcons()">
        </div>
        <div class="icon" on-click="is_menu = "><img src="../assets/blog-solid.svg" alt="</>" id="icon-img"><span>Blog</span></div>
    <div class="icon"><img src="../assets/user-solid.svg" alt="</>" id="icon-img"><span>About me</span></div>
    <div class="icon"><img src="../assets/code-solid.svg" alt="</>" id="icon-img"><span>My Work</span></div>
    <div class="icon"><img src="../assets/file-solid.svg" alt="</>" id="icon-img"><span>CV</span></div>
    <div class="icon"><img src="../assets/phone-solid.svg" alt="</>" id="icon-img"><span>Contact</span></div>
    
    </div>
    

</template>

<style scoped>

</style>