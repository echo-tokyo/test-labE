import type { IMatch } from '@/types/match'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { ScreenMessage } from '@/components/ScreenMessage'
import { MatchList } from './MatchList'

interface IProps {
  matches: IMatch[] | null
  isError: boolean
  onRetry: () => void
}

export function MatchesContent({ matches, isError, onRetry }: IProps) {
  if (matches) {
    return <MatchList matches={matches} />
  }

  if (isError) {
    return (
      <ScreenMessage
        text='Не удалось загрузить матчи'
        action={{ label: 'Повторить', onPress: onRetry }}
      />
    )
  }

  return <ActivityIndicator size='large' style={styles.loader} />
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
  },
})
