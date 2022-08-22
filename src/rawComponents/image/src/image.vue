<template>
  <img :style="[positionStyle, imageStyle]" :class="['lc-image']" :src="propsCopy.src" alt="" v-bind="$attrs" @click="transferStyleInfo(propsCopy.index)" draggable="true" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" />
</template>

<script>
  import { ref, computed } from 'vue';
  import useDrag from '../../../hooks/useDrag';
  import useStyle from '../../../hooks/useStyle';
  export default {
    name: 'LCImage',
    emits: ['click', 'dragstart', 'dragend'],
    props: {
      src: String,
      fit: String,
      isview: Boolean,
      id: Number,
      value: String,
      tag: String,
      coordinate: Array,
      style: Object,
      index: Number
    },
    setup(props, { emit }) {
      const propsCopy = ref({ ...props });
      const imageStyle = ref({});
      imageStyle.value['object-fit'] = propsCopy.value.fit;
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
        dragEnd,
        imageStyle
      };
    }
  };
</script>

<style lang="scss" scoped>
  .lc-image {
    height: 100px;
    width: 100px;
    margin: 20px;
  }
</style>
