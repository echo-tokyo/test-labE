import { Pressable, StyleSheet, Text, View } from 'react-native'
import { UpdatedAgo } from '@/components/UpdatedAgo'

interface IProps {
  updatedAt: Date
  isLoading: boolean
  isError: boolean
  onRefresh: () => void
}

export function RefreshBar({
  updatedAt,
  isLoading,
  isError,
  onRefresh,
}: IProps) {
  return (
    <View style={styles.container}>
      <View>
        <UpdatedAgo since={updatedAt} />
        {isError && <Text style={styles.error}>Не удалось обновить</Text>}
      </View>
      <Pressable
        onPress={onRefresh}
        disabled={isLoading}
        hitSlop={8}
        accessibilityRole='button'
      >
        <Text style={[styles.button, isLoading && styles.disabled]}>
          Обновить
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  error: {
    fontSize: 13,
    color: '#ef3124',
  },
  button: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ef3124',
  },
  disabled: {
    opacity: 0.4,
  },
})
