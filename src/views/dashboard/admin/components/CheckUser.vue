<template>
  <el-card class="box-card-component">
    <div class="box-card-header">
      用户信息快捷查看
    </div>
    <el-input v-model="input" class="box-card-input" type="text" maxlength="20" placeholder="请输入用户账号" size="small" />
    <div style="margin-bottom: 8px;">
      <div class="card-right" style="color:gray;">
        <el-button class="btn-copy" type="info" @click.prevent.stop="guide">
          重置
        </el-button>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          确认
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
      input: ''
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

   ::v-deep .el-input__inner {
    text-align: center;

    &::placeholder {
      color: #c1c4cb;
    }
  }

  .box-card-header {
    // padding-top: 20px;
    // padding-left: 15px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #cccccc;
  }

  .box-card-input{
    margin-top: 20px;
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
