import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';



 
const TaskItem = (props) => {
  

  const [sliderValue, setSliderValue] = useState(15);
  const [checked, setChecked] = React.useState(false);  
  
  
  return (
<View style={styles.task}>
      <View style={styles.container}>
   
    </View>
    <View style={{padding:30}}>
       <Slider
          position='absolute'
          width='100%'
          alignSelf='center'
          top= '25%'
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={
            (sliderValue) => setSliderValue(sliderValue)
          }
        />
    <Text style={styles.title}> {props.title} </Text> 
    <View style={{ width:'11%',height:'auto',right:20,top:3,borderRadius:10,flexWrap:'wrap' }} >
        <Checkbox 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              />
  </View>
   
  <Text style={styles.important}>Important!</Text>
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
    position:'relative',
    padding:3,
    margin:8,
    borderRadius:10,
    height:'auto'
  },
delete:{
    color:'#349beb',
    fontSize:17,
    alignSelf:'center',
    top:15,
},
title:{
    fontSize:15,
    left:20,
    alignSelf:'flex-start',
    top:30,
    width:'50%',
    flexDirection:'row',
    justifyContent:'space-between',
},
important:{
    color:'red',
    fontSize:15,
    alignSelf:'flex-end',
    position:'absolute',
    marginEnd:'5%'
    
    
},
noImportant:{
    fontSize:15,
    alignSelf:'flex-start',
    color:'#ffe600',
    position:'absolute',
    marginStart:'5%'
   
},
time:{
    alignSelf:'flex-end',
    position:'absolute',
    top:52,
},
timeset:{
    fontSize:5,
    position:'relative',
},

}
)
export default TaskItem;
