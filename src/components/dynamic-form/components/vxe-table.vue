<script setup lang="ts">
import { ref } from "vue";
import { Select } from 'ant-design-vue';
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css';

console.log('VxeUITable', VxeUITable);

const VxeTable = VxeUITable.VxeTable;
const VxeColumn = VxeUITable.VxeColumn;
const Keyboard = VxeUITable.Keyboard;

let props = defineProps({value:{}, options:{}, ...Select.props});
let emits = defineEmits({input:{}, ...Select.props});
// console.log('se', Select)

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    emits("input", {target:{value: e}})
};

const tableData = [
{ id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: '0', age: 29, address: 'test abc' },
]

</script>

<template>
    <!-- <Select v-bind="props" v-model:value="props.value" :options="props.options" @change="change"></Select> -->
    <vxe-table
      border
      stripe
      height="400"
      :keyboardConfig="{}"
      :loading="loading"
      :column-config="{resizable: true}"
      :row-config="{isHover: true}"
      :checkbox-config="{labelField: 'id', highlight: true, range: true}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column type="checkbox" title="ID" width="140"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <!-- <vxe-column field="sex" title="Sex" :filters="sexOptions" :filter-multiple="false" :formatter="formatterSex"></vxe-column> -->
      <!-- <vxe-column field="age" title="Age" :filters="ageOptions" :filter-method="filterAgeMethod" sortable></vxe-column> -->
      <!-- <vxe-column field="address" title="Address" show-overflow></vxe-column> -->
    </vxe-table>
</template>


<style scoped></style>