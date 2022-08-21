<template>
  <div class="newRawComponents">
    <nav class="dismissScroll">
      <div
        v-for="(item, index) in componentAll"
        :key="item.index"
        class="nav"
        :class="{ active: currentIndex === index }"
        @click="selectComponent(index)"
      >
        <div class="titleMain">{{ item.titleChinese }}</div>
        <div class="titleOther">{{ item.titleEnglish }}</div>
      </div>
    </nav>
    <div class="main">
      <!-- <div v-for="items in componentAll[this.currentIndex]" :key="items.index">
        <div
          v-for="item in items"
          :key="item.index"
          style="margin-bottom: 20px"
        >
          <button v-if="item.tag == 'button'" :id="item.id" :style="item.style">
            {{ item.value }}
          </button>
          <img
            v-if="item.tag == 'img'"
            :id="item.id"
            :style="item.style"
            :src="item.src"
          />
          <video
            v-if="item.tag == 'video'"
            :id="item.id"
            :style="item.style"
          ></video>
        </div>
      </div> -->
      <keep-alive>
        <component :is="componentName"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import axios from 'axios';
export default {
  data() {
    return {
      currentIndex: 0,
      componentName: 'Button',
      componentAll: [
        {
          index: 0,
          titleChinese: '按钮',
          titleEnglish: 'Button',
          componentName: 'Button'
        },
        {
          index: 1,
          titleChinese: '图片',
          titleEnglish: 'Picture'
        },
        {
          index: 2,
          titleChinese: '视频',
          titleEnglish: 'Video'
        },
        {
          index: 3,
          titleChinese: '文本',
          titleEnglish: 'Text',
          componentName: 'Text'
        },
        {
          index: 4,
          titleChinese: '链接',
          titleEnglish: 'Link',
          componentName: 'LCLink'
        }
      ]
    };
  },
  components: {
    // LCButton: defineAsyncComponent(() => import("../rawComponents/button")),
    // LCLink: defineAsyncComponent(() => import("../rawComponents/link")),
    Button: defineAsyncComponent(() => import('./Button')),
    Text: defineAsyncComponent(() => import('./Text'))
  },
  mounted() {
    // this.loadData();
  },
  methods: {
    // async loadData() {
    //   await axios.get('http://localhost:8081/test.json').then((res) => {
    //     this.componentAll = res.data;
    //     // console.log(this.componentAll);
    //   });
    // },
    scrollTo(item) {
      item.element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    selectSubnav(obj, index) {
      obj.selectIndex = index;
      this.scrollTo(obj.titleArray[index]);
    },
    selectComponent(index) {
      this.currentIndex = index;
      this.componentName = this.componentAll[index].componentName;
      // console.log(this.componentAll[index]);
    }
  }
};
</script>
<style scoped lang="scss">
.newRawComponents {
  display: flex;
  height: 100%;
}
.dismissScroll {
  overflow: scroll;
  border-right: 1px solid #f0f0f0;
}
.nav {
  padding: 10px 15px;
  width: 130px;
  &:hover {
    background-color: #ecf5ff;
    border-radius: 5px;
    color: #409eff;
  }
}
.active {
  border-right: 3px solid #409eff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.titleMain {
  font-size: 16px;
}
.titleOther {
  font-size: 12px;
  color: grey;
}
.main {
  overflow: scroll;
  flex: 1;
  padding: 0 10px;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>
