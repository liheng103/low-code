import { useStore } from 'vuex';
import { ref } from 'vue';
import mapButton from '@/rawComponents/button/src/mapButton';
import mapLink from '@/rawComponents/link/src/mapLink';
import mapImage from '@/rawComponents/image/src/mapImage';
import mapVideo from '@/rawComponents/video/src/mapVideo';
import mapText from '@/rawComponents/text/src/mapText';
export default function () {
  //组件拖拽到预览区时用的
  const startX = ref(0);
  const startY = ref(0);

  //存储预览区组件用的
  const store = useStore();

  //从组件区拖拽到预览区
  function dragToView(event, props) {
    //获取组件区长度
    const componentView = document.querySelector(
      '#renderControlPanel'
    ).offsetLeft;
    //判断最终坐标是否在视图区范围内
    if (event.clientX > componentView) {
      //获取当前坐标
      const elemX = event.clientX;
      const elemY = event.clientY;
      if (props.value.tag === 'button') {
        const newComponent = mapButton.data[props.value.id - 1];
        newComponent['coordinate'] = [elemX, elemY];
        newComponent['tag'] = props.value.tag;
        store.state.presentViewData.push(newComponent);
      }
      if (props.value.tag === 'link') {
        const newComponent = mapLink.data[props.value.id - 1];
        newComponent['coordinate'] = [elemX, elemY];
        newComponent['tag'] = props.value.tag;
        store.state.presentViewData.push(newComponent);
      }
      if (props.value.tag === 'image') {
        const newComponent = mapImage.data[props.value.id - 1];
        newComponent['coordinate'] = [elemX, elemY];
        newComponent['tag'] = props.value.tag;
        store.state.presentViewData.push(newComponent);
      }
      if (props.value.tag === 'video') {
        const newComponent = mapVideo.data[props.value.id - 1];
        newComponent['coordinate'] = [elemX, elemY];
        newComponent['tag'] = props.value.tag;
        store.state.presentViewData.push(newComponent);
      }
      if (props.value.tag === 'text') {
        const newComponent = mapText.data[props.value.id - 1];
        newComponent['coordinate'] = [elemX, elemY];
        newComponent['tag'] = props.value.tag;
        store.state.presentViewData.push(newComponent);
      }
    }
  }

  //记录开始拖拽时的鼠标坐标
  function dragStart(event) {
    startX.value = event.clientX;
    startY.value = event.clientY;
  }

  //结束拖拽时的坐标
  function dragEnd(event, x, y) {
    const newX = x + event.clientX - startX.value;
    const newY = y + event.clientY - startY.value;
    if (newX > 200) {
      //在预览区范围内
      return [newX, newY];
    } else {
      return false;
    }
  }

  return {
    dragStart,
    dragToView,
    dragEnd
  };
}
