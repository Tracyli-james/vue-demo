<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div class="card-panel">
      <div class="right-panel-service">
        <img class="right-panel-service-img" src="https://static.sy12306.com/upload/qrcode/28a3cb6ad1f5a398809a72ea3c21c5bf.png" alt="">
        <div class="right-panel-service-txt">推广APP下载</div>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          立即下载
        </el-button>
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
  background-color: #fdb15f;

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
