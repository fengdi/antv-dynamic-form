



<script setup lang="ts">
import { ref } from "vue";
import pickColors, { Format } from 'vue-pick-colors'
let props = defineProps({value:{}, ...pickColors.props});
let emits = defineEmits({input:{}, ...pickColors.props});

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    console.log(e)
    emits("input", {target:{value: e}})
};

</script>

<template>
    <pick-colors v-bind="props" v-model:value="props.value" @change="change"></pick-colors>
</template>


<style scoped></style>