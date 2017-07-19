import Plugin from '../plugin'

export default class BoldPlugin extends Plugin {
  get message () {
    return 'core.plugins.bold'
  }

  process () {
    this.editor.runCommand('bold')
  }
}