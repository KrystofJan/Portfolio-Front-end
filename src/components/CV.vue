<script>
export default{
    data(){
        return{
            show: true,
            show_window: true,
            edu: false,
            window_text: "education.txt"
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
        <h1 class="heading" v-on:click="close()">LOOKING FOR A JOB !</h1>
        <p>To exit click anywhere</p>
    </div>
    <main v-else>
        <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
        <div class="file" v-on:click="open_id(`education`)">
            <img src="../assets/file-icon.png" class="file-icon" alt="work_experience"/>
            <span class="file-name"><span>Education.txt</span></span>
        </div>
        <div class="file-window" v-if="show_window">
            <div class="blue-top">{{ window_text }}</div>
            <div class="window-content">
                <div v-if="edu"></div>
            </div>
        </div>
        <div id="menubar"></div>
    </main>
</template>

<style scoped>
#app{
    height: 100%;
}
.blue-top{
    width: 100%;
    height: 1.5rem;
    background: linear-gradient(to right, #00f, rgb(106, 106, 255))
}
.file-window{
    width: 50%;
    height: 50%;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
}
.file{
    position: absolute;
    top: 1rem;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3rem;

}
.file-icon{
    width: 3rem;
    height: 3rem;
}
.file-name{
    
}
#menubar{
    background-color: gray;
    height: 5%;
    width: 100%;
    position: absolute;
    top: 95%;
    left: 0;
}
main{
    background-image: url('../assets/cv_bg.jpg');
    height: 100vh;
    background-size: cover;
    background-position: center;
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
    animation: colorGradient 5s infinite alternate ease-in-out;
 }
 .heading{
    margin: auto;
    text-align: center;
    background: linear-gradient(-45deg, violet , indigo, blue, green, yellow, orange, red);
    background-clip: text;
    color: transparent;
    background-size: 500% auto;
    animation: colorGradient2 2s infinite alternate linear;
    
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