<template>
  <div id="main">
    <e-charts class="chart" :option="option" />

    <div class="chartName">{{ props.obj.name }}</div>
  </div>
  <div class="table">
    <div class="left"><a>本系当日巡查详细</a></div>
    <div class="right">
      <div class="nav">
        <a>巡查课程名</a>
        <a>被巡查教师名</a>
        <a>登记人名称</a>
        <a>登记时间</a>
      </div>
      <div class="content">
        <ul id="className">
        </ul>
        <ul id="tName">
        </ul>
        <ul id="pName">
        </ul>
        <ul id="time">
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, watch} from 'vue';

//接受父组件信息
let props = defineProps({
  obj: {
    type: Object,
    required: true
  }
})

//监听props并更新页面数据
watch(props, () => {
  let u1l = props.obj.className.length
  const u1 = document.getElementById('className')
  const u2 = document.getElementById('tName')
  const u3 = document.getElementById('pName')
  const u4 = document.getElementById('time')
  u1.innerHTML = ''
  u2.innerHTML = ''
  u3.innerHTML = ''
  u4.innerHTML = ''
  for (let i = 0; i < u1l; i++) {
    const l1 = document.createElement('li')
    l1.textContent = props.obj.className[i]
    u1.appendChild(l1)
  }
  for (let i = 0; i < u1l; i++) {
    const l1 = document.createElement('li')
    l1.textContent = props.obj.tName[i]
    u2.appendChild(l1)
  }
  for (let i = 0; i < u1l; i++) {
    const l1 = document.createElement('li')
    l1.textContent = props.obj.pName[i]
    u3.appendChild(l1)
  }
  for (let i = 0; i < u1l; i++) {
    const l1 = document.createElement('li')
    l1.textContent = props.obj.time[i]
    u4.appendChild(l1)
  }
  const newData = props.obj.patrol
  const newData1 = props.obj.avg
  option.value.series[0].data[0] = {value:newData,name: '当日本院巡查率'}
  option.value.series[0].data[1] = {value:newData1,name: '单日学院平均巡查率'}

})


//环形饼图
const option = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '本系巡率' },
        { value: 735, name: '学院平均巡查率' },
      ]
    }
  ]
});


</script>

<style scoped>
#main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  flex: 1;
  position: relative;
}


.table {
  width: 400px;
  height: 280px;
  position: relative;
  display: flex;
  flex: 2;
  left: -20px;
  border: 2px solid rgb(201, 201, 201);
}

.left {
  flex-direction: column;
  flex: 1;
  border-right: 2px solid rgb(201, 201, 201);
  writing-mode: vertical-rl;
  text-align: center;
  font-size: 20px;
  line-height: 80px;
  letter-spacing: 10px;
}

.right {
  display: flex;
  flex-direction: column;
  flex: 10;
}

.nav {
  flex: 1;
  line-height: 40px;
  border-bottom: 2px solid rgb(201, 201, 201);
}

.nav a {
  margin: 0 50px;
}

.content {
  flex: 10;
  display: flex;
  flex-direction: row;
}

.content>ul {
  flex: 1;
  list-style-type: none;
}

.chartName {
  font-size: 20px;
  position: absolute;
}
</style>