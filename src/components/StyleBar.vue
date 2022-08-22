<template>
  <div class = "style-bar">
    <div><span>颜色</span><input type = "text" v-model = "color.value" @blur = "changeStyle(color.value,name = 'backgroundColor')"/></div>
    <div><span>宽</span><input type = "text" v-model = "width" @blur = "changeStyle(color,name = 'backgroundColor')"/></div>
    <div><span>高</span><input type = "text" v-model = "height" @blur = "changeStyle"/></div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed, ref} from 'vue'
import useStyle from '../hooks/useStyle'
export default {
    name:'StyleBar',
    setup(){
        const store = useStore()
        const {transferStyleInfo,changeStyle} = useStyle()

        const color = ref(0)
        /*
        const color = computed({
            get(){
                return store.state.presentStyle.backgroundColor
            },
            set(newvalue){
                return newvalue
            }
        })
*/
        const width = computed({
            get(){
                return store.state.presentStyle.width?store.state.presentStyle.width.split('px')[0]:0
            },
            set(){
                return store.state.presentStyle.width?store.state.presentStyle.width.split('px')[0]:0
            }
        })

        const height = computed({
            get(){
                return store.state.presentStyle.height?store.state.presentStyle.height.split('px')[0]:0
            },
            set(){
                return store.state.presentStyle.height?store.state.presentStyle.height.split('px')[0]:0
            }
        })


        ref(store.state.presentStyle["background-color"])
        return{
            changeStyle,
            color,
            width,
            height
        }
    }

}
</script>

<style>
    .style-bar{
      padding: 10px;

      display: flex;
      flex-direction: column;
    }

    .style-bar div{
        padding: 5px;
    }


    .style-bar div span{
        width: 50px;
        text-align: center;
    }
    .style-bar input{
        height: 20px;
        padding: 3px;
        outline: none;
        border: 0px;
        background-color: rgb(79, 110, 175);
    }
</style>