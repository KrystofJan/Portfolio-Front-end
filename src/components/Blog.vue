<template>
    <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
    <div class="blog" id="blog">
        <main>
            <div class="article-grid">
                <article class="article-banner card">1</article>
                <article class="article-banner card">2</article>
            </div>
            <div class="article-grid">
                <article class="article-banner card">3</article>
                <article class="article-banner card">4</article>
            </div>
            <div class="article-grid">
                <article class="article-banner card">5</article>
                <article class="article-banner card">6</article>
            </div>
            <div class="article-grid">
                <article class="article-banner card">7</article>
                <article class="article-banner card">8</article>
                <router-link v-on:click="showIcons()" to="/blog" class="more-posts card">More blog posts</router-link>
            </div>
            
        </main>
    </div>
</template>


<script setup>

</script>

<style scoped>
#blog{
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
  margin: 0;
    min-height: 100vh;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkcyan;
}

main{
    display: grid;
    grid-template-columns: 1fr;
    width: 75%;
    height: 75%;
    gap: 1rem;
}
.card{
    background-color: #fff;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    text-align: center;
}
.card:hover{
    transform: scale(1.025);
    box-shadow: 0 0 1rem #333;
}
.article-banner{
    
    height: 6rem;
    padding: 1rem;
}
.article-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}
.article-grid:nth-of-type(odd) .article-banner:nth-last-of-type(even){
    grid-column: 1 / 3;
}
.article-grid:nth-of-type(even) .article-banner:nth-last-of-type(odd){
    grid-column: 2 / 4;
}
.article-grid:last-of-type .article-banner:last-of-type{
    grid-column: 2 / 3;
}
.more-posts{
    background-color: #fff;
}
</style>