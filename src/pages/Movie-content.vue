<template>
  <section class="movie-content">
    <div class="row">
      <!-- movie-text starts -->
      <div class="movie-text col-md-10">
        <h1>I'm mostly addicted to movies that calm me down or inspire me</h1>
        <h2>
          in a word <u><strong>Thoughtful and mind-blowing!!</strong></u>
        </h2>
        <hr>
      </div>
      <!-- movie-text ends -->
      <!-- movie-contents start -->
      <div class="movie-items row" v-for="item in favoriteMovie" :key="item.id">
        <div class="movie-star col-md-1"></div>
        <div class="movie-intro col-md-10">
          <h3>「{{item.name}}」---- {{item.briefSum}}</h3>
          <p>Movie Review Section --- Coming later</p>
        </div>
      </div>
      <!-- movie-contents end -->
    </div>
  </section>
</template>

<script>
export default {
  name: "MovieContent",
  data(){
    return {
      favoriteMovie:[]
    }
  },
  mounted(){
    this.favoriteMovie = this.$store.state.favoriteMovie
  }
};
</script>

<style scoped>
.movie-text, .movie-items {
  margin-top: 20px;
  padding-left: 45px;
}

h2 {
  margin-bottom: 8px;
}

.movie-star {
  background-image: url("../assets/star.gif");
  background-position: 50% -5%;
  background-size: 70%;
  background-repeat: no-repeat;
}
</style>