const DATE_FORMATTER = new Intl.DateTimeFormat('ru-RU', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  hour: '2-digit',
  minute: '2-digit',
})

export function formatMatchDate(startsAt: string | null): string {
  if (startsAt === null) {
    return 'Дата уточняется'
  }

  return DATE_FORMATTER.format(new Date(startsAt))
}
