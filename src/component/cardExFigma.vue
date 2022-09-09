<template>
  <figure>
    <img class="mt-5 w-full rounded-t-lg" :src=image alt="berevely hills" />
    <figcaption class="relative flex flex-col border-2 border-t-0 px-5 py-7">
      <h3 class="text-2xl text-gray-900">{{ nom }}</h3>
      <address class="my-2 not-italic text-gray-500">{{ adresse }}</address>
      <hr class="my-2 border-t-2 border-indigo-100" />
      <div class="-order-1 flex items-center">
        <div class="text-2xl text-indigo-500">${{ price.toLocaleString("en-US") }}</div>
        <div class="text text-gray-900">/months</div>
      </div>
      <div class="flex justify-between text-sm">
        <div><bed class="inline-block pr-1 align-top" /> {{ numberBeds }} beds</div>
        <div><bathroom class="inline-block pr-1 align-top" /> {{ numberBathrooms }} bathrooms</div>
        <div><dimension class="inline-block pr-1 align-top" /> {{ dimensions }}</div>
      </div>
      <div class="absolute top-7 right-5 grid h-12 w-12 place-items-center rounded-full border-2 border-indigo-100">
        <heart :class="{ 'fill-red-400': true }" />
      </div>
    </figcaption>
  </figure>
</template>

<script>
import Bed from "./Bed.vue";
import Bathroom from "./Bathroom.vue";
import Heart from "./Heart.vue";
import Dimension from "./Dimension.vue";
export default {
  components: { Bed, Bathroom, Heart, Dimension },
  props: {
    price: {
      type: Number,
      default: 2700,
    },
    favoris: {
      type: Boolean,
      default: false,
    },
    adresse: {
      type: String,
      default: "2821 lake seville, Palm Harbor, TX",
    },
    nom: {
      type: String,
      default: "Beverly Springfield",
    },
    numberBeds: {
      type: Number,
      default: 4,
    },
    numberBathrooms: {
      type: Number,
      default: 2,
    },
    dimensions: {
      type: String,
      default: "6x7.5 m²",
    },
    image: {
      type: String,
    },
  },
};
</script>