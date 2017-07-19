import Plugin from '@/plugin'

export default class UnorderListPlugin extends Plugin {
  get message () {
    return 'core.plugins.unorderList'
  }

  process () {
    this.editor.runCommand('insertUnorderedList')
  }
}