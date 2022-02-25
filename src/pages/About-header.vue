<template>
  <header class="header">
    <div>
      <div class="header-image about">
      </div>
    </div>
  </header>
</template>

<script scoped>
export default {
  name: "AboutHeader",
};
</script>

<style>
.header {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: left;
}

.header-image.about {
  background-image: url("../assets/about-profile.jpeg");
  background-color: #fff;
  background-position: 50%;
  background-size: cover;
  border-radius: 8px;
  height: 550px; /*靠media screen变换*/
  width: 900px;
  margin-left: 35px;
}
</style>