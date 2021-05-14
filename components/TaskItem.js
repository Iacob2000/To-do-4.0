import React ,{useState}from 'react';
import {View,Text,StyleSheet,Button,Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckBox } from 'react-native-elements';

const TaskItem = props =>  {
    const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    return (
        <View style={styles.task}>
       
        <Text style={styles.title}> {props.title} </Text> 
      <View style={styles.time}>
        <Button onPress={showTimepicker} title="Set term limit!" />
      {show && (
          <DateTimePicker  style={styles.timeset}
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          />
          )}
       </View>
   
      <Text style={styles.urgent}>Urgent!</Text>
      <Text style={styles.important}>!Important!</Text>
      <Text style={styles.noImportant}>No Important</Text>
      <Text style={styles.delete}>Delete</Text>
      
      
   
        </View>
    );
};


const styles = StyleSheet.create({
task: {
    borderColor:'black',
    backgroundColor:'white',
    padding:5,
    top:70,
    alignItems:'center',
    margin:8,
    borderRadius:10,
   
    
  
  },
delete:{
    color:'grey',
    fontSize:20,
    alignSelf:'flex-end',
    right:20
   
   
},
title:{
    fontSize:17,
    left:40,
    alignSelf:'flex-start',
    top:30,
    width:'50%'
   
    
},
important:{
    color:'grey',
    fontSize:15,
    alignSelf:'flex-start',
    top:17
    
},
urgent:{
    color:'grey',
    fontSize:15,
    alignSelf:'flex-end',
    right:140,
    top:40
    

    
},
noImportant:{
    fontSize:15,
    alignSelf:'center',
    color:'grey',
    right:60
    
},
time:{
    fontSize:10,
    alignSelf:'flex-end'
  
   

    
    
},
timeset:{
    fontSize:10,
    position:'relative',
    
   
    
    
    
},
})
export default TaskItem;
