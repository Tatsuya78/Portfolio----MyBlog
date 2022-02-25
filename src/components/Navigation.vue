<template>
  <div>
    <nav class="navigation-top">
      <router-link active-class="active" to="/home">Home</router-link>
      <router-link active-class="active" to="/about">About</router-link>
      <router-link active-class="active" to="/movie">Movie</router-link>
      <router-link active-class="active" to="/music">Music</router-link>
      <router-link active-class="active" to="/experiments">Experiments</router-link>
    </nav>
    <nav class="navigation-side">
      <router-link active-class="active" to="/home">Home</router-link>
      <router-link active-class="active" to="/about">About</router-link>
      <router-link active-class="active" to="/movie">Movie</router-link>
      <router-link active-class="active" to="/music">Music</router-link>
      <router-link active-class="active" to="/experiments">Experiments</router-link>
    </nav>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "AboutNavigation",
};
</script>

<style scoped>
.navigation-side {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: fixed;
  text-align: right;
  /* z-index: 3; */
}

a {
  color: #a89a85;
  margin-bottom: 36px;
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

.active {
  color: #f75e78;
  text-decoration: underline;
}

/* navigation-top start */

.navigation-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

/* navigation-top end */

@media screen and (max-width: 767px) {
  .navigation-side {
    display: none;
  }
  .navigation-top {
    display: flex;
  }
}
@media screen and (min-width: 768px) {
  .navigation-side {
    display: none;
  }
  .navigation-top {
    display: flex;
  }
}
@media screen and (min-width: 992px) {
  .navigation-side {
    display: flex;
  }
  .navigation-top {
    display: none;
  }
}
@media screen and (min-width: 1200px) {
  .navigation-side {
    display: flex;
  }
  .navigation-top {
    display: none;
  }
}
</style>