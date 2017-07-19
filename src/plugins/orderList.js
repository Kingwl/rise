import Plugin from '@/plugin'

export default class OrderListPlugin extends Plugin {
  get message () {
    return 'core.plugins.orderList'
  }

  process () {
    this.editor.runCommand('insertOrderedList')
  }
}