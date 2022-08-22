<template>
  <lc-video v-for="(item,index) in videoJson" :key=index :id=item.id :height=item.height :width=item.width tag="video" :src=item.src></lc-video>
</template>

<script>
  import lcVideo from '../rawComponents/video';
  import { ref } from 'vue';
  import mapVideo from '../rawComponents/video/src/mapVideo'

  export default {
    components: {
      lcVideo
    },
    setup() {
      const videoRef = ref();
      const videoJson = mapVideo.data
      const type = mapVideo.type
      return {
        videoJson,
        type,
        videoRef
      };
    }
  };
</script>
<style scoped>
</style>
