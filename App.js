
import React, {useState} from 'react';
import { StyleSheet,  View ,TextInput,Button,Text} from 'react-native';

export default function App() {
  const [enteredState,setEnteredState]= useState('');
  const [task,setTask]= useState([]);
  const taskInput = (enteredState) => {
  setEnteredState(enteredState);

  }
  const addTasks = ( ) => {
   setTask(currentTask => [... currentTask,enteredState]);
    }

      return (
    <View style={styles.view}>
        <Text style ={styles.title}>Planing your time!</Text>
      <View style={styles.inputContainer}>
  
        <TextInput style ={styles.input} placeholder='Add a new task...' onChangeText={taskInput}
                   value={enteredState} />
  
         <Button style={styles.button} title='Add task' onPress={addTasks}/>
    
      </View>
      <View >
        {task.map(userTask => (         
          <View style={styles.task}>
            <Text key ={userTask}> {userTask} </Text> 
          </View>))}
      </View>
          </View>
  );
}

const styles = StyleSheet.create({
  view:{
    padding:40,
    top:'3%',
    height:'auto'
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:"space-between",
    top:20},  
  input:{
    borderRadius:10,
    borderColor:'black',
    borderWidth:2,
    width:'80%',
    padding:7,
    marginBottom:10,

  },
  button:{
    width:'auto',
    height:'auto',
  

  },
  title:{
    fontSize: 40,
   
  },
  task: {
    borderColor:'black',
    backgroundColor:'grey',
    padding:10,
    width: '90%'
  }
});
