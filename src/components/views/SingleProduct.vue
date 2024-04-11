<script setup>

    import { computed, ref, watch } from "vue";
    import { products } from "../../data/product.json";

    // The imports of the images
    import bag from "../../assets/bag.svg";
    import add from "../../assets/add.svg";
    import back from "../../assets/back.svg";

    // The import of the component
    import BasketCard from "./BasketCard.vue";

    // The array of the products that are in the basket
    const pro_basket = ref(localStorage.getItem("products"));

    // To collect the id of the product
    const productId = window.location.href.split("/")[4];

    // The json value of the contain of the localstorage
    var jsonPro_basket = ref(JSON.parse(pro_basket.value));

    // The variables to store the size of the localstorage
	const product_number = ref(1);

    const current_product = ref(products.filter( product =>  product.id == productId)[0]);

    // The computed to detect the change of the size of the localstorage
	const change = computed(() => {
		const pro = jsonPro_basket.value;
		return pro;
	})

	// // To listen the change of the value that's return by the computed
	// watch( change, (newValue) => {
    //     console.log("Watch");
    //     jsonPro_basket.value = JSON.parse(localStorage.getItem("products"));
    //     console.log(jsonPro_basket)
	// })

    // The function to add a product at the basket
    function addToBasket(product){

        // If the basket don't exist
        if (localStorage.length == 0) {

        product.number = 1;
        var products = [product];
        var jsonProducts = JSON.stringify(products);
        localStorage.setItem("products", jsonProducts);
        jsonPro_basket.value = JSON.parse(localStorage.getItem("products")).filter( product => product.number > 0);
    } else {

        var productsList = localStorage.getItem("products");
        var jsonProductsList = JSON.parse(productsList);

        let exist = false;
        jsonProductsList.forEach(element => {
            console.log(element);
            if(element.name == product.name){
                element.number += 1;
                console.log("Update number !");
                exist = true;
                jsonPro_basket.value = JSON.parse(localStorage.getItem("products")).filter( product => product.number > 0);
    } 
    });
    if(!exist){
        product.number = 1;
        jsonProductsList.push(product);
        console.log("Add product !");
        jsonPro_basket.value = JSON.parse(localStorage.getItem("products")).filter( product => product.number > 0);
    }
    localStorage.setItem("products", JSON.stringify(jsonProductsList));

    }

    }

</script>

