<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      账户余额
    </div>
    <div style="margin-bottom: 8px;">
      <div class="card-right" style="color:gray;">
        <svg-icon icon-class="money" class-name="card-panel-icon" />
        <div>平台币余额</div>
        <div>0.00</div>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          充值
        </el-button>
      </div>
    </div>
    <div style="margin-bottom: 8px;">
      <div class="card-right" style="color:gray;">
        <svg-icon icon-class="shopping" class-name="card-panel-icon" />
        <div>提 现 余 额</div>
        <div>0.00</div>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          提现
        </el-button>
      </div>
    </div>
    <div style="margin-bottom: 8px;">
      <div class="card-right" style="color:gray;">
        <svg-icon icon-class="documentation" class-name="card-panel-icon" />
        <div>冻 结 余 额</div>
        <div>0.00</div>
        <el-button class="btn-copy" style="visibility: hidden;" type="primary" @click.prevent.stop="guide">
          按钮
        </el-button>
      </div>
    </div>
    <!-- <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="name" label="fruitName" width="180" />
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">
        <template slot-scope="scope">
          {{ scope.row[fruit] }}<i class="el-icon-s-finance" /><svg-icon icon-class="documentation" />
        </template>
      </el-table-column>
    </el-table> -->
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
      formTheadOptions: ['apple', 'banana', 'orange']
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
    justify-content:space-between;
    border-bottom: 1px dashed #cccccc;
    height: 44px;
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
