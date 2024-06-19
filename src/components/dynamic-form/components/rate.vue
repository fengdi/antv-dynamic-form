<script setup lang="ts">
import { ref } from "vue";
import { Rate } from 'ant-design-vue';
let props = defineProps({value:{}, ...Rate.props});
let emits = defineEmits({input:{}, ...Rate.props});


// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    // console.log('eee', e)
    emits("input", {
        target:{
            value: e
        }
    })
};

</script>

<template>
    <Rate v-bind="props" v-model:value="props.value" :options="props.options" @change="change"></Rate>
</template>


<style scoped></style>