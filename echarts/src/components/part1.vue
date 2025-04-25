<template>
    <div class="part">
        <div class="nav">
            <select v-model="selectOption">
                <option value="default">下拉菜单</option>
                <option value="信工系">信工系</option>
                <option value="法学系">法学系</option>
                <option value="金融系">金融系</option>
                <option value="艺术系">艺术系</option>
            </select>
            <div class="fig1">
                <!-- 环状图+表格 -->
                <pic1 :obj="obj" />
            </div>
        </div>
        <div class="content">
            <!-- 折线图 -->
            <pic2 :obj="obj" />
        </div>
    </div>
</template>

<script setup lang="js">
import pic1 from './pic1.vue'
import pic2 from './pic2.vue'
import '../utils/mock/mock.js'
import { reactive, ref, onBeforeMount, watch } from 'vue'
import axios from 'axios'

let list = reactive([])
let obj = reactive({})
const selectOption = ref('default')

//通过get获取后端信息
const allList = () => {
    axios.get('/api/user').then((res) => {
        list.value = res.data
    })
}

//挂载前获取
onBeforeMount(() => {
    allList()
})
//监听select选项 将信息通过props传给子组件
watch(selectOption, (newValue) => {
    let user = list.value.find((user) => user.name == newValue)
    if (user == undefined) {
        user = list.value.find((user) => user.name == '信工系')
    }
    obj = user
})


</script>

<style scoped>
.part {
    position: relative;
    width: 1280px;
    height: 650px;
    display: flex;
    flex-direction: column;
}

.nav {
    border: 2px solid rgb(201, 201, 201);
    flex: 1;
}

.content {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    border: 2px solid rgb(201, 201, 201);

}

#departments {
    position: absolute;
    margin: 20px;
    border: 2px solid rgb(201, 201, 201);
}

.fig1 {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
}
</style>