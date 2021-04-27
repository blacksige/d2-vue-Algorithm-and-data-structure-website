import { find, assign } from 'lodash'

const users = [
  { username: '13207895423', password: '123456', uuid: 'uuid-0', name: '皮法' },
  { username: '14381438', password: '123456', uuid: 'uuid-1', name: '皮法' },
  { username: 'User0', password: 'User0', uuid: 'uuid-2', name: '云淡风轻' },
  { username: 'User1', password: 'User1', uuid: 'uuid-3', name: '茉莉' },
  { username: 'User2', password: 'User2', uuid: 'uuid-4', name: '一见惊鸿' },
]

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
   * @description 登录
   * @param {Object} data 登录携带的信息
   */
  SYS_USER_LOGIN (data = {}) {
    // 模拟数据
    mock
      .onAny('/login')
      .reply(config => {
        const user = find(users, tools.parse(config.data))
        return user
          ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))
          : tools.responseError({}, '账号或密码不正确')
      })
    // 接口请求
    return requestForMock({
      url: '/login',
      method: 'post',
      data
    })
  }
})
