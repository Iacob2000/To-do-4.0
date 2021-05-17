import React ,{useState}from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity, Touchable} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Checkbox } from 'react-native-paper';





 const TaskItem = props =>  {
  const [checked, setChecked] = React.useState(false);  

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
        <View style={{padding:30}}>
        <Text style={styles.title}> {props.title} </Text> 
         
            <Checkbox style={{alignSelf:'flex-start'}}
                   status={checked ? 'checked' : 'unchecked'}
                   onPress={() => {
                     setChecked(!checked);
                  }}
                  />
 

     
      <View style={styles.time}>
        <Button  onPress={showTimepicker} title="Set term limit!" />

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
      
      <Text onPress={props.onDelete} style={styles.delete}>Delete</Text> 
      
      
      </View>
        </View>
    );
};


const styles = StyleSheet.create({
task: {
    borderColor:'black',
    backgroundColor:'white',
    padding:10,
    position:'relative',
    margin:8,
    borderRadius:10,
   
    
  
  },
delete:{
    color:'blue',
    fontSize:17,
    alignSelf:'flex-start',
    top:25,
    
    
   
   
},
title:{
    fontSize:17,
    left:40,
    alignSelf:'flex-start',
    top:30,
    width:'50%',
    flexDirection:'row',
    justifyContent:'space-between',
   
   
    
},
important:{
    color:'grey',
    fontSize:15,
    alignSelf:'flex-start',
    position:'absolute'
    
},
urgent:{
    color:'grey',
    fontSize:15,
    alignSelf:'flex-end',
    position:'absolute'

    

    
},
noImportant:{
    fontSize:15,
    alignSelf:'center',
    color:'grey',
    position:'absolute'
   
    
},
time:{
    fontSize:5,
    alignSelf:'flex-end',
    position:'absolute',
    top:40,


    
},
timeset:{
    fontSize:5,
    position:'relative',
   

  
    
    
    
},
checkbox:{
  fontSize:17,
 
  alignSelf:'flex-start',
  top:30,
  width:'50%'

}
}
)
export default TaskItem;
