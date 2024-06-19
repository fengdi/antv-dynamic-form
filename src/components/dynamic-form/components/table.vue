<script setup lang="ts">
import { ref } from "vue";
import { Table } from 'ant-design-vue';

let props = defineProps({value:{}, options:{}, ...Table.props});
let emits = defineEmits({input:{}, ...Table.props});
// console.log('se', Table)

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    // emits("input", {target:{value: e}})
};

</script>

<template>
    <Table v-bind="props" :columns="props.columns" :data-source="props.value" @change="change"></Table>
</template>


<style scoped></style>