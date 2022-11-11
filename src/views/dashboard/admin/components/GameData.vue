<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div class="card-panel">
      <div class="card-panel-left">
        <img class="card-panel-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAA9CAYAAADs3jRMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0QTM1RTk3RjY1NzExRUE4NjNGRjdDM0ZGQzNCMzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0QTM1RTk4RjY1NzExRUE4NjNGRjdDM0ZGQzNCMzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTRBMzVFOTVGNjU3MTFFQTg2M0ZGN0MzRkZDM0IzNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTRBMzVFOTZGNjU3MTFFQTg2M0ZGN0MzRkZDM0IzNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7mLsN8AAAGPElEQVR42uyc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">
      </div>
      <div class="card-panel-right">
        <div class="card-panel-text-mid">昨日新增：10</div>
        <div class="card-panel-text-bot">今日新增：22</div>
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
  background-color: #c981ac;

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
    height: 80px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    .card-panel-img{
      width: 70px;
      height: 44px;
    }

    .card-panel-left{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card-panel-right{
      text-align: center;
      padding: 14px 10px;
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
