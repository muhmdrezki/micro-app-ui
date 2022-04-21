export default [
  {
    name : 'first-app' , // app name registered  
    entry : 'http://localhost:3001', 
    container : '#sub-app', 
    activeRule : '/first-app' , 
  },
  {
    name : 'second-app' , // app name registered  
    entry : 'http://localhost:3002',
    container : '#sub-app', 
    activeRule : '/second-app' , 
  },
  {
    name: 'third-app',
    entry: 'http://localhost:3003',
    container: '#sub-app',
    activeRule: '/third-app'
  }
]