<script setup lang="ts">
import card from '../component/card.vue'

const Card = {
    image:'../../assets/images/maison1.png',
    nom:"BeverlyHills",
    price:2500,
    adress:"2821 lake seville, Palm Harbor, TX",
    beds:6,
    bathroom:2,
    
};
console.log(Card)
</script>
<template>
   <card 
   :image=Card.image
   :nom=Card.nom
   :price=Card.price
   :adress=Card.adress
   :beds=Card.beds
   :bathroom=Card.bathroom

    />
   
</template>