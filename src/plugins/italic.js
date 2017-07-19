import Plugin from '../plugin'

export default class ItalicPlugin extends Plugin {
  get message () {
    return 'core.plugins.italic'
  }

  process () {
    this.editor.runCommand('italic')
  }
}