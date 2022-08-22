<template>
  <a
    :style="positionStyle"
    :href="propsCopy.disabled ? null : propsCopy.href"
    @click="transferStyleInfo(propsCopy.index)"
    draggable="true"
    @dragstart="dragStart($event)"
    @dragend="isViewOrComponent($event)"
    :class="[
      'lc-link',
      type ? `lc-link--${propsCopy.type}` : '',
      propsCopy.disabled && 'is-disabled',
      !!propsCopy.underline && !propsCopy.disabled && 'is-underline'
    ]"
    v-bind="$attrs"
  >
    <i :class="propsCopy.icon" v-if="propsCopy.icon"></i>
    {{ propsCopy.value }}
  </a>
</template>

<script>
import { ref, computed } from 'vue';
import useDrag from '../../../hooks/useDrag';
import useStyle from '../../../hooks/useStyle';
export default {
  name: 'LCLink',
  props: {
    disabled: Boolean,
    href: String,
    value: String,
    icon: String,
    tag: String,
    coordinate: Array,
    style: Object,
    isview: Boolean,
    index: Number,
    id: Number,
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click', 'dragstart', 'dragend'],
  setup(props, { emit }) {
    const propsCopy = ref({ ...props });
    // console.log(link.);
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

<style lang="scss" scoped>
.lc-link {
  text-decoration: none;
  margin: 5px 10px 0 0;
  position: relative;
  &.lc-link--default {
    color: #606266;
    &:hover {
      color: #409eff;
    }
    &.is-underline:hover:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #409eff;
    }
    &.is-disabled {
      color: #c0c4cc;
    }
    &.is-disabled:hover {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &.lc-link--primary {
    color: #409eff;
    &:hover {
      color: #409eff;
    }
    &.is-underline:hover:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #409eff;
    }
    &.is-disabled {
      color: #a0cfff;
    }
    &.is-disabled:hover {
      color: #a0cfff;
      cursor: not-allowed;
    }
  }
  &.lc-link--success {
    color: #67c23a;
    &:hover {
      color: #67c23a;
    }
    &.is-underline:hover:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #67c23a;
    }
    &.is-disabled {
      color: #b3e19d;
    }
    &.is-disabled:hover {
      color: #b3e19d;
      cursor: not-allowed;
    }
  }
  &.lc-link--danger {
    color: #f56c6c;
    &:hover {
      color: #f56c6c;
    }
    &.is-underline:hover:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #f56c6c;
    }
    &.is-disabled {
      color: #fab6b6;
    }
    &.is-disabled:hover {
      color: #fab6b6;
      cursor: not-allowed;
    }
  }
  &.lc-link--info {
    color: #909399;
    &:hover {
      color: #909399;
    }
    &.is-underline:hover:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      bottom: 0;
      border-bottom: 1px solid #909399;
    }
    &.is-disabled {
      color: #c8c9cc;
    }
    &.is-disabled:hover {
      color: #c8c9cc;
      cursor: not-allowed;
    }
  }
}
</style>
