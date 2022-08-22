<template>
  <lc-link v-for="(item,index) in linkJson" :key=index :type=item.type :id=item.id :disabled=item.disabled :underline=item.underline tag="link" :value=item.value>{{item.value}}</lc-link>
</template>

<script>
  import lcLink from '../rawComponents/link';
  import { ref } from 'vue';
  import mapLink from '../rawComponents/link/src/mapLink'

  export default {
    components: {
      lcLink
    },
    setup() {
      const linkRef = ref();
      const linkJson = mapLink.data
      const type = mapLink.type
      return {
        linkJson,
        type,
        linkRef
      };
    }
  };
</script>
<style scoped>
  div {
    margin-bottom: 20px;
  }
</style>
