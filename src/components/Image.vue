<template>
  <lc-image v-for="(item,index) in imageJson" :key=index :id=item.id :src=item.src :fit=item.fit tag="image">{{item.value}}</lc-image>
</template>

<script>
  import lcImage from '../rawComponents/image';
  import { ref } from 'vue';
  import mapImage from '../rawComponents/image/src/mapImage'

  export default {
    components: {
      lcImage
    },
    setup() {
      const imageRef = ref();
      const imageJson = mapImage.data
      const type = mapImage.type
      return {
        imageJson,
        type,
        imageRef
      };
    }
  };
</script>
<style scoped></style>
