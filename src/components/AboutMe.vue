<template>
    <!-- Maybe change the design of the callendar -->
    <!-- Make the colors blend from pastelle to darker more "adult" colors symbolize  growing up ?-->
    <!-- Maybe make the design more and more complex -->
    <!-- BACKGROUND animated... some space stuff or like graphic of time going by or smth like that -->
    <video autoplay muted loop id="myVideo">
        <source src="../assets/about_me_video.mp4" type="video/mp4">
    </video>
    <main>
    <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
    
    <div id="timeline">
        <div class="time-point">
            <h1 class="headln">Early childhood</h1>
            <div class="content">
                <section class="images">
                    <img src="https://picsum.photos/200/300" alt="picsum">
                </section>
                <div class="line">
                    <Callendar :month="`JAN`"/>
                    <Callendar :month="`FEB`"/>
                    <Callendar :month="`MAR`"/>
                </div>
                <article class="Text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate atque maiores dolorum sunt voluptas nisi cumque ad! At, eius sed deleniti voluptas fugit voluptatem? Veritatis voluptatum corrupti corporis voluptas?
                        Hic deserunt quibusdam excepturi quod, harum doloremque non magni. Unde dolore incidunt quae, aspernatur nam a voluptas minima distinctio harum repellat quaerat quam accusamus nemo rem sint, tempore hic voluptatum?
                        Alias, perferendis qui. Incidunt eveniet facere tempora! Cupiditate facere eius quidem perferendis officiis autem, possimus vero voluptatem inventore eum asperiores. Sed nihil, perferendis numquam quae similique dolores explicabo alias amet!
                        Consequuntur quaerat nesciunt a! Sequi et qui aliquid alias laborum amet architecto necessitatibus suscipit aliquam. Animi, labore laborum. Rem, omnis consequatur in doloribus minus velit magnam nulla voluptatum laudantium quos?
                        Repellendus suscipit earum adipisci ea nulla omnis, sunt ut quis nam illo tenetur consequuntur minima officia ullam molestiae dolore molestias tempora fugiat neque error dicta tempore, alias cum vitae? Mollitia.
                    </p>
                </article>
            </div> 
        </div>
        <div class="time-point">
            <h1 class="headln">School years</h1>
            <div class="content">
                <section class="images">
                    <img src="https://picsum.photos/200/300" alt="picsum">
                </section>
                <div class="line">
                    <Callendar :month="`APR`"/>
                    <Callendar :month="`MAY`"/>
                    <Callendar :month="`JUN`"/>
                </div>
                <article class="Text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate atque maiores dolorum sunt voluptas nisi cumque ad! At, eius sed deleniti voluptas fugit voluptatem? Veritatis voluptatum corrupti corporis voluptas?
                        Hic deserunt quibusdam excepturi quod, harum doloremque non magni. Unde dolore incidunt quae, aspernatur nam a voluptas minima distinctio harum repellat quaerat quam accusamus nemo rem sint, tempore hic voluptatum?
                        Alias, perferendis qui. Incidunt eveniet facere tempora! Cupiditate facere eius quidem perferendis officiis autem, possimus vero voluptatem inventore eum asperiores. Sed nihil, perferendis numquam quae similique dolores explicabo alias amet!
                        Consequuntur quaerat nesciunt a! Sequi et qui aliquid alias laborum amet architecto necessitatibus suscipit aliquam. Animi, labore laborum. Rem, omnis consequatur in doloribus minus velit magnam nulla voluptatum laudantium quos?
                        Repellendus suscipit earum adipisci ea nulla omnis, sunt ut quis nam illo tenetur consequuntur minima officia ullam molestiae dolore molestias tempora fugiat neque error dicta tempore, alias cum vitae? Mollitia.
                    </p>
                </article>
            </div> 
        </div>
        <div class="time-point">
            <h1 class="headln">School years</h1>
            <div class="content">
                <section class="images">
                    <img src="https://picsum.photos/200/300" alt="picsum">
                </section>
                <div class="line">
                    <Callendar :month="`AUG`"/>
                    <Callendar :month="`SEP`"/>
                    <Callendar :month="`OCT`"/>
                </div>
                <article class="Text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate atque maiores dolorum sunt voluptas nisi cumque ad! At, eius sed deleniti voluptas fugit voluptatem? Veritatis voluptatum corrupti corporis voluptas?
                        Hic deserunt quibusdam excepturi quod, harum doloremque non magni. Unde dolore incidunt quae, aspernatur nam a voluptas minima distinctio harum repellat quaerat quam accusamus nemo rem sint, tempore hic voluptatum?
                        Alias, perferendis qui. Incidunt eveniet facere tempora! Cupiditate facere eius quidem perferendis officiis autem, possimus vero voluptatem inventore eum asperiores. Sed nihil, perferendis numquam quae similique dolores explicabo alias amet!
                        Consequuntur quaerat nesciunt a! Sequi et qui aliquid alias laborum amet architecto necessitatibus suscipit aliquam. Animi, labore laborum. Rem, omnis consequatur in doloribus minus velit magnam nulla voluptatum laudantium quos?
                        Repellendus suscipit earum adipisci ea nulla omnis, sunt ut quis nam illo tenetur consequuntur minima officia ullam molestiae dolore molestias tempora fugiat neque error dicta tempore, alias cum vitae? Mollitia.
                    </p>
                </article>
            </div>   
        </div>
        <div class="time-point">
            <h1 class="headln">What's next?</h1>
            <div class="content">
                <section class="images">
                    <img src="https://picsum.photos/200/300" alt="picsum">
                </section>
                <div class="line">
                    <Callendar :month="`OCT`"/>
                    <Callendar :month="`NOV`"/>
                    <Callendar :month="`DEC`"/>
                </div>
                <article class="Text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate atque maiores dolorum sunt voluptas nisi cumque ad! At, eius sed deleniti voluptas fugit voluptatem? Veritatis voluptatum corrupti corporis voluptas?
                        Hic deserunt quibusdam excepturi quod, harum doloremque non magni. Unde dolore incidunt quae, aspernatur nam a voluptas minima distinctio harum repellat quaerat quam accusamus nemo rem sint, tempore hic voluptatum?
                        Alias, perferendis qui. Incidunt eveniet facere tempora! Cupiditate facere eius quidem perferendis officiis autem, possimus vero voluptatem inventore eum asperiores. Sed nihil, perferendis numquam quae similique dolores explicabo alias amet!
                        Consequuntur quaerat nesciunt a! Sequi et qui aliquid alias laborum amet architecto necessitatibus suscipit aliquam. Animi, labore laborum. Rem, omnis consequatur in doloribus minus velit magnam nulla voluptatum laudantium quos?
                        Repellendus suscipit earum adipisci ea nulla omnis, sunt ut quis nam illo tenetur consequuntur minima officia ullam molestiae dolore molestias tempora fugiat neque error dicta tempore, alias cum vitae? Mollitia.
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
}
</script>

