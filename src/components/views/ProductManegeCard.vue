<script setup>
import { computed, ref, watch } from "vue";

	// The props
	const props = defineProps({ 
		updateBasketList: Object,
		minus: Object,
		plus: Object,
	})

	// The variables to store the size of the localstorage
	const basket_size = ref("");

	// The computed to detect the change of the size of the localstorage
	const change = computed(() => {
		const length = basket_size.value;
		return length
	})

	// To listen the change of the value that's return by the computed
	watch( change, (newValue) => {
		emit("value", JSON.parse(localStorage.getItem("products")));
	})

</script>

<template>
	<div class="product_container">
	    <img class="product_image" :src="updateBasketList[0].image" alt="product">
	    <div>
	        <p class="product_name">{{ updateBasketList[0].name }}</p>
	        <p class="product_color">{{ updateBasketList[0].spec }}</p>
	        <p class="product_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, sed!</p>
	        <div class="buy">
	            <p class="product_price">{{ updateBasketList[0].price }} x {{ updateBasketList[0].number }}</p>
	            <div class="quantity">
	                <img :src="minus" alt="minus">
	                <p>{{ updateBasketList[0].number }}</p>
	                <img :src="plus" alt="plus">
	            </div>
	        </div>
	    </div>
	</div>
</template>

<style scoped>

	.product_container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 10px 0px 10px;
		border-radius: 15px;
		background-color: gray;
		width: 90%;
    }
    .product_name{
        font-size: 1.5em;
    }
    .product_color{
        margin-top: -20px;
    }
	.quantity{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .buy{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

</style>