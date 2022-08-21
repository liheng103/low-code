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
    <div class="rightMain">
      <div class="ReviewNav">
        <div class="toolsBar">
          <el-row>
            <el-col :span="18">
              <el-link type="primary" @click="previewModeChange">{{ previewMode ? '桌面' : '手机' }}模式</el-link>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" @click="handleDownload" size="small" style="float: right">导出</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="ReviewCon">
        <div id="renderControlPanel">
          <!--这里不能放任何东西，执行时会被清空-->
          <!-- <div>1234</div> -->
        </div>
      </div>
    </div>

    <code-dialog v-model:codeDialogVisible="this.codeDialogVisible"></code-dialog>
  </div>
</template>
<script>
  import { defineAsyncComponent } from 'vue';
  // import keymaster from "keymaster"
  import html2canvas from 'html2canvas';
  import Canvas2Image from '@/assets/canvas2image';
  export default {
    components: {
      //仅在页面需要它渲染时才会调用加载内部实际组件的函数
      // ToolsBar: defineAsyncComponent(() => import("./ToolsBar")),
      EditAttribute: defineAsyncComponent(() => import('./EditAttribute')),
      NewRawComponents: defineAsyncComponent(() => import('./NewRawComponents'))
    },
    data() {
      return {
        codeDialogVisible: false,
        previewMode: false
      };
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
      handleDownload() {
        var downloadContent = document.querySelector('#renderControlPanel');
        // var width = downloadContent.offsetWidth
        // var height = downloadContent.offsetHeight
        // var canvas = document.createElement('canvas')
        // var scale = 2
        // canvas.width = width * scale
        // canvas.height = height * scale
        // canvas.getContext('2d').scale(scale, scale)
        // var opts = {
        //   scale: scale,
        //   canvas: canvas,
        //   width: width,
        //   height: height,
        //   // 避免下载不全
        //   backgroundColor: null,
        //   // 【重要】开启跨域配置
        //   useCORS: true
        // }

        // html2canvas(downloadContent, opts).then((canvas) => {
        //   var context = canvas.getContext('2d')
        //   // 【重要】关闭抗锯齿
        //   context.mozImageSmoothingEnabled = false
        //   context.webkitImageSmoothingEnabled = false
        //   context.msImageSmoothingEnabled = false
        //   context.imageSmoothingEnabled = false

        //   var img = Canvas2Image.convertToPNG(canvas, canvas.width/2, canvas.height/2)
        //   // 下载图片
        //   let a = document.createElement('a')
        //   document.body.appendChild(a)
        //   a.href = img.src
        //   // 设置下载标题
        //   var date = new Date();
        //   var year = date.getFullYear();
        //   var month = date.getMonth() + 1;
        //   var day = date.getDate();
        //   var mytime = date.toLocaleTimeString();     //获取当前时间
        //   var time = year + "-" + month + "-" + day + ' ' + mytime;
        //   a.download = "页面" + time; // 图片名字
        //   a.click()

        // })
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
      }
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
  .toolsBar {
    padding: 5px 10px;
    background-color: white;
    border-radius: 0px;
    align-content: center;
    border-bottom: 1px solid #f0f0f0;
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
