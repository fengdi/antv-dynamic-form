<script setup lang="ts">
import { ref } from "vue";
import { Cascader } from 'ant-design-vue';
let props = defineProps({value:{}, options:{}, ...Cascader.props});
let emits = defineEmits({input:{}, ...Cascader.props});
// console.log('Cascader', Cascader)

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <Cascader v-bind="props" v-model:value="props.value" :options="props.options" @change="change"></Cascader>
</template>


<style scoped></style>