<template>
  <div>
    <AboutHeader />
    <AboutContent />
  </div>
</template>

<script>
import AboutContent from "../pages/About-content.vue";
import AboutHeader from "../pages/About-header.vue";
export default {
  name: "AboutMain",
  components: { AboutContent, AboutHeader },
};
</script>
