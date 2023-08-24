<template>
    <!-- Make the colors blend from pastelle to darker more "adult" colors symbolize  growing up ?-->
    <!-- Maybe make the design more and more complex -->
    <!-- BACKGROUND animated... some space stuff or like graphic of time going by or smth like that -->
    <main>
    <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
    <img src="../assets/profiq-logo.png" alt="ppp" id="profiq-l">
    <div id="timeline">
        <h1 class="headln" v-if="is_early">Early childhood</h1>
        <h1 class="headln" v-if="is_school">School Years</h1>
        <h1 class="headln" v-if="is_current">Current Life</h1>
        <h1 class="headln" v-if="is_next">What's Next?</h1>
        <div class="time-point">
            
            <div class="content">
                <section class="images">
                    <img src="../assets/mimino.png" id="mimino" alt="picsum">
                    <img src="../assets/skate.png" id="skate" alt="picsum">
                    <img src="../assets/cook.png" id="cook" alt="picsum">
                    <img src="../assets/repiste.png" id="repky" alt="picsum">
                    
                </section>
                <div class="line">
                </div>
                <article class="Text">
                    <p>
                        I was born on March 28th 2001 in Ostrava. Eversince I can remember I was quite a creative and playful child.
                        When I was three years old, me and my family moved to the country side, to the lovely village called Řepiště.
                        Growing up didn't have trouble making friends and all the time I could I was either outside playing with them,
                        or on the computer playing games with them. 
                    </p>
                </article>
            </div> 
        </div>
        <div class="time-point">
            <div class="content">
                <section class="images">
                    <img src="../assets/repiste_zakladka.jpg" id="rep" alt="picsum">
                    <img src="../assets/liskovec.jpg" id="lis" alt="picsum">
                    <img src="../assets/kratochvilka.jpg" id="krat" alt="picsum">
                </section>
                <div class="line">
                </div>
                <article class="Text">
                    <p>I did "okay" in school. I started studying programming since I was 15 and I loved it eversince. Last year I studied in South Korea for a semester, where I had lots of fun and leared lots of things.</p>    
                </article>
            </div> 
        </div>
        <div class="time-point">
            <div class="content">
                <section class="images">
                    <img src="../assets/fm.jpeg" id="fm" alt="picsum">
                    <img src="../assets/fei.jpg" id="fei" alt="picsum">  
                </section>
                <div class="line">
                </div>
                <article class="Text">
                    <p>
                        Right now I'm living in an apartament in Frýdek-Místek and I'm still studying at VSB - TUO, trying to get my bachelors degree.
                        While I'm not in school I'm trying to learn more about software engineering, go out with my friends and I also have/had a job at <span id="profiq"  @mousemove="hover()">Profiq</span> as a QA Engineer.
                    </p>
                </article>
            </div>   
        </div>
        <div class="time-point">
            <div class="content">
                <section class="images">
                    <img src="../assets/question-solid.svg" id="ques" alt="picsum">
                </section>
                <div class="line">
                </div>
                <article class="Text">
                    <p>
                        I want to finish my degree, expand my knowlage about computer science etc. My ultimate goal is to buy back the house I grew up in, and do all these adult things :)
                    </p>
                </article>
            </div> 
        </div>
    </div>
    <div id="middle-line"></div>
</main>
</template>

<script>
import Callendar from '../components/Callendar.vue'
export default {
    components: {
        Callendar
    },
    data(){
        return{
            is_early: true,
            is_school: false,
            is_current: false,
            is_next: false,
            mouseX: 0,
            mouseY: 0
        }
    },
    methods: {
        hover(){
            console.log("im here");
            let profiq = document.getElementById("profiq-l");
            profiq.style.display = "block";
            console.log(this.mouseY+ ", " + this.mouseX);

            profiq.style.top= this.mouseY;
            profiq.style.left= this.mouseX;
        },
        hover_end(){
            console.log("im not here");
            let profiq = document.getElementById("profiq-l");
            profiq.style.display = "none";
        },
        event(){
            window.addEventListener('scroll', () =>{
                let mimco = document.getElementById("mimino");
                mimco.style.top -= window.pageYOffset-mimco.style.top;
        });
        }
    },
    created () {
        window.addEventListener('mousemove', (event) => {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            
            // console.log(this.mouseY+ ", " + this.mouseX);
        });
        window.addEventListener('scroll', () =>{
            let vh = Math.max(document.documentElement.clientHeight -3, window.innerHeight-3 || 0);
            if(window.pageYOffset <= (vh - (4.5*vh/100))){
                this.is_early = true;
                this.is_school = false;
                this.is_current = false;
                this.is_next = false;
                
            }
            if(window.pageYOffset >= (vh - (4.5*vh/100))){
                this.is_early = false;
                this.is_school = true;
                this.is_current = false;
                this.is_next = false;
            }
            if(window.pageYOffset >= (vh*2 - (4.5*vh/100))){
                this.is_early = false;
                this.is_school = false;
                this.is_current = true;
                this.is_next = false;
            }
            if(window.pageYOffset >= (vh*3 - (4.5*vh/100))){
                this.is_early = false;
                this.is_school = false;
                this.is_current = false;
                this.is_next = true;
            }
            
        });
  },
}
</script>

<style scoped>
#ques{
    width: 50%;
    position: absolute;
    left: 25%;
    transform-origin: center;
    animation: rotoroto ease-in-out 3s infinite alternate;
}
@keyframes rotoroto{
    0%{
        transform: rotate(-45deg);
    }
    100%{
        transform: rotate(45deg);
    }
}
#fm{
    width: 56%;
    position: absolute;
    top: 10%;
    left: 40%;
}
#fei{
    position: absolute;
    width: 65%;
    left: 0;
    top: 40%;
}
#rep{
    position: absolute;
    top: 10%;
    left: 0;
    transform: rotate(5deg);
    width: 50%;
}
#lis{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: rotate(-5deg);
    width: 50%;
}
#krat{
    position: absolute;
    top: 50%;
    left: 25%;
    width: 50%;
}
#mimino{
    width: 40vh;
    transform: rotate(50deg);
    position: absolute;
    z-index: 3;
    left: 0%;
    top: 40%;
}
#lovely{
    color: red;
    font-weight: bold;
}
#profiq-l{
    position: absolute;
    z-index: 99999;
    display: none;
}
#skate{
    width: 60vh;
    transform: rotate(90deg);
    position: absolute;
    top: 15%;
}
#cook{
    width: 30vh;
    transform: rotate(-30deg);
    position: absolute;
    top: 50%;
    left: 60%;
}
#repky{
    width: 5rem;
    position: absolute;
    right: 15%;
    top: 3%;
    transform: rotate(15deg);
}
.back-to-top{
    filter: invert(1);
}

.line{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 10rem;
}
main{
    z-index: -1;
    background: var(--bg-color);
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
.headln{   
    margin: 3vh 0;
    width: fit-content;
    color: transparent;
    color: white;
    mix-blend-mode: difference;
    z-index: 88;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%); 
}

#timeline{
    min-height: 100vh;
}
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.images{
    width: 45%;
    height: 75vh;
    position: relative;
    overflow: hidden;
}
.Text{
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Text > p{
    width: 75%;
}

.time-point{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}
.time-point:nth-of-type(1){
    
    background: linear-gradient(to right, #00d5f1, #00b6ea);
    /* z-index: 1; */
}

.time-point:nth-of-type(2){
    /* position: relative; */
    background: linear-gradient(to left, #ff0000, #b80000);
    /* z-index: 2; */
}
.time-point:nth-of-type(3){
    /* position: relative; */
    background: linear-gradient(to right, #06b200, rgb(37, 150, 0));
    /* z-index: 3; */
}
.time-point:nth-of-type(4){
    /* position: relative; */
    background: linear-gradient(to right, #e3e700, #e7df00);
    /* z-index: 3; */
}
.time-point:nth-of-type(even) .content{
    flex-direction: row; 
}

.time-point:nth-of-type(odd) .content{
    flex-direction: row-reverse;
}
</style>
