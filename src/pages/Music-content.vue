<template>
  <div>
    <!-- Recommend start -->
    <div class="recommend">
      <h3 class="title">🎵Recommend Songlists🎵</h3>
      <div class="songlists">
        <div class="list" v-for="(item, index) in songlists" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- Recommend end -->
    <!-- Latest start -->
    <div class="latest">
      <div class="title">
        <h3>🎶Latest Music🎶</h3>
      </div>
      <div class="latest-songs">
        <div class="new-song" v-for="(item, index) in latest" :key="index">
          <div class="song-wrap">
            <img :src="item.picUrl" alt="" />
            <div @click="playMusic(item.id)" class="song-cover"></div>
          </div>
          <div class="song-info">
            <h4>{{ item.name }}</h4>
            <p>{{ item.song.artists[0].name }}</p>
          </div>
        </div>
      </div>
    </div>
    <u
      >😖 Because of the music playback copyright issue, the api to get the
      music url was banned by Netease</u
    >
    <br />
    <p>So maybe the latest music module cannot make the songs play</p>
    <!-- Latest end -->
    <!-- MV start -->
    <div class="mv">
      <div class="mv-title">
        <h3>🎬recommend MV🎬</h3>
      </div>
      <div class="mvs-wrapper">
        <div class="mv-box" v-for="(item, index) in mvs" :key="index">
          <div class="movie-pic">
            <img :src="item.picUrl" alt="" />
            <div class="play-data">🎦{{ item.playCount }}</div>
          </div>
          <div class="movie-info">
            <h4>
              {{ item.name }}
            </h4>
            <p>{{ item.artistName }}🧜‍♀️</p>
          </div>
        </div>
      </div>
    </div>
    <!-- MV end -->
    <!-- Favorite start -->
    <div class="favorite-wrapper">
      <div class="favorite-title">
        <h3>🤍My Favorite🤍</h3>
      </div>
      <h3>I like the quiet folk music and also like the rhythmic pop 👯</h3>
      <!-- tag module start -->
      <h3 class="tag">
        category: &nbsp;
        <span :class="{active:tag=='folk'}" @click="tag='folk'">🤍Folk</span>
        <span :class="{active:tag=='pop'}" @click="tag='pop'">🤍Pop</span>
      </h3>
      <!-- tag module end -->
      <div class="favorite-content">
        <div class="row favorite-song" v-for="(item,index) in favorite.slice(n*limit-limit,n*limit)" :key="index">
          <div class="song-img col-md-2">
            <img :src="item.url" alt="" />
            <img src="../assets/star.gif" alt="" class="content-star">
          </div>
          <div class="song-intro col-md-8">
            <h4>{{item.name}}</h4>
            <p>{{item.artist}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Favorite end -->
    <!-- Pagination start -->
    <div class="pagination">
      <div class="prev" @click="prevPage">&lt; Previous</div>
      <div class="next" @click="nextPage">Next &gt;</div>
    </div>
    <hr>
    <!-- Pagination end -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MusicContent",
  data() {
    return {
      // n is set for controlling pagination. it means current page
      n:1,
      // limit is set for controlling the max number of favorite songs showing in one page
      limit:4,
      songlists: [],
      latest: [],
      mvs: [],
      favorite:[],
      tag:'folk'
    };
  },
  methods: {
    playMusic(id) {
      console.log(id);
      axios({
        //  This api was banned by NetEase because of the music playback copyright issue
        // So maybe the player doesnt work
        url: "https://autumnfish.cn/song/url",
        method: "get",
        params: {
          id,
        },
      }).then((res) => {
        let url = res.data.data[0].url;
        this.$bus.$emit("playMusic", url);
      });
    },
    nextPage(){
      console.log(this.n)
      if( this.n > this.favorite.length / 4) return
      this.n++
    },
    prevPage(){
      if(this.n === 1) return
      this.n--
    }
  },
  watch:{
    tag(){
      // OMG!! eval function is the most fantastic thing in the js 😂
      this.n = 1
      let tagName = `this.$store.state.favoriteSong.${this.tag}`
      this.favorite = eval(tagName)
    },
    n(){

    }
  },
  created() {
    // ---Recommend start---
    axios({
      url: "https://autumnfish.cn/personalized",
      method: "get",
      params: {
        // data numbers
        limit: 10,
      },
    }).then(
      (res) => {
        this.songlists = res.data.result;
      },
      (err) => {
        alert(err.message);
      }
    );
    // ---Recommend end---
    // ---Latest start---
    axios({
      url: "https://autumnfish.cn/personalized/newsong",
      method: "get",
    }).then((res) => {
      this.latest = res.data.result;
    });
    // ---Latest end---
    // ---MV start---
    axios({
      url: "https://autumnfish.cn/personalized/mv",
      method: "get",
    }).then((res) => {
      this.mvs = res.data.result;
    });
    // ---MV end---
    // ---Favorite start---
    this.favorite = this.$store.state.favoriteSong.folk
    // ---Favorite end---
  },
};
</script>

<style scoped>
.recommend,
.title,
.mv-title,
.favorite-title {
  text-align: center;
}

.songlists {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1070px;
  height: 600px;
}

h2 {
  color: #f75e78;
  font-family: PT Sans, Helvetica, Arial, sans-serif;
  font-size: 33px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 8px;
}

.songlists .list {
  /* position: absolute; */
  height: 180px;
  width: 180px;
  margin-top: 20px;
}

.list img {
  height: 180px;
}

.latest-songs {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.new-song {
  display: flex;
  justify-content: left;
  height: 90px;
  width: 500px;
  margin: 20px 0;
}

.song-wrap {
  position: absolute;
}

.song-wrap:hover .song-cover {
  display: block;
  cursor: pointer;
}

.new-song img,
.song-cover {
  height: 90px;
  width: 90px;
}

.song-cover {
  display: none;
  margin-top: -90px;
  background-color: pink;
  opacity: 0.5;
}

.song-info {
  position: relative;
  left: 100px;
  margin-left: 20px;
}

.song-info h4 {
  font-size: 20px;
  width: 400px;
}
/* recommend mv start */

.mv {
  margin-top: 50px;
}

.mvs-wrapper {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
  margin-left: -10px;
}

.movie-pic {
  background-color: pink;
  height: 150px;
  width: 200px;
  border-radius: 50%;
}

.movie-pic img {
  height: 150px;
  width: 200px;
}

.play-data {
  margin-top: -150px;
  margin-left: 143px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
}

.movie-info h4 {
  margin-top: 20px;
}
/* recommend mv end */
/* favorite start */
.favorite-wrapper {
  margin-top: 50px;
}

.favorite-wrapper h3 {
  margin-bottom: 40px;
}

.favorite-title {
  margin-bottom: 40px;
}

.tag {
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 20px;
}

.tag span{
  padding-left: 20px;
  text-decoration: underline;
}

.tag span:hover {
  cursor: pointer;
}

.active {
  color: #f75e78;
}

.song-img img {
  height: 140px;
  width: 140px;
}

.song-img .content-star {
  width: 50px;
  height: 50px;
  transform: translate(-50%,-310%);
}

.favorite-song {
  margin: 20px 0;
}
/* favorite end */
/* pagination start */

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}

.prev,.next {
  margin-right: 40px;
  font-size: 25px;
}

.pagination div:hover {
  color: #f75e78;
  cursor: pointer;
}

/* pagination end */
</style>