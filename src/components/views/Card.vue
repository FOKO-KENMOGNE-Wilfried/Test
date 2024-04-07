<script setup>
import { onMounted, ref } from "vue"


  const props = defineProps({ 
    products: String,
    add: String,
  })
  
  const class_image = ref("image_card");
  const class_product = ref("product_card");
  const class_product_computer = ref("class_product_computer");
  const class_image_computer = ref("class_image_computer");

  onMounted(() => {
    const isComputer = ref(products.type);
  })

</script>

<template>
	<div :class="!isComputer ? class_product : class_product_computer">
	          
	          <div :class="!isComputer ? class_image : class_image_computer">
	            <img :src="products.image" alt="watch">
	          </div>
	          <div class="detail">
	            <div class="view">
	              <p class="name">{{ products.name }}</p>
	              <p class="spec">{{ products.spec }}</p>
	              <p class="price">{{ products.price }}</p>
	            </div>
	            <div class="add">
	              <img :src="add" alt="add">
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
    height: 200px;
  }
  .product_card_computer{
    width: 230px;
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