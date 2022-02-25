<template>
  <div>
    <MusicHeader />
    <MusicContent />
  </div>
</template>

<script>
import MusicHeader from '../pages/Music-header.vue'
import MusicContent from '../pages/Music-content.vue'
export default {
    name:'MusicMain',
    components:{MusicHeader,MusicContent}
};
</script>
