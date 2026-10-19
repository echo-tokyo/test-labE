import type { TMatchFilter } from '@/types/match'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MATCH_FILTER_OPTIONS } from '@/utils/matchFilter'

interface IProps {
  value: TMatchFilter
  onChange: (filter: TMatchFilter) => void
}

interface IFilterTabProps {
  label: string
  isActive: boolean
  onPress: () => void
}

function FilterTab({ label, isActive, onPress }: IFilterTabProps) {
  return (
    <Pressable
      style={[styles.tab, isActive && styles.activeTab]}
      onPress={onPress}
      accessibilityRole='tab'
      accessibilityState={{ selected: isActive }}
    >
      <Text style={[styles.label, isActive && styles.activeLabel]}>
        {label}
      </Text>
    </Pressable>
  )
}

export function MatchFilter({ value, onChange }: IProps) {
  return (
    <View style={styles.container}>
      {MATCH_FILTER_OPTIONS.map((option) => (
        <FilterTab
          key={option.value}
          label={option.label}
          isActive={option.value === value}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
  },
  activeTab: {
    backgroundColor: '#ef3124',
  },
  label: {
    fontSize: 14,
    color: '#374151',
  },
  activeLabel: {
    color: '#fff',
    fontWeight: '600',
  },
})
