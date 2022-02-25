<template>
  <div class="carousel-box">
    <div class="carousel">
      <div class="block">
        <el-carousel height="550px">
          <el-carousel-item v-for="item in posters" :key="item.id">
            <div class="poster-box">
              <div class="poster">
                <img :src="item.url" alt="" />
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <!-- <div>
  </div> -->
</template>

<script scoped>
import { nanoid } from "nanoid";
export default {
  name: "NovieHeader",
  data() {
    return {
      posters: [
        // nanoid
        {
          id: nanoid(),
          name: "Cruella",
          url: require("../assets/cruella.jpg"),
        },
        {
          id: nanoid(),
          name: "Lalaland",
          url: require("../assets/lalaland.jpg"),
        },
        {
          id: nanoid(),
          name: "interstellar",
          url: require("../assets/interstellar.jpg"),
        },
        {
          id: nanoid(),
          name: "Green Book",
          url: require("../assets/Green Book.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.poster-box,.carousel-box {
  display: flex;
  justify-content: center;
}

.carousel-box {
  margin-top: 20px;
}

.poster,
.carousel {
  height: 550px;
  width: 1000px;
  border-radius: 8px;
}
</style>