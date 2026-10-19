import type { TMatchFilter } from '@/types/match'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useMatches } from '@/hooks/useMatches'
import { filterMatches } from '@/utils/matchFilter'
import { MatchesContent } from './components/MatchesContent'
import { MatchFilter } from './components/MatchFilter'

export function MatchesScreen() {
  const { data, isError, refresh } = useMatches()
  const [filter, setFilter] = useState<TMatchFilter>('all')
  const matches = data ? filterMatches(data.matches, filter) : null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Матчи тура</Text>
      <MatchFilter value={filter} onChange={setFilter} />
      <MatchesContent matches={matches} isError={isError} onRetry={refresh} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
})
