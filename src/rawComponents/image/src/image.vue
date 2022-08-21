<template>
  <img
    :class="['lc-image']"
    :src="propsCopy.src"
    :style="imageStyle"
    alt=""
    v-bind="$attrs"
    @click="handleImgClick"
    draggable
    @dragstart="handleDragstart"
    @dragend="handleDragend"
  />
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'LCImage',
  emits: ['click', 'dragstart', 'dragend'],
  props: {
    src: String,
    fit: String
  },
  setup(props, { emit }) {
    const propsCopy = ref({ ...props });
    const imageStyle = ref({});
    imageStyle.value['object-fit'] = propsCopy.value.fit;
    const handleImgClick = (evt) => {
      emit('click', evt);
    };
    const handleDragStart = (evt) => {
      emit('dragstart', evt);
    };
    const handleDragend = (evt) => {
      emit('dragend', evt);
    };
    return {
      handleImgClick,
      propsCopy,
      handleDragStart,
      handleDragend,
      imageStyle
    };
  }
};
</script>

<style lang="scss" scoped>
.lc-image {
  height: 100px;
  width: 100px;
}
</style>
