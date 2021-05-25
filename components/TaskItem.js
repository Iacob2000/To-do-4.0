import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import Slider from '@react-native-community/slider';

const TaskItem = (props) => {
  

  const [sliderValue, setSliderValue] = useState(15);
  const [checked, setChecked] = React.useState(false);  
  
  
  return (
<View style={styles.task}>
     
    <View style={{padding:30}}>
       <Slider
          position='absolute'
          width='100%'
          alignSelf='center'
          top= {15}
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
    <View style={{borderRadius:10,position:'absolute' ,top:30}} >
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
    alignSelf:'flex-end',
    top:35,
    position:'absolute'
},
title:{
   
    fontSize:15,
    left:30,
    alignSelf:'flex-start',
    top:35,
    width:'50%',
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute'
    
},
important:{
    color:'red',
    fontSize:12,
    alignSelf:'flex-end',
    position:'absolute',
    marginEnd:'5%'
    
    
},
noImportant:{
    fontSize:12,
    alignSelf:'flex-start',
    color:'#ffe600',
    position:'absolute',
    marginStart:'5%'
   
},


}
)
export default TaskItem;
