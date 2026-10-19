import type { IMatchesResponse } from '@/types/match'
import { useCallback, useEffect, useState } from 'react'
import { fetchMatches } from '@/api/fetchMatches'

interface IMatchesState {
  data: IMatchesResponse | null
  isError: boolean
  isLoading: boolean
  updatedAt: Date | null
}

const INITIAL_STATE: IMatchesState = {
  data: null,
  isError: false,
  isLoading: true,
  updatedAt: null,
}

export function useMatches() {
  const [state, setState] = useState<IMatchesState>(INITIAL_STATE)
  const [requestId, setRequestId] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const data = await fetchMatches(controller.signal)
        setState({
          data,
          isError: false,
          isLoading: false,
          updatedAt: new Date(),
        })
      } catch {
        if (controller.signal.aborted) {
          return
        }
        setState((prev) => ({ ...prev, isLoading: false, isError: true }))
      }
    }

    void load()

    return () => {
      controller.abort()
    }
  }, [requestId])

  const refresh = useCallback(() => {
    setState((prev) => ({ ...prev, isLoading: true, isError: false }))
    setRequestId((id) => id + 1)
  }, [])

  return { ...state, refresh }
}
