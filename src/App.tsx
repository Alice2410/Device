import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header/Header'

function App() {

  return (
    <div className={styles.app}>
      <Header></Header>
      <Outlet />
    </div>
  )
}

export default App
