<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import jsoneditor from 'jsoneditor';
import "jsoneditor/dist/jsoneditor.min.css"

let props = defineProps({value:{}, name:{ type:String, default: '#'}, options:{ type: Object}});
let emits = defineEmits(['input']);
// console.log('se', Select)

const editorDom = ref();

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};


const options = {
        mode: 'form',
        modes: ['form', 'code' ], // , 'text', 'tree', 'view', 'preview' allowed modes
        name: props.name,
        onChangeJSON : function(data:any){
        //   console.log('onchange json', data)
          change(data);
        },
        ...props.options
      };

let editor:any;
onMounted(()=>{
    editor = new jsoneditor(editorDom.value, options);
    editor.set(props.value);
});

onUnmounted(()=>{
    editor.destroy();
});

</script>

<template>
    <div ref="editorDom" ></div>
</template>


<style scoped></style>