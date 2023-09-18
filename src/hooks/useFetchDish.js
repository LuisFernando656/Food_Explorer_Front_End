import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function useFetchDish(dishId) {
  const [dishData, setDishData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${dishId}`)
        const data = response.data
        setDishData(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchDish()
  }, [dishId])

  return { dishData, loading, error }
}
