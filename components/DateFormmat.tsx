import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


function DateFormmat({value}) {
      // 추후에 날짜 표기를 위한 
  // const date = new Date();
  // const year = date.getFullYear();
  // const month = ('0' + (date.getMonth() + 1)).slice(-2);
  // const day = ('0' + date.getDay()).slice(-2);
  // const hours = ('0' + date.getHours()).slice(-2);
  // const minutes = ('0' + date.getMinutes()).slice(-2);
  // const seconds = ('0' + date.getSeconds()).slice(-2);
  // const dateStr = year + '-' + month + '-' + day;
  // const timeStr = hours + ':' + minutes + ':' + seconds;
  // const now = date.toString();
  const now = new Date();
  const written = new Date(value);
    const betweenTime = Math.floor((now.getTime() - timeValue.getTime()) / 1000 / 60);
    const betweenTimeHour = Math.floor(betweenTime / 60);
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    // const timeSet (()=>{
    //   if (betweenTime < 1) {
    //     return '방금전';
    //   }
    //   if (betweenTime < 60) {
    //       return `${betweenTime}분전`;
    //  }
    //   if (betweenTimeHour < 24) {
    //       return `${betweenTimeHour}시간전`;
    //  }
    //   if (betweenTimeDay < 365) {
    //       return `${betweenTimeDay}일전`;
    //  } else {
    //   `${Math.floor(betweenTimeDay / 365)}년전`;
    //  }

    //  })


  return (
    <View>
      <Text>{console.log(Date.now())}</Text>
      {}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  },
});

export default DateFormmat;
