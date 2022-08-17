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
            <el-link
              type="primary"
              @click="$emit('undo')"
              style="margin-right: 3px"
              >撤销</el-link
            >
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="快捷键Ctrl+Y"
            placement="bottom-start"
          >
            <el-link type="primary" @click="$emit('redo')">重做</el-link>
          </el-tooltip>
        </div>
      </el-col>
      <el-col :span="6">
        <el-link type="primary" @click="previewModeChange"
          >{{ previewMode ? '桌面' : '手机' }}模式</el-link
        >
      </el-col>
      <el-col :span="6">
        <el-link type="primary" @click="editModeChange"
          >{{ editMode ? '预览' : '编辑' }}模式</el-link
        >
      </el-col>
      <el-col :span="6">
        <el-link type="primary" @click="$emit('structureVisible')"
          >组件结构检视图</el-link
        >
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'ToolsBar',
  data() {
    return {
      previewMode: false,
      editMode: true
    };
  },
  methods: {
    previewModeChange() {
      this.previewMode = !this.previewMode;
      this.$emit('previewModeChange', this.previewMode); //子组件给父组件发射数据，父组件通过previewModeChange监听并接收参数,后面的this.previewMode是参数
    },
    editModeChange() {
      this.editMode = !this.editMode;
      this.$emit('editModeChange', this.editMode);
      setTimeout(() => {
        this.editMode = true;
      }, 500);
    }
  }
};
</script>
<style scoped>
.toolsBar {
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 500;
  color: #606266;
  background-color: white;
  border-radius: 0px;
  align-content: center;
  border-bottom: 1px solid #f0f0f0;
}
.edit {
  display: inline-block;
}
</style>
