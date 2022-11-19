<template>
  <el-card class="box-card-component">
    <div class="box-card-header">
      账户余额
    </div>
    <div style="margin-left: 10px;margin-bottom: 8px;">
      <div class="card-right">
        <img data-v-4166aef7="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG0GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0xMi0yOFQxOTo1ODoyMCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMTItMjhUMTk6NTk6MDkrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTItMjhUMTk6NTk6MDkrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWVkYjY5YWQtMTU3Yy0wNzQyLWI5N2YtZTZiNjE5YmY5YmE5IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OGU0MmMxNTAtMWRjNC1iMjRmLTg3MjgtNDEwZGNiNTdhMjhkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MUE2MTk4MTlGNjY4MTFFQUEwOURFMzIzOUVCMzRDMTEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQTYxOTgxNkY2NjgxMUVBQTA5REUzMjM5RUIzNEMxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTYxOTgxN0Y2NjgxMUVBQTA5REUzMjM5RUIzNEMxMSIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjN2RhNTFlOC05NzUzLTkzNGEtOGY5MS04ZjYzYzBkZGViOWYiIHN0RXZ0OndoZW49IjIwMjAtMTItMjhUMTk6NTk6MDkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWVkYjY5YWQtMTU3Yy0wNzQyLWI5N2YtZTZiNjE5YmY5YmE5IiBzdEV2dDp3aGVuPSIyMDIwLTEyLTI4VDE5OjU5OjA5KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5k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" alt="" style="width: 30px;">
        <div>平台币余额</div>
        <div>0.00</div>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          充值
        </el-button>
      </div>
    </div>
    <div style="margin-left: 10px;margin-bottom: 8px;">
      <div class="card-right">
        <img data-v-4166aef7="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG0GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0xMi0yOFQxOTo1ODoyNCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMTItMjhUMTk6NTk6MjArMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTItMjhUMTk6NTk6MjArMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWExYjY4MmUtYTJmZS0wYzRkLTg5MDQtOWU0MTc3ZWFhZDBkIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDJmMDBmMjktODdjMi00MjRkLWFmOTUtYTU4NGZiMjAwMjJiIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MUFDNjJGOEFGNjY4MTFFQUExODlGOUUwOTI2OUVFMzMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUM2MkY4N0Y2NjgxMUVBQTE4OUY5RTA5MjY5RUUzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUM2MkY4OEY2NjgxMUVBQTE4OUY5RTA5MjY5RUUzMyIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZWY3MTcxMi1iYzgyLTJmNDYtODEyYy05YTRjMDA0NjA2OGIiIHN0RXZ0OndoZW49IjIwMjAtMTItMjhUMTk6NTk6MjArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWExYjY4MmUtYTJmZS0wYzRkLTg5MDQtOWU0MTc3ZWFhZDBkIiBzdEV2dDp3aGVuPSIyMDIwLTEyLTI4VDE5OjU5OjIwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uyrD7QAABaJJREFUaN7dmltsVUUUhktbrFQB0TYQIw9EaWMREDW21KbUJqgUo0bQKMZYNTQiarQ8GIMXFBMSb1GjkcRiU7BGI1Ei8X5JrZL45CUaVPBCqZcWorTRimC0/pP826wsZ073Zeb06MOX056ZPbP+s/fMWrP2KhodHS36P5N5gNZr2jSloBasBo+AN8BnYC/4CQyDIbAb9IJu0A7OBlMs4+UknwLPA5tAPxhNyQGwDVwBJo27QExQAm4AOzOIcjEI7gWV4yKQv/LXDuP2g5fBPeBK0ARqwCx+1oFmcDXYAF7jY2sbyzzSd4LivAjEoNXgVYshh8BWsAyUJ11L4BiwArzkEPo5aAwqEAO2gb/UxL+A9eCEFKJcnAQetsxluCOIQAz2qGWyx8F0j8I0s8ELlnmf9SoQAz2nJhgALQ43EYLL+KRIG972IhCDPKMGNn7tuBx+MBQzwQfKllcyCcQA96kBN8dw9KHZrmzalEogLrxUDdQVM5LJB28p265PJBAXzNCPZYJQLV98rGw8JYnAHcpplxSgQOM3Dwo7d8cSiI4Xq1+m1iHsSLAFvAtODiDABOzv0xVNdPQ5X9l6cxyB+6SfGyNUi/qZX3KuR3ENyvCLcvTdKvodNkG6UyAar1URSnEOgXOVEb95Etmoxv2dDt/Vf6qKeNblEvit6Ngew0c2KWPMnZyfQVyz5UebN9ZpAp/3i2tM0D7hXwLx5SLR6ddcG4sSafvFT/UgztgwJ855kBuOvIvLbQI746w9xy7aYDlZzM8gbiSOOBmq4e/nxfXbbQIHRYcFKU70DZY7uSCGkYstp5OapCkL/L1ULZWj/xFIQ6LGvRlyMvXqUTG72uk5DDxHiRviebMohcAjVEC+VAq8UTR0Zkw61SqRfzhELrac3KuyJJ2YRYjGWy8FdsSJ6xJEMnWWO3maSlDpO1eVZudVttyt12HU0CMamj0INJwI9qg7OYs7rBT3KX1ZkQeB8oDwiRT4pWioTilwGoP0SpEJW2nxk3+q7y5g3+i6GRwrjcA6GUNLgYNie69MKLCULmaYAkbIkAr7XOzjtdF1B/n/Uxw7icBq6UelwGF++TM4KqHAygA50YjKhAJnirU/LAUOiczy5IQCi5mi/w78wE9JP9P2h1UItsfSNxqjn2MW+xI4KNZIRco1aB6nMh5tJKXMgD8tBK6m8RMtlMV5NB0Cq2Q0JAV+IRpme9pFNY+JOZb5OlopW2rl2pYCe0VDYyCB0te2BhK4XMzxkRTYJRpWBhL4oJhjSSCBa8Uc26TANaJhYwY/WE9fJDmTj86bYo4HGL7Vqr4LyZSUAl/UB9+ooV407Eoh8Ay+3PTlHvaPddC1BNsT6OaiMVqkwBL1+qoqocD2AD7wkoQCm5zHJXbo1pF4AoFTuY53MMsmMXHuO+oO9zF526P69vJzQ1xXIezYMtaBd4mO4zxvMhvF+Ct8bjIm+mIw705ZWE71rZ4FPiHGvtyzwHXy6JUrqybX0oBngU+G8IMsVjgkxr4rl8BSxolR57X/AYGdsRO/NHiV2s2OL2CBixKn7mn0h+Ki6QUqsEy5tl1J3i5NZsRf4/ERleFgmweBPeruzclXKZcLeVy6KqO4biVuVT5r1VzMY+6nN0nOZYwfytCR72K8UExjAYS/IoQCEmjyqD8qca8Hq1Vj7sO87HiIb3pDCTuWuRkdiHcFLcZjEU40WT9T/+UehZls2u3q+BOxJni1oQmHLBMPsK5mYUpRJoo619TiWKqaDO+p9H/wckqz1X/vOMt9xcfoFr5kMe/6KnhnKli4V8cigttYKuYqpDVr77rxKogtp4F9MQ6wI4xzR9TRxsU34FYehca9pNlkBFoYjvW1ZqvyNU78QqYgCqpmO8IkdM/iZtAhitIHGDse4OO4k6d6UwdzE98QT8qSVQsisND5GwsYrB7XaYRMAAAAAElFTkSuQmCC" alt="" style="width: 30px;">
        <div>提 现 余 额</div>
        <div>0.00</div>
        <el-button class="btn-copy" type="primary" @click.prevent.stop="guide">
          提现
        </el-button>
      </div>
    </div>
    <div style="margin-left: 10px;margin-bottom: 8px;">
      <div class="card-right">
        <img data-v-4166aef7="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG0GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0xMi0yOFQxOTo1ODoxNSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMTItMjhUMTk6NTg6NTMrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMTItMjhUMTk6NTg6NTMrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTBhM2RkN2YtZjIyNS00NjQ5LTk2YWUtZWQ1OTE0ZjRkZDExIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NWNiNjU2NGUtOTM3NC1mYTQ1LWI3ZDAtZmIzNjY0NmMwNTViIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTlDRkY2NTNGNjY4MTFFQUJFQUVGMDY1MkI5MUU2NkIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOUNGRjY1MEY2NjgxMUVBQkVBRUYwNjUyQjkxRTY2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOUNGRjY1MUY2NjgxMUVBQkVBRUYwNjUyQjkxRTY2QiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NWU3NzZhNi1iYmVhLWVkNGYtYTg5NS02MTdlZjNlNWQyNzEiIHN0RXZ0OndoZW49IjIwMjAtMTItMjhUMTk6NTg6NTMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTBhM2RkN2YtZjIyNS00NjQ5LTk2YWUtZWQ1OTE0ZjRkZDExIiBzdEV2dDp3aGVuPSIyMDIwLTEyLTI4VDE5OjU4OjUzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5k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" alt="" style="width: 30px;">
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
  border-radius: 10px;
  .box-card-header {
    // padding-top: 20px;
    // padding-left: 15px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #cccccc;
  }
  .card-right{
    font-size: 12px;
    font-family: PingFang SC,Helvetica Neue,Helvetica,microsoft yahei,arial,STHeiTi,sans-serif;
    color: #606266;
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
