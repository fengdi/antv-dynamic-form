<script setup lang="ts">
import { ref } from "vue";
import { RangePicker } from 'ant-design-vue';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
let props = defineProps({value:{}, ...RangePicker.props});
let emits = defineEmits({input:{}, ...RangePicker.props});

// console.log('RangePicker', RangePicker, props )

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};


</script>

<template>
    <ConfigProvider :locale="locale">
        <RangePicker v-bind="props" v-model:value="props.value" @change="change"></RangePicker>
    </ConfigProvider>
</template>


<style scoped></style>