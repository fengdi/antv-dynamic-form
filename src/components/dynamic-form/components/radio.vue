<script setup lang="ts">
import { ref } from "vue";
import { RadioGroup } from 'ant-design-vue';
let props = defineProps({value:{}, ...RadioGroup.props});
let emits = defineEmits({input:{}, ...RadioGroup.props});


// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", e)
};

</script>

<template>
    <RadioGroup v-bind="props" v-model:value="props.value" :options="props.options" @change="change"></RadioGroup>
</template>


<style scoped></style>