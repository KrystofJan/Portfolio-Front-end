<script>
import FloatingIcons from './FloatingIcons.vue';
export default {
    components: {
        FloatingIcons
    },
  data() {
    return {
      is_shown: false,
      is_there: true
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
                
                deg += 45;
                setTimeout(() => {console.log("Translate Coordinates: " + positionX +", " + positionY)}, 500);
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
    // 
//   setup(){
//     let float_icons = document.getElementsByClassName("icon-img-2");
//     for(let i=0; i<float_icons.length;i++){
//         float_icons[i].top = Math.floor(Math.random()*90+5)+'%';
//         float_icons[i].left = Math.floor(Math.random()*90+5)+'%';
        
//         console.log(float_icons[i].top + " " + float_icons[i].left);
//     }
//   }
  },created() {
    const interval = setInterval(() => {
            this.is_there = !this.is_there;
        }, 1000);
  }
};
</script>

<template>
    <!-- <div class="float-icon">
        <img src="../assets/cookie-solid.svg" alt="cookie" class="icon-img-2"/>
        <img src="../assets/heart-solid.svg" alt="cookie" class="icon-img-2"/>
        <img src="../assets/music-solid.svg" alt="cookie" class="icon-img-2"/>
        <img src="../assets/face-smile-solid.svg" alt="cookie" class="icon-img-2"/>
        <img src="../assets/wine-bottle-solid.svg" alt="cookie" class="icon-img-2"/>
    </div> -->
    <Transition name="floatMe">
        <FloatingIcons v-if="is_there" id="icon"/>
    </Transition>
    <Transition>
        <div class="welcome" v-if="!is_shown">
                <h1>Welcome to my site!</h1>    
                <span class="click-me">Click the photo to open menu.</span>
        </div>
    </Transition>
    
    <div class="menu">
        <div class="center-image">
            <img src="../assets/profile_photo.png" alt="" id="profile-pic" v-on:click="showIcons()">
        </div>
        <router-link v-on:click="showIcons()" to="/blog" class="icon">
            <img src="../assets/blog-solid.svg" alt="</>" class="icon-img">
            <span>Blog</span>
        </router-link>
        <router-link v-on:click="showIcons()" to="/aboutme" class="icon">
            <img src="../assets/user-solid.svg" alt="</>" class="icon-img">
            <span>About me</span>
        </router-link>
        <router-link v-on:click="showIcons()" to="/blog" class="icon">
            <img src="../assets/code-solid.svg" alt="</>" class="icon-img">
            <span>My Work</span>
        </router-link>
        <router-link v-on:click="showIcons()" to="/blog" class="icon">
            <img src="../assets/file-solid.svg" alt="</>" class="icon-img">
            <span>CV</span>
        </router-link>
        <router-link v-on:click="showIcons()" to="/blog" class="icon">
            <img src="../assets/phone-solid.svg" alt="</>" class="icon-img">
            <span>Contact</span>
        </router-link>
    
    </div>
    

</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.floatMe-enter-active,
.floatMe-leave-active {
  transition: opacity 0.5s ease;
}

.floatMe-enter-from,
.floatMe-leave-to {
  opacity: 0;
}

#icon{
    z-index: 1;
}
</style>