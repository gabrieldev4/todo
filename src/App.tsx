import { useState } from 'react'
import styles from './App.module.css'
import { AddTask } from './components/main/AddTask'
import { ButtonTheme } from './components/head/ButtonTheme'
import { Filter } from './components/head/Filter'
import { SearchInput } from './components/head/SearchInput'
import { Modal } from './components/main/Modal'
import { TaskList } from './components/main/TaskList'
// import { TaskList } from './components/TaskList'

function App() {
  const [openModal, setOpenModal] = useState(false)
  
  

  return (
    <>
     <div className={styles.wrapper}>
      <header>
        <h1>TODO LIST</h1>
        <nav className={styles.navControl}>
          <SearchInput/>
          <Filter/>
          <ButtonTheme/>
        </nav>
      </header>
      <main>
        <TaskList hasList={false}/>
        <AddTask
          setOpenModal={setOpenModal}
          openModal={openModal} 
        />
      </main>
      <Modal
        isOpen={openModal}
        setOpenModal={setOpenModal}
      />
     </div>
    </>
  )
}

export default App
