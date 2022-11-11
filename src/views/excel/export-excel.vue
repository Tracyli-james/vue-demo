<template>
  <div class="app-container">

    <div>
      <FilenameOption v-model="filename" />
      <!-- <AutoWidthOption v-model="autoWidth" />
      <BookTypeOption v-model="bookType" /> -->
      <!-- <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;">
        <el-tag type="info">Documentation</el-tag>
      </a> -->
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0; margin-left: 10px;">渠道账号: </label>
        <el-input v-model="filename" placeholder="" style="width:345px;" prefix-icon="el-icon-document" />
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;margin-left: 10px;">支付方式: </label>
        <el-input v-model="filename" placeholder="" style="width:345px;" prefix-icon="el-icon-document" />
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;margin-left: 10px;">订单号: </label>
        <el-input v-model="filename" placeholder="" style="width:345px;" prefix-icon="el-icon-document" />
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;margin-left: 10px;">用户账号: </label>
        <el-input v-model="filename" placeholder="" style="width:345px;" prefix-icon="el-icon-document" />
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;margin-left: 10px;">时间: </label>
        <el-input v-model="filename" placeholder="" style="width:345px;" prefix-icon="el-icon-document" />
      </div>
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="handleDownload">
        搜索
      </el-button>
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="info" icon="el-icon-document" @click="handleDownload">
        重置
      </el-button>
    </div>

    <!-- const tHeader = ['时间', '订单', '用户账号', '游戏', '来源', '订单金额', '实付金额', '支付方式', '当前渠道', '当前渠道收益', '当前渠道净收益'] -->

    <el-table v-loading="listLoading" :data="list" element-loading-text="加载中..." border fit highlight-current-row>
      <el-table-column align="center" label="时间" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="用户账号" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="游戏" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column label="来源">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="订单金额">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="实付金额">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="支付方式">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="当前渠道">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="当前渠道收益">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="当前渠道净收益">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'
// options components
import FilenameOption from './components/FilenameOption'
import AutoWidthOption from './components/AutoWidthOption'
import BookTypeOption from './components/BookTypeOption'
import { orderlist } from '@/api/user'

export default {
  name: 'ExportExcel',
  components: { FilenameOption, AutoWidthOption, BookTypeOption },
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx'
    }
  },
  created() {
    this.fetchData()
    console.log('==-------==')
    this.listLoading = false
  },
  methods: {
    fetchData() {
      var that = this
      that.listLoading = true
      var tmpObj = {
        Authorization: 'Bearer ' + window.localStorage.getItem('LOGINTOKEN'),
        page: 1,
        pageSize: 20,
        userAccount: '2',
        end: '',
        start: ''
      }
      orderlist(tmpObj).then(response => {
        console.log('###################>>>')
        console.log(response)
        that.listLoading = false
      }).catch(_error => {
        that.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['时间', '订单', '用户账号', '游戏', '来源', '订单金额', '实付金额', '支付方式', '当前渠道', '当前渠道收益', '当前渠道净收益']
        const filterVal = ['时间', '订单', '用户账号', '游戏', '来源', '订单金额', '实付金额', '支付方式', '当前渠道', '当前渠道收益', '当前渠道净收益']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
