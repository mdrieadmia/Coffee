import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Coffee from './components/Coffee/Coffee'
import { useState } from 'react'

function App() {

  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>
      <Navbar/>
      <div className='container mx-auto px-5 mt-10'>
        <h1 className='text-2xl font-bold text-center'>All Coffee</h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
          {
            coffees.map(coffee => <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}> </Coffee>)
          }
        </div>
      </div>
    </>
  )
}

export default App
