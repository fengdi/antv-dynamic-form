<script setup lang="ts">
import { ref, onMounted, onUnmounted} from "vue";
import { InputNumber } from 'ant-design-vue';
import * as monaco from 'monaco-editor';
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";


let props = defineProps({value:{}, ...InputNumber.props});
let emits = defineEmits({input:{}, ...InputNumber.props});

self.MonacoEnvironment = {
  getWorker(workerId, label) {
    if (label === 'json') {
      return new jsonWorker();
    }else if( label == 'typescript' || label == 'javascript'){
      return new tsWorker();
    }else if( ['css', 'less', 'scss'].includes(label)){
      return new cssWorker();
    }else if(label == 'html'){
        return new htmlWorker();
    }
    return new editorWorker();
  },
};

const editor = ref();
// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};


let e:any = null;

onMounted(()=>{
    let elem = editor.value;

    e = monaco.editor.create(elem, {
        value: props.value,
	    automaticLayout: true,
        // theme: "vs-dark",
        language: "javascript",
    });

    e.onDidChangeModelContent(()=>{
        let v = e.getValue();
        change(v);
    });
    // console.log('monaco editor', e);
});

onUnmounted(()=>{
    if(e){
        e.dispose();
        e = null;
    }
});

</script>

<template>
    <div class="code" ref="editor" style="height:100%;"></div>
    <!-- <InputNumber v-bind="props" v-model:value="props.value" @change="change"></InputNumber> -->
</template>


<style lang="less" scoped>
.code{
    width: 100%;
    min-height: 300px;
    overflow: hidden;
    border-radius: 6px;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    text-align: left;

}

</style>