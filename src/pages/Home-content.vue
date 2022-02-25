<template>
  <div class="home-content">
    <div class="row col-md-12">
      <div class="home-profile"></div>
    </div>
    <div class="home-intro">
      <div class="row col-md-12">
          <h2>Liu Xingchen</h2>
        <h3>
          Architecture majoring grad student &<br /><br />
          Chinese studying abroad in Japan <br />
        </h3>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "HomeContent",
};
</script>

<style scoped>
.home-content {
  margin-top: 100px;
  height: 800px;
  width: 1500px;
}

.home-profile {
  height: 800px;
  background-image: url("../assets/profile.png");
  background-size: 100%;
  background-size: cover;
  background-position: -40px -340px;
  /* background-position: -3vw -23vw; */
}

.home-intro {
  float: left;
  transform: translateY(-600px);
}

h2 {
  font-family: "Caveat", cursive;
  color: #f06868;
  font-size: 14vw;
}

h3 {
  color: rgba(33, 36, 44, 0.64);
  font-family: PT Mono, monospace;
  font-size: 2vw;
  margin: 2vw 0 0 13vw;
}

/* @keyframes shake {
  33% {
    transform: translate(.5px, .5px);
  }
  66% {
    transform: translate(-.5px, .5px);
  }
  100% {
    transform: translate(0, 0);
  }
} */
/* background-image: url("../assets/profile.png");
  background-size: 135%;
  background-repeat: no-repeat;
  background-position: 17px -175px; */
</style>