import { useState, useEffect } from 'react'
// import { type TourType, tourSchema } from '../utils/types'

const url = 'https://www.course-api.com/react-tours-project'
// Instead of using the type TourType we are using the zod library

export type TourType = {
  id: number
  image: string
  info: string
  name: string
  price: string
}

const Fetch = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tours, setTours] = useState<TourType[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error('Failed to fetch tours')
      }
      const data: TourType[] = await res.json()
      console.log(data)

      setTours(data)
    } catch (error) {
      // This makes sure the error is a string
      const message =
        error instanceof Error ? error.message : 'Something went wrong'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>An error occurred..., {error}</h2>
  }
  return (
    <>
      <div>
        <h2>Fetch in TypeScript</h2>
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

export default Fetch
