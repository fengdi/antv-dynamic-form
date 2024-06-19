<script setup lang="ts">
import { ref } from "vue";
import { TimePicker } from 'ant-design-vue';
let props = defineProps({value:{}, ...TimePicker.props});
let emits = defineEmits({input:{}, ...TimePicker.props});

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <TimePicker v-bind="props" v-model:value="props.value" @change="change"></TimePicker>
</template>


<style scoped></style>