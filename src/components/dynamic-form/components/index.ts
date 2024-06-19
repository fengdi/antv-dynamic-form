import Input from "./input";  //输入框
import InputNumber from "./input-number.vue"; //数字输入
import Select from "./select.vue";  //下拉选择
import List from "./list.vue";      //动态增减列表
import Radio from "./radio.vue";    //单选
import Group from "./group.vue";    //子分组
import Switch from "./switch.vue";   //切换开关
import TimePicker from "./time-picker.vue";  //时间选择
import TimeRangePicker from "./time-range-picker.vue";  //时间范围选择
import DatePicker from "./date-picker.vue";    //日期选择
import RangePicker from "./range-picker.vue";   //日期范围选择
import Checkbox from "./checkbox.vue";         //勾选
import Slider from "./slider.vue";            //滑条
import Cascader from "./cascader.vue";         //集联
import TreeSelect from "./tree-select.vue";     //树形选择
import Color from "./color.vue";         //颜色选择 不支持透明度
import Color2 from "./color2.vue";       //颜色选择2
//https://elementui.github.io/region-picker/ 渐变选择

import Upload from "./upload.vue";        //上传
import AutoComplete from "./auto-complete.vue";  //自动完成（搜索）
import MonacoEditor from "./monaco-editor.vue";   //代码编辑器
import JsonEditor from "./json-editor.vue";   //json编辑器
import VxeTable from "./vxe-table.vue"; // 表格 未完全适配
import Table from "./table.vue";  //表格 未完全适配
import Angle from "./angle.vue";      //旋转
import RichText from "./rich-text.vue";  //富文本
import Markdown from "./markdown.vue";  //markdown
import Rate from "./rate.vue";  //评分
import Transfer from "./transfer.vue";  //评分

export default {
    Input,
    InputNumber,
    Select,
    List,
    Group,
    Radio,
    Switch,
    TimePicker,
    TimeRangePicker,
    DatePicker,
    RangePicker,
    Checkbox,
    Slider,
    Cascader,
    TreeSelect,
    Color,
    Color2,
    Upload,
    AutoComplete,
    MonacoEditor,
    JsonEditor,
    VxeTable,
    Table,
    Angle,
    RichText,
    Markdown,
    Rate,
    Transfer
} as any;