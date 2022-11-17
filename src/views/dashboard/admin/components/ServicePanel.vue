<template>
  <el-card class="box-card-component">
    <div class="card-panel">
      <div class="right-panel-service">
        <img class="right-panel-service-img" src="http://pro.ssyl168.com/static/img/phone.53d4e104.png" alt="">
        <div class="right-panel-service-txt">客服QQ：954824888</div>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      },
      tableData: [
        {
          name: 'fruit-1',
          apple: 'apple-10',
          banana: 'banana-10',
          orange: 'orange-10'
        },
        {
          name: 'fruit-2',
          apple: 'apple-20',
          banana: 'banana-20',
          orange: 'orange-20'
        }
      ],
      key: 1, // table key
      formTheadOptions: ['apple', 'banana', 'orange'],
      title: ''
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  border-radius: 10px;
  background-color: #fc8575;
  box-shadow: 0 5px 0 #e27869;
  border: none;

  .right-panel-service{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .right-panel-service-img{
    width: 80px;
    height: 80px;
    margin-bottom: 4px;
  }

  .right-panel-service-txt{
    font-size: 17px;
  }

  .box-card-header {
    padding-top: 20px;
    padding-left: 15px;
    padding-bottom: 12px;
    // border-bottom: 1px dashed #cccccc;
  }
  .card-right{
    font-size: 15px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    height: 44px;
  }
  .btn-copy{
    font-size: 14px;
    padding: 8px 16px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 15px;
  }

  .card-panel {
    cursor: pointer;
    font-size: 12px;
    overflow: hidden;
    color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    .card-panel-img{
      width: 80px;
      height: 40px;
    }

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
  }

  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    ::v-deep .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
}
</style>
