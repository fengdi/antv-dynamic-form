<script setup lang="ts">
import { ref } from "vue";
import { Upload, Button} from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
let props = defineProps({value:{}, ...Upload.props});
let emits = defineEmits({input:{}, ...Upload.props});

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e:any)=>{
    // console.log('upload', e, e.flie, e.file.xhr)
    if(e.file && e.file.response){
        let files = e.file.response.files;
        if(files?.[0]?.url){
            emits("input", {target:{value: files?.[0]?.url}})
        }else{
            emits("input", {target:{value: ''}})
        }
        // e.file.xhr.addEventListener('load', (ev)=>{
        //     console.log('eb', ev)
        // });
    }
    // emits("input", {target:{value: e}})
};

</script>

<template>
    <Upload v-bind="props" :maxCount="1" :showUploadList="false" v-model:value="props.value" @change="change">
        <Button>
            <upload-outlined></upload-outlined>
            {{ props.text || '上传' }}
        </Button>
    </Upload>
</template>


<style scoped></style>