import './public-path';
import microApps from './registerMicroApps';
import lifecycleLog from './lifecycleLog';

import Vue from 'vue'
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

let instance = null
 
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

//  Render directly when running independently 
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap  It will only be called once when the micro application is initialized , The next time the micro application re enters, it will directly call  mount  hook , No more triggers 
 *  Usually we can do some initialization of global variables here , For example, not in  unmount  Phase is destroyed by the application level cache and so on .
 */
 export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

/**
 *  Every time the application enters, it calls  mount  Method , Usually we trigger the applied rendering method here 
 */
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

/**
 *  Apply every time   Cut out/uninstall   Method to be called , Usually here we will unload the application instance of micro application 
 */
export async function unmount() {
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

//  introduce  qiankun  Components 
import { registerMicroApps , setDefaultMountApp, start } from 'qiankun';  

//  Register micro application information 
registerMicroApps(microApps, lifecycleLog);
setDefaultMountApp('/first-app')

start();
