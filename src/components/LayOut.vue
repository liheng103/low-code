<template>
  <div class="layOut">

    <div class="main">
      <nav class="leftPart">
        <!-- <raw-components></raw-components> -->
      </nav>
      <div class="rightPart">
        <tools-bar @previewModeChange="previewModeChange" @editModeChange="editModeChange" @redo="redo" @undo="undo" @structureVisible="structureVisible = true"></tools-bar>
        <div class="previewContainer">
          <div id="renderControlPanel">
            <!-- 渲染控制面板 -->
          </div>
        </div>
        <!-- <edit-attribute :enableRemoveButton="true" class="attribute" @save="onSaveAttr" @remove="onRemove" ref="attributeInput" shortcutInitMode="hand" :__rawVueInfo__="currentEditRawInfo">
        </edit-attribute> -->
      </div>
    </div>

    <!-- <div class="noticePart">
      <el-tooltip effect="dark" content="二次编辑" placement="top-start">
        <div class="roundIcon" alt="" @click="vueDialogVisible = true">Vue</div>
      </el-tooltip>
      <el-tooltip effect="dark" content="编辑JS逻辑" placement="top-start">
        <div class="roundIcon" alt="" @click="jsDialogVisible = true">JS</div>
      </el-tooltip>
      <el-tooltip effect="dark" content="查看实时代码" placement="top-start">
        <div class="roundIcon" alt="" @click="codeDialogVisible = true">Code</div>
      </el-tooltip>
      <el-popconfirm confirmButtonText="确认" cancelButtonText="点错了" iconColor="red" title="点我将清空所有编辑的内容, 确认吗?" @confirm="clear">
        <template #reference>
          <div class="roundIcon" alt="">Del</div>
        </template>
      </el-popconfirm>
    </div> -->

    <div class="codePart">
    </div>

    <!-- <div id="fullScreen" v-if="!editMode">
      <div style="margin: 20px; font-weight: bold;">按下ESC退出预览模式</div>
      <div id="mountedEle"></div>
    </div> -->
  </div>

</template>
<script>
  import { defineAsyncComponent } from 'vue'
  import keymaster from "keymaster"
  export default {
    name: 'LayOut',
    components: {
      //仅在页面需要它渲染时才会调用加载内部实际组件的函数
      // RawComponents: defineAsyncComponent(() => import("./RawComponents")),
      ToolsBar: defineAsyncComponent(() => import("./ToolsBar")),
      // EditAttribute: defineAsyncComponent(() => import("./EditAttribute")),
    },
    data() {
      return {
        editMode: true,

      }
    },
    methods: {
      //监听键盘按键
      initShortcut() {
        keymaster('⌘+z, ctrl+z', () => {
          this.undo();
          return false
        });

        keymaster('⌘+y, ctrl+y', () => {
          this.redo()();
          return false
        });

        keymaster('esc', () => {
          this.editMode = true;
          this.mainPanelProvider.setEditMode(true);
          return false
        });
      },

      //依据手机模式/桌面模式改变预览区尺寸
      previewModeChange(curVal) {
        const previewElem = document.querySelector("#renderControlPanel");
        if (curVal) {
          previewElem.style = "width:375px;";
        } else {
          previewElem.style = "width:100%;";
        }
      },

      editModeChange(curVal) {
        this.editMode = curVal;
        // this.$nextTick(() => {
        //   this.mainPanelProvider.setEditMode(newValue, document.querySelector("#mountedEle"));
        // })
      }
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
<style lang="scss" scoped>
  .layOut {
    height: 100%;
    display: flex;
  }
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #f0f0f0;
  }
  .leftPart {
    border-radius: 0px;
    background-color: white;
    width: 50%;
  }
  .rightPart {
    margin: 0px 0px 0 4px;
    flex: 1;
    display: flex;
    max-height: 100vh;
    flex-direction: column;
  }
  .previewContainer {
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
  .noticePart {
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    line-height: 0;
    font-size: 14px;
  }
  .roundIcon {
    //图形
    background: #4dba87;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    padding: 10px 0;
    margin-left: 10px;
    border: 0px;
    box-sizing: border-box;
    color: white;
    line-height: 20px;
    text-align: center;
  }
  #fullScreen {
    //全屏预览
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    background: white;
    overflow: scroll;
  }
</style>
