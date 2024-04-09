<script setup>
import { computed, ref, watch } from "vue"


  const props = defineProps({ 
    products: Object,
    add: String,
  })
  const emit = defineEmits(["value"]);

  //emit("value", "Hello");
  
  const class_image = ref("image_card");
  const class_product = ref("product_card");
  const class_product_computer = ref("product_card_computer");
  const class_image_computer = ref("image_card_computer");
  const basket_size = ref("");
  //console.log(basket_size.value)

  const change = computed(() => {
    const length = basket_size.value;
    //console.log("Update !!!!")
    return length
  })
  
  watch( change, (newValue) => {
    emit("value", JSON.parse(localStorage.getItem("products")));
    console.log("Change detected");
  })

  function addToBasket(product){

    if (localStorage.length == 0) {

      var products = [product]
      var jsonProducts = JSON.stringify(products)
      localStorage.setItem("products", jsonProducts);

      //console.log(localStorage.getItem("products").length);
      basket_size.value = localStorage.getItem("products").length;


    } else {

      console.log("update else")
      var productsList = localStorage.getItem("products")
      var jsonProductsList = JSON.parse(productsList)
      jsonProductsList.push(product)
      localStorage.setItem("products", JSON.stringify(jsonProductsList))
      console.log(jsonProductsList)

      //console.log(localStorage.getItem("products").length);
      basket_size.value = localStorage.getItem("products").length;

    }


    

    //console.log(displayTest)

    // console.log("Product add successfull !")
    // localStorage.setItem("products", JSON.stringify(product))
    // console.log(localStorage.getItem("products"))
    //localStorage.clear()
    //window.localStorage.getItem("products").push({"id":2,"name":"Apple Watch","price":"$ 529.99","spec":"Serie 5 SE","image":"/src/assets/products/apple_watch.svg","type":false})
    //console.log(window.localStorage.getItem("products"))

  }

</script>

<template>
	<div :class="!products.type ? class_product : class_product_computer">
	          
	          <div :class="!products.type ? class_image : class_image_computer">
	            <img :src="products.image" alt="watch">
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