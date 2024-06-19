<script setup lang="ts">
import { ref } from "vue";
import { InputNumber } from 'ant-design-vue';
let props = defineProps({value:{}, ...InputNumber.props});
let emits = defineEmits({input:{}, ...InputNumber.props});

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <InputNumber v-bind="props" v-model:value="props.value" @change="change"></InputNumber>
</template>


<style scoped></style>