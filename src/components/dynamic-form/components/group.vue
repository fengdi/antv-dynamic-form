<script setup lang="ts">
import { ref } from "vue";
import DynamicForm from "../index.vue";
let props = defineProps(['value', 'fields']);
// let emits = defineEmits(Select.props);

</script>

<template>
    <DynamicForm :state="props.value" :schema="{ fields: props.fields}"></DynamicForm>
</template>


<style scoped></style>