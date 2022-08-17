<template>
  <div class="rawComponents">
    <nav style="display: flex">
      <div
        :index="index + ''"
        v-for="(item, index) in iconArray"
        @click="onSelectElement(index)"
        :key="item.iconSrc"
        :class="{ active: currentIndex === index }"
        class="mainIconContainer"
      >
        <img :src="item.iconSrc" class="lIcon" />
      </div>
      <div class="bottomToolbar">
        <div class="mainTitle">低代码生成器 Low-Code</div>
      </div>
    </nav>

    <!-- <nav v-if="currentSelectBrand.titleArray && currentSelectBrand.titleArray.length > 0"> -->
    <nav>
      <div style="margin-bottom: 10px; text-align: center">
        <div style="padding: 5px; font-size: 12px; color: grey">
          快速查找需要的
        </div>
        <el-autocomplete
          class="inline-input"
          v-model="componentSearch"
          :fetch-suggestions="querySearch"
          size="small"
          placeholder="请输入..."
          @select="handleSelect"
        ></el-autocomplete>
      </div>
      <div class="dismissScroll">
        <!-- <div v-for="(item, index) in currentSelectBrand.titleArray" :key="item.title" class="secondNav" :class="{'active':currentSelectBrand.selectIndex === index}" @click="selectSubnav(currentSelectBrand, index)">
          <div style="weight: 600; font-size: 16px;">{{item.titleChinese}}</div>
          <div style="font-size: 12px; color: grey;">{{item.titleEnglish}}</div>
        </div> -->
      </div>
    </nav>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default {
  data() {
    return {
      activeName: '0',
      componentSearch: '',
      iconArray: [
        {
          iconSrc: require('../assets/icon/HTML5.png'),
          clickCallback: this.onSelectElement,
          className: 'demonstration-raw',
          componentName: 'raw',
          titleArray: []
        },
        {
          iconSrc: require('../assets/icon/element.png'),
          clickCallback: this.onSelectElement,
          className: 'demonstration-element',
          selectIndex: 0,
          componentName: 'ele',
          titleArray: []
        }
      ],
      currentIndex: 0
    };
  },
  methods: {
    onSelectElement(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style scoped lang="scss">
.rawComponents {
  display: flex;
  height: 100%;
}

nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #f0f0f0;
}

.secondNav {
  padding: 10px 15px;
  width: 130px;
  &:hover {
    background-color: #ecf5ff;
    border-radius: 5px;
    color: #409eff;
  }
}

.lIcon {
  width: 34px;
  height: 34px;
  border-radius: 5px;
}

.mainIconContainer {
  padding: 10px;
  line-height: 0;

  &:hover {
    background: rgb(236, 245, 255);
    border-radius: 5px;
  }
}
.active {
  border-right: 3px solid rgb(19, 206, 102);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

:v-deep(.el-submenu__title) {
  padding: 0 15px !important;
}

.dismissScroll {
  overflow: scroll;
}

::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}

.mainTitle {
  font-size: 32px;
  font-weight: 700;
  color: #4dba87;
  transform: rotate(-90deg) translateY(29px);
  white-space: nowrap;
  position: absolute;
  left: 0;
  height: 80px;
  line-height: 80px;
  transform-origin: 0% 50%;
}

.subtitle {
  font-size: 14px;
  font-weight: 700;
  margin-left: 20px;
}

.bottomToolbar {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 20px 0;
}

@-webkit-keyframes twinkling {
  /*透明度由0到1*/
  0% {
    opacity: 0; /*透明度为0*/
  }
  100% {
    opacity: 1; /*透明度为1*/
  }
}

.el-icon-question {
  -webkit-animation: twinkling 1s infinite ease-in-out alternate;
}
</style>
