<template>
  <div class="button">
    <lc-button ref="butttonRef">Default</lc-button>
    <lc-button type="primary">primary</lc-button>
    <lc-button type="success">success</lc-button>
    <lc-button type="info">info</lc-button>
    <lc-button type="danger">danger</lc-button>
  </div>
  <div>
    <lc-button plain>plain</lc-button>
    <lc-button type="primary" plain>primary</lc-button>
    <lc-button type="success" plain>success</lc-button>
    <lc-button type="info" plain>info</lc-button>
    <lc-button type="danger" plain>danger</lc-button>
  </div>
  <div>
    <lc-button round>round</lc-button>
    <lc-button type="primary" round>primary</lc-button>
    <lc-button type="success" round>success</lc-button>
    <lc-button type="info" round>info</lc-button>
    <lc-button type="danger" round>danger</lc-button>
  </div>
  <div>
    <lc-button disabled>disabled</lc-button>
    <lc-button type="primary" disabled>primary</lc-button>
    <lc-button type="success" disabled>success</lc-button>
    <lc-button type="info" disabled>info</lc-button>
    <lc-button type="danger" disabled>danger</lc-button>
  </div>
  <div>
    <lc-button disabled plain>disabled plain</lc-button>
    <lc-button type="primary" disabled plain>primary</lc-button>
    <lc-button type="success" disabled plain>success</lc-button>
    <lc-button type="info" disabled plain>info</lc-button>
    <lc-button type="danger" disabled plain>danger</lc-button>
  </div>
  <div>
    <lc-button>default</lc-button>
    <lc-button size="medium">medium</lc-button>
    <lc-button size="small">small</lc-button>
  </div>
  <div>
    <!-- <lc-button class="primary">123</lc-button> -->
    <!-- <template v-for=""></template> -->
  </div>
</template>

<script>
  import lcButton from '../rawComponents/button';
  import { ref } from 'vue';
  export default {
    components: {
      lcButton
    },
    setup() {
      const butttonRef = ref();

      return {
        butttonRef
      };
    }
  };
</script>
<style scoped>
  .button {
    width: 100%;
  }
  div {
    margin-bottom: 20px;
  }
</style>