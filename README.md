# antv-dynamic-form

基于[antv](https://www.antdv.com) 的动态表单。
在完整支持的表单组件下，拓展支持了颜色Color、旋转角度Angle、代码编辑Monaco、富文本编辑RichText、JSON编辑器、MarkDown编辑器

## 安装

`npm i --save antv-dynamic-form`

## 使用

```javascript
import DynamicForm from "antv-dynamic-form"
    
    let state = reactive({
    	foo: "test"
    });
    
    let schema = reactive({
    	fields:[{
          label: "输入框",
          path: "foo",
          component: "Input",
          rules:{ required: true, message: 'Please input your username!' }
        }]
    });
    
    <DynamicForm :state="state" :schema="schema"/>
```

## schema说明

label 字段标签名称
path 字段对应states绑定的数据路径
component  组件名称支持组件参考 组件列表
tips 组件提示信息
rules 组件验证规则
props 组件的自定义传入属性，例如设置component为Input，可参考ant Input有哪些props传值
get  自定义获取绑定值
set   自定义设置绑定值




## 组件列表

| 组件名  |  说明 | 
| ------------ | ------------ |
| Input  |  输入框，参考antv的 [Input](https://www.antdv.com/components/input-cn)  |
|  InputNumber  | 数字输入框，参考antv的 [InputNumber](https://www.antdv.com/components/input-cn)   |
|  Select  |  选择器，参考antv的 [Select](https://www.antdv.com/components/select-cn)  |
| Radio  | 单选框，参考antv的 [Radio](https://www.antdv.com/components/radio-cn)   |
|  Switch | 开关，参考antv的 [Switch](https://www.antdv.com/components/switch-cn)   |
|  Checkbox | 多选框 ，参考antv的 [Checkbox](https://www.antdv.com/components/checkbox-cn)|
|  Slider  |  滑动输入条，参考antv的 [Slider](https://www.antdv.com/components/slider-cn)  |
|  Cascader | 级联选择，参考antv的 [Slider](https://www.antdv.com/components/slider-cn)   |
|  AutoComplete | 自动完成，参考antv的 [AutoComplete](https://www.antdv.com/components/autocomplete-cn)   |
| TreeSelect  | 树选择，参考antv的 [TreeSelect](https://www.antdv.com/components/treeselect-cn)  |
| TimePicker  | 时间选择，参考antv的 [TimePicker](https://www.antdv.com/components/timepicker-cn)  |
| TimeRangePicker  | 时间范围选择，参考antv的 [TimePicker](https://www.antdv.com/components/timepicker-cn)  |
| DatePicker  | 日期选择，参考antv的 [DatePicker](https://www.antdv.com/components/datepicker-cn)  |
| RangePicker  | 日期范围选择，参考antv的 [DatePicker](https://www.antdv.com/components/datepicker-cn)  |
| Rate  | 评分，参考antv的 [Rate](https://www.antdv.com/components/rate-cn)  |
| Upload  | 上传，参考antv的 [Upload](https://www.antdv.com/components/upload-cn)  |
| Transfer  | 穿梭框，参考antv的 [Transfer](https://www.antdv.com/components/transfer-cn)  |
| Table  | 编辑表格（未完成），参考antv的 [Table](https://www.antdv.com/components/table-cn)  |
| List  | 可修改（增删）列表【容器】  |
| Group  | 子分组表单【容器】  |
| Color  | 颜色选择  |
| Angle  | 旋转按钮，用于角度选择0～360  |
| JsonEditor  | json专用编辑器  |
| Markdown  | Markdown可视化编辑器  |
| RichText  | 富文本可视化编辑器  |
| MonacoEditor  | 代码编辑器（vscode）  |

