import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import theme from '../assets/theme';

function ScreenBottomButton({
  name,
  onPress,
  enabled = true,
  isLoading = false,
}: {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
  enabled?: boolean;
  isLoading?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!enabled}
      style={[styles.button, enabled ? styles.enabled : styles.disabled]}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={enabled ? styles.enabledText : styles.disabledText}>
          {name}
        </Text>
      )}
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
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
    fontSize: 20,
    color: 'white',
  },
  disabled: {
    backgroundColor: '#d9d9d9',
  },
  disabledText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
    fontSize: 20,
    color: 'white',
  },
});

export default ScreenBottomButton;
