<script setup lang="ts">
import { ref } from "vue";
import { Checkbox } from 'ant-design-vue';

const CheckboxGroup = Checkbox.Group;

let props = defineProps({value:{}, options:{}, disabled:{}, ...Checkbox.props});
let emits = defineEmits({input:{}, ...Checkbox.props});


// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <CheckboxGroup v-bind="props" v-model:value="props.value" :options="props.options" @change="change"></CheckboxGroup>
</template>


<style scoped></style>