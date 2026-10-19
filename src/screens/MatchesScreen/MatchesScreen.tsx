import { StyleSheet, Text, View } from 'react-native'
import { useMatches } from '@/hooks/useMatches'
import { MatchesContent } from './components/MatchesContent'

export function MatchesScreen() {
  const { data, isError, refresh } = useMatches()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Матчи тура</Text>
      <MatchesContent
        matches={data?.matches ?? null}
        isError={isError}
        onRetry={refresh}
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
