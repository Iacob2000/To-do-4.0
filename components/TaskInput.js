import React , {useState} from 'react';
import {View,TextInput,Button,StyleSheet,Text,KeyboardAvoidingView,TouchableOpacity} from 'react-native'


const TaskInput = props =>  {
    const [enteredState,setEnteredState]= useState('');

    const taskInput = enteredText => {
        setEnteredState(enteredText);
        
    };     
    return (
  <KeyboardAvoidingView>
   <View style={styles.inputContainer}>
        
        <TextInput style ={styles.input} placeholder='Add a new task...' onChangeText={taskInput}
                   value={enteredState}/>
        <TouchableOpacity style={styles.button}>
         <Text   onPress={props.onAddTask.bind(this,enteredState)}>Add Task </Text> 
         </TouchableOpacity>
   </View>
   </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        position:'absolute',
        top:720
        
        },  
      input:{
        borderRadius:10,
        borderColor:'#03adfc',
        borderWidth:2,
        width:'75%',
        left:15,
        backgroundColor:'white',
        textAlign:'center',
        fontSize:15,
        height:50
    
      },
      button:{
        width:'auto',
        height:'auto',
        alignSelf:'center',
        fontSize:20,
        backgroundColor:'white',
        borderRadius:100,
        padding:10,
       
      
        
        
      
    
      }})
export default TaskInput;