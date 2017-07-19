import Plugin from '@/plugin'

export default class HorizontalRulePlugin extends Plugin {
  get message () {
    return 'core.plugins.horizontalRule'
  }

  process () {
    this.editor.runCommand('insertHorizontalRule')
  }
}