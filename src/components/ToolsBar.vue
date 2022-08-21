<template>
  <div class="toolsBar">
    <el-row>
      <el-col :span="6">
        <div class="edit">
          <el-tooltip
            class="item"
            effect="dark"
            content="快捷键Ctrl+Z"
            placement="bottom-start"
          >
            <el-button type="primary" @click="$emit('undo')" size="small"
              >撤销</el-button
            >
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="快捷键Ctrl+Y"
            placement="bottom-start"
          >
            <el-button type="primary" @click="$emit('redo')" size="small"
              >重做</el-button
            >
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="6">
        <el-link type="primary" @click="previewModeChange"
          >{{ previewMode ? '桌面' : '手机' }}模式</el-link
        >
      </el-col>
      <el-col :span="6">
        <el-link type="primary" @click="exportCode">导出</el-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import html2canvas from 'html2canvas';
export default {
  name: 'ToolsBar',
  data() {
    return {
      previewMode: false
      //editMode: true,
    };
  },
  methods: {
    previewModeChange() {
      this.previewMode = !this.previewMode;
      this.$emit('previewModeChange', this.previewMode); //子组件给父组件发射数据，父组件通过previewModeChange监听并接收参数,后面的this.previewMode是参数
    },
    exportCode() {
      html2canvas(document.querySelector('#renderControlPanel')).then(
        (canvas) => {
          const img = new Image();
          img.src = canvas.toDataURL('png');
          img.setAttribute('crossOrigin', 'anonymous');
          // canvas.height = 500 // 自定义图片宽度
          var context = canvas.getContext('2d');
          img.onload = function () {
            var w = img.width;
            var h = img.height;
            context.drawImage(img, 0, 0, w, h, 0, 0, w, h);
            var imgUrl = canvas.toDataURL('image/png');
            // 根据生成的图片地址imgUrl（base64）进行后续保存操作
          };
        }
      );
    }
  }
};
</script>
<style scoped>
.toolsBar {
  padding: 5px 10px;
  /* font-size: 14px;
                                        font-weight: 500;
                                      color: #606266; */
  background-color: white;
  border-radius: 0px;
  align-content: center;
  border-bottom: 1px solid #f0f0f0;
}
/* .edit {
                                display: inline-block;
                              } */
</style>
