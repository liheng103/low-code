<template>
  <div class="newLayOut">
    <div class="leftMain">
      <nav class="component">
        <new-raw-components></new-raw-components>
      </nav>
      <div class="editPart">
        <edit-attribute :enableRemoveButton="true" class="attribute" @save="onSaveAttr" @remove="onRemove" ref="attributeInput" shortcutInitMode="hand" :__rawVueInfo__="currentEditRawInfo">
        </edit-attribute>
      </div>
    </div>
    <!-- 辅助定位线 -->
    <div class="crossFlag">
      <div class="x"></div>
    </div>
    <div class="rightMain">
      <div class="ReviewNav">
        <tools-bar @previewModeChange="previewModeChange" @redo="redo" @undo="undo"></tools-bar>
      </div>
      <div class="ReviewCon">
        <div id="renderControlPanel">
          <!--这里不能放任何东西，执行时会被清空-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineAsyncComponent } from 'vue'
  import keymaster from "keymaster"
  export default {
    components: {
      //仅在页面需要它渲染时才会调用加载内部实际组件的函数
      ToolsBar: defineAsyncComponent(() => import("./ToolsBar")),
      EditAttribute: defineAsyncComponent(() => import("./EditAttribute")),
      NewRawComponents: defineAsyncComponent(() => import("./NewRawComponents")),
    },
    methods: {
      //切换手机/桌面模式
      previewModeChange(newValue) {
        const previewElem = document.querySelector("#renderControlPanel");
        if (newValue) {
          previewElem.style = "width:375px;";
        } else {
          previewElem.style = "width:100%;";
        }
      },

    }
  }
</script>
<style>
  html,
  body {
    height: 100%;
    margin: 0;
  }
</style>
<style scoped lang="scss">
  .newLayOut {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #f0f0f0;
  }
  .leftMain {
    border-radius: 0px;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 40%;
  }
  .component {
    height: 70vh;
  }
  .editPart {
    border-top: 2px;
    flex: 1;
  }
  .rightMain {
    margin: 0px 0px 0 4px;
    flex: 1;
    display: flex;
    max-height: 100vh;
    flex-direction: column;
  }
  .ReviewCon {
    // height: 0;
    height: 96vh;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
  }
  #renderControlPanel {
    height: 100%;
    width: 100%;
    border-radius: 0px;
    overflow: scroll;
    box-sizing: border-box;
    background-color: white;
    transition: width 1s;
    padding: 10px;
  }
  .cross-flag {
    position: fixed;
    right: 0;
    top: 0;
    .x {
      width: 20px;
      height: 2px;
      position: fixed;
      background-color: #4dba87;
      border-radius: 1px;
      top: 0;
      display: none;
      right: 0;
      pointer-events: none;
    }
    .y {
      width: 2px;
      height: 20px;
      position: fixed;
      background-color: #4dba87;
      top: 0;
      border-radius: 1px;
      display: none;
      right: 0;
      pointer-events: none;
    }
  }
</style>