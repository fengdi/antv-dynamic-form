<script setup lang="ts">
import DynamicForm from "./components/dynamic-form/index.vue";
import { reactive, computed, watch } from "vue";
import { Input } from 'ant-design-vue';
const TextArea = Input.TextArea;

let state = reactive({

  data:{
    a: "fff",
    b: {
      b1:{
        b2: "foo"
      },
      c1:[{name:'1'}, {name:'2', angle: 3}]
    },
    c:{
      b: "jack"
    },

    d: "jack",


    group:{
      e: 1,
      f: 2
    },

    books:[
      {
        a: 1,
        b: "bar",
        c: "z"
      }
    ],
    sss: false,
    time: "09:00:00",
    timeRange: ["09:00:00", "17:20:11"],
    dateRange: ["2015/01/01", "2025/01/01"],
    check: [],
    slider: 5,
    color: '#ff0',
    cascader: '',
    tree: '',
    upload: '',
    code: `function test(s){
    console.log(s);
}`,
      table: [...Array(30)].map((_, i) => ({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      })),

      rate: 3,
      tran: ['1', '4']
  }
});

let schema = reactive({
  data:{
  fields: [
    {
      label: "输入框一",
      path: "a",
      component: "Input",
      props: {
        // pp: 1,
      },
      rules:{ required: true, message: 'Please input your username!' }
    },
    {
      label: "输入框",
      path: "b.b1.b2",
      component: "Input",
      tips: "提示信息，这个表单根据路径去双向绑定",
    },
    {
      label: "路径",
      path: "b.c1[0].name",
      component: "Input",
      tips: "双向绑定，根据路径取数组第一项的name属性",
    },
    {
      label: "单选框",
      path: "c.b",
      component: "Radio",
      tips: "提示信息，这个单选框",
      props: {
        options: [
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ]
        // pp: 1,
      }
    },
    {
      label: "下拉选择三",
      path: "d",
      component: "Select",
      props: {
        allowClear: true,
        options: [
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ]
      },
    },
    {
      label: "子表单",
      path: "group",
      component: "Group",
      props: {
        fields:[
          {
            label: "E",
            path: "e",
            component: "InputNumber",
            props:{
              prefix:"￥"
            }
          },
          {
            label: "F",
            path: "f",
            component: "InputNumber",
            props:{
              "step": "0.001",
              "string-mode": true
            }
          }
        ]
      }
    },
    {
      label: "动态增减列表",
      path: "books",
      component: "List",
      props: {
        addButtonText: '新增一组',
        fields:[
          {
            label: "AA",
            path: "a",
            component: "Input"
          },
          {
            label: "BB",
            path: "b",
            component: "Input"
          },
          {
            label: "CCC",
            path: "c",
            component: "Input"
          },
        ]
      }
    },

    {
      label: "开关",
      path: "sss",
      component: "Switch",
      props: {

      }
    },
    {
      label: "时间",
      path: "time",
      component: "TimePicker",
      props:{
        "value-format" :"HH:mm:ss"
      }
    },
    {
      label: "时间范围",
      path: "timeRange",
      component: "TimeRangePicker",
      props:{
        "value-format" :"HH:mm:ss"
      }
    },

    {
      label: "日期范围",
      path: "dateRange",
      component: "RangePicker",
      props:{
        "value-format" :"YYYY/MM/DD",
        "show-time": true
      }
    },

    {
      label: "勾选",
      path: "check",
      component: "Checkbox",
      props:{
        options: [
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ]
      }
    },
    {
      label: "滑动输入条",
      path: "slider",
      component: "Slider",
      props:{

      }
    },
    {
      label: "颜色",
      path: "color",
      component: "Color2",
      props:{
        'show-alpha': true
      }
    },
    {
      label: "级联选择",
      path: "cascader",
      component: "Cascader",
      props:{
        options: [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        }]
      }
    },
    {
      label: "树选择",
      path: "tree",
      component: "TreeSelect",
      props:{
        'tree-data': [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        }]
      }
    },

    {
      label: "上传",
      path: "upload",
      component: "Upload",
      props:{
        action: 'http://127.0.0.1:2999/upload'
      }
    },
    {
      label: "代码编辑",
      path: "code",
      component: "MonacoEditor",
      props:{

      }
    },
    {
      label: "json编辑",
      path: "books",
      component: "JsonEditor",
      props:{

      }
    },
    {
      label: "表格",
      path: "table",
      component: "Table",
      props:{
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            width: 130,
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 60,
          },
          {
            title: '地址',
            dataIndex: 'address',
            width: 150,
          },
        ],
        // pagination: { pageSize: 10 },
        scroll: { y: 240 }
      }
    },
    {
      label: "旋转角度",
      path: "b.c1[1].angle",
      component: "Angle",
    },
    {
      label: "富文本",
      path: "d",
      component: "RichText",
    },
    {
      label: "自定义取值和设值",
      path: "b.c1",
      component: "Input",
      get(data:any, state:any, field:any){
        return data[0].name + ":end";
      },
      set(data:any, value:any, state:any, field:any){
        data[0].name = value.replace(/:end/, '')
      }
    },
    {
      label: "markdown",
      path: "d",
      component: "Markdown",
    },
    {
      label: "评分",
      path: "rate",
      component: "Rate",
    },
    {
      label: "穿梭框",
      path: "tran",
      component: "Transfer",
      props: {
        'one-way': true,
        'render': (item:any) => item.title,
        'data-source': Array.from({length:10}).map((_,i)=>{
          return {
            key: i.toString(),
            title: `content${i + 1}`,
            description: `description of content${i + 1}`,
            // disabled: i % 3 < 1,
          }
        })
      }
    },
  ],
}});






// 联动逻辑
watch(()=>{
  return state.data.c.b
}, (val, old)=>{
  let d = schema.data.fields.find(field=>field.path == 'd');
  if(!d){
    return;
  }
  if(val == 'jack'){
    d.props.options = [
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ];
  }else{
    d.props.options = [
          {
            value: '1',
            label: '1',
          },
          {
            value: '22',
            label: '22',
          },
        ];
  }

});





let stateText = computed(() => JSON.stringify(state.data, null, '\t')  );
let schemaText = computed(() => JSON.stringify(schema.data, null, '\t')  );

</script>

<template>

<div class="fx view">
  <div class="left fx">
    <div class="code1">
      <label>states</label>
      <TextArea auto-size :value="stateText" @input=" Object.assign(state.data, JSON.parse($event.target?.value || '')); "></TextArea>
    </div>

    <div class="code2">
      <label>schema</label>
      <TextArea auto-size :value="schemaText" @input=" schema.data = JSON.parse($event.target?.value || ''); "></TextArea>
    </div>
  </div>

  <div class="right">
    <label style="display: block; font-weight: bold; margin-bottom: 20px;">表单</label>
    <DynamicForm :state="state.data" :schema="schema.data"/>
    
  </div>
</div>
</template>

<style scoped>
.view{
  width: 94vw;
}
.fx{
  display: flex;
}
.left{
  border-right:  1px solid #ccc;
  padding-right: 10px;
  width: 65%;
}
.code1{
  width: 40%;
}
.code2{
  width: 60%;
}
.right{
  width: 35%;
}
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
