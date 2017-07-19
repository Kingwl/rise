import Plugin from '../plugin'

export default class StrikethroughPlugin extends Plugin {
  get message () {
    return 'core.plugins.strikethrough'
  }

  process () {
    this.editor.runCommand('strikethrough')
  }
}