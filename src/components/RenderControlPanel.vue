<template>
  <div v-for="(item, index) in presentViewData" :key="index">
    <lc-button
      v-if="item.tag == 'button'"
      :index="index"
      :type="item.class"
      :id="item.id"
      :isview="true"
      :plain="item.plain"
      :circle="item.circle"
      :round="item.round"
      :coordinate="item.coordinate"
      :size="item.size"
      :disabled="item.disabled"
      tag="button"
      >{{ item.value }}</lc-button
    >
  </div>
</template>

<script>
import lcButton from '../rawComponents/button';
import { useStore } from 'vuex';
import { computed } from 'vue-demi';
export default {
  name: 'RenderControlPanel',
  components: {
    lcButton
  },
  setup() {
    const store = useStore();
    const presentViewData = computed(() => {
      return store.state.presentViewData;
    });

    return {
      presentViewData
    };
  }
};
</script>

<style></style>