<style scoped>
:root{
    --bg-color: #3391ab;
}
#middle-line{
    z-index: -1;
    position: absolute;
    top: 0;
    left: 45%;
    width: 10%;
    height: 100%;
    background-color: var(--bg-color,#00c8ff);
    --mask:
    radial-gradient(37.32px at 51.20px 50%,#000 99%,#0000 101%) 0 calc(50% - 64px)/51% 128px repeat-y,
    radial-gradient(37.32px at -19.2px 50%,#0000 99%,#000 101%) 32px 50%/calc(51% - 32px) 128px repeat-y,
		radial-gradient(37.32px at calc(100% - 51.20px) 50%,#000 99%,#0000 101%) 100% calc(50% - 64px)/51% 128px repeat-y,
    radial-gradient(37.32px at calc(100% + 19.20px) 50%,#0000 99%,#000 101%) calc(100% - 32px) 50%/calc(51% - 32px) 128px repeat-y;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}
.back-to-top{
    filter: invert(1);
}
#myVideo {
    z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
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
    /* background-color: aquamarine; */
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
.headln{
    z-index: 2;
    margin: 0 auto;
    background-color: #00ceab;
    border-radius: 1rem;
    width: fit-content;
    padding: 0.5rem;
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
}
.Text{
    width: 45%;
    background-color: #00ceab;
}

.time-point{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}
.time-point:nth-of-type(even) .content{
    flex-direction: row; 
}

.Text p{
    padding: 1rem;
}
.time-point:nth-of-type(odd) .content{
    flex-direction: row-reverse;
}
</style>
