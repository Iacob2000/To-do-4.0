
import React, {useState} from 'react';
import { StyleSheet,  View ,Text,FlatList, SafeAreaView,Image, ImageBackground, Dimensions} from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [task,setTask]= useState([]);
  const addTasks = taskTitle => {
   setTask(currentTask => [
     ... currentTask ,
    { id: Math.random().toString(),value: taskTitle}]);
   
    };
    const removeTasks = taskId => {
      setTask(currentTask => {
        return currentTask.filter( (Task) => Task.id !== taskId);

      });
      }
  
      return ( 
  <SafeAreaView style ={{flex:1}}> 
   <StatusBar style={{backgroundColor:'black'}}></StatusBar>    
    <View style={styles.view}>

        <Text style ={styles.title}>Planing your time!</Text>
        <View style={styles.title2}>
        <Image  source={require('./assets/clock.png')} /> 
        </View>
       <FlatList  style ={styles.list}
           keyExtractor = {(item,index) => item.id}
           data = {task}
           renderItem = { itemData => 
            <TaskItem  
            id ={itemData.item.id} 
            onDelete= {removeTasks.bind(this,itemData.item.id)}
            title ={itemData.item.value} />
          }     
        />    
    </View>
          <TaskInput onAddTask ={addTasks}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view:{
    height:'130%',
    backgroundColor:'#03adfc'
  },
  title:{
    fontSize: 30,
    color:'white',
    textAlign:'center',
    top:'4%'
  },
  title2:{ 
    flexWrap:'wrap',
    alignSelf:'center',
    top:'20%',
    right:'5%',
   
    position:'relative'
  },
  list:{
    position:'absolute',
    height:Dimensions.get('window').height > 700 ? '65%' : '60%',
    width:'100%',
    top:'10%'
  }
});
