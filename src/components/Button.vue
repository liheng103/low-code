<template>
  <lc-button v-for="(item,index) in buttonJson" :key=index :type=item.class :id=item.id :isview="false" :plain=item.plain :circle=item.circle :round=item.round :disabled=item.disabled :size=item.size tag="button">{{item.value}}</lc-button>
</template>

<script>
  import lcButton from '../rawComponents/button';
  import { ref } from 'vue';
  import mapButton from '../rawComponents/button/src/mapButton';

  export default {
    components: {
      lcButton
    },
    setup() {
      const butttonRef = ref();
      const buttonJson = mapButton.data;
      const type = mapButton.type;
      return {
        buttonJson,
        type,
        butttonRef
      };
    }
  };
</script>
<style scoped>
</style>
