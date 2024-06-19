<script setup lang="ts">
import { ref } from "vue";
import { Slider } from 'ant-design-vue';
let props = defineProps({value:{}, ...Slider.props});
let emits = defineEmits({input:{}, ...Slider.props});

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

</script>

<template>
    <Slider v-bind="props" v-model:value="props.value" @change="change"></Slider>
</template>


<style scoped></style>