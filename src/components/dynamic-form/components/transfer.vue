<script setup lang="ts">
import { ref } from "vue";
import { Transfer } from 'ant-design-vue';
let props = defineProps({value:{}, options:{}, ...Transfer.props});
let emits = defineEmits({input:{}, ...Transfer.props});
// console.log('se', Transfer)

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};



</script>

<template>
    <Transfer v-bind="props" v-model:target-keys="props.value" :data-source="props.dataSource || props.options" @change="change"></Transfer>
</template>


<style scoped></style>