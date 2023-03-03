import { Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header/Header'

function App() {

  return (
    <div className={styles.app}>
      <Header></Header>
      <main className={styles.main}>
        <Outlet />
      </main>
     
    </div>
  )
}

export default App
