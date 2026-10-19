import type { IMatch, TMatchFilter, TMatchStatus } from '@/types/match'

interface IMatchFilterOption {
  value: TMatchFilter
  label: string
}

export const MATCH_FILTER_OPTIONS: IMatchFilterOption[] = [
  { value: 'all', label: 'Все' },
  { value: 'upcoming', label: 'Предстоящие' },
  { value: 'finished', label: 'Завершённые' },
]

const STATUS_FILTER: Record<TMatchStatus, TMatchFilter> = {
  scheduled: 'upcoming',
  live: 'upcoming',
  postponed: 'upcoming',
  finished: 'finished',
  unknown: 'all',
}

export function filterMatches(
  matches: IMatch[],
  filter: TMatchFilter,
): IMatch[] {
  if (filter === 'all') {
    return matches
  }

  return matches.filter((match) => STATUS_FILTER[match.status] === filter)
}
