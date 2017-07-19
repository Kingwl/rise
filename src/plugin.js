export default class Plugin {
  get message () {
    throw new Error('not implement')
  }

  setup(editor) {
    this.editor = editor
    editor.$on(this.message, this.process.bind(this))
  }

  process () {

  }
}