<template>
  <lc-text v-for="(item,index) in textJson" :key=index :type=item.type :id=item.id :value="item.value">{{item.value}}</lc-text>
</template>

<script>
  import lcText from '../rawComponents/text';
  import { ref } from 'vue';
  import mapText from '../rawComponents/text/src/mapText'

  export default {
    components: {
      lcText
    },
    setup() {
      const textRef = ref();
      const textJson = mapText.data
      const type = mapText.type
      // console.log(textJson)
      return {
        textJson,
        type,
        textRef
      };

    }
  };
</script>
<style scoped>
</style>
