<script setup>
import { computed, ref, watch } from "vue"

  // The props
  const props = defineProps({ 
    products: Object,
    add: String,
  })
  // The emit to send data at the parent
  const emit = defineEmits(["value"]);

  // For the route url
  const url = "/single_product/"

  // The variables to switch the class of the components
  const class_image = ref("image_card");
  const class_product = ref("product_card");
  const class_product_computer = ref("product_card_computer");
  const class_image_computer = ref("image_card_computer");

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

  // The function to add a product at the basket
  function addToBasket(product){

    // If the basket don't exist
    if (localStorage.length == 0) {

      product.number = 1;
      var products = [product];
      var jsonProducts = JSON.stringify(products);
      localStorage.setItem("products", jsonProducts);

      // Update of the size of the localstorage
      basket_size.value = localStorage.getItem("products").length;


    } else {

      var productsList = localStorage.getItem("products");
      var jsonProductsList = JSON.parse(productsList);

      let exist = false;
      jsonProductsList.forEach(element => {
        console.log(element);
        if(element.name == product.name){
          element.number += 1;
          console.log("Update number !");
          console.log(element);
          exist = true;
        } 
      });
      if(!exist){
        product.number = 1;
        jsonProductsList.push(product);
        console.log("Add product !");
      }
      localStorage.setItem("products", JSON.stringify(jsonProductsList));

      // Update of the size of the localstorage
      basket_size.value = localStorage.getItem("products").length;

    }

  }

</script>

<template>
	<div :class="!products.type ? class_product : class_product_computer">
	          
	          <div :class="!products.type ? class_image : class_image_computer">
              <RouterLink :to="url + products.id">
                <img :src="products.image" alt="watch">
              </RouterLink>
	          </div>
	          <div class="detail">
	            <div class="view">
	              <p class="name">{{ products.name }}</p>
	              <p class="spec">{{ products.spec }}</p>
	              <p class="price">{{ products.price }}</p>
	            </div>
	            <div class="add">
	              <img @click="addToBasket(products)" :src="add" alt="add">
	            </div>
	          </div>
	  
	        </div>
</template>

<style scoped>

  .add{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    padding: 8px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
	.product_card{
    width: 230px;
  }
  .product_card_computer{
    width: 500px;
    height: 200px;
  }
  .image_card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 230px;
    height: 260px;
    border-radius: 20px;
  }
  .image_card_computer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 500px;
    height: 260px;
    border-radius: 20px;
  }
  .detail{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
  .name{
    font-weight: bold;
    font-size: 1.3em;
  }
  .price{
    font-weight: bold;
    font-size: 1.2em;
  }
  .spec{
    color: gray;
    margin-top: -10px;
  }

</style>