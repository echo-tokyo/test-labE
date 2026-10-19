import type { IMatch } from '@/types/match'
import type { ListRenderItemInfo } from 'react-native'
import { FlatList, StyleSheet } from 'react-native'
import { ScreenMessage } from '@/components/ScreenMessage'
import { MatchCard } from './MatchCard'

interface IProps {
  matches: IMatch[]
  favoriteIds: string[]
  onToggleFavorite: (id: string) => void
  onRefresh: () => void
}

function keyExtractor(match: IMatch) {
  return match.id
}

export function MatchList({
  matches,
  favoriteIds,
  onToggleFavorite,
  onRefresh,
}: IProps) {
  function renderMatch({ item }: ListRenderItemInfo<IMatch>) {
    return (
      <MatchCard
        match={item}
        isFavorite={favoriteIds.includes(item.id)}
        onToggleFavorite={onToggleFavorite}
      />
    )
  }

  return (
    <FlatList
      data={matches}
      extraData={favoriteIds}
      keyExtractor={keyExtractor}
      renderItem={renderMatch}
      refreshing={false}
      onRefresh={onRefresh}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<ScreenMessage text='Матчей нет' />}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    gap: 12,
  },
})
