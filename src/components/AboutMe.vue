<template>
    <!-- Maybe change the design of the callendar -->
    <!-- Make the colors blend from pastelle to darker more "adult" colors symbolize  growing up ?-->
    <!-- Maybe make the design more and more complex -->
    <!-- BACKGROUND animated... some space stuff or like graphic of time going by or smth like that -->
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
main{
    z-index: -1;
    background-color: aquamarine;
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
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
}

.time-point:nth-of-type(even) .content{
    flex-direction: row; 
}
.time-point{
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}
.images{
    width: 45%;
    height: 100%;
}
.Text{
    background-color: blueviolet;
    border-radius: 4rem;
    width:45%;
    height: 100%;
}
.Text p{
    padding: 1rem;
}
.time-point:nth-of-type(odd) .content{
    flex-direction: row-reverse;
}
</style>
