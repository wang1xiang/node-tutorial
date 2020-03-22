const express = require('express')
const cors = require('cors')
var app = express()
app.use(cors())

app.post('/test/html', (req, res) => {
  res.send({
    responseBody: {
      html: `<tr class="ant-table-row  ant-table-row-hover ant-table-row-level-0" data-row-key="95a6c55e0769445286d390a0838307fe">
          <td class="ant-table-fixed-columns-in-body" style="text-align: center;"><span class="ant-table-row-indent indent-level-0" style="padding-left: 0px;"></span>
              <!----><span data-v-425d2229="">测试</span></td>
          <td style="text-align: center;"><span data-v-425d2229="">cs</span></td>
          <td style="text-align: center;">
              <div data-v-425d2229=""><i data-v-425d2229="" aria-label="图标: info-circle" class="anticon anticon-info-circle"><svg data-v-425d2229="" viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path fill="rgb(0, 255, 0)" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path fill="#eaffe6" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm32 588c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path><path fill="rgb(0, 255, 0)" d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></i>
                  <span
                      data-v-425d2229="" style="color: rgb(0, 255, 0); margin-left: 5px;">正常</span>
              </div>
          </td>
          <td style="text-align: center;">
              <div data-v-425d2229="" class="ant-tag ant-tag-cyan">Test</div>
          </td>
          <td style="text-align: center;">开发管理处</td>
          <td style="text-align: center;"><span data-v-425d2229=""></span></td>
          <td style="text-align: center;"><span data-v-425d2229=""></span></td>
          <td class="ant-table-column-has-actions ant-table-column-has-sorters" style="text-align: center;">2020-03-05 11:01:01</td>
          <td style="text-align: center;"><a id="edit">编辑</a>
              <div data-v-425d2229="" class="ant-divider ant-divider-vertical"></div><a id="freeze">
              冻结
            </a>
              <div data-v-425d2229="" class="ant-divider ant-divider-vertical"></div><a id="reset">重置密码</a>
              <div data-v-425d2229="" class="ant-divider ant-divider-vertical"></div><a id="delete">删除</a></td>
      </tr>`,
      js: {
        edit: `console.log('edit')`,
        freeze: `console.log('freeze')`,
        reset: `console.log('reset')`,
        delete: `console.log('delete')`
      }
    }    
  })
})

app.listen(3000, () => {
  console.log('app listen on port 3000');
})