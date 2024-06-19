<script setup lang="ts">
import { ref } from "vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';


const Editor = CKEditor.component;


let props = defineProps({value:{ type: String, default: ''}, config:{type: Object}});
let emits = defineEmits(['input']);

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <Editor :editor="ClassicEditor" :modelValue="props.value" :config="props.config" @input="change"></Editor>
</template>


<style scoped></style>