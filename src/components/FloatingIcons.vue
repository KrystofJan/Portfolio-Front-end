
<script>

export default {
    data(){
        return{
            posX: Math.floor(Math.random() * (90 - 10 + 1)) + 10 + "%",
            posy: Math.floor(Math.random() * (90 - 10 + 1)) + 10 + "%",
            rot: Math.floor(Math.random() * (359 - 0 + 1)) + "deg",
            // img_srcs:["../assets/cookie-solid.svg","../assets/heart-solid.svg","../assets/beer-mug-solid.svg"], 
            img_index: Math.floor(Math.random() * (12 - 0 + 1))
            // TODO change to random values

        }
    },
    methods(){
        function what(){
            console.log(this.img_srcs);
        }
    }
};
</script>
<template>
    <img v-if="img_index===0" src="../assets/cookie-solid.svg" alt="cookie" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===1" src="../assets/heart-solid.svg" alt="heart" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===2" src="../assets/mug-hot-solid.svg" alt="mug" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===3" src="../assets/wine-bottle-solid.svg" alt="wine" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===4" src="../assets/face-smile-solid.svg" alt="face" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===5" src="../assets/beer-mug-empty-solid.svg" alt="beer" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===6" src="../assets/music-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===7" src="../assets/hippo-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===8" src="../assets/otter-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===9" src="../assets/frog-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===10" src="../assets/dog-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===11" src="../assets/keyboard-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    <img v-else-if="img_index===12" src="../assets/bugs-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
    
    <img v-else-if="img_index===10" src="../assets/kiwi-bird-solid.svg" alt="music" class="icon-img-2" :style="{ top: this.posy, left: this.posX}"/>
</template>

<style scoped>
.icon-img-2{
    position: absolute;
    width: 3rem;
    height: 3rem;
    opacity: 1;
    filter: invert(1);
    animation: moveUp ease-in-out 1s;
}
@keyframes moveUp{
    100%{
        transform: translateY(-100%);
    }
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>