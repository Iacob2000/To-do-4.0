
import React, {useState} from 'react';
import { StyleSheet,  View ,TextInput,Button,Text,FlatList} from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

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
    <View style={styles.view}>
        <Text style ={styles.title}>Planing your time!</Text>
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
          <TaskInput onAddTask ={addTasks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    
    top:'3%',
    height:'100%',
    backgroundColor:'#03adfc'
  },
 
  title:{
    fontSize: 40,
    color:'white',
    textAlign:'center',
    top:15
   
   
  },
  list:{
    position:'absolute',
    height:'75%',
    width:'100%',
    top:70

    

    

  }


});
