<script setup lang="ts">
import { ref } from "vue";
import { Space, Button,} from 'ant-design-vue';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import DynamicForm from "../index.vue";
let props = defineProps(['value', 'fields', 'addButtonText']);
// let emits = defineEmits(Select.props);


// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
// let change = (e)=>{
//     emits("input", {target:{value: e}})
// };

const remove = (item:any, index:number) => {
    props.value.splice(index, 1);
};

const add = () => {
    props.value.push({});
};

</script>

<template>
    <Space
      v-for="(item, index) in props.value"
      :key="index"
      align="baseline"
      style="display: flex; margin-bottom: 8px"
    >
        <DynamicForm :state="item" :schema="{ fields: props.fields}"></DynamicForm>
        <MinusCircleOutlined @click="remove(item, index)" />
    </Space>
    <Button type="dashed" block @click="add">
        <PlusOutlined />
        {{ props.addButtonText }}
    </Button>

</template>


<style scoped></style>