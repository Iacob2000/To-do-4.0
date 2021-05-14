import React , {useState} from 'react';
import {View,TextInput,Button,StyleSheet,Text} from 'react-native'


const TaskInput = props =>  {
    const [enteredState,setEnteredState]= useState('');

    const taskInput = enteredText => {
        setEnteredState(enteredText);
    };     
    return (
   <View style={styles.inputContainer}>
        
        <TextInput style ={styles.input} placeholder='Add a new task...' onChangeText={taskInput}
                   value={enteredState}/>
  
         <Text style={styles.button} title='Add task' onPress={props.onAddTask.bind(this,enteredState)}> Add Task</Text> 
         
   </View>
    );
};


const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        top:20},  
      input:{
        borderRadius:10,
        borderColor:'#03adfc',
        borderWidth:2,
        width:'70%',
        left:15,
        backgroundColor:'white',
        textAlign:'center',
        fontSize:15,
        top:40,
        height:50
    
      },
      button:{
        width:'auto',
        height:'auto',
        color:'blue',
        top:60,
        right:20,
        fontSize:20
      
        
        
      
    
      }})
export default TaskInput;