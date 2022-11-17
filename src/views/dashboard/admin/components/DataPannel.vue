<!-- eslint-disable vue/require-default-prop -->
<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel" style="box-shadow: 0 5px 0 #4f6d9f">
        <div class="card-panel-left" style="background: #5a7aa9;">
          <!-- <svg-icon icon-class="forcard" class-name="card-panel-icon" /> -->
          <img class="card-panel-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1N0EzNEExRjY1NjExRUE4RDJCQTYwNERBQThGOEU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1N0EzNEEyRjY1NjExRUE4RDJCQTYwNERBQThGOEU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjU3QTM0OUZGNjU2MTFFQThEMkJBNjA0REFBOEY4RTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjU3QTM0QTBGNjU2MTFFQThEMkJBNjA0REFBOEY4RTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7PUrgTAAADJklEQVR42uyZb2jNURjH70WyLnMXjUYhtHiBJJncWW1Rpsktr6bMC0leUFJs8kK8mPJ6pcRLloQktLT7Yv5Ml4YXQ/4WtvJnWdxt7P58Tz2r03V/955zfuc5P5anPnX7/Xl+53vPec5zznOinudFxoNNiIwTm8TsfznYDsrAdXCJ7UtiaDFx2vvTUqCU43vRgDGyBVSBueA7uAq6wUVQ7fPOE7CMfteBhWAIpMFT1z3SAHq9/DboFbcO0J3nehpUmbTJRESjx29HuIfWVPAZTHYwEa0DXVzT72ZHIoQd4Mwj8xymhsWcQjodCnnFKeQ+uO1ISCv3EmUHeM0s4hi44yKPLAEfmabePSZtMumRBGin9ROHNYA1ui/p5pFacBNMdBAjO8E5jhipBx2ORAg7C3bbjpFaxfHdpxEL/YrP1dhaa81R/OB+MAU0Ka6lSsBqkFV4vtqGkHuKQpqkd5oLPHdKeq5cUUgGxIMI2acxVEZBfRExl6X7FeCdhv+UqZAywzywUfJxSLreLl2vBB8MfDeaCDlvKam1gjZL+5kh3f1IOejXnC6/gPdgGvgFkrStlS1ORQixNR6g/c0C3dynU0VJajp/CRYp5CjR+LU5165RjmKpa23Q9DOcx1dW8d2fNrKn39B6kecfLmaiitKXc+0brZtGKFMncu7HwGzOoRU3+FNiVNrx6/VVPvdZS6a29uWjYhVEv7+GUTL9AUo1h9Uu0CP9CVGavUak1ex0KXaGafZqs9FTfjHSI1UDVUyUiGYatkF31tKKkbeaQmbQ1jQtfUz4HgSHqWf2ghXUE2PDbhbYxDlrHQctloZvCdV2e0GljTbrBPsVSyIGpGB/E8ZBzwPw/F866Cm01T1pwX9WiomMBX+fTIScoWANYjHL5dajplWU9RbKpDcoLyUD+kmBmiDloGZwIuQQEEOqotACU7Wu9YhyQBgmenMleGajriX2EHdDEpIoJkJHSIbEtEizELeJg1Vx0PqQq4gtCgedjOeHj8E2F4ehY9SBC5YFHAzrnD1CO8mtNDUuBfM1lv6iOHGL6ArSCBtC/volyn8hYdhvAQYAIC61dO1hcW8AAAAASUVORK5CYII=" alt="">
        </div>
        <div class="card-panel-right" style="background: #6a8abd;">
          <div class="card-panel-text-top">总用户：{{ indexdata.totalUserNum }}</div>
          <div class="card-panel-text-mid">今日注册：{{ indexdata.todayRegisterUserNum }}</div>
          <div class="card-panel-text-bot">昨日注册：{{ indexdata.yesterdayRegisterUserNum }}</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel" style="box-shadow: 0 5px 0 #4a93b3">
        <div class="card-panel-left" style="background: #52a3c8;">
          <!-- <svg-icon icon-class="shopping" class-name="card-panel-icon" /> -->
          <img class="card-panel-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RDZFMzRBRjY1NjExRUFBN0VDOTNCODE4Mzg4MTU1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1RDZFMzRCRjY1NjExRUFBN0VDOTNCODE4Mzg4MTU1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjVENkUzNDhGNjU2MTFFQUE3RUM5M0I4MTgzODgxNTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjVENkUzNDlGNjU2MTFFQUE3RUM5M0I4MTgzODgxNTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4l4Oc2AAADKElEQVR42tyZSWgUQRSGe8ZMnAmYxN24jQuIC4pE4w5C1JsRiaDxFj0EQUEMKh4868nlIIgX0ZMgHlxuIuJBxQVRjMZBENdEIYTomCjORNv/4VPapjJd1V3V050fPjLdqa7uv2t7rzph27YVUDWgCawF80GSzxfBM3ALXAE/LINKBDAyFewDrWCMR9kucBYcB5993GsHWAQKIAX6uK6BfyXIiA/awHdbXT1gi4/7DQrqanCWSfp4O0fBGZD2ce04cIlbUkVvBeeK/x0pvpl2W59aFO6bE1w/zVlGZYzUg0eax+hM8EZwfg9odhyvABlXmYegn3+/VDHyCszSbOQOWCM4Tw+5VKUi2THSbMAEaTW/bdEsp6IeWSO7DS4BororFeuolDEyaojm16X1YITrXEp1UZYZI9T8ty2zcg/6eWAJ+Mnd/xiY6LrmMA1yngTeyUx9TbZ5Lfd4hk7BNbWqC2LKMq+RHv+fIDg3V3XW6g/BSK9ErOZWn/OgQuImrw2bGATdHmUawXSOoGlG++J+LtkFkQZi1pCRe2Bl0Epk15GLBlvkQpj5yBTwwYAJimBrwbewWqSLw3fd2qvDhJ8M8SlYqMnEDbChXKnuWNA5xLyuohxYAH7pMqKaIfZyXvI4wD1vggadJvwY+TteyMwRxf5NL+EgWGdikU0E3A6iLrYTbOZdDncWN8CtR9P3eZCP4naQW+N5Ikg7QpsOdygRByNlVdIaJho2RioUy2d46qQdjjlgsiNfKdVHE/y3wLNejndKHnAWGJqRZaANbBSknEH0HlwFp8HzQDV5pJh14Jwdjk6BGp970SWN0GZz3g5X3aBRp5FDdnnVqsPIATsa2qpixL0gUlh9PUKzKn0Be6G6sldxYJeOkBH6LjJDdUE8ETETFm94tKu0yCTwMaKL9ldO6IoyLbIrwtEHbaJvk+1aLREPpbbLdK2sJf78FSXlOd8plGqR+hgEt9UcpJbsWnUxidSzXkYyMTEy2stIVUyMVHsZ6YiJkSdeRi6DkxE2QN9E9oO7srHWYrAJrAKzeXClQn5oephP1p+df9qavQ+uWRJfAn4LMAAhBXziYQb0FAAAAABJRU5ErkJggg==" alt="">
        </div>
        <div class="card-panel-right" style="background: #5ab6df;">
          <div class="card-panel-text-top">总流水：{{ indexdata.totalTransactionalIncome }}</div>
          <div class="card-panel-text-mid">今日流水：{{ indexdata.todayTransactionalIncome }}</div>
          <div class="card-panel-text-bot">昨日流水：{{ indexdata.yesterdayTransactionalIncome }}</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="8" class="card-panel-col">
      <div class="card-panel" style="box-shadow: 0 5px 0 #38a4a6">
        <div class="card-panel-left" style="background: #41b6b6;">
          <!-- <svg-icon icon-class="money" class-name="card-panel-icon" /> -->
          <img class="card-panel-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAYAAABT9ym6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY1MTlCOTEwRjY1NjExRUFCRjkzRUVBQzZFMkQwREFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY1MTlCOTExRjY1NjExRUFCRjkzRUVBQzZFMkQwREFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjUxOUI5MEVGNjU2MTFFQUJGOTNFRUFDNkUyRDBEQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjUxOUI5MEZGNjU2MTFFQUJGOTNFRUFDNkUyRDBEQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pfClyAAACkUlEQVR42mL8//8/w3AATAzDBLAQkNcF4kogVgJiZiD+R0e3MULp10A8C4g34lWMJ2lpAvG1QRTosUC8hByPrATisEHkEVDMiJGTR+QGWTYQJDezfx9kHvlBrkcGW7n8n17F7wMgLgfidQTUvYCqW0nP4pcUYAPET6FsUHGZikXNIyA2gWZcEFAAYvPBViEKIbHTgHg2mvxtIDZG8gQIsFIv4QGLXxx473/SwEcgdkUzIw8qdwCI2ZDEOYD4EInmf8LjVqp6BAZc0MyJBGJONE9cIsNcvB6hRVtrNxAXICXb5UhFOShpfYU2fRgGY2b/AsSboI4EVVyWQLwIiN+hqbMF4n1A/BDaljKE4kGRR34BsQYW/Uz4kgISPjJYktYfIL6BRZzYlvK9wZK0OKFN7BlA/AtN7hwQv4eyraBqkYEpEEdSpc2Pp/W7F4idKDTfH5p3qNHk+QzEfPSo2R8D8TckM0HJ9iVawCgD8V9osgNldpXBVGqBHJUILaXwARcsYiCP7YL2QAe8ifKDCE/gAneh9c6gyexV0Mz+G03uGzQpgQA3loAD1SEBgy2zIzsaBryB+DCUfR6alJAB72DM7FxYxNiR2NIkOnxQjWshl1pvhvIAnS1SX0V2IAfoKAVToZ6xAGKeoewREIigx8gEuR45C8QfaOAeUNfXjl4eaQDiRhoGbip08ILmmX0JjVPJDnrFyDzouNQbKuexv9Dav5BeHgGl4eMMgwyMmIkeWpVaAtARFeoBMgYf6okcVCCEGwZ6XItapdaSgU5alJZaoFEXESDuHGiPjJZaA+UR9kHmVjZyPfJruMTI1EHm1tnkDj4wQNs9pbTuFBEAoHGzVQyQWTCyPTIsktaoRwYCAAQYAGvcLAcfCLl1AAAAAElFTkSuQmCC" alt="">
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
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .card-panel {
    height: 150px;
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
      line-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;

      .card-panel-img{
        width: 40px;
        height: 40px;
      }
    }
    .card-panel-right{
      width: 80%;
      text-align: center;
      padding: 20px 0px;
      color: #fff;
    }

    .card-panel-text-top{
        font-size: 19px;
        font-weight: bold;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
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
