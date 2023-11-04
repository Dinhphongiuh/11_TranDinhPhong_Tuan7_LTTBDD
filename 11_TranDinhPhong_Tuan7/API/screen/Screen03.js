import { StyleSheet, SafeAreaView , Text, View, Image, TextInput, TouchableOpacity, ScrollView, } from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Screen02({navigation, route}) {

  const { name } = route.params;
  console.log(name);

  const [jobInput, setJobInput] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon
            style={styles.backIcon}
            name='arrow-left'
          ></Icon>
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.ImageUserContainer}>
            <Image
              style={styles.imageUser}
              source={require('./image/userIcon.png')}
            ></Image>
          </TouchableOpacity>
          <View style={styles.NameContainer}>
            <Text style={styles.nameText}>Hi {name}</Text>
            <Text style={styles.chaoText}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.ContainerAddText}>
        <Text style={styles.addText}>ADD YOUR JOB</Text>
      </View>

      <View style={styles.InputContainer}>
        <View style={styles.IconContainer}>
            <Image 
                style={styles.IconList}
                resizeMode='contain'
                source={require('./image/listIcon.png')}
            ></Image>
        </View>
        <TextInput 
            style={styles.inputText}
            placeholder='input put your job'
            onChangeText={(text) => setJobInput(text)}        
        >

        </TextInput>
            
      </View>

      <TouchableOpacity
        style={styles.FinishBtn}
        onPress={() => navigation.navigate("Screen02", {name: name, newJob: jobInput})}
      >
        <Text style={styles.btnText}>FINISH</Text>
        <Icon
            style={styles.iconRight}
            name='arrow-right'
        ></Icon>
      </TouchableOpacity>

      <View style={styles.imgContainer}>
        <Image 
            style={styles.img}
            source={require('./image/icon1.png')}
        ></Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  HeaderContainer:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtn:{
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon:{
    fontSize: 25,
    color: '#686b70',
  },
  profileContainer:{
    flexDirection: 'row',
  },
  NameContainer:{
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameText:{
    fontSize: 25,
    fontWeight: 'bold',
    padding: 2,
    marginLeft: 5,
    color: '#484c50',
  },
  chaoText:{
    color: '#848789',
  },
  ImageUserContainer:{
    // width: 100,
    height: 50,
  },
  imageUser:{
    width: 60,
    height: 60,
  },
  ContainerAddText:{
    width: '90%',

  },
  addText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
  },
  InputContainer:{
    width: '90%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d3d4d6',
    borderRadius: 10,
    height: 50,
  },
  IconContainer:{
    // width: 40,
    // height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  IconList:{
    width: 30,
    height: 30,
  },
  inputText:{
    width: '100%',
    fontSize: 20,
  },
  FinishBtn:{
    flexDirection: 'row',
    backgroundColor: '#24c3d9',
    height: 45,
    width: '50%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
  iconRight:{
    color: '#fff',
    marginLeft: 10,
  },
  imgContainer:{
    width: '90%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 200,
    height: 200,
  }
});
