import { Pressable, StyleSheet, Text, View } from 'react-native'

interface IAction {
  label: string
  onPress: () => void
}

interface IProps {
  text: string
  action?: IAction
}

export function ScreenMessage({ text, action }: IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {action && (
        <Pressable
          style={styles.button}
          onPress={action.onPress}
          accessibilityRole='button'
        >
          <Text style={styles.buttonText}>{action.label}</Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  text: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ef3124',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
})
