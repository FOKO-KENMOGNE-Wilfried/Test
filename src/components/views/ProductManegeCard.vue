<script setup>
import { computed, ref, watch } from "vue";

	// The emit to send data at the parent
	const emit = defineEmits(["value"]);

	// The props
	const props = defineProps({ 
		updateBasketList: Object,
		minus: String,
		plus: String,
	})

	// The variables to store the size of the localstorage
	const product_number = ref(1);

	// The computed to detect the change of the size of the localstorage
	const change = computed(() => {
		const length = product_number.value;
		return length
	})

	// To listen the change of the value that's return by the computed
	watch( change, (newValue) => {
		emit("value", JSON.parse(localStorage.getItem("products")));
	})

	// The function to add and remove a quantity of product
	function addOneProduct(updateBasketList){

		var productsList = localStorage.getItem("products");
		var jsonProductsList = JSON.parse(productsList);
		// For update the quantity of the product
		jsonProductsList.forEach(element => {
			console.log(element);
			if(element.name == updateBasketList.name){
				element.number += 1;
				console.log("Update number !");
				console.log(element);
				product_number.value = element.number;
			}
		})
		// For push the new values for the product
		localStorage.setItem("products", JSON.stringify(jsonProductsList));
	}
	function removeOneProduct(updateBasketList){

		var productsList = localStorage.getItem("products");
		var jsonProductsList = JSON.parse(productsList);
		// For update the quantity of the product
		jsonProductsList.forEach(element => {
			console.log(element);
			if(element.name == updateBasketList.name){
				element.number -= 1;
				console.log("Update number !");
				console.log(element);
				product_number.value = element.number;
			}
		})
		// For push the new values for the product
		localStorage.setItem("products", JSON.stringify(jsonProductsList));

	}

</script>

<template>
	<div class="product_container">
	    <img class="product_image" :src="updateBasketList.image" alt="product">
	    <div>
	        <p class="product_name">{{ updateBasketList.name }}</p>
	        <p class="product_color">{{ updateBasketList.spec }}</p>
	        <p class="product_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, sed!</p>
	        <div class="buy">
	            <p class="product_price">{{ updateBasketList.price }} x {{ updateBasketList.number }}</p>
	            <div class="quantity">
	                <img @click="removeOneProduct(updateBasketList)" :src="minus" alt="minus">
	                <p>{{ updateBasketList.number }}</p>
	                <img @click="addOneProduct(updateBasketList)" :src="plus" alt="plus">
	            </div>
	        </div>
	    </div>
	</div>
</template>

<style scoped>

	*{
		color: black;
	}
	.product_container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 40px 10px 10px;
		border-radius: 15px;
		background-color: white;
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