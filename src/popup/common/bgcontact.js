import { Res } from '../../business/BaseMsgHandler'

const extensioner = require('extensionizer')

// 获取background window 对象
export function getBackground () {
  return extensioner.extension.getBackgroundPage()
}

// 通过background处理消息
export function processMsg (msgIndex, res) {
  const bg = getBackground()
  msgIndex = msgIndex || 0
  const msg = res || new Res(true, { message: 'ok' })
  bg.msgProcessed(msgIndex, msg)
}
