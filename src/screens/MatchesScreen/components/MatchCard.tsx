import type { IMatch } from '@/types/match'
import { StyleSheet, Text, View } from 'react-native'
import { formatMatchDate } from '@/utils/matchDate'
import { MATCH_STATUS_LABELS } from '@/utils/matchStatus'

interface IProps {
  match: IMatch
}

export function MatchCard({ match }: IProps) {
  const { home, away, score, status, startsAt } = match
  const scoreLabel = score ? `${score.home} : ${score.away}` : null

  return (
    <View style={styles.card}>
      <View style={styles.teams}>
        <Text style={styles.team}>{home.name}</Text>
        {scoreLabel && <Text style={styles.score}>{scoreLabel}</Text>}
        <Text style={[styles.team, styles.awayTeam]}>{away.name}</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.metaText}>{formatMatchDate(startsAt)}</Text>
        <Text style={styles.metaText}>{MATCH_STATUS_LABELS[status]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    gap: 8,
  },
  teams: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  team: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  awayTeam: {
    textAlign: 'right',
  },
  score: {
    fontSize: 18,
    fontWeight: '700',
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    fontSize: 13,
    color: '#6b7280',
  },
})
