<script setup lang="ts">
import { Form, Tooltip } from 'ant-design-vue';
import components from "./components/index.ts"
import { get, set, str2Fn } from './util';
import { ref, reactive, onMounted, computed,  onUnmounted} from "vue";

let props = defineProps(["state", "schema"]);

const FormItem = Form.Item;
const useForm = Form.useForm;

const form = ref();

const fieldName = (field:any)=>{
    return field.path.replace(/\./g, "#");
};

onMounted(()=>{

});

onUnmounted(()=>{

});



let state = computed(()=>{
    let s = {} as any; //reactive({} as any);
    props?.schema?.fields?.map((field:any)=>{
        s[fieldName(field)] = get(props.state, field.path);
    });

    // console.log('state', s);
    return s;
});

let rules = computed(()=>{
    let s = {} as any;
    props?.schema?.fields?.map((field:any)=>{
        let rules = field.rules || [];
        s[fieldName(field)] = Array.isArray(rules) ? rules : [rules];
    });

    // console.log('rules', s);
    return s;
});


const { resetFields, validate, validateInfos } = useForm(state, rules, {
//   onValidate: (...args) => console.log(...args),
});



const getFieldValue = (field:any)=>{
    let data = get(props.state, field.path);

    if(field.get){
        return field.get(data, props.state, field);
    }
    return data;
};


const setFieldValue = (field:any, value:any)=>{

    if(field.set){
        let data = get(props.state, field.path);
        return field.set(data, value, props.state, field);
    }
    return set(props.state, field.path, value);
};




</script>

<template>

    <Form
        ref="form"
        :model="state"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        v-bind="props?.schema?.form"
    >
        <Form-Item
        :validateTrigger="['change', 'blur']"
        :label="field.label" 
        v-bind="validateInfos[fieldName(field)]"
        :name="fieldName(field)" :rules="field.rules" v-for="field in props?.schema?.fields" :key="field.path">
            <Tooltip v-if="components[field?.component]" v-bind="field.tipsProps">
                <!-- 为了对每个表单组件统一双向绑定，这里带入的值为value 带出的事件统一为input 且 方法参数取值要求是在 e.target.value 上取值 -->
                <template #title v-if="field.tips">{{  field.tips }}</template>
                <component 
                :is="components[field?.component]" 
                v-bind:value="getFieldValue(field)" 
                v-on:input="($event:any)=> { setFieldValue( field, $event.target.value) } " 
                v-bind="field?.props"></component>
            </Tooltip>
            <div v-else>不支持组件{{ field.component }}，请确认schema配置</div>
        </Form-Item>
    </Form>


   
</template>

<style scoped></style>
