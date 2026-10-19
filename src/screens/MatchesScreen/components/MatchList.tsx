import type { IMatch } from '@/types/match'
import type { ListRenderItemInfo } from 'react-native'
import { FlatList, StyleSheet } from 'react-native'
import { ScreenMessage } from '@/components/ScreenMessage'
import { MatchCard } from './MatchCard'

interface IProps {
  matches: IMatch[]
}

function keyExtractor(match: IMatch) {
  return match.id
}

function renderMatch({ item }: ListRenderItemInfo<IMatch>) {
  return <MatchCard match={item} />
}

export function MatchList({ matches }: IProps) {
  return (
    <FlatList
      data={matches}
      keyExtractor={keyExtractor}
      renderItem={renderMatch}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<ScreenMessage text='В этом туре нет матчей' />}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    gap: 12,
  },
})
