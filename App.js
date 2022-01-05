import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export default function App() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        seekColor="#ed5880"
        tapAnywhereToPause={true}
        disableBack={true}
        onError={e => alert('error in playing video')}
        onEnd={() => alert('video ended')}
        // onEnd={() => {return <Button title='ended' onPress={alert('okaaa')}/>}}
      />
    </View>
  );
}