<script setup lang="ts">
defineProps<{ 
	pro: { id: number; name: string; price: string; spec: string; image: string; type: boolean; }[];
}>()
</script>

<template>
	<div class="box">
	    <img class="basket_image" :src="pro[0].image" alt="product">
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