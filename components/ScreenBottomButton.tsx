import React from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';

function ScreenBottomButton({
  name,
  onPress,
  enabled = true,
}: {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
  enabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!enabled}
      style={[styles.button, enabled ? styles.enabled : styles.disabled]}>
      <Text style={enabled ? styles.enabledText : styles.disabledText}>
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enabled: {
    backgroundColor: 'black',
  },
  enabledText: {
    fontSize: 20,
    color: 'white',
  },
  disabled: {
    backgroundColor: '#d9d9d9',
  },
  disabledText: {
    fontSize: 20,
    color: 'black',
    opacity: 0.2,
  },
});

export default ScreenBottomButton;
