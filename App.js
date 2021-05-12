
import React, {useState} from 'react';
import { StyleSheet,  View ,TextInput,Button,Text,FlatList} from 'react-native';

export default function App() {
  const [enteredState,setEnteredState]= useState('');
  const [task,setTask]= useState([]);
  const taskInput = (enteredState) => {
  setEnteredState(enteredState);

  }
  const addTasks = ( ) => {
   setTask(currentTask => [... currentTask ,
    { key: Math.random().toString(),value: enteredState}]);
    };

      return (
    <View style={styles.view}>
        <Text style ={styles.title}>Planing your time!</Text>
      <View style={styles.inputContainer}>
        
        <TextInput style ={styles.input} placeholder='Add a new task...' onChangeText={taskInput}
                   value={enteredState} />
  
         <Button style={styles.button} title='Add task' onPress={addTasks}/>
    
      </View>
      <FlatList 
        keyExtractor = {(item,index) => item.id}
        data = {task}
        renderItem = { itemData => (
          <View style={styles.task}>
            <Text > {itemData.item.value} </Text> 
          </View>
        )}     
        />
          </View>
  );
}

const styles = StyleSheet.create({
  view:{
    
    top:'3%',
    height:'100%',
    backgroundColor:'#03adfc'
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    top:20},  
  input:{
    borderRadius:10,
    borderColor:'blue',
    borderWidth:2,
    width:'70%',
    left:15,
    backgroundColor:'white',
    textAlign:'center',
    fontSize:18,
    top:10,
    height:50

  },
  button:{
    width:'auto',
    height:'auto',
  
    
    
  

  },
  title:{
    fontSize: 40,
    color:'white',
    textAlign:'center',
    top:15
   
   
  },
  task: {
    borderColor:'black',
    backgroundColor:'white',
    padding:18,
    top:70,
    alignItems:'center',
    margin:8,
    borderRadius:10
  
  }
});
