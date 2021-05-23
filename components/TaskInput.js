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
    return (
  <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"} 
              style={styles.inputContainer}>
        <TextInput style ={styles.input} placeholder='Add a new task...' onChangeText={taskInput}
                   value={enteredState}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.button}>
         <Text style={styles.button} onPress={props.onAddTask.bind(this,enteredState)}>Add Task </Text> 
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
      padding:2,
        },  
      input:{
        borderRadius:15,
        borderColor:'grey',
        borderWidth:2,
        width:'100%',
        backgroundColor:'white',
        padding:'2%',
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