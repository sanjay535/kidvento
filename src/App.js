import React from 'react'
import { Provider } from 'react-redux'
import store from './utils/store'
import Layout from './components/Layout'


const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  )
}

export default App