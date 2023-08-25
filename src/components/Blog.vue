<script>
import FloatingIcons from './FloatingIcons.vue';
export default {
    components: {
        FloatingIcons
    },
    data() {
        return {
        is_there: true,
        is_there2: true,
        is_there3: true,
        };
  },
  created(){  
    const interval1 = setInterval(() => {
            this.is_there = !this.is_there;
        }, Math.floor(Math.random() * (1000 - 100 + 1) + 100));
        
    const interval2 = setInterval(() => {
            this.is_there2 = !this.is_there2;
        }, Math.floor(Math.random() * (1000 - 100 + 1) + 100));
        
    const interval3 = setInterval(() => {
            this.is_there3 = !this.is_there3;
        }, Math.floor(Math.random() * (1000 - 100 + 1) + 100));
    }
}
</script>

<template>
    <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
    <div class="blog" id="blog">
        <main>
            <header>
                <div class="header-wrap">
                    <h1>My Blog</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque modi odio, unde fuga alias facilis ullam nisi! Dolore, magnam sit porro rerum dolor esse officiis id necessitatibus at tempora dignissimos!</p>
                </div>
            </header>
            <section class="article-wrap">
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme travel">
                            Travel
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme tech">
                            Technology
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme travel">
                            Travel
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme tech">
                            Technology
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme travel">
                            Travel
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme tech">
                            Technology
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme travel">
                            Travel
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
                <a href="#" class="article"> 
                    <div class="img">
                        <div class="theme tech">
                            Technology
                        </div>
                    </div>
                    <div class="article-content">
                        <h3 class="article-heading">I just started learning VUE</h3>
                        <span class="article-summary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos consectetur quasi ducimus natus eos qui minus beatae. Nam sequi soluta dolores totam nemo, exercitationem debitis rerum in magni dolorem vel!
                        </span>
                    </div>
                </a>
            </section>
            <div class="right-section">
                <!-- <img class="right-img" src="https://picsum.photos/206" alt="">
                <img class="right-img" src="https://picsum.photos/205" alt="">
                <img class="right-img" src="https://picsum.photos/200" alt=""> -->
            </div>
            <div class="left-section">
                <!-- <img class="left-img" src="https://picsum.photos/205" alt="">
                <img class="left-img" src="https://picsum.photos/203" alt="">
                <img class="left-img" src="https://picsum.photos/201" alt=""> -->
            </div>
            <footer>
                This is a footer
            </footer>
        </main>
    </div>
</template>




<style scoped>

/* .right-img:nth-of-type(1){
    transform: rotate(45deg) scale(0.75);
    position: relative;
    top: 50%;
}
.right-img:nth-of-type(2){
    transform: rotate(-15deg) scale(0.3);
    position: relative;
    top: 1%;
}
.right-img:nth-of-type(3){
    transform: rotate(130deg) scale(0.5);
    position: relative;
    top: 67%;
}
.left-img:nth-of-type(1){
    transform: rotate(45deg) scale(0.85);
    position: relative;
    top: -5%;
}
.left-img:nth-of-type(2){
    transform: rotate(-15deg) scale(0.41);
    position: relative;
    top: 56%;
}
.left-img:nth-of-type(3){
    transform: rotate(130deg) scale(0.23);
    position: relative;
    top: 33%;
} */

footer{
    grid-area: footer;
    height: 10rem;
    /* background-color: var(--purple); */
    background-color: #fff;
    /* border-top: 0.3rem solid var(--red); */
    border-top: 0.3rem solid #000;
}

.right-section{
    grid-area: right;
    width: 12.5vw;
    overflow: hidden;
}
.left-section{
    grid-area: left;
    width: 12.5vw;
    overflow: hidden;
}
main{
    display: grid;
    grid-template-areas: 
    'header header header header' 
    'left middle middle right' 
    'footer footer footer footer';
}
.img{
    background-image: url('https://picsum.photos/400/300');
    border-radius: 0.2rem 0.2rem 0 0;
    width: 100%;
    max-height: 30rem;
    min-height: 15rem;
    background-size: cover;
    background-position: center;
}
header{
    grid-area: header;
    /* background: var(--purple); */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;    
    text-align: center;
    min-height: 30vh; 
    background-attachment: fixed;
    border-bottom: 0.3rem solid #000;
}
.header-wrap > p{
    width: 50%;
    margin: 0 auto;
}
.header-wrap{
    /* background-color: white; */
    /* border-radius: 0.5rem; */
    width: 75%;
    justify-content: center;
    flex-direction: column;
    align-items: center;    
    text-align: center;
}
#blog{
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    width: 100%;
    /* background: linear-gradient(to bottom, var(--blue),var(--dark-blue)); */
    background-color: white;
    overflow-x: hidden;
}

.article{
    /* border: 0.2rem solid #000; */
    border-radius: 0.5rem;

    background-color: #fff;
    box-shadow: 0px 0px 1rem #ccc;
    text-decoration: none;
    color: #000;
    transition: 0.2s ease;
}
.article:hover{
    box-shadow: 0px 0px 1.5rem #bbb;
    transform: scale(1.05);
}
.article-content{
    padding: 1rem;
}
.article-heading{
    text-decoration: underline;
}
.article-wrap{
    grid-area: middle;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    /* border: 0.2rem solid #000; */
    /* background-color: var(--pink); */
    margin: 3rem;
    padding: 1rem;
    /* border-radius: 1rem; */
}
.theme{
    position: relative;
    top: 0.5rem;
    left: 0.75rem;
    width: fit-content;
    padding: 0.3rem;
    border-radius: 0.3rem;
}
.travel{
    background-color: #1bce00;
}
.tech{
    background-color: rgb(14, 195, 255);
}

</style>