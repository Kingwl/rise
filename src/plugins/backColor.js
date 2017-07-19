import Plugin from '@/plugin'

export default class BackColorPlugin extends Plugin {
  get message () {
    return 'core.plugins.backColor'
  }

  process (color) {
    this.editor.runCommand('backColor', color)
  }
}