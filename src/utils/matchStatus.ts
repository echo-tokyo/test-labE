import type { TMatchStatus } from '@/types/match'

export const MATCH_STATUS_LABELS: Record<TMatchStatus, string> = {
  scheduled: 'Запланирован',
  live: 'Идёт',
  finished: 'Завершён',
  postponed: 'Перенесён',
  unknown: 'Статус неизвестен',
}

export function toMatchStatus(status: string): TMatchStatus {
  if (Object.hasOwn(MATCH_STATUS_LABELS, status)) {
    return status as TMatchStatus
  }

  return 'unknown'
}
