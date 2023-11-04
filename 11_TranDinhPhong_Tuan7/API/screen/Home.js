import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({navigation, route}) {
  const [name, setName] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
            style={styles.img}
            source={require('./image/icon1.png')}
            resizeMode='contain'
        ></Image>
      </View>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>MANAGE YOUR{'\n'}TASK</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.IconContainer}>
            <Icon
                style={styles.Iconn}
                name='envelope'
            ></Icon>
        </View>
        <View style={styles.textInputContainer}>
            <TextInput style={styles.inputText}
                placeholder='Enter your name'
                placeholderTextColor={'#3333'}
                onChangeText={(text) => {setName(text); console.log(name)}}
            ></TextInput>
        </View>
      </View> 

      <TouchableOpacity 
        style={styles.StartBtn}
        onPress={() => navigation.push('Screen02', {name: name})}
      >
        <Text style={styles.btnText}>GET STARTED</Text>
        <Icon
            style={styles.iconBtn}
            name='arrow-right'
        ></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ImageContainer:{
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: '80%',
    height: '100%',
  },
  titleTextContainer:{
    width: '100%',

  },
  titleText:{
    textAlign: 'center',
    color: '#825edb',
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputContainer:{
    width: '90%',
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d5d6d8',
    borderRadius: 15,
  },
  IconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  Iconn:{
    fontSize: 20,
    // ba
  },
  textInputContainer:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    // backgroundColor: 'red'
  },
  StartBtn:{
    backgroundColor: '#00bdd5',
    width: '40%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: '20%',
  },
  btnText:{
    color: '#fff',
    fontWeight: '500',
  },
  iconBtn:{
    fontWeight: '600',
    color: '#fff',
    padding: 5,
  },
  inputText:{
    width: '100%',
  }
});
