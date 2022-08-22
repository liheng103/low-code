
import { useStore } from 'vuex'
import {ref, reactive} from 'vue'

export default function(){

    const store = useStore()

    function transferStyleInfo(key){
        if(key!='undefine'){
            store.state.presentIndex = key
            store.state.presentStyle = store.state.presentViewData[key].style
        }
    }

    

    function changeStyle(value,valuename){
        store.state.presentViewData[store.state.presentIndex].style[valuename] = value
        console.log(value,valuename,store.state.presentViewData[store.state.presentIndex].style)
    }

    return{
        transferStyleInfo,
        changeStyle
    }
}