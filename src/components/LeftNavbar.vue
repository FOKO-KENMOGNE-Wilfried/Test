<script setup>

    // The functions import
    import { RouterLink } from "vue-router";

    // The image import
    import home from "../assets/Home.svg"
    import basket from "../assets/Basket.svg"
    import notification from "../assets/notification.svg"
    import logo from "../assets/logo.svg";

</script>

<template>
    
    <div class="container">

        <div class="box1">
            <a href=""><img :src="logo" alt="logo"></a>
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
        background-color: white;
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