<template>
  <nav>
    <h4 class="text-xl">
      <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
      menu (dans <code class="font-mono">/src/App.vue</code>)
    </h4>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="./pages/index.vue">
          lien vers
          <code class="font-mono">/src/pages/index.vue</code>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <router-link class="text-red-600 underline" to="/src/pages/simple.vue">
          lien vers
          <code class="font-mono">/src/pages/simple.vue</code>
        </router-link>
      </li>
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <router-view class="m-2 border-2 p-2" />
</template>

<script setup lang="ts">

</script>
