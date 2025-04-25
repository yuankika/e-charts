<template>
    <e-charts class="chart" :option="option" />
</template>

<script setup lang="ts">
import { ref,watch } from 'vue'
//接受父组件数据
let props = defineProps({
    obj: {
        type: Object,
        required: true
    }
})
//折线图
const option = ref({
    title: {
        text: '系部巡查折线图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['本系巡率', '学院平均巡查率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['一月', '二月', '三月', '四月', '五月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '本系巡率',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '学院平均巡查率',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290]
        }]
});
//监听数据变化
watch(props, () => {
    const newData = props.obj.patrol
    const newData1 = props.obj.avg
    option.value.series[0].data = newData
    option.value.series[1].data = newData1
})

</script>

<style scoped></style>