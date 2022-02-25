<template>
  <div>
    <ExpHeader />
    <ExpContent />
  </div>
</template>

<script>
import ExpHeader from '../pages/Exp-header.vue'
import ExpContent from '../pages/Exp-content.vue'
export default {
    name:'ExpMain',
    components:{ExpHeader,ExpContent}
}
</script>
