import React , {useState} from 'react';
import {TextInput,
        StyleSheet,
        Text,
        KeyboardAvoidingView,
        TouchableWithoutFeedback,
        Platform ,
        Keyboard} from 'react-native'

const TaskInput = props =>  {
    const [enteredState,setEnteredState]= useState('');
    const taskInput = enteredText => {
        setEnteredState(enteredText); 
        
    };     
    const addtask = () => {
      props.onAddTask(enteredState) 
      setEnteredState('')
      
  };   
    return (
  <KeyboardAvoidingView
              
              style={styles.inputContainer}>
        <TextInput style ={styles.input} placeholder='Add a new task...' onChangeText={taskInput}
                   value={enteredState}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.button}>
         <Text style={styles.button} onPress={addtask}>Add Task </Text> 
      </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    inputContainer:{
      justifyContent:'space-between',
      flexDirection:'row',
      position:'absolute',
      alignItems:'baseline',
      flex:1,
      bottom:'2%',
      width:'100%',
      padding:'2%',
        },  
      input:{
        borderRadius:15,
        borderColor:'grey',
        borderWidth:2,
        width:'100%',
        backgroundColor:'white',
        padding:'3%',
        fontSize:15,
        alignSelf:'center',
        flexWrap:'wrap',
       
      
      
       
      },
      button:{
        width:'auto',
        height:'auto',
        alignSelf:'center',
        fontSize:15,
        borderRadius:100,
        right:'170%',
        color:'#03adfc',
        position:'relative'

        
      
      }})
export default TaskInput;