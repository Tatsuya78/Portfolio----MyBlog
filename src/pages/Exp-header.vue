<template>
  <div class="row">
    <header class="header col-xs-12">
      <div>
        <div class="header-image about">
          <!-- <img src="../assets/about-profile.jpeg" alt="" /> -->
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "ExpHeader",
};
</script>

<style scoped>
.header {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.header-image.about {
  background-image: url("../assets/experiments.jpeg");
  background-color: #fff;
  background-position: 50%;
  /* background-size: cover; */
  border-radius: 8px;
  height: 450px; /*靠media screen变换*/
  /* width: 610px; */
  margin-left: 35px;
}
</style>
