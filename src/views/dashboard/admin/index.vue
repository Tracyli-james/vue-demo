<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :span="17" style="">
        <DataPannel style="margin-bottom:0px;" :indexdata="indexData" @handleSetLineChartData="handleSetLineChartData" />
        <NoticeList style="margin-bottom:20px;" />
        <DataBoard />
      </el-col>
      <el-col :span="7" style="">
        <TuiGuang style="margin-bottom:20px;" />
        <YuMoney style="margin-bottom:20px;" />
        <CheckUser style="margin-bottom:20px;" />
        <GameData style="margin-bottom:20px;" />
        <ServicePanel style="margin-bottom:20px;" />
        <DownLoad style="margin-bottom:10px;" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TuiGuang from './components/TuiGuang'
import YuMoney from './components/YuMoney'
import DataPannel from './components/DataPannel'
import NoticeList from './components/NoticeList'
import CheckUser from './components/CheckUser'
import GameData from './components/GameData'
import ServicePanel from './components/ServicePanel'
import DownLoad from './components/DownLoad'
import DataBoard from './components/DataBoard'
// import request from '@/utils/request'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    TuiGuang,
    YuMoney,
    DataPannel,
    NoticeList,
    CheckUser,
    GameData,
    ServicePanel,
    DownLoad,
    DataBoard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      loading: false,
      loginForm: {
        username: 'admin',
        password: '112233'
      },
      indexData: {
        'totalUserNum': 0,
        'yesterdayRegisterUserNum': 0,
        'todayRegisterUserNum': 0,
        'totalTransactionalIncome': 0,
        'yesterdayTransactionalIncome': 0,
        'todayTransactionalIncome': 0,
        'totalIncome': 0,
        'yesterdayIncome': 0,
        'todayIncome': 0
      }
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    this.getHomePageData()
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    // GetHomeData API
    getHomePageData() {
      var that = this
      that.$store.dispatch('user/homepage', that.loginForm)
        .then(response => {
          console.log(response)
          that.indexData = response
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
