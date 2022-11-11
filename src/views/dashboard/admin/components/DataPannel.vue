<!-- eslint-disable vue/require-default-prop -->
<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-left" style="background: #5a7aa9;">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-right" style="background: #6a8abd;">
          <div class="card-panel-text-top">总用户：{{ indexdata.totalUserNum }}</div>
          <div class="card-panel-text-mid">今日注册：{{ indexdata.todayRegisterUserNum }}</div>
          <div class="card-panel-text-bot">昨日注册：{{ indexdata.yesterdayRegisterUserNum }}</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-left" style="background: #52a3c8;">
          <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-right" style="background: #5ab6df;">
          <div class="card-panel-text-top">总流水：{{ indexdata.totalTransactionalIncome }}</div>
          <div class="card-panel-text-mid">今日流水：{{ indexdata.todayTransactionalIncome }}</div>
          <div class="card-panel-text-bot">昨日流水：{{ indexdata.yesterdayTransactionalIncome }}</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-left" style="background: #41b6b6;">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-right" style="background: #4bcacc;">
          <div class="card-panel-text-top">总收入：{{ indexdata.totalIncome }}</div>
          <div class="card-panel-text-mid">今日收入：{{ indexdata.todayIncome }}</div>
          <div class="card-panel-text-bot">昨日收入：{{ indexdata.yesterdayIncome }}</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// import CountTo from 'vue-count-to'

export default {
  components: {
  },

  props: {
    indexdata: {
      type: Object,
      default: () => {
        return {
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
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 0px;

  .card-panel-col {
    margin-bottom: 20px;
  }

  .card-panel {
    height: 140px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #fff;
    background: #6a8abd;
    border-radius: 6px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    display: flex;

    .card-panel-left{
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card-panel-right{
      width: 80%;
      text-align: center;
      padding: 20px 15px;
      color: #fff;
    }

    .card-panel-text-top{
        font-size: 19px;
        font-weight: bold;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px dashed #cccccc;
    }

    .card-panel-text-mid{
        font-size: 17px;
        margin-bottom: 10px;
    }

    .card-panel-text-bot{
        font-size: 17px;
    }

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 36px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
