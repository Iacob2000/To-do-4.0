import React , {useState} from 'react';
import {View,TextInput,Button,
  StyleSheet,Text,KeyboardAvoidingView,
  TouchableWithoutFeedback,Platform ,Keyboard} from 'react-native'

  import Slider from '@react-native-community/slider';

const TaskInput = props =>  {
  const [sliderValue, setSliderValue] = useState(15);
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
         <Text  onPress={props.onAddTask.bind(this,enteredState)}>Add Task </Text> 
         </TouchableWithoutFeedback>
         </KeyboardAvoidingView>

       
  
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    inputContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        position:'absolute',
        alignItems:'baseline',
        flex:1,
        bottom:60,
        marginBottom:10

       
        
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