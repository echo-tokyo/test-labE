import type { IMatch, IMatchesResponse } from '@/types/match'
import { MATCHES_URL } from '@/config'
import { toMatchStatus } from '@/utils/matchStatus'

interface IMatchDto extends Omit<IMatch, 'status'> {
  status: string
}

interface IMatchesResponseDto extends Omit<IMatchesResponse, 'matches'> {
  matches: IMatchDto[]
}

export async function fetchMatches(
  signal?: AbortSignal,
): Promise<IMatchesResponse> {
  const response = await fetch(MATCHES_URL, { signal })

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  const data = (await response.json()) as IMatchesResponseDto
  const matches = data.matches.map((match) => ({
    ...match,
    status: toMatchStatus(match.status),
  }))

  return { ...data, matches }
}
