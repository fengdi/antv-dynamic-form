

<script setup lang="ts">
import { ref } from "vue";
import { Switch } from 'ant-design-vue';
let props = defineProps({value:{}, ...Switch.props});
let emits = defineEmits({input:{}, ...Switch.props});


// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <Switch v-bind="props" :checked="props.value" @change="change"></Switch>
</template>


<style scoped></style>