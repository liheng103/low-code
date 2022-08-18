<template>
  <button class="lc-button" @click="handleButtonClick">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'LCButton',
  props: {},
  emits: ['click'],
  setup(props, { emit }) {
    const handleButtonClick = (evt) => {
      emit('click', evt);
    };
    return {
      handleButtonClick
    };
  }
};
</script>

<style lang="scss" scoped></style>
