<template>
  <h1 v-if="propsCopy.type === 'h1'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}
  </h1>
  <h2 v-if="propsCopy.type === 'h2'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}
  </h2>
  <h3 v-if="propsCopy.type === 'h3'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}
  </h3>
  <h4 v-if="propsCopy.type === 'h4'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}
  </h4>
  <h5 v-if="propsCopy.type === 'h5'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}
  </h5>
  <h6 v-if="propsCopy.type === 'h6'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}
  </h6>
  <p v-if="propsCopy.type === 'p'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}
  </p>
  <b v-if="propsCopy.type === 'b'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}</b>
  <strong v-if="propsCopy.type === 'strong'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}</strong>
  <i v-if="propsCopy.type === 'i'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}</i>
  <u v-if="propsCopy.type === 'u'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}</u>
  <del v-if="propsCopy.type === 'del'" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)" draggable="true">
    {{ propsCopy.value }}</del>
  <sub v-if="propsCopy.type === 'sub'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}</sub>
  <sup v-if="propsCopy.type === 'sup'" draggable="true" :style="positionStyle" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)">
    {{ propsCopy.value }}</sup>
</template>

<script>
  import { ref, computed } from 'vue';
  import useDrag from '../../../hooks/useDrag';
  import useStyle from '../../../hooks/useStyle';

  export default {
    name: 'LCText',
    props: {
      type: String,
      value: String,
      isview: Boolean,
      id: Number,
      tag: String,
      coordinate: Array,
      style: Object,
      index: Number
    },
    emits: ['click', 'dragstart', 'dragend'],
    setup(props, { emit }) {
      const propsCopy = ref({ ...props });
      const { dragToView, dragStart, dragEnd } = useDrag();
      const { transferStyleInfo } = useStyle();
      const x = computed({
        get() {
          return props.isview ? props.coordinate[0] : null;
        },
        set() {
          return props.isview ? props.coordinate[0] : null;
        }
      });

      const y = computed({
        get() {
          return props.coordinate ? props.coordinate[1] : null;
        },
        set() {
          return props.coordinate ? props.coordinate[1] : null;
        }
      });

      const positionStyle = computed({
        get() {
          // console.log('here');
          let xLeft = x.value - document.querySelector('#renderControlPanel').offsetLeft;
          let xRight = y.value - document.querySelector('#renderControlPanel').offsetTop;
          console.log("x", xLeft)
          return x.value && y.value
            ? `left:${xLeft}px;top:${xRight}px;position:absolute`
            : '';
        },
        set() {
          let xLeft = x.value - document.querySelector('#renderControlPanel').offsetLeft;
          let xRight = y.value - document.querySelector('#renderControlPanel').offsetTop;
          console.log("y", xLeft)
          return x.value && y.value
            ? `left:${xLeft}px;top:${xRight}px;position:absolute`
            : '';
        }
      });

      //看是在预览区拖拽还是在组件区拖拽
      function isViewOrComponent($event) {
        return props.isview ? dragEnd($event) : dragToView($event, propsCopy);
      }

      return {
        x,
        y,
        positionStyle,
        propsCopy,
        isViewOrComponent,
        transferStyleInfo,
        dragToView,
        dragStart,
        dragEnd
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
