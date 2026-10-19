import { StyleSheet, TextInput } from 'react-native'

interface IProps {
  value: string
  onChange: (query: string) => void
}

export function MatchSearch({ value, onChange }: IProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder='Поиск по клубу'
      placeholderTextColor='#9ca3af'
      autoCorrect={false}
      clearButtonMode='while-editing'
      style={styles.input}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    fontSize: 15,
  },
})
