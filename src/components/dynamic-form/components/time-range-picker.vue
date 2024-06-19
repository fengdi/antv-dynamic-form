<script setup lang="ts">
import { ref } from "vue";
import { TimeRangePicker } from 'ant-design-vue';
// console.log(TimeRangePicker)
let props = defineProps({value:{}, ...TimeRangePicker.props});
let emits = defineEmits({input:{}, ...TimeRangePicker.props});

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <TimeRangePicker v-bind="props" v-model:value="props.value" @change="change"></TimeRangePicker>
</template>


<style scoped></style>