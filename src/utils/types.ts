import { z } from 'zod'
import axios from 'axios'
const url = 'https://www.course-api.com/react-tours-project'

export const tourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
})

export type TourType = z.infer<typeof tourSchema>

export const FetchTours = async (): Promise<TourType[]> => {
  const res = await axios.get<TourType[]>(url)
  const result = tourSchema.array().safeParse(res.data)
  if (!result.success) {
    console.log(result.error.message)
    throw new Error(`Failed to parse tours`)
  }
  return result.data
}
