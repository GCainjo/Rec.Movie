
<template>
  <div class="flex flex-col w-full justify-center items-center">
    <BaseHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BaseHeader from './components/Header/BaseHeader.vue'

import { useMoviesStore } from "./stores/movies";


export default defineComponent({
  components: {
    BaseHeader
  },
  setup() {
    const movies = useMoviesStore()

    onMounted(() => {
      movies.getGenre();
      movies.getBackgroundMovie();
    })

    return {
      movies
    }
  }
})
</script>

<style scoped>

</style>

