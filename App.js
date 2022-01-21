import React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {Card} from 'react-native-paper';
import {Avatar, NativeBaseProvider, Divider} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <View
        style={{
          borderRadius: 10,
          backgroundColor: '#f1f6fe',
          width: '90%',
          alignSelf: 'center',
          flex: 1,
        }}>
        <Divider size={10} backgroundColor="#f1f6fe" />
        <Card
          mode="outlined"
          style={{
            height: '44%',
            width: '96%',
            alignSelf: 'center',
            backgroundColor: '#dde3fa',
            borderRadius: 10,
          }}>
          <View style={{width: '100%', height: '70%'}}>
            <VideoPlayer
              source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
              seekColor="#ed5880"
              tapAnywhereToPause={true}
              disableBack={true}
              onError={e => alert('error in playing video')}
              // onEnd={() => alert('video ended')}
            />
          </View>
          <Text style={{marginLeft: 10, marginTop: 7,color:'black'}}>
            Here the title of video will be given
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Avatar style={{marginLeft: 10,height:45,width:45}} />
            <Text
              style={{
                marginTop: 10,
                fontSize: 16,
                fontWeight: '500',
                marginRight: 40,
                color: '#2C406E',
                fontFamily: 'Roboto',
              }}>
              Raza Khan
            </Text>
            <Text style={{marginTop: 14, fontSize: 12,fontWeight:'500',fontFamily:'Roboto'}}>2k Views</Text>
            <Text style={{marginTop: 14, fontSize: 12,fontWeight:'500',fontFamily:'Roboto', marginRight: 10}}>
              1h ago
            </Text>
          </View>
        </Card>
      </View>
    </NativeBaseProvider>
  );
}

// import React, {useEffect,useState} from 'react';
// import {View, Text, Button,Image, ScrollView} from 'react-native';

// export default function App() {
//   const [data, setData] = useState({ loading: true, result: null })

//   useEffect(getData, [])

//   function getData() {
//     fetch("https://api.spacexdata.com/v4/launches/")
//       .then(response => response.json()
//         .then(result => setData({ loading: false, result: result }))
//       )
//   }

//   return (
//     <ScrollView>
//     <View>
//       {data.loading ? <Text>'Loading...'</Text> : data.result.map((el) => (
//         <>
//         <Text>{el.name}</Text>
//         <Image
//         style={{height:40,width:40}}
//         source={{uri:el.links.patch.small}}
//         />
//         </>
//       ))}

//     </View>
//     </ScrollView>
//   );
// }

// // import React, {useState} from 'react';
// // import {View, Text, TextInput, Button} from 'react-native';

// // export default function App() {
// //   const [name, setName] = useState('');
// //   const [password, setPassword] = useState('');

// //  const signup = () =>{
// //   //  console.log('name',name);
// //   //  console.log('password',password);
// //   alert(name);
// //   setName('');
// //   setPassword('');
// //  }

// //   return (
// //     <View>
// //       <View
// //         style={{
// //           alignSelf: 'center',
// //           backgroundColor: '#f1f1f1',
// //           width: '80%',
// //           marginTop: '10%',
// //         }}>
// //         <TextInput
// //           placeholder="enter your name here"
// //           value={name}
// //           onChangeText={text => setName(text)}
// //         />
// //       </View>
// //       <Text
// //         style={{
// //           fontSize: 20,
// //           color: 'black',
// //           fontWeight: 'bold',
// //           textAlign: 'center',
// //         }}>
// //         {name}
// //       </Text>
// //       <View
// //         style={{
// //           alignSelf: 'center',
// //           backgroundColor: '#f1f1f1',
// //           width: '80%',
// //           marginTop: '10%',
// //         }}>
// //         <TextInput
// //           placeholder="enter your password here"
// //           value={password}
// //           secureTextEntry
// //           onChangeText={text => setPassword(text)}
// //         />
// //       </View>
// //       <Text
// //         style={{
// //           fontSize: 20,
// //           color: 'black',
// //           fontWeight: 'bold',
// //           textAlign: 'center',
// //         }}>
// //         {password}
// //       </Text>
// //       <View style={{width:"60%",alignSelf:'center'}}>
// //       <Button title='Sign up' onPress={signup} />
// //       </View>
// //     </View>
// //   );
// // }
