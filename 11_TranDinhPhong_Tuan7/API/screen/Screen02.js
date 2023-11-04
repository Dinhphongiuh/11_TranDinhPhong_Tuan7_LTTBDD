import { StyleSheet, SafeAreaView , Text, View, Image, TextInput, TouchableOpacity, ScrollView, } from 'react-native';
import {CheckBox} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';

export default function Screen02({navigation, route}) {
  // const [checkBox, setcheckBox] = useState(true);

  // const [listJobs, setListJobs] = useState([
  //   {id: 1, jobName: 'To check email', checkBox: true},
  //   {id: 2, jobName: 'UI task web page', checkBox: true},
  //   {id: 3, jobName: 'Learn javascript basic', checkBox: true},
  //   {id: 4, jobName: 'Learn HTML Advance', checkBox: true},
  //   {id: 5, jobName: 'Medial App UI', checkBox: true},
  //   {id: 6, jobName: 'Learn Java', checkBox: true},
  // ]);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('https://6544b1345a0b4b04436cc570.mockapi.io/Jobs')
      .then((response) => response.json())
      .then((jobs) => setJobs(jobs))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const { name } = route.params;

  // cau c

  // useEffect(() => {
  //   const {params} = route;
  //   if (params && params.newJob)
  //   {
  //     const newJob = {
  //       id: listJobs.length + 1,
  //       jobName: params.newJob,
  //       checkBox: true,
  //     }

  //     setListJobs((prevList) => [...prevList, newJob]);
  //   }
  // }, [route.params]);

  useEffect(() => {
    const updatedJob = route.params.updatedJob;
    const newJob = route.params.newJob;
    if (newJob) {
      // Thêm công việc mới
      const newJobItem = {
        id: listJobs.length + 1,
        jobName: newJob,
        checkBox: true,
      };
      setListJobs((prevList) => [...prevList, newJobItem]);
    } else if (updatedJob) {
      // Cập nhật công việc
      const updatedList = listJobs.map((job) => {
        if (job.jobName === updatedJob) {
          return { ...job, jobName: updatedJob };
        }
        return job;
      });
      setListJobs(updatedList); 
    }
  }, [route.params.newJob, route.params.updatedJob]);
  

  const handleCheckBoxChange = (itemId) => {
    const updatedList = [...jobs];
    const itemIndex = updatedList.findIndex(item => item.id === itemId);

    if (itemIndex !== -1)
    {
      updatedList[itemIndex].checkBox = !updatedList[itemIndex].checkBox;
      setJobs(updatedList);

      const updatedJob = updatedList[itemIndex];
      fetch(`https://6544b1345a0b4b04436cc570.mockapi.io/Jobs/${updatedJob.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({checkBox : updatedJob.checkBox}),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data đã được cập nhật: ', data);
      })
      .catch((error) => console.error('lổi khi cập nhật dữ liệu: ', error));
    }
  };

  // search 
  const [searchText, setSeacchText] = useState('');
  const filteredJobs = jobs.filter((job) => {
    return job.jobName.toLowerCase().includes(searchText.toLowerCase());
  })

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

      <View style={styles.searchContainer}>
        <View style={styles.IconSearchContainer}>
          <Image
            style={styles.iconimg}
            resizeMode='contain'
            source={require('./image/searchIcon.png')}
          ></Image>
        </View>
        <TextInput 
          style={styles.textInput}
          placeholder='Search'
          // value='searchText'
          onChangeText={setSeacchText}
        ></TextInput>
      </View>

      <View style={styles.listContainer}>
        <ScrollView style={[styles.listContainerr]}>
          {filteredJobs.map((listjob => (
            <View style={styles.jobPr}>
              <View style={styles.jobpr1}>
                <CheckBox
                  checked={listjob.checkBox}
                  onPress={() => handleCheckBoxChange(listjob.id)}
                ></CheckBox>
                <Text style={styles.jobName}>{listjob.jobName}</Text>
              </View>
              <TouchableOpacity 
                style={styles.editIconBtn}
                onPress={() => navigation.push("Screen04", {name, jobToEdit: listjob})}
              >
                <Image
                  style={styles.editIcon}
                  source={require('./image/editIcon.png')}
                  resizeMode='contain'
                ></Image>
              </TouchableOpacity>
            </View>
          )))}
        </ScrollView>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.push("Screen03", {name})}
        style={styles.btnAdd}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
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
  searchContainer:{
    width: '90%',
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#cfd2d8',
  },
  IconSearchContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    // width: 50,
    // height: '100%',
    padding: 10,
  },
  iconimg:{
    width: 30,
    height: 30,
  },
  textInput:{
    width: '100%',
    fontSize: 22,
  },
  listContainer:{
    minHeight: 100,
    width: '90%',
    // backgroundColor: 'red',
  },
  listContainerr:{
    height: 300,
    minHeight: 300,
  },
  jobPr:{
    backgroundColor: '#e5e8ea',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  jobpr1:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  editIconBtn:{
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },  
  editIcon:{
    width: 30,
    height: 30,
    // padding: 10,
  },

  // 
  btnAdd:{
    backgroundColor: '#25c3d9',
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  addText:{
    fontSize: 60,
    color: '#fff',
    fontWeight: '200',
  }
});
