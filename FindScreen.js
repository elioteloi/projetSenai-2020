import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native'
import Rating from '../components/Rating'
const DATA = [
  {id: 1, text: ' joao, Metal, (48)XXXXXX'},
  {id: 2, text: ' maria, MPB, (48)XXXXXX'},
  {id: 3, text: 'eduardo, Funk,(48)XXXXXX'},
  {id: 4, text: ' joao, Genero: Musica Classica, (48)XXXXXX'},
  {id: 5, text: ' joao,  Genero: Rap, (48)XXXXXX'},
  {id: 6, text: ' joao, Bossa Nova, (48)XXXXXX'},
  {id: 7, text: ' joao,  Jazz,numero:(48)XXXXXX'},
  {id: 8, text: 'maria,  Rock, (48)XXXXXX'},
  {id: 9, text: ' eduardo, K-pop, (48)XXXXXX'},
  {id: 10, text: ' joao, Raggato, (48)XXXXXX'},
  {id: 11, text: ' joao, Lounge, (48)XXXXXX'},
  {id: 12, text: ' joao, Tecno, (48)XXXXXX'},
  {id: 14, text: ' joao, electro, (48)XXXXXX'},
  {id: 15, text: ' joao, RnB, (48)XXXXXX'},
  {id: 16, text: ' joao, Blues, (48)XXXXXX'},
  {id: 17, text: ' joao, Country, (48)XXXXXX'},
  {id: 18, text: ' joao, Folk, (48)XXXXXX'},
  {id: 19, text: ' joao, inde, (48)XXXXXX'},
  {id: 20, text: ' joao, Salsa, (48)XXXXXX'},
  {id: 21, text: ' joao, Baccata, (48)XXXXXX'},
  {id:22, text: ' joao,  Tecno, (48)XXXXXX'},

  
]

const App = () => {
  const [data, setData] = useState(DATA)
  const [isRender, setisRender] = useState(false)
  const [isModalVisible, setisModalVisible] = useState(false)
  const [inputText, setinputText] = useState()
  const [editItem, seteditItem] = useState()

  const onPressItem = (item) => {
    setisModalVisible(true);
    setinputText(item.text)
    seteditItem(item.id)
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
      style={styles.item}
      onPress={() =>onPressItem(item)}
      >
        <Image source={require("../assets/people.png")}  style={{height:50, width:50, padding: 10,}}/>
          <Text style={styles.text}>{item.text}</Text>
          <Rating  style={styles.rating} rating={1} numStars={5} starColor='black'/>
      </TouchableOpacity>
    )
  }

  const handleEditItem = (editItem) => {
    const newData = data.map(item => {
      if (item.id == editItem) {
        item.text = inputText
        return item
      }
      return item
    })
    setData(newData)
    setisRender(!isRender)
  }

  const onPressSaveEdit = () => {
    handleEditItem(editItem)
    setisModalVisible(false)
  }

  return (
  <SafeAreaView style={styles.container}>
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      extraData={isRender}
   />
   <Modal
   animationType='fade'
   visible={isModalVisible}
   onRequestClose={() => setisModalVisible(false)}
   >
     <View style={styles.modalView}>
        <Text style={styles.text}>Change Text: </Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => setinputText(text)}
        defaultValue={inputText}
        editable={true}
        multiline={false}
        maxLength={2000}
        />
        
        <TouchableOpacity
         onPress={() => onPressSaveEdit()}
         style={styles.touchableSave}
        >
          <Text style={styles.text}>Save</Text>

        </TouchableOpacity>
     </View>
   </Modal>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1
},
item: {
  borderBottomColor: 'grey',
  alignItems: 'center',
  width: 350, 
  marginTop: 20,
  marginBottom: 1,
  marginLeft: 30,
  marginEnd: 200,
  marginRight: 0,
  height: 250,
  borderWidth: 5,
  borderRadius: 10,
  
},
text: {
  marginVertical: 30,
  fontSize: 25,
  fontWeight: 'bold',
  marginLeft: 10
},
textInput: {
  width: '90%',
  height: 70,
  borderColor: 'grey',
  borderWidth: 1,
  fontSize: 25,
},
modalView: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
TouchableSave: {
  backgroundColor: 'orange',
  paddingHorizontal: 100,
  alignItems: 'center',
  marginTop: 20,
  
},
rating:{
 padding: 10,
}
});

export default App;