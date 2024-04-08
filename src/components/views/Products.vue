<script setup>
  
  // The imports
  import { products } from "../../data/product.json";
  import { computed, ref } from "vue";
  import Card from './Card.vue';
  
  import add from "../../assets/add.svg";
  import bag from "../../assets/bag.svg";
  import BasketCard from './BasketCard.vue'

  // The const that contain the data importing to the json file
  const pro = ref(products);
  // The variable to the value of the input
  const inp = ref("")

  // The variable that conatain the filtered list
  const filteredProducts = computed(() => {
    const input = inp.value;
    return pro.value.filter(product => product.name.toLowerCase().includes(input.toLowerCase()));
  })

  // The function to change the value of the input
  function onInput(e){
    inp.value = e.target.value
  }

</script>

<template>
  <div class="container">

    <div class="left">

      <div class="search">
        <label for="search">Search item</label>
        <input @input="onInput" class="search_input" type="text" name="search" placeholder="Apple Watch, Samsung S21, Macbook Pro...">
      </div>
      <div class="products">

        <Card v-for="product in filteredProducts" :key="product.id" :products="product" :add="add" />
  
      </div>

    </div>

    <div class="basket_div">
      <div class="basket">
        <p>Bag</p>

        <div class="basket_product">

          <BasketCard :pro="pro" />
          <BasketCard :pro="pro" />
          <BasketCard :pro="pro" />
          <BasketCard :pro="pro" />


        </div>

        <a href="" class="button">
          <div class="basket_add">
            <img :src="bag" alt="bag">
            <p>View Bag</p>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped>

  .button{
    text-decoration: none;
    color: white;
  }
  .basket_product{
    display: flex;
    gap: 10px;
    padding: 10px;
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
    border-radius: 10px;
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
  .search{
    display: flex;
    flex-direction: column;
  }
  .search_input{
    padding-left: 20px;
    height: 40px;
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
    width: 100%;
    height: 90vh;
    overflow: auto;
    scrollbar-width: none;
  }
  .left{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

</style>