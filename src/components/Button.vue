<template>
  <lc-button
    v-for = "(item,index) in buttonJson"
    :key = index
    :type = item.class
    :id = item.id
    :isview = "false"
    :plain = item.plain
    :circle = item.circle
    :round = item.round
    tag = "button"
  >{{item.value}}</lc-button>
</template>

<script>
  import lcButton from '../rawComponents/button';
  import { ref } from 'vue';
  import mapButton from '../rawComponents/button/src/mapButton'

  export default {
    components: {
      lcButton
    },
    setup() {
      const butttonRef = ref();
      const buttonJson = mapButton.data
      const type = mapButton.type
      return {
        buttonJson,
        type,
        butttonRef
      };
    }
  };
</script>
<style scoped>
  div {
    margin-bottom: 20px;
  }
</style>