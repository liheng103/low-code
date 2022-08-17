<template>
  <el-card class="editAttribute">
    <div style="text-align: center">
      <el-switch
        v-model="editMode"
        active-text="自由编辑"
        inactive-text="约束编辑"
        active-color="#13ce66"
        inactive-color="#13ce66"
      >
      </el-switch>
    </div>
    <div style="margin-top: 20px">
      <div name="1" v-show="!editMode">
        <div>
          <div
            class="item"
            v-for="(item, index) in localAttributes"
            :key="index"
          >
            <el-input
              v-model="item.key"
              :placeholder="'key' + index"
              class="halfWidth"
            ></el-input>
            <div class="split">:</div>
            <el-input
              v-model="item.value"
              :placeholder="'value' + index"
              class="halfWidth"
              style="flex-grow: 3"
            ></el-input>
            <el-icon @click="deleteItem(index)" style="margin-left: 5px">
              <l-minus />
            </el-icon>
          </div>

          <div class="quickAddRoot">
            快速增加一些属性:
            <div style="margin-top: 5px">
              <transition name="el-zoom-in-center">
                <el-tag
                  v-if="attributeKeys.indexOf('class') == -1"
                  size="small"
                  type="success"
                  @click="onClassClick"
                  effect="dark"
                  class="tag"
                  >Class
                </el-tag>
              </transition>
              <transition name="el-zoom-in-center">
                <el-tag
                  v-if="attributeKeys.indexOf('@click') == -1"
                  size="small"
                  type="success"
                  @click="onEventClick"
                  effect="dark"
                  class="tag"
                  >点击事件</el-tag
                >
              </transition>
              <transition name="el-zoom-in-center">
                <el-tag
                  v-if="!attributeKeys.includes('__text__')"
                  size="small"
                  type="success"
                  @click="onTextClick"
                  effect="dark"
                  class="tag"
                  >文本内容</el-tag
                >
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div name="2" v-show="editMode">
        <el-input
          type="textarea"
          :autosize="{ minRows: 4 }"
          placeholder="请输入属性, 以key: value的形式(冒号后要有空格)"
          v-model="textAttributes"
        >
        </el-input>
      </div>
    </div>
    <div style="margin-top: 10px; text-align: center">
      <el-tooltip
        class="item"
        effect="dark"
        content="新增属性 ctrl+a"
        placement="bottom"
      >
        <el-button type="primary" class="center" @click="createNew" circle>
          <el-icon>
            <circle-plus />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="保存属性 ctrl+s"
        placement="bottom"
      >
        <el-button type="success" class="center" @click="save" circle>
          <el-icon>
            <l-refresh />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip
        v-if="enableRemoveButton"
        class="item"
        effect="dark"
        content="移除该组件 ctrl+d"
        placement="bottom"
      >
        <el-button type="danger" class="center" @click="remove" circle>
          <el-icon>
            <l-delete />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip
        v-if="enableBroButton"
        class="item"
        effect="dark"
        content="复制一个兄弟组件 ctrl+c"
        placement="bottom"
      >
        <el-button type="primary" class="center" @click="copyBro" circle>
          <el-icon>
            <document-copy />
          </el-icon>
        </el-button>
      </el-tooltip>
      <div style="text-algin: center">
        <span class="shortcutTip">支持快捷键操作</span>
      </div>
    </div>
  </el-card>
</template>
<script>
import keymaster from 'keymaster';
export default {
  methods: {
    destroyShortcut() {
      console.log(`destroyShortcut by mode: ${this.shortcutInitMode}`);
      keymaster.unbind('⌘+a, ctrl+a');
      keymaster.unbind('⌘+s, ctrl+s');
      keymaster.unbind('⌘+d, ctrl+d');
      keymaster.unbind('⌘+c, ctrl+c');
    },
    initShortcut() {
      console.log(`init by mode: ${this.shortcutInitMode}`);
      keymaster('⌘+a, ctrl+a', () => {
        if (this.enable) {
          this.createNew();
          return false;
        }
      });
      keymaster('⌘+s, ctrl+s', () => {
        if (this.enable) {
          this.save();
          return false;
        }
      });
      keymaster('⌘+d, ctrl+d', () => {
        if (this.enable) {
          this.remove();
          return false;
        }
      });
      keymaster('⌘+c, ctrl+c', () => {
        if (this.enable && this.enableBroButton) {
          this.copyBro();
          return false;
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  padding: 10px;
  width: 50%;
  text-align: center;
}

.halfWidth {
  width: 0%;
  flex-grow: 2;
}

.center {
  display: inline-block !important;
  margin: 10px 10px;
}

.item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}

.quickAddRoot {
  padding: 5px 10px;
  border: 1px dashed #c6c6c6;
  border-radius: 5px;
  font-size: 12px;
  color: gray;

  .tag {
    margin-right: 5px;
  }

  .tag:last-child {
    margin-right: 0;
  }
}

.split {
  width: 30px;
  text-align: center;
  font-weight: bold;
}

.el-icon-plus,
.el-icon-minus {
  margin-left: 10px;
}

.el-button + .el-button {
  margin-left: 0px;
}

.shortcutTip {
  font-size: 12px;
  color: grey;
  padding: 2px;
  border-bottom: grey solid 1px;
}
</style>
