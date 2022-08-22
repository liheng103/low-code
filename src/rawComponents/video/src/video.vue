<template>
  <video
    :style="positionStyle"
    :src="propsCopy.src"
    :width="propsCopy.width"
    :height="propsCopy.height"
    :loop="propsCopy.loop"
    v-bind="$attrs"
    @click="transferStyleInfo(propsCopy.index)"
    draggable="true"
    @dragstart="dragStart($event)"
    @dragend="isViewOrComponent($event)"
  ></video>
</template>

<script>
import { ref, computed } from 'vue';
import useDrag from '../../../hooks/useDrag';
import useStyle from '../../../hooks/useStyle';
export default {
  name: 'LCVideo',
  props: {
    src: String,
    loop: {
      type: Boolean,
      default: false
    },
    width: Number,
    height: Number,
    isview: Boolean,
    id: Number,
    value: String,
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
        return x.value && y.value
          ? `left:${x.value}px;top:${y.value}px;position:absolute`
          : '';
      },
      set() {
        return x.value && y.value
          ? `left:${x.value}px;top:${y.value}px;position:absolute`
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

<style lang="scss" scoped></style>