<template>

    <div class="container">

        <div>

            <div class="single_product">
    
                <RouterLink to="/" class="link">
                    <div class="back">
                        <img class="back_image" :src="back" alt="back">
                        <p>Back</p>
                    </div>
                </RouterLink>
    
                <div class="box1">
                    <div class="image_box">
                        <img :src="current_product.image" alt="product">
                    </div>
                    <div class="info">
                        <h1 class="info_title">{{ current_product.name }}</h1>
                        <p class="info_spec">{{ current_product.spec }}</p>
                        <p class="info_price">{{ current_product.price }}</p>
                        <p class="info_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ducimus distinctio porro aliquid quasi sit obcaecati dolorum, dolores voluptatem esse quia magnam tenetur accusamus eveniet tempore, corporis accusantium quis quisquam ut alias ipsum ex adipisci iure totam. Quo, molestiae? Nostrum, reiciendis consectetur eius illo sint quos modi, laudantium exercitationem repellat, optio sunt earum harum blanditiis recusandae nesciunt velit quibusdam iste. Tenetur consectetur quod esse voluptate porro rerum voluptas unde cum reiciendis laudantium distinctio quaerat officiis, quisquam adipisci odio velit totam.</p>
                    </div>
                </div>
    
                <div class="add_contianer" @click="addToBasket(current_product)">
                    <div class="add">
                        <img  :src="add" alt="add">
                        <p>Add to Bag</p>
                    </div>
                </div>
    
            </div>

            <div class="description">
                <h1>Description</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis dolore deleniti cum veniam laboriosam esse saepe rerum praesentium illum consequatur expedita ad reprehenderit, sed eaque pariatur ullam dolorem voluptates. Fuga asperiores fugiat dolorem nemo facilis nesciunt expedita nisi possimus incidunt amet explicabo harum quaerat dolorum eius laudantium hic, ducimus nihil vel suscipit recusandae! Odit voluptatum autem delectus blanditiis quam sed. Pariatur at similique neque autem nesciunt ab qui nobis voluptate accusantium a dolor assumenda quis fugiat fuga minus nostrum possimus, officiis voluptatum hic expedita aliquid incidunt rem! Quas, obcaecati laboriosam! Dicta mollitia necessitatibus saepe ea fugit sint voluptatibus ad eligendi corporis explicabo incidunt delectus, veritatis quo officiis quaerat commodi unde eaque non iste doloremque fuga, itaque facere est quod. Asperiores recusandae perspiciatis illum reiciendis, facere nihil ex expedita id sint deleniti quasi doloribus numquam debitis tempora labore voluptatem facilis vitae cum dolore ad esse nam? Et qui excepturi id molestiae, debitis similique odio, exercitationem totam voluptatum cum doloribus? Architecto cum ex necessitatibus praesentium rem iusto. Vero et rerum eligendi quisquam optio nihil odit necessitatibus asperiores rem ipsam fugit, consectetur voluptatibus veritatis dolore! Porro sed alias nulla odit dolores? Cumque, fuga qui sint velit excepturi voluptatem vitae amet delectus omnis? Deleniti aperiam et consequuntur, sapiente architecto iusto dolor! Voluptates sit vel animi, fuga nostrum sunt commodi exercitationem quia at atque aliquam excepturi praesentium deserunt assumenda? Odit obcaecati laboriosam nam. Doloribus aliquid soluta nihil velit veniam pariatur, mollitia est voluptatibus ipsam facilis ipsa aut beatae voluptates nobis repellat quae numquam deleniti blanditiis vero natus accusantium architecto cupiditate nostrum! Nihil quos cupiditate, sit adipisci vitae animi? Possimus aperiam pariatur veniam aut dignissimos suscipit fugiat hic? Laboriosam in soluta laudantium expedita, praesentium, omnis inventore nesciunt dolorum quae blanditiis iure alias recusandae voluptate quam eaque beatae totam asperiores exercitationem facere similique sequi? In vero quis fuga. Aliquid suscipit recusandae voluptates, quod sequi at modi sapiente. Explicabo neque deleniti beatae, rerum nesciunt voluptatibus error omnis architecto corrupti! Eaque, ad cum? Quam distinctio accusantium error magnam. Aliquam ipsa est fuga libero tempora reiciendis mollitia earum consequatur minus iste, at harum numquam sequi illum unde nulla error cumque. Minima voluptatibus amet, reiciendis odio ipsa natus deleniti pariatur suscipit mollitia consectetur assumenda velit nulla error quidem deserunt possimus quos iusto labore rem dolore. Cumque libero aut vero culpa nisi illum facilis recusandae ea ipsam perspiciatis, beatae non atque harum, sint amet sapiente animi a, odio quis ducimus ratione magni.</p>
            </div>

        </div>

        <div class="basket_div">
            <div class="basket">
                <p>Bag</p>

                <div class="basket_product">

                    <BasketCard v-for="product_basket in change" :key="product_basket.id" :pro="product_basket" />

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

    .link{
        color: white;
        text-decoration: none;
    }
    .description{
        height: 550px;
        overflow: auto;
        scrollbar-width: none;

    }
    .info_title{
        font-size: 2.5em;
    }
    .info_price{
        font-size: 1.5em;
        font-weight: bold;
    }
    .info_description{
        margin-top: -20px;
    }
    .info_spec{
        margin-top: -20px;
    }
    .add_contianer{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .image_box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        width: 400px;
        height: 300px;
    }
    .info{
        width: 65%;
    }
    .box1{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .back{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
    }
    .add{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        width: 120px;
        height: 20px;
        gap: 5px;
        padding: 8px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
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
        background-color: #EDEDED;
        padding: 0px 10px 0px 10px;
    }
    .basket_div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        border-left: 4px solid white;
        padding-left: 20px;
        padding-top: 10%;
    }

</style>