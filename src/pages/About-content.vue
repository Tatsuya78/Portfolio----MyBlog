<template>
  <section class="about-content">
    <ul>
      <div class="row">
        <li class="bio-text col-md-10">
          <h1>
            Im currently an architecture student who is interested in
            <strong>IT</strong> ~
          </h1>
          <h2>Chat with me about...</h2>
          <hr />
        </li>
        <ul class="social-media col-md-2">
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">WeChat</a>
          </li>
          <li>
            <a href="#">Line</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
      </div>
      <!-- about-content row -->
      <div class="row" v-for="item in aboutMe" :key="item.id">
        <div class="content-star col-md-1">
        </div>
        <div class="row col-md-11">
          <h3 class="col-md-10">{{ item.title }}</h3>
          <p class="content-discription">
            {{item.discription}}
          </p>
        </div>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AboutContent",
  data() {
    return {
      aboutMe: [],
    };
  },
  mounted() {
    this.aboutMe = this.$store.state.aboutMe;
  },
};
</script>

<style scoped>
.row {
  margin-bottom: 20px;
}

a {
  color: #f75e78;
}

a:hover {
  animation: rotate 0.5s linear;
}

@keyframes rotate {
  25% {
    transform: rotateZ(5deg);
  }
  40% {
    transform: rotateZ(-5deg);
  }
  65% {
    transform: rotateZ(3deg);
  }
  80% {
    transform: rotateZ(-3deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

p {
  width: 681.25px;
}

.content-star {
  background-image: url("../assets/star.gif");
  background-position: 50% -5%;
  background-size: 70%;
  background-repeat: no-repeat;
}
</style>