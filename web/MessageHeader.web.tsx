import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigate} from 'react-router-dom';
import theme from '../assets/theme';

interface Props {
  brandUsername: string;
  brandProfileImage: string;
  create_date: string;
  brandUserId?: number;
}

function MessageHeader({
  brandUsername,
  brandProfileImage,
  create_date,
  brandUserId,
}: Props) {
  const navigation = useNavigate();

  const Month = create_date.substring(5, 7);
  const Day = create_date.substring(8, 10);
  const Hour = create_date.substring(11, 13);
  const Minute = create_date.substring(14, 16);
  const Second = create_date.substring(17, 19);

  const nowDay = new Date().getDate();
  const nowHour = new Date().getHours();
  const nowMinute = new Date().getMinutes();
  const nowSecond = new Date().getSeconds();

  const Ago = () => {
    if (nowDay - parseInt(Day, 10) !== 0) {
      // console.log(Month + '월 ' + Day + '일');
      return (
        <View>
          <Text style={styles.msgDate}>
            {Month}월 {Day}일
          </Text>
        </View>
      );
    } else if (nowHour - parseInt(Hour, 10) !== 0) {
      // console.log(nowHour - parseInt(Hour));
      return (
        <View>
          <Text style={styles.msgDate}>
            {Math.abs(nowHour - parseInt(Hour, 10))}시간 전
          </Text>
        </View>
      );
    } else if (nowMinute - parseInt(Minute, 10) !== 0) {
      // console.log(nowMinute - parseInt(Minute));
      return (
        <View>
          <Text style={styles.msgDate}>
            {Math.abs(nowMinute - parseInt(Minute, 10))}분 전
          </Text>
        </View>
      );
    } else if (nowSecond - parseInt(Second, 10) !== 0) {
      // console.log(nowSecond - parseInt(Second));
      return (
        <View>
          <Text style={styles.msgDate}>방금 전</Text>
        </View>
      );
    }
  };
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <TouchableOpacity
      style={styles.messageHeader}
      onPress={() => {
        navigation(`/${brandUserId}`);
      }}>
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
