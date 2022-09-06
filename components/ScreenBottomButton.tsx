import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import theme from '../assets/theme';

export const BottomButtonHeight = 70;

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
    <SafeAreaView style={enabled ? styles.enabled : styles.disabled}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    height: BottomButtonHeight,
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
    backgroundColor: theme.colors.Grey30,
  },
  disabledText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
    fontSize: 20,
    color: 'white',
  },
});

export default ScreenBottomButton;
