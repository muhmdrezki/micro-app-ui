export default {
  beforeLoad: app => {
    console.log('before load', app.name)
  },
  beforeMount: [
    app => {
      console.log('[Lifecycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterMount: [
    app => {
      console.log('[Lifecycle] after mount %c%s', 'color: green;', app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log('[Lifecycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
}