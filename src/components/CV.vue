<script>
export default{
    data(){
        return{
            show: true
        }
    },
    methods: {
        close(){
            this.show = false;
        }
    }
}
</script>
<template>
    <div class="CV" v-if="show" v-on:click="close()">
        <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
        <h1 class="heading" v-on:click="close()">LOOKING FOR A JOB !</h1>
    </div>
</template>

<style scoped>
#app{
    height: 100%;
}
 .CV{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: linear-gradient(45deg, red ,orange,yellow,green,blue,indigo,violet);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 500% auto;
    animation: colorGradient 2s ease-in-out;
 }
 .heading{
    margin: auto;
    text-align: center;
    background: linear-gradient(-45deg, violet , indigo, blue, green, yellow, orange, red);
    background-clip: text;
    color: transparent;
    background-size: 500% auto;
    animation: colorGradient2 2s linear;
    transition: 0s;
 }
 @keyframes colorGradient {
  0% {
      background-position: 0% 50%;
  }
  100% {
      background-position: 100% 50%;
  }
}
 @keyframes colorGradient2 {
  0% {
      background-position: 0% 50%;
      transform: scale(1);
  }
  99% {
      background-position: 100% 50%;
      transform: scale(4);
  }
}
</style>