<template>
  <video
    :src="propsCopy.src"
    :width="propsCopy.width"
    :height="propsCopy.height"
    :loop="propsCopy.loop"
    v-bind="$attrs"
    @click="handleVideoClick"
    draggable="true"
    @dragstart="handleDragstart"
    @dragend="handleDragend"
  ></video>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'LCVideo',
  props: {
    src: String,
    loop: {
      type: Boolean,
      default: false
    },
    width: Number,
    height: Number
  },
  emits: ['click', 'dragstart', 'dragend'],
  setup(props, { emit }) {
    const propsCopy = ref({ ...props });
    const handleVideoClick = (evt) => {
      emit('click', evt);
    };
    const handleDragstart = (evt) => {
      emit('dragstart', evt);
    };
    const handleDragend = (evt) => {
      emit('dragend', evt);
    };
    return {
      handleVideoClick,
      propsCopy,
      handleDragstart,
      handleDragend
    };
  }
};
</script>

<style lang="scss" scoped></style>
