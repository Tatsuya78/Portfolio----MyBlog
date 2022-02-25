<template>
  <div>
    <!-- Carousel start -->
    <div class="carousel-box">
      <div class="carousel">
        <div class="block">
          <el-carousel height="184px" type="card">
            <el-carousel-item v-for="(item, index) in banners" :key="index">
              <div class="banner-box">
                <div class="banner">
                  <img :src="item.imageUrl" alt="" />
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <!-- Carousel end -->
    <hr />

    <div class="header-text">
      <h2>👌Discover musics by Netease~</h2>
    </div>
    <hr>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MusicHeader",
  data() {
    return {
      // Carousel
      banners: [],
    };
  },
  // ---Always blocked by CORS policy.. so if it is ok,try this API---
  created() {
    // ---Carousel start---
    axios.get("https://autumnfish.cn/banner").then(
      (response) => {
        this.banners = response.data.banners;
      },
      (error) => {
        alert("Require Failed", error.message);
      }
    );
    // ---Carousel end---
  },
};
</script>

<style scoped>
.carousel-box {
  display: flex;
  justify-content: center;
  margin: 50px;
}

.banner-box {
  margin-top: 20px;
}

.banner,
.carousel {
  /* height: 550px; */
  width: 1000px;
  border-radius: 8px;
}

.banner img {
  height: 184px;
}

h1 {
  color: #993949;
  font-family: PT Sans, Helvetica, Arial, sans-serif;
  font-size: 44px;
  font-weight: 400;
  line-height: 1.15;
}

.header-text {
  text-align: center;
}
</style>