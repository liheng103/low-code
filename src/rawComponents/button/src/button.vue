<template>

  <span :style="positionStyle">
    <button class="lc-button" :disabled="propsCopy.disabled" draggable="true" @dragstart="dragStart($event)" @dragend="isViewOrComponent($event)" @click="transferStyleInfo(propsCopy.index)" :style="propsCopy.style" :class="[
      type ? 'lc-button--' + propsCopy.type : '',
      size ? 'lc-button--' + propsCopy.size : '',
      {
        'is-disabled': propsCopy.disabled,
        'is-plain': propsCopy.plain,
        'is-round': propsCopy.round,
        'is-circle': propsCopy.circle
      }
    ]">
      <i v-if="icon" :class="icon"></i>
      <span>
        <slot v-if="$slots.default"></slot>
      </span>
    </button>
  </span>
</template>

<script>
  import { ref, computed } from 'vue';
  import useDrag from '../../../hooks/useDrag'
  import useStyle from '../../../hooks/useStyle'

  export default {
    name: 'LCButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      size: String,
      disabled: Boolean,
      plain: Boolean,
      round: Boolean,
      circle: Boolean,
      isview: Boolean,
      id: Number,
      value: String,
      tag: String,
      coordinate: Array,
      style: Object,
      index: Number
    },
    emits: ['click'],
    setup(props) {
      const propsCopy = ref({ ...props });
      const { dragToView, dragStart, dragEnd } = useDrag()
      const { transferStyleInfo } = useStyle()
      const x = computed({
        get() {
          return props.isview ? props.coordinate[0] : null
        },
        setup() {
          return props.isview ? props.coordinate[0] : null
        }
      })

      const y = computed({
        get() {
          return props.coordinate ? props.coordinate[1] : null
        },
        setup() {
          return props.coordinate ? props.coordinate[1] : null
        }
      })

      const positionStyle = computed({
        get() {
          return (x.value && y.value) ? `left:${x.value}px;top:${y.value}px;position:absolute` : ""
        },
        set() {
          return (x.value && y.value) ? `left:${x.value}px;top:${y.value}px;position:absolute` : ""
        }
      })

      //看是在预览区拖拽还是在组件区拖拽
      function isViewOrComponent($event) {
        return props.isview ? dragEnd($event) : dragToView($event, propsCopy)
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
  .lc-button {
    width: 98px;
    height: 40px;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 5px;
    border: 1px solid;
    &.lc-button--medium {
      height: 36px;
    }
    &.lc-button--small {
      font-size: 12px;
      height: 32px;
      width: 80px;
    }
    &.is-round {
      border-radius: 20px;
    }
    &.is-circle {
      border-radius: 50%;
    }
    &.lc-button--default {
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(220, 223, 230);
      &:hover {
        background-color: rgb(236, 245, 255);
        color: rgb(64, 158, 255);
      }
      &.is-plain:hover {
        border: 1px solid rgb(64, 158, 255);
      }
      &.is-disabled:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
      }
    }
    &.lc-button--primary {
      background-color: rgb(64, 158, 255);
      color: #eee;
      border: 1px solid rgb(220, 223, 230);
      &:hover {
        background-color: rgb(102, 177, 255);
      }
      &.is-plain {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
      }
      &.is-plain:hover {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
      &.is-disabled {
        cursor: not-allowed;
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
      }
      &.is-disabled:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
      }
      &.is-plain.is-disabled {
        cursor: not-allowed;
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
      }
      &.is-plain.is-disabled:hover {
        cursor: not-allowed;
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
      }
    }
    &.lc-button--success {
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
      &:hover {
        background: #85ce61;
        border-color: #85ce61;
      }
      &.is-plain {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
      }
      &.is-plain:hover {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
      &.is-disabled {
        cursor: not-allowed;
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
      }
      &.is-disabled:hover {
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
      }
      &.is-plain.is-disabled {
        cursor: not-allowed;
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;
      }
      &.is-plain.is-disabled:hover {
        cursor: not-allowed;
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;
      }
    }
    &.lc-button--info {
      color: #fff;
      background-color: #909399;
      border-color: #909399;
      &:hover {
        background: #a6a9ad;
        border-color: #a6a9ad;
      }
      &.is-plain {
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
      }
      &.is-plain:hover {
        color: #fff;
        background: #909399;
        border-color: #909399;
      }
      &.is-disabled {
        cursor: not-allowed;
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
      }
      &.is-disabled:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
      }
      &.is-plain.is-disabled {
        cursor: not-allowed;
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;
      }
      &.is-plain.is-disabled:hover {
        cursor: not-allowed;
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;
      }
    }
    &.lc-button--danger {
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
      &:hover {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
      }
      &.is-plain {
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
      }
      &.is-plain:hover {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
      &.is-disabled {
        cursor: not-allowed;
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
      &.is-disabled:hover {
        cursor: not-allowed;
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
      &.is-plain.is-disabled {
        cursor: not-allowed;
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
      }
      &.is-plain.is-disabled:hover {
        cursor: not-allowed;
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
      }
    }
  }
</style>
