import { useEffect, useState } from 'react'
import './styles/index.css'
import { ContactsContext } from './contexts';
import { CreateUser } from './components/CreateUser';
import { UserCard } from './components/UserCard';

const apiUrl = import.meta.env.VITE_FETCH_API_URL;

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(apiUrl).then(response => response.json())

    console.log(JSON.stringify(response[0], null, 2))
    setData(response)
  }

  useEffect(() => {
    getData()
  }, [])

  return <ContactsContext.Provider value={{ data, setData }}>
    <nav className='nav'>
      <button>Formulario</button>
      <button>Listado</button>
    </nav>
    <CreateUser />
    <div id="contacts_wrapper">
      {data.map((item, index) => <UserCard key={index} user={item} />)}
    </div>
  </ContactsContext.Provider>
}

export default App
