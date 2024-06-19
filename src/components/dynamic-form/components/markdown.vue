<script setup lang="ts">
import { ref, onMounted, onUnmounted} from "vue";
import { Select } from 'ant-design-vue';
import Vditor from 'vditor'
// import "vditor/src/assets/less/index";
import "vditor/dist/index.css"

let props = defineProps({value:{}, options:{}, ...Select.props});
let emits = defineEmits({input:{}, ...Select.props});
// console.log('se', Select)

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

const vditorElem = ref();

let vditor:any;

onMounted(()=>{
    vditor = new Vditor(vditorElem.value, {
        value: props.value,
        minHeight: 260,
        cache:{
            enable: false,
            // id: 'vditor-xxx'
        },
        input(val){
            change(val)
        }
    })
    // console.log(vditor)
});

onUnmounted(()=>{
    if(vditor){
        vditor.destroy();
    }
});






</script>

<template>
    <div ref="vditorElem" class="vditor"></div>
    <!-- <Select v-bind="props" v-model:value="props.value" :options="props.options" @change="change"></Select> -->
</template>


<style scoped></style>