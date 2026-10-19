import type { IMatch } from '@/types/match'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { ScreenMessage } from '@/components/ScreenMessage'
import { MatchList } from './MatchList'

interface IProps {
  matches: IMatch[] | null
  isLoading: boolean
  onRefresh: () => void
}

export function MatchesContent({ matches, isLoading, onRefresh }: IProps) {
  if (isLoading) {
    return <ActivityIndicator size='large' style={styles.loader} />
  }

  if (!matches) {
    return (
      <ScreenMessage
        text='Не удалось загрузить матчи'
        action={{ label: 'Повторить', onPress: onRefresh }}
      />
    )
  }

  return <MatchList matches={matches} onRefresh={onRefresh} />
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
  },
})
