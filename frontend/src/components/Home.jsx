import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Index from "../pages/Index.jsx"
import Show from '../pages/Show.jsx'
import Form from './Form'

const Home = (props) => {
  const [contestants, setContestants] = useState(null)

  const URL = 'http://localhost:4000/contestant/'

  const getContestants = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setContestants(data.data);
    } catch (error) {
      console.error("Error fetching contestants:", error);
    }
  };

  const createContestants = async (contestant) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contestant),
    })
    getContestants()
  }

  const updateContestants = async (contestant, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contestant),
    });
    getContestants();
  };

  const deleteContestants = async (id) => {
    await fetch(URL + id, {
      method: "DELETE",
    });
    getContestants();
  };

  useEffect(() => {
    getContestants();
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/contestants" element={<Index
          contestants={contestants}
        />} />
        <Route path="/newcontestant" element={<Form
          createContestants={createContestants} />} />
        <Route path="/contestant/:id" element={<Show
          contestants={contestants}
          updateContestants={updateContestants}
          deleteContestants={deleteContestants}
        />} />
      </Routes>
    </main>
  )
}

export default Home