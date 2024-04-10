<script setup>

    import { computed, ref } from "vue";

    // The imports of the images
    import bag from "../../assets/bag.svg";
    import plus from "../../assets/plus.svg";
    import minus from "../../assets/minus.svg";

    // The import of the component
    import BasketCard from "./BasketCard.vue";
import ProductManegeCard from './ProductManegeCard.vue'

    // The array of the products that are in the basket
    const pro_basket = ref(localStorage.getItem("products"));
    console.log(pro_basket);
    // The json value of the contain of the localstorage
    var jsonPro_basket = ref(JSON.parse(pro_basket.value));

    // The function to update the products
    const updateBasketList = computed(() => {
        return jsonPro_basket.value;
    })

</script>

<template>

    <div class="container">

        <div class="bag">
            <h1 class="bag_title">Check your bag Items</h1>
            <div class="bag_container">

                <ProductManegeCard :updateBasketList="updateBasketList" :minus="minus" :plus="plus" />

            </div>
        </div>
        <div class="basket_div">
            <div class="basket">
                <p>Bag</p>

                <div class="basket_product">

                    <BasketCard v-for="product_basket in updateBasketList" :key="product_basket.id" :pro="product_basket" />

                </div>

                <RouterLink to="/basket" href="" class="button">
                <div class="basket_add">
                    <img :src="bag" alt="bag">
                    <p>View Bag</p>
                </div>
                </RouterLink>
            </div>
        </div>

    </div>

</template>

<style scoped>

    .container{
        display: grid;
        grid-template-columns: 0.7fr 0.3fr;
        width: 100%;
    }
    .button{
        text-decoration: none;
        color: white;
    }
    .basket_product{
        display: flex;
        gap: 10px;
        padding: 10px;
        width: 90%;
        height: 200px;
        overflow: auto;
        scrollbar-width: none;
        flex-wrap: wrap;
        border: 2px solid white;
        border-radius: 10px;
    }
    .basket_add{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 35px;
        padding: 0px 10px 0px 10px;
        background-color: black;
        border-radius: 10px;
    }
    .basket{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 70%;
        height: 45%;
        border-radius: 20px;
        background-color: gray;
        padding: 0px 10px 0px 10px;
    }
    .basket_div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-left: 4px solid white;
        border-right: 4px solid white;
        padding-left: 20px;
        padding-top: 10%;
        border-radius: 20px;
    }
    .bag{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .bag_container{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

</style>