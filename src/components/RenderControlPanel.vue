<template>
  <div v-for="(item, index) in presentViewData" :key="index">
    <lc-button v-if="item.tag == 'button'" :index="index" :type="item.class" :id="item.id" :isview="true" :plain="item.plain" :circle="item.circle" :round="item.round" :coordinate="item.coordinate" :size="item.size" :disabled="item.disabled" tag="button">{{ item.value }}</lc-button>
    <lc-link v-if="item.tag == 'link'" :index="index" :value="item.value" :underline="item.underline" :disabled="item.disabled" :type="item.type" :id="item.id" :isview="true" :coordinate="item.coordinate" tag="link"></lc-link>
    <lc-image v-if="item.tag === 'image'" :index="index" :src="item.src" :fit="item.fit" :id="item.id" :isview="true" :coordinate="item.coordinate" tag="image"></lc-image>
    <lc-video v-if="item.tag === 'video'" :loop="item.loop" :src="item.src" :height="item.height" :width="item.width" :index="index" :id="item.id" :isview="true" :coordinate="item.coordinate" tag="video"></lc-video>
    <lc-text v-if="item.tag === 'text'" :type="item.type" :value="item.value" :index="index" :id="item.id" :isview="true" :coordinate="item.coordinate" tag="text"></lc-text>
  </div>
</template>

<script>
  import lcButton from '../rawComponents/button';
  import lcLink from '@/rawComponents/link';
  import lcImage from '@/rawComponents/image';
  import lcVideo from '@/rawComponents/video';
  import lcText from '@/rawComponents/text';
  import { useStore } from 'vuex';
  import { computed } from 'vue-demi';
  export default {
    name: 'RenderControlPanel',
    components: {
      lcButton,
      lcLink,
      lcImage,
      lcVideo,
      lcText
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

<style lang="scss" scoped>
</style>
