<template>
  <h1 v-if="propsCopy.type === 'h1'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}
  </h1>
  <h2 v-if="propsCopy.type === 'h2'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}
  </h2>
  <h3 v-if="propsCopy.type === 'h3'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}
  </h3>
  <h4 v-if="propsCopy.type === 'h4'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}
  </h4>
  <h5 v-if="propsCopy.type === 'h5'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}
  </h5>
  <h6 v-if="propsCopy.type === 'h6'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}
  </h6>
  <p v-if="propsCopy.type === 'p'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}
  </p>
  <b v-if="propsCopy.type === 'b'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}</b>
  <strong v-if="propsCopy.type === 'strong'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}</strong>
  <i v-if="propsCopy.type === 'i'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}</i>
  <u v-if="propsCopy.type === 'u'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}</u>
  <del v-if="propsCopy.type === 'del'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}</del>
  <sub v-if="propsCopy.type === 'sub'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}</sub>
  <sup v-if="propsCopy.type === 'sup'" @click="handleTextClick" draggable="true" @dragstart="handleDragstart" @dragend="handleDragend">
    {{ propsCopy.value }}</sup>
</template>

<script>
  import { ref } from 'vue';
  export default {
    name: 'LCText',
    props: {
      type: String,
      value: String
    },
    emits: ['click', 'dragstart', 'dragend'],
    setup(props, { emit }) {
      const propsCopy = ref(props);
      const handleTextClick = (evt) => {
        emit('click', evt);
      };
      const handleDragstart = (evt) => {
        emit('dragstart', evt);
      };
      const handleDragend = (evt) => {
        emit('dragend', evt);
      };
      return {
        handleTextClick,
        handleDragstart,
        handleDragend,
        propsCopy
      };
    }
  };
</script>

<style lang="scss" scoped>
  b,
  strong,
  i,
  u,
  del,
  sub,
  sup {
    margin-right: 5px;
  }
</style>
