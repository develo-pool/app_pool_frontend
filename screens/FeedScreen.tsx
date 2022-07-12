import {
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

function FeedScreen() {
  const [GoToMsg, setGoToMsg] = useState('holly shit');
  // useEffect(()=>{
  //   setGoToMsg();
  // }, [])
  const ChangeMSG = () => {
    setGoToMsg('흐앙...');
  }

  // const goToMsgScreen () => {
    
  // }

  return (
    <View>
      <View>
        <Text onPress={ChangeMSG}>{GoToMsg}</Text>
        {/* <Button onPress={()=> goToMsgScreen()} title="대충 메시지 화면 좀 봅시다 그려" /> */}
      </View>
    </View>
  ) 
}

export default FeedScreen;
