<!-- eslint-disable eqeqeq -->
<!-- eslint-disable vue/valid-v-bind -->
<template>
  <el-card class="box-card-component" style="margin-left:0px;">
    <div class="box-card-header">
      数据报表
    </div>
    <div class="btn-box">
      <div v-for="(item,index) of btnTitles" :key="index" :class="[indexSelect == index ? 'btn-panel-select' : 'btn-panel-normal']" @click="changeTab(item)">
        {{ item }}
      </div>
    </div>
    <div class="no-data-txt">暂无数据</div>
    <!-- <div style="margin-bottom: 8px;">
      <div class="card-right" style="color:gray;">
        <div class="list-left-box">
          <svg-icon icon-class="email" class-name="card-panel-icon" />
          <div class="list-left-title">【推广通知】</div>
          <div>《绝世仙王》违规行为及判罚规则说明（重要）</div>
        </div>
        <div>2022-10-29 19:00:00</div>
      </div>
    </div>
    <div style="margin-bottom: 8px;">
      <div class="card-right" style="color:gray;">
        <div class="list-left-box">
          <svg-icon icon-class="email" class-name="card-panel-icon" />
          <div class="list-left-title">【推广通知】</div>
          <div>《御剑决（零氪送红包）》上线通知</div>
        </div>
        <div>2022-10-29 10:00:00</div>
      </div>
    </div>
    <div style="margin-bottom: 8px;">
      <div class="card-right" style="color:gray;">
        <div class="list-left-box">
          <svg-icon icon-class="email" class-name="card-panel-icon" />
          <div class="list-left-title">【推广通知】</div>
          <div>《英灵幻想》上线通知</div>
        </div>
        <div>2022-10-29 08:00:00</div>
      </div>
    </div> -->
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
// import PanThumb from '@/components/PanThumb'
// import Mallki from '@/components/TextHoverEffect/Mallki'

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
      btnTitles: ['用户流水', '活跃用户', '新增用户', '付费用户'],
      indexSelect: 0
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  methods: {
    changeTab(item) {
      console.log(item)
      // eslint-disable-next-line eqeqeq
      if (item == '用户流水') {
        this.indexSelect = 0
      // eslint-disable-next-line eqeqeq
      } else if (item == '活跃用户') {
        this.indexSelect = 1
      // eslint-disable-next-line eqeqeq
      } else if (item == '新增用户') {
        this.indexSelect = 2
      } else {
        this.indexSelect = 3
      }
    }
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
  .box-card-header {
    // padding-top: 20px;
    // padding-left: 15px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #ccc;
  }
  .btn-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .btn-panel-select{
    color: white;
    background-color: #52a3c8;
    margin-right: 15px;
    padding: 8px 12px;
    border-radius: 2px;
  }
  .btn-panel-normal{
    color: #000;
    background-color:#f2f2f2;
    margin-right: 15px;
    padding: 8px 12px;
    border-radius: 2px;
  }
  .no-data-txt{
    margin-top: 25px;
    margin-bottom: 10px;
  }
  .card-right{
    font-size: 15px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    border-bottom: 1px dashed #cccccc;
    height: 44px;
  }

  .list-left-box{
    display: flex;
    align-items: center;
  }

  .list-left-title{
    color: #3e9eff;
  }

  .card-panel-icon{
    color: #333;
    font-size: 15px;
  }

  .btn-copy{
    font-size: 12px;
    padding: 6px 8px;
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
