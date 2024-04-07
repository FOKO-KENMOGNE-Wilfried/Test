<script setup>

  import { products } from "../../data/product.json";
  import add from "../../assets/add.svg";
  import Card from './Card.vue'

</script>

<template>
  <div class="container">

    <div class="left">

      <div class="search">
        <label for="search">Search item</label>
        <input class="search_input" type="text" name="search" placeholder="Apple Watch, Samsung S21, Macbook Pro...">
      </div>
      <div class="products">

        <Card :products="products[0]" :add="add" />
        <Card :products="products[0]" :add="add" />
        <Card :products="products[0]" :add="add" />
        <Card :products="products[0]" :add="add" />
        <Card :products="products[0]" :add="add" />
  
      </div>

    </div>

    <div>
      <p>basket</p>
    </div>

  </div>
</template>

<style scoped>

  .search{
    display: flex;
    flex-direction: column;
  }
  .search_input{
    padding-left: 20px;
    height: 30px;
    width: 350px;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 2px 2px 2px gray;
  }
  .container{
    display: grid;
    grid-template-columns: 0.7fr 0.3fr;
    width: 100%;
  }
  .products{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    border: 1px solid white;
    width: 100%;
    height: 900px;
  }
  .left{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

</style>