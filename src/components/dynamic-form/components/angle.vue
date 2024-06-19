<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";

let props = defineProps({
    value: {
        type: Number,
        default: 0
    },
    size: {
        type: Number,
        default: 50
    },
});
let emits = defineEmits({ input: {} });

const circle = ref();

let states = reactive({
    timer: 0,
    active: false,
    currentAngle: 0,
    rotation: 0,
    startAngle: 0,
    center: { x: 0, y: 0 },
    angleStyle: { transform: 'none' }
})

// console.log('se', Select)

// 对事件做处理，change事件转为 input，且造了结构为 e.target.value 方便上层访问
let change = (e: any) => {
    emits("input", { target: { value: e } })
};


const updateStyle = (angle) => {
    states.angleStyle = { transform: `rotate(${angle}deg)`, width: props.size + 'px', height: props.size + 'px' };
};

const getBoundingClientRect = () => {
    return circle.value.getBoundingClientRect();
};

const calcAngle = (x, y) => {
    return (180 / Math.PI) * Math.atan2(y, x);
};

const getAngleNumber = (val) => {
    const curVal = val % 360;
    return curVal > 0 ? curVal : 360 - -curVal;
};

const onMouseDown = (e) => {
    e.preventDefault();
    const rect = getBoundingClientRect(),
        t = rect.top,
        l = rect.left,
        h = rect.height,
        w = rect.width;
    states.center = {
        x: l + w / 2,
        y: t + h / 2
    };
    const x = e.clientX - states.center.x,
        y = e.clientY - states.center.y;
    states.startAngle = calcAngle(x, y);
    states.active = true;
};

const onMouseMove = (e) => {
    if (states.active) {
        e.preventDefault();
        rotate(e);
    }
};

const onMouseUp = (e) => {
    if (states.active) {
        e.preventDefault();
        stop();
    }
};

const rotate = (e) => {
    e.preventDefault();
    const x = e.clientX - states.center.x,
        y = e.clientY - states.center.y,
        d = calcAngle(x, y);
    states.rotation = d - states.startAngle;
    const angle = getAngleNumber(states.currentAngle + states.rotation);
    updateStyle(angle);
    clearTimeout(states.timer);
    states.timer = setTimeout(() => emitChange(angle), 100);
};

const emitChange = (angle) => {
    emits("input", { target: { value: Math.round(angle) } })
};

const stop = (e) => {
    clearTimeout(states.timer);
    states.currentAngle = getAngleNumber(
        (states.currentAngle += states.rotation)
    );
    emitChange(states.currentAngle);
    states.active = false;
};

onMounted(() => {
    states.currentAngle = props.angle || 0;
    updateStyle(props.angle || 0);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
});

</script>

<template>
    <div class="angle-picker" :style="states.angleStyle" @mousedown="onMouseDown">
        <div ref="circle" class="angle-rotater">
            <p class="angle-dot">&nbsp;</p>
        </div>
    </div>
</template>


<style scoped>
.angle-picker {
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
}

.angle-rotater {
    /* width: 50px;
    height: 50px; */
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 50%;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.75);
}

.angle-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: 3px;
    border-radius: 50%;
    background-color: #58595b;
    margin: 0;
    left: 50%;
    transform: translateX(-50%);
    cursor: grabbing;
}
</style>