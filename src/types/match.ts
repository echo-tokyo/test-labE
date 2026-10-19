export type TMatchStatus =
  'scheduled' | 'live' | 'finished' | 'postponed' | 'unknown'

export type TMatchFilter = 'all' | 'upcoming' | 'finished'

export interface ITeam {
  id: string
  name: string
  city: string
}

export interface IScore {
  home: number
  away: number
}

export interface IMatch {
  id: string
  startsAt: string | null
  status: TMatchStatus
  minute?: number
  home: ITeam
  away: ITeam
  score: IScore | null
}

export interface IMatchesResponse {
  round: number
  matches: IMatch[]
}
