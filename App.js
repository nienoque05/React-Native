import React from 'react';
import { useState } from 'react';
import {FontAwesome} from '@expo/vector-icons'
import {View, Text, StyleSheet,TouchableOpacity, TextInput, FlatList} from 'react-native'
import Tarefa from './src/Tarefa';
export default function App(){
  const [tarefas, setTarefas] = useState('')
  const [list, setList] = useState([])
  function handleAdd(){
    if(tarefas === ''){
      return;
    }
    const dados = {
      key: Date.now(),
      item: tarefas
    }

    setList(oldArray => [dados, ...oldArray])
    setTarefas("")
  }
function handleDelete(item){
  let  filtroItem = list.filter((tarefa) => {
    return(tarefa.item !== item)
  })

  setList(filtroItem)

}

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput
        placeholder='Digite sua tarefa...'
        style={styles.input}
        value={setTarefas}
        onChangeText={(text)=> setTarefas(text)}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
            <FontAwesome name='plus' size={20} color="#000"/>
        </TouchableOpacity>
      </View>
      <FlatList
      data={list}
      keyExtractor={(item)=> (item.key)}
      renderItem={({item})=> <Tarefa data={item} deleteItem={()=>handleDelete(item.item)}/>}
      style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  title:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: '24',
    marginTop: '15%',
    paddingStart: '5%',
    marginBottom: 12
  },
  containerInput:{
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input:{
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  buttonAdd:{
    width: '15%',
    height: 44,
    backgroundColor: '#73f7ff',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4

  }, 
  list:{
    flex: 1,
    backgroundColor: '#FBFBFB',
    paddingStart: '4%',
    paddingEnd: '4%'
  }
})