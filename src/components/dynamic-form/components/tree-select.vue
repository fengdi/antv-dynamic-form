<script setup lang="ts">
import { ref } from "vue";
import { TreeSelect } from 'ant-design-vue';
let props = defineProps({value:{}, options:{}, ...TreeSelect.props});
let emits = defineEmits({input:{}, ...TreeSelect.props});
// console.log('TreeSelect', TreeSelect)

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <TreeSelect v-bind="props" v-model:value="props.value" :options="props.options" @change="change"></TreeSelect>
</template>


<style scoped></style>