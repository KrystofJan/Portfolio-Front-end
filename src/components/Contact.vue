
<script>
</script>
<template>
        <router-link to="/" class="back-to-top"><img src="../assets/arrow-up-solid.svg" alt="asd"></router-link>
    <main>
        <div></div>
        <div class="contacts left">
            <a target="_blank" href="https://www.facebook.com/jankrystof.zahradnik/"><img class="social-icon" src="../assets/facebook.svg" alt=""></a>
            <a target="_blank" href="https://www.instagram.com/jankrystofzahradnik"><img class="social-icon" src="../assets/instagram.svg" alt=""></a>
            <a target="_blank" href="https://twitter.com/OGzahry420"><img class="social-icon" src="../assets/twitter.svg" alt=""></a>
        </div>
        <img src="../assets/address-book.svg" id="address-book" alt="">
        <div class="contacts right">
            <a target="_blank" href="https://mastodon.social/@KrystofJan"><img class="social-icon" src="../assets/mastodon.svg" alt=""></a>
            <a target="_blank" href="https://www.linkedin.com/in/jan-kry%C5%A1tof-zahradn%C3%ADk-7a7326a7/"><img class="social-icon" src="../assets/linkedin.svg" alt=""></a>
            <a target="_blank" href="#"><img class="social-icon" src="../assets/envelope-solid.svg" alt=""></a>
        </div>
<div></div>
    </main>
</template>

<style scoped>
.back-to-top{
    filter: invert(1);
}
#address-book{
    filter: invert(1);
    width: 15%;
    transform-origin: center bottom;
    animation: book linear infinite 5s;
}
@keyframes book{
    0%{
        transform: scale(1) rotate(0deg);
    }
    5%{
        transform: scale(1.25) rotate(-15deg);
    }
    10%{
        transform: scale(1.5) rotate(15deg);
    }
    15%{
        transform: scale(1.75) rotate(-15deg);
    }
    20%{
        transform: scale(2) rotate(15deg);
    }
    25%{
        transform: scale(1.75) rotate(-15deg);
    }
    30%{
        transform: scale(1.5) rotate(15deg);
    }
    35%{
        transform: scale(1.25) rotate(-15deg);
    }
    40%{
        transform: scale(1) rotate(0);
    }
    100%{
        transform: scale(1) rotate(0);
    }
}
main{
    background: linear-gradient(#333333, #2c3d27);
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.contacts{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.social-icon{
    margin: 1rem 0;
    width: 3rem;
    height: 3rem;
    filter: invert(0.8);
    transition: 0.2s ease;
}
.social-icon:hover{
    filter: invert(1);
}
</style>