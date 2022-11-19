<!-- eslint-disable no-mixed-spaces-and-tabs -->
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
  <div class="app-container">
    <el-card class="top-label">
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;">来源</label>
        <el-select v-model="listQuery.importance" placeholder="请选择" clearable style="width: 180px" class="filter-item">
          <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
        </el-select>
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0; margin-left: 10px;">渠道账号</label>
        <el-select v-model="listQuery.qudao" placeholder="请选择" clearable style="width: 180px" class="filter-item">
          <el-option v-for="item in qudaolist" :key="item" :label="item" :value="item" />
        </el-select>
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;margin-left: 10px;">支付方式</label>
        <!-- <el-input v-model="temp.zhifu" placeholder="" style="width:245px;" prefix-icon="el-icon-document" /> -->
        <el-select v-model="listQuery.zhifu" placeholder="请选择" clearable style="width: 200px" class="filter-item">
          <el-option v-for="item in zhifulist" :key="item" :label="item" :value="item" />
        </el-select>
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;margin-left: 10px;">订单号</label>
        <el-input v-model="temp.dingdan" placeholder="请输入渠道ID" style="width:180px;" />
      </div>
      <div style="display:inline-block; margin-top: 12px;">
        <label class="radio-label" style="padding-left:0;">用户账号</label>
        <el-input v-model="temp.zhanghu" placeholder="请输入用户账号" style="width:180px;" />
      </div>
      <div style="display:inline-block;">
        <label class="radio-label" style="padding-left:0;padding-top: 20px;">时间</label>
        <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="请选择开始时间" />
        <span>  -  </span>
        <el-date-picker v-model="temp.timestampend" type="datetime" placeholder="请选择结束时间" />
      </div>
      <el-button :loading="downloadLoading" style="margin:0 0 20px 30px;" type="primary" @click="handleSearch">
        搜索
      </el-button>
      <el-button :loading="downloadLoading" style="margin:0 0 20px 10px;" type="info" @click="handleClear">
        重置
      </el-button>
    </el-card>
    <el-card class="middle">
      <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
        <el-table-column width="155px" align="center" label="时间">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}</span>
          </template>
        </el-table-column>

        <el-table-column width="155px" align="center" label="订单">
          <template slot-scope="scope">
            <span>{{ scope.row.orderNo }}</span>
          </template>
        </el-table-column>
        <el-table-column width="110px" align="center" label="用户账号">
          <template slot-scope="scope">
            <span>{{ scope.row.userAccount }}</span>
          </template>
        </el-table-column>
        <el-table-column width="230px" align="center" label="游戏">
          <template slot-scope="scope">
            <span>{{ scope.row.game }}</span>
          </template>
        </el-table-column>
        <el-table-column width="100px" align="center" label="来源">
          <template slot-scope="scope">
            <span>{{ scope.row.source }}</span>
          </template>
        </el-table-column>
        <el-table-column width="90px" align="center" label="订单金额">
          <template slot-scope="scope">
            <span>{{ scope.row.payMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column width="90px" align="center" label="实付金额">
          <template slot-scope="scope">
            <span>{{ scope.row.payMoney }}</span>
          </template>
        </el-table-column>
        <el-table-column width="150px" align="center" label="支付方式">
          <template slot-scope="scope">
            <span>{{ scope.row.payMethod }}</span>
          </template>
        </el-table-column>
        <el-table-column width="100px" align="center" label="当前渠道">
          <template slot-scope="scope">
            <span>{{ scope.row.channel || '--' }}</span>
          <!-- <span>--</span> -->
          </template>
        </el-table-column>
        <el-table-column width="110px" align="center" label="当前渠道收益">
          <template slot-scope="scope">
            <span>{{ scope.row.channelIncome }}</span>
          </template>
        </el-table-column>
        <el-table-column width="120px" align="center" label="当前渠道净收益">
          <template slot-scope="scope">
            <span>{{ scope.row.channelPureIncome }}</span>
          </template>
        </el-table-column>
        <el-table-column width="120px" align="center" label="下级渠道">
          <template slot-scope="scope">
            <span>{{ scope.row.nextChannel }}</span>
          </template>
        </el-table-column>
        <el-table-column width="120px" align="center" label="下级渠道收益">
          <template slot-scope="scope">
            <span>{{ scope.row.nexPureIncome }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <div v-show="total>0" class="pagination-holder">
      <div class="pagination-total">共{{ total }}条</div>
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.pageSize" @pagination="getList" />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { orderlist } from '@/api/user'

export default {
  name: 'ArticleList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      allData: {
        'total': 100,
        'items': [
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 1,
            'timestamp': 692586935888,
            'author': 'William',
            'reviewer': 'Sandra',
            'title': 'Prycw Ybfse Cdqud Wfmitqbn Vumfbwknd Kpgidsb Nhzjh Vlujdmn Hrgryd Atl',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 73.25,
            'importance': 1,
            'type': 'EU',
            'status': 'published',
            'display_time': '2011-03-02 21:26:40',
            'comment_disabled': true,
            'pageviews': 1881,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 2,
            'timestamp': 900772565029,
            'author': 'Christopher',
            'reviewer': 'Nancy',
            'title': 'Cstkpcgxb Rxftpd Ctjguivsk Xqslaxp Eerpc Jjhwtuj Ihlet Drjgyrgzs',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 15.42,
            'importance': 2,
            'type': 'JP',
            'status': 'draft',
            'display_time': '2021-04-18 18:58:52',
            'comment_disabled': true,
            'pageviews': 308,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 3,
            'timestamp': 144580702669,
            'author': 'John',
            'reviewer': 'Edward',
            'title': 'Ukkx Jsevpygvhc Aqqzmq Jwcgzduagm Bwvccvv Yfk',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 22.26,
            'importance': 1,
            'type': 'US',
            'status': 'draft',
            'display_time': '1994-07-19 10:27:48',
            'comment_disabled': true,
            'pageviews': 2820,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 4,
            'timestamp': 883596340233,
            'author': 'Nancy',
            'reviewer': 'Frank',
            'title': 'Fugnlh Wfobpqvh Wir Dvgkqpyn Hbrqx Ycedyzv Nggmtxu Jinerxjcm Qftydmwdrq',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 13.56,
            'importance': 3,
            'type': 'EU',
            'status': 'published',
            'display_time': '2011-02-09 22:58:05',
            'comment_disabled': true,
            'pageviews': 2421,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 5,
            'timestamp': 488714171658,
            'author': 'Jose',
            'reviewer': 'Matthew',
            'title': 'Jqermba Ttuqdncj Mlifglzkcn Wgpddxu Ytpqdpg',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 12.62,
            'importance': 2,
            'type': 'EU',
            'status': 'published',
            'display_time': '1987-10-27 09:58:54',
            'comment_disabled': true,
            'pageviews': 3455,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 6,
            'timestamp': 1422293310788,
            'author': 'Jason',
            'reviewer': 'Amy',
            'title': 'Yrvmoyo Iuw Pud Oevvgj Kwxcqcupbb Nrqjnfxpk Ogomxox Xrjhqnqi',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 32.11,
            'importance': 2,
            'type': 'JP',
            'status': 'published',
            'display_time': '2003-05-14 05:45:59',
            'comment_disabled': true,
            'pageviews': 1748,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 7,
            'timestamp': 850137124017,
            'author': 'Sarah',
            'reviewer': 'Maria',
            'title': 'Nwqwu Nslbqltu Kotmidbv Gckuzi Xgiudyu Oxbpnalykp Gwypst Oumqin',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 31.73,
            'importance': 2,
            'type': 'JP',
            'status': 'draft',
            'display_time': '2018-07-23 18:01:12',
            'comment_disabled': true,
            'pageviews': 2376,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 8,
            'timestamp': 1603355769890,
            'author': 'Richard',
            'reviewer': 'Cynthia',
            'title': 'Wvuf Dvecbaie Lvxy Ark Dryoceupx Mjujkhls',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 35.45,
            'importance': 2,
            'type': 'US',
            'status': 'published',
            'display_time': '1985-11-25 05:52:52',
            'comment_disabled': true,
            'pageviews': 3977,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 9,
            'timestamp': 479219080354,
            'author': 'Christopher',
            'reviewer': 'Brenda',
            'title': 'Yuprpqmn Plmagp Loqj Puolk Uldhhgpj Irrbnai Pcvbcijug Wce',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 35.56,
            'importance': 2,
            'type': 'US',
            'status': 'published',
            'display_time': '2011-10-03 23:19:59',
            'comment_disabled': true,
            'pageviews': 2314,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          },
          {
            'createTime': '692586935888',
            'game': '战场荣耀（英雄超变）',
            'orderMoney': 120,
            'orderNo': 'GZ692586935888',
            'payMethod': '米花微信H5支付',
            'payMoney': 0,
            'source': 'DUKANG',
            'userAccount': 'bigtree',
            'id': 10,
            'timestamp': 1556571296655,
            'author': 'Gary',
            'reviewer': 'Linda',
            'title': 'Ddnynfb Lbpw Iyvl Pfmshw Pil Qgsxanc',
            'content_short': 'mock data',
            'content': '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>',
            'forecast': 31.61,
            'importance': 3,
            'type': 'JP',
            'status': 'draft',
            'display_time': '1989-11-01 13:55:25',
            'comment_disabled': true,
            'pageviews': 4768,
            'image_uri': 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3',
            'platforms': [
              'a-platform'
            ]
          }
        ]
      },
      list: null,
      total: 0,
      listLoading: true,
      current: 1,
      listQuery: {
        // Authorization: 'Bearer ' + window.localStorage.getItem('LOGINTOKEN'),
        userAccount: '2',
        end: '',
        start: '',
        page: 1,
        pageSize: 10,
        game: '',
        orderMoney: '',
        orderNo: '',
        importance: '', // 来源
        zhifu: ''
      },
      timestamp: '692586935888',
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: '',
        timestampend: '',
        title: '',
        type: '',
        status: 'published',
        qudao: '',
        zhifu: '',
        dingdan: '',
        zhanghu: ''
      },
      downloadLoading: false,
      importanceOptions: ['用户', '渠道'],
      qudaolist: ['houtaiyanshi'],
      zhifulist: ['支付宝支付', '微信支付', '平台币支付']
    }
  },
  created() {
    this.getList()
    // this.list = this.allData.items
    // this.total = this.allData.total
    this.listLoading = false
  },
  methods: {
    handleSearch() {
      this.downloadLoading = true
      this.getList()
    },
    handleClear() {
      this.downloadLoading = false
      this.listQuery.importance = ''
      this.listQuery.qudao = ''
      this.listQuery.zhifu = ''
      this.temp.dingdan = ''
      this.temp.zhanghu = ''
      this.temp.timestamp = ''
      this.temp.timestampend = ''
    },
    getList() {
      var that = this
      that.listLoading = true
      that.listQuery.start = that.temp.timestamp
      that.listQuery.end = that.temp.timestampend
      orderlist(this.listQuery).then(response => {
        console.log('###################>>>')
        console.log(response.records)
        that.list = response.records
        that.total = response.total
        that.listLoading = false
        that.downloadLoading = false
      }).catch(_error => {
        that.listLoading = false
        that.downloadLoading = false
      })
    }
  }
}
</script>

<style scoped>

.app-container{
  padding: 30px;
}
.top-label{
  margin-top: 10px;
  /* padding: 20px; */
}
.middle{
  border: none;
  margin-top: 10px;
}
.pagination-holder{
  background-color: white;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-items: center;
  text-align: right;
  padding-left: 100px;
  /* width: 100%; */
}
.pagination-total{
  text-align: right;
  width: 440px;
  line-height: 75px;
}

.radio-label {
  margin-left: 20px;
  font-size: 11px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}

</style>

<style scoped>

.el-button--primary {
  font-size: 10px;
  font-weight: bold;
  width: 56px;
  height: 32px;
}

.el-button--info {
  font-size: 10px;
  font-weight: bold;
  width: 56px;
  height: 32px;
}

</style>
