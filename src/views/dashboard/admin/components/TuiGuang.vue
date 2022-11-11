<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      推广地址
    </div>
    <div style="margin-bottom: 28px; font-size: 14px;">
      <div style="color:gray; position: relative;">H5链接：
        <div style="color:darkseagreen">http://139997.m.ssyl168.com</div>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          复制信息
        </el-button>
      </div>
    </div>
    <div style="font-size: 14px;">
      <div style="color:gray; position: relative;">APP链接：
        <div style="color:darkseagreen;">http://page.ssyl168.com/active/gameAndDown?agent_id=139997</div>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          复制信息
        </el-button>
      </div>
    </div>
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
      }
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
  .btn-copy{
    position: absolute;
    top: 0px;
    right: -10px;
    padding: 8px 10px;
    font-size: 14px;
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
