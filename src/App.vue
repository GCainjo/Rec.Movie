
<template>
  <div class="flex flex-col w-full justify-center items-center min-h-full">
    <BaseHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import BaseHeader from './components/Header/BaseHeader.vue'

import { useMoviesStore } from "./stores/movies";
import { useFavoriteStore } from "./stores/favorite";


export default defineComponent({
  components: {
    BaseHeader
  },
  setup() {
    const movies = useMoviesStore()
    const favorite = useFavoriteStore()

    onMounted(() => {
      movies.getGenre();
      movies.getBackgroundMovie();

      favorite.loadFavorite()
    })

    return {
      movies,
      favorite
    }
  }
})
</script>

<style scoped>

</style>

