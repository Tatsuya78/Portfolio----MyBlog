<template>
  <div>
    <MovieHeader />
    <MovieContent />
  </div>
</template>

<script>
import MovieHeader from "../pages/Movie-header.vue";
import MovieContent from "../pages/Movie-content.vue";
export default {
  name: "MovieMain",
  components: { MovieHeader, MovieContent },
};
</script>
