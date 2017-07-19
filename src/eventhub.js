export default class EventHub {
  constructor () {
    this.events = {}
  }

  $on (event, cb) {
    (this.events[event] || (this.events[event] = [])).push(cb)
  }

  $once (event, cb) {
    const self = this
    function onceCallback () {
      cb && cb.apply(null, arguments)
      self.$off(event, onceCallback)
    }
    this.$on(event, onceCallback)
  }

  $off(event, cb) {
    if (event && cb) {
      this.events[event] = this.events[event] && this.events[event].filter(x => x != cb)
      return
    }
    if (event) {
      this.events[event] = []
      return
    }
    this.events = {}
  }

  $emit(event) {
    if (this.events[event]) {
      const cbs = this.events[event]
      const args = Array.prototype.slice.call(arguments, 1)
      cbs.filter(cb => !!cb).forEach(cb => {
        cb.apply(null, args)
      })
    }
  }
}