<template>
  <div>
    <div class="player">
      <audio :src="musicUrl" controls autoplay loop></audio>
    </div>
    <div class="container">
      <div class="page-wrapper">
        <div class="row">
          <!-- navigator -->
          <div class="col-lg-2">
            <Navigation />
          </div>
          <!-- main -->
          <div ref="main-module" class="col-lg-10">
            <!-- components display place -->
            <router-view></router-view>
          </div>
        </div>
        <!-- <div class="row">
          <div ref="main-color" class="main-color"></div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Main from './components/Main.vue'
import Navigation from "./components/Navigation.vue";
export default {
  name: "App",
  data() {
    return {
      musicUrl:
        "http://m10.music.126.net/20220214172859/120f57c2aa3f6085bbdb8f504eeb9776/ymusic/ac4d/87b5/676a/fde5361494dbc25f28cb24146150bae8.mp3",
    };
  },
  components: {
    // Main,
    Navigation,
  },
  mounted() {
    // let marginTop = this.$refs["main-module"].offsetHeight * 0.73;
    // this.$refs["main-color"].style.marginTop = -marginTop + "px";
    // console.log(this.$refs["main-color"].offsetTop);

    // accept the musicUrl send from MusicContent through $bus
    this.$bus.$on("playMusic", (data) => {
      this.musicUrl = data;
    });
  },
  beforeDestroy() {
    this.$bus.$off("playMusic");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(253, 249, 249);
}

a {
  display: block;
  font-family: PT Mono, monospace;
  font-size: 17px;
  margin-bottom: 8px;
  text-decoration: none;
}

li {
  list-style: none;
}

h1 {
  color: #993949;
  font-family: PT Sans, Helvetica, Arial, sans-serif;
  font-size: 44px;
  font-weight: 400;
  line-height: 1.15;
}

h2 {
  color: #f75e78;
  font-family: PT Sans, Helvetica, Arial, sans-serif;
  font-size: 33px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 8px;
}

h3 {
  color: #993949;
  font-family: PT Sans, Helvetica, Arial, sans-serif;
  font-size: 30px;
  line-height: 1.15;
}

p {
  color: rgba(33, 36, 44, 0.64);
  font-family: PT Sans, Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.3;
  margin-top: 15px;
}

.page-wrapper {
  max-width: 1536px;
  margin: 0 auto;
  overflow: hidden;
}

.player {
  position: fixed;
  z-index: 1;
  margin-top: 10px;
}

audio {
  width: 100px;
  height: 100px;
  transition: width 0.5s ease;
}

audio:hover {
  width: 500px;
  height: 100px;
}
</style>
