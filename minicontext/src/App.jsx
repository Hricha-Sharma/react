import './App.css'
import Login from './components/Login'
import Hello from './components/Hello'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login />
      <Hello />
    </UserContextProvider>
  )
}

export default App
