import React, { useEffect, useState } from 'react'
import { type TourType } from './Fetch'
import axios from 'axios'

const url = 'https://www.course-api.com/react-tours-project'

const FetchAxios = () => {
  const [tours, setTours] = useState<TourType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTours = async () => {
    try {
      const response = await axios.get(url)
      setTours(response.data)
      setLoading(false)
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong'
      setError(message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>An error occurred..., {error}</h2>
  }

  return (
    <>
      <div>
        <h2>Fetch with axios and TypeScript</h2>
        {tours.map((tour) => {
          return (
            <div key={tour.id}>
              <h2>{tour.name}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default FetchAxios
