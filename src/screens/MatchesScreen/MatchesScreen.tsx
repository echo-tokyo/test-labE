import type { TMatchFilter } from '@/types/match'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFavorites } from '@/hooks/useFavorites'
import { useMatches } from '@/hooks/useMatches'
import { filterMatches } from '@/utils/matchFilter'
import { MatchesContent } from './components/MatchesContent'
import { MatchFilter } from './components/MatchFilter'
import { MatchSearch } from './components/MatchSearch'
import { RefreshBar } from './components/RefreshBar'

export function MatchesScreen() {
  const { data, isError, isLoading, updatedAt, refresh } = useMatches()
  const { favorites, toggle: toggleFavorite } = useFavorites()
  const [filter, setFilter] = useState<TMatchFilter>('all')
  const [query, setQuery] = useState('')
  const matches = data ? filterMatches(data.matches, filter, query) : null

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Матчи тура</Text>
      <MatchSearch value={query} onChange={setQuery} />
      <MatchFilter value={filter} onChange={setFilter} />
      {updatedAt && (
        <RefreshBar
          updatedAt={updatedAt}
          isLoading={isLoading}
          isError={isError}
          onRefresh={refresh}
        />
      )}
      <MatchesContent
        matches={matches}
        isLoading={isLoading}
        favoriteIds={favorites}
        onToggleFavorite={toggleFavorite}
        onRefresh={refresh}
      />
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
