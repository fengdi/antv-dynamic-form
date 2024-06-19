<script setup lang="ts">
import { ref } from "vue";
import { DatePicker } from 'ant-design-vue';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
let props = defineProps({value:{}, ...DatePicker.props});
let emits = defineEmits({input:{}, ...DatePicker.props});

// console.log('DatePicker', DatePicker, props )

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};


</script>

<template>
    <ConfigProvider :locale="locale">
        <DatePicker v-bind="props" v-model:value="props.value" @change="change"></DatePicker>
    </ConfigProvider>
</template>


<style scoped></style>