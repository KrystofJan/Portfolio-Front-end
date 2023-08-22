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
        <router-link v-on:click="showIcons()" to="/cv" class="icon">
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

html{
  scroll-behavior: smooth;
  height: 100vh;
}
*{
  box-sizing: border-box;
}
body{
  margin: 0 !important;
  padding: 0 !important;
  background-color: var(--background-nonlinear-1-color);
}
#app{
  position: absolute;
  top:0;
  left: 0;
  height: 100vh;
  width: 100%;
}
.menu{
  z-index: -2;
  background: var(--background-1-color);
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.center-image{
  width: 20rem;
  height: 20rem;
  transition: 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1 rem solid #000;
  position: relative;
}
#profile-pic{
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s ease;
  z-index: 1;
}
#profile-pic:hover{
  transform: scale(1.1);
}
.icon{
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #fff;
  justify-content: center;
  top: 50%;
  left: 50%;
  transition: 0.2s;
  opacity: 0;
  transform-origin: center;
  z-index: -1;
  cursor: pointer;
  text-decoration: none;
}
.icon:hover{
  filter: drop-shadow(0 0 1rem #fff);
}
.icon-img{
  filter: invert(1);
  width: 1.5rem;
  height: 1.5rem;
}
.welcome{
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  color: #fff;
  text-align: center;
  background: linear-gradient(
        to right,
        #ff1b6b 20%,
        #45caff 30%,
        #e81cff 70%,
        #40c9ff 80%
    );
  background-clip: text;
  color: transparent;
  background-size: 500% auto;
  animation: colorGradient 10s ease-in-out infinite alternate;
}
@keyframes colorGradient {
  0% {
      background-position: 0% 50%;
  }
  100% {
      background-position: 100% 50%;
  }
}

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