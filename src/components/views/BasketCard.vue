<script setup>

// The props
  const props = defineProps({ 
    pro: Object,
  })

</script>

<template>
	<div class="box">
	    <img class="basket_image" :src="pro.image" alt="product">
	</div>
</template>

<style scoped>

  .basket_image{
    width: 60px;
    height: 60px;
  }
  .box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    padding: 5px;
	height: 70px;
    border-radius: 10px;
  }
  
</style>