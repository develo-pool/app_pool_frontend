import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import theme from '../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

interface Props {
  brandUsername: string;
  brandProfileImage: string;
  create_date: string;
  poolUserId: number;
}

function MessageHeader({
  brandUsername,
  brandProfileImage,
  create_date,
  poolUserId,
}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const Month = parseInt(create_date.substring(5, 7), 10);
  const Day = parseInt(create_date.substring(8, 10), 10);
  const Hour = parseInt(create_date.substring(11, 13), 10);
  const Minute = parseInt(create_date.substring(14, 16), 10);
  const Second = parseInt(create_date.substring(17, 19), 10);

  const nowDay = new Date().getDate();
  const nowHour = new Date().getHours();
  const nowMinute = new Date().getMinutes();
  const nowSecond = new Date().getSeconds();

  const Ago = () => {
    if (nowDay - Day !== 0) {
      // console.log(Month + '월 ' + Day + '일');
      return (
        <Text style={styles.msgDate}>
          {Month}월 {Day}일
        </Text>
      );
    } else if (nowHour - Hour !== 0) {
      // console.log(nowHour - parseInt(Hour));
      return (
        <Text style={styles.msgDate}>{Math.abs(nowHour - Hour)}시간 전</Text>
      );
    } else if (nowMinute - Minute !== 0) {
      // console.log(nowMinute - parseInt(Minute));
      return (
        <Text style={styles.msgDate}>{Math.abs(nowMinute - Minute)}분 전</Text>
      );
    } else if (nowSecond - Second !== 0) {
      // console.log(nowSecond - parseInt(Second));
      return <Text style={styles.msgDate}>방금 전</Text>;
    }
  };
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <TouchableOpacity
      style={styles.messageHeader}
      onPress={() =>
        navigation.navigate('BrandProfile', {poolUserId: poolUserId})
      }>
      <View style={styles.detailHeader}>
        <Image
          style={styles.authorProfileImg}
          source={{uri: brandProfileImage}}
        />
        <View style={styles.msgHeader}>
          <View style={styles.verticalCenter}>
            <Text style={styles.msgSmallText}>{brandUsername}</Text>
          </View>
          <View style={styles.smallVerticalCenter}>{Ago()}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  messageHeader: {
    marginBottom: 24,
    marginTop: 8,
  },
  usernameContainer: {
    height: 21,
    justifyContent: 'center',
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
    marginRight: 12,
  },
  msgDate: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  msgSmallText: {
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
  },
  msgHeader: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  verticalCenter: {
    height: 21,
    justifyContent: 'center',
  },
  smallVerticalCenter: {
    height: 18,
    justifyContent: 'center',
  },
});

export default MessageHeader;
