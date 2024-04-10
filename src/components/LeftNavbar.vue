<script setup>
    import menu from "../assets/menu.svg"
    import home from "../assets/Home.svg"
    import basket from "../assets/Basket.svg"
    import notification from "../assets/notification.svg"
import { RouterLink } from "vue-router";
</script>

<template>
    
    <div class="container">

        <div class="box1">
            <a href=""><img src="" alt="logo"></a>
            <a href=""><img :src="menu" alt="menu"></a>
            <RouterLink to="/"><img :src="home" alt="Home"></RouterLink>
            <RouterLink to="/basket"><img :src="basket" alt="basket"></RouterLink>
        </div>
        <div class="box2">
            <RouterLink to="/"><img :src="notification" alt="notification"></RouterLink>
        </div>

    </div>

</template>

<style scoped>
    .container{
        background-color: gray;
        color: black;
        height: 94vh;
        width: 60px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0px 20px 0px;
    }
    .box1{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
</style>