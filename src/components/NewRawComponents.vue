<template>
  <div class="newRawComponents">
    <nav class="dismissScroll">
      <div v-for="(item, index) in componentAll" :key="item.index" class="nav" :class="{'active':currentIndex === index}" @click="selectComponent(index)">
        <div class="titleMain">{{item.titleChinese}}</div>
        <div class="titleOther">{{item.titleEnglish}}</div>
      </div>
    </nav>
    <div class="main">
      <keep-alive></keep-alive>
    </div>
  </div>
</template>
<script>
  import { defineAsyncComponent } from "vue";
  export default {
    data() {
      return {
        currentIndex: 0,
        componentAll: [
          {
            index: 0,
            titleChinese: "按钮",
            titleEnglish: "Button"
          },
          {
            index: 1,
            titleChinese: "图片",
            titleEnglish: "Picture"
          },
          {
            index: 2,
            titleChinese: "视频",
            titleEnglish: "Video"
          },
          {
            index: 3,
            titleChinese: "文本",
            titleEnglish: "Text"
          },
          {
            index: 4,
            titleChinese: "链接",
            titleEnglish: "Link"
          }
        ],

      };
    },
    methods: {
      scrollTo(item) {
        item.element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      },
      selectSubnav(obj, index) {
        obj.selectIndex = index;
        this.scrollTo(obj.titleArray[index]);
      },
      selectComponent(index) {
        this.currentIndex = index;
      }
    }
  }

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
    padding: 0 10px;
  }
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
</style>