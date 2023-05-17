import { Provider } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <Header></Header>
      <Home></Home>
    </Provider>
  )
}

export default App
