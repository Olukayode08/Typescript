import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { FetchTours } from '../utils/types'

const FetchReactQuery = () => {
  const {
    isLoading,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: FetchTours,
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error... {error.message}</h2>
  }
  
  return (
    <div>
      <h2>With React Query</h2>
      {tours?.map((tour) => {
        return (
          <div key={tour.id}>
            <h2>{tour.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default FetchReactQuery
