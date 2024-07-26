import { useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Index from "../pages/Index.jsx"
import Show from '../pages/Show.jsx'

const Home = (props) => {
  const [contestants, setContestants] = useState(null)

  const URL = 'http://localhost:8080/contestants/'

  //fetches all contestants from our API backend
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
    //make post request to create contestants
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contestant),
    })
    // update our components list of contestants
    getContestants()
  }

  const updateContestants = async (contestant, id) => {
    // make post request to create contestants
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contestant),
    });
    // update list of contestants
    getContestants();
  };
  
  const deleteContestants = async (id) => {
    // make post request to create contestants
    await fetch(URL + id, {
        method: "DELETE",
    });
    // update list of contestants
    getContestants();
  };

  useEffect(() => {
      getContestants();
  }, []);

  return (
    <main>
        <Routes>
            <Route path="/" element={<Index 
                contestants={contestants} 
                createContestants={createContestants}/>}/>
            <Route path="/contestants/:id" element={<Show
                contestants={contestants} 
                updateContestants={updateContestants} 
                deleteContestants={deleteContestants}
            />}/>
        </Routes>
    </main>
  )
}

export default Home