<template>
  <div class="newLayOut">
    <div class="leftMain">
      <nav class="component">
        <new-raw-components></new-raw-components>
      </nav>
      <StyleBar />
    </div>
    <div class="rightMain">
      <div class="ReviewNav">
        <div class="toolsBar">
          <el-row>
            <el-col :span="18">
              <el-link type="primary" @click="previewModeChange">{{ previewMode ? '桌面' : '手机' }}模式</el-link>
            </el-col>
            <el-col :span="6">
              <el-tooltip class="item" effect="dark" content="快捷键:n+g" placement="bottom-end">
                <el-button type="primary" @click="handleDownload" size="small" style="float: right">导出</el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="ReviewCon">
        <div id="renderControlPanel">
          <div style=" position: relative;">
            <RenderControlPanel />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineAsyncComponent } from 'vue';
  import keymaster from 'keymaster';
  import html2canvas from 'html2canvas';
  import StyleBar from './StyleBar.vue';
  import RenderControlPanel from './RenderControlPanel.vue';
  // import Canvas2Image from '@/assets/canvas2image';
  import { splitInit } from '@/assets/split-init.js';


  export default {
    components: {
      NewRawComponents: defineAsyncComponent(() => import('./NewRawComponents')),
      RenderControlPanel,
      StyleBar
    },
    data() {
      return {
        codeDialogVisible: false,
        previewMode: false,
        initFlag: false,

      };
    },
    mounted() {
      splitInit();
      this.initKeyboard();
    },
    methods: {
      //切换手机/桌面模式
      previewModeChange() {
        this.previewMode = !this.previewMode;
        const previewElem = document.querySelector('#renderControlPanel');
        if (this.previewMode) {
          previewElem.style = 'width:375px;';
        } else {
          previewElem.style = 'width:100%;';
        }
      },
      //下载预览区图片
      handleDownload() {
        var downloadContent = document.querySelector('#renderControlPanel');
        html2canvas(downloadContent).then((canvas) => {
          let url = canvas.toDataURL('image/png');
          let link = document.createElement('a');
          var date = new Date();
          var year = date.getFullYear();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          var mytime = date.toLocaleTimeString(); //获取当前时间
          var time = year + '-' + month + '-' + day + ' ' + mytime;
          link.download = '页面预览' + time;
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      },
      initKeyboard() {
        //保存image的快捷键
        keymaster('n+g', () => {
          this.handleDownload();
          return false
        });
      },
    }
  };
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
    width: 600px;
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
  .toolsBar {
    padding: 5px 10px;
    background-color: white;
    border-radius: 0px;
    align-content: center;
    border-bottom: 1px solid #f0f0f0;
  }
  .ReviewCon {
    // height: 0;
    width: 100%;
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
