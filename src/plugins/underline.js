import Plugin from '../plugin'

export default class UnderlinePlugin extends Plugin {
  get message () {
    return 'core.plugins.underline'
  }

  process () {
    this.editor.runCommand('underline')
  }
}