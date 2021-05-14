import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

const TaskItem = props =>  {
    return (
        <View style={styles.task}>
            <Text style={styles.title}> {props.title} </Text> 
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
    padding:10,
    top:70,
    alignItems:'center',
    margin:8,
    borderRadius:10,
    
  
  },
delete:{
    color:'grey',
    fontSize:20,
    alignSelf:'flex-end',
   
},
title:{
    fontSize:17,
    top:10,
    alignSelf:'flex-start',
    left:40
},
important:{
    color:'grey',
    fontSize:15,
    alignSelf:'flex-start',
    top:25
},
urgent:{
    color:'grey',
    fontSize:15,
    alignSelf:'flex-end',
    right:110,
    top:45

    
},
noImportant:{
    fontSize:15,
    top:8,
    alignSelf:'center',
    color:'grey',
    right:50
    
},
})
export default TaskItem;
