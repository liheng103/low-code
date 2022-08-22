<template>
  <div class="style-bar">
    <div>
      <span>color</span
      ><input
        type="text"
        v-model="color.value"
        @blur="changeStyle(color.value, (name = 'backgroundColor'))"
      />
    </div>
    <div>
      <span>width</span
      ><input
        type="text"
        v-model="width"
        @blur="changeStyle(color, (name = 'backgroundColor'))"
      />
    </div>
    <div>
      <span>height</span
      ><input type="text" v-model="height" @blur="changeStyle" />
    </div>
    <div>
      <span>font-size</span
      ><input type="text" v-model="height" @blur="changeStyle" />
    </div>
    <div><span>事件</span><input type="text" @blur="changeStyle" /></div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import useStyle from '../hooks/useStyle';
export default {
  name: 'StyleBar',
  setup() {
    const store = useStore();
    const { transferStyleInfo, changeStyle } = useStyle();

    const color = ref(0);
    const width = computed({
      get() {
        return store.state.presentStyle.width
          ? store.state.presentStyle.width.split('px')[0]
          : 0;
      },
      set() {
        return store.state.presentStyle.width
          ? store.state.presentStyle.width.split('px')[0]
          : 0;
      }
    });

    const height = computed({
      get() {
        return store.state.presentStyle.height
          ? store.state.presentStyle.height.split('px')[0]
          : 0;
      },
      set() {
        return store.state.presentStyle.height
          ? store.state.presentStyle.height.split('px')[0]
          : 0;
      }
    });

    ref(store.state.presentStyle['background-color']);
    return {
      changeStyle,
      color,
      width,
      height
    };
  }
};
</script>

<style>
.style-bar {
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.style-bar div {
  padding: 5px;
}

.style-bar div span {
  display: inline-block;
  width: 80px;
  text-align: center;
  margin-left: 20px;
}
.style-bar input {
  height: 20px;
  padding: 3px;
  outline: none;
  border: 0px;
  background-color: rgb(79, 110, 175);
  border-radius: 4px;
}
</style>
