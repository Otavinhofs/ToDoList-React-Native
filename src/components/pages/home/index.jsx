  import React, {useState, useCallback, useEffect} from 'react';
  import {View, Text, SafeAreaView, StatusBar, TouchableOpacity, 
  Image, FlatList, Modal, TextInput} from 'react-native';
  import TaskList from '../../TaskList';
  import * as Animatable from 'react-native-animatable'; 
  import { stylesHome } from './styles';
  import AsyncStorage from '@react-native-async-storage/async-storage'


  const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)
  export default function Home() {

  const [task, setTask] = useState([])
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')

  //Buscando todas as tarefas ao iniciar o app 
  useEffect(() => {
    async function loadTask() {
      const taskStorage = await AsyncStorage.getItem('@task')
      if (taskStorage) {
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTask();

  }, []);

  //savando tarefas
  useEffect(() => {

    async function saveTask() {
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }

    saveTask();

  }, [task]);

  function handleAdd() {
      if(input === '') return;

      const data = {
        key:input,
        task:input
      };

      setTask([...task, data]);
      setOpen(false)
      setInput('')
  }

// pega todos os itens do array que forem diferente do data.key e cria um
// array novo
  const handleDelete = useCallback( (data) => {
    const find = task.filter(item => item.key !== data.key) 
    setTask(find)
  })

  return(
    <SafeAreaView style={stylesHome.container}>

      <StatusBar 
      backgroundColor={'#171d31'}
      barStyle={'light-content'}/>

      <View style={stylesHome.content}>

          <Text style={stylesHome.title}>Minhas tarefas</Text>

      </View>

      <FlatList
      marginHorizontal={10}
      marginTop ={ 30 }
      showsHorizontalScrollIndicator={false}
      data={task}
      keyExtractor={(item) => String(item.key)}
      renderItem={({ item }) => <TaskList data={item} handleDelete={handleDelete}/>}
      />

      <Modal animationType='slide' transparent={false} visible={open}>
          <SafeAreaView style={stylesHome.modal} >

              <View style={stylesHome.header}> 

                  <TouchableOpacity style={stylesHome.backButton} onPress={ () => setOpen(false)}>
                      
                      <Image
                      style={stylesHome.backButton}
                      source={require('../../../../assets/backButton.png')}
                      />
                    
                  </TouchableOpacity>

                  <Text style={stylesHome.title}>Nova tarefa</Text>
              </View>

              <Animatable.View style={stylesHome.body}
              animation='fadeInUp'
              duration={1500}
              >

                  <TextInput 
                  multiline={true}
                  placeholderTextColor='#747474'
                  autoCorrect={false}
                  placeholder='O que precisa fazer hoje?'
                  style={stylesHome.input}
                  value={input}
                  onChangeText={(texto) => setInput(texto)}
                  />

                  <TouchableOpacity style={stylesHome.handleAdd} onPress={handleAdd}>
                      <Text style={stylesHome.handleAddText}>Cadastrar</Text>
                  </TouchableOpacity>

              </Animatable.View>
          </SafeAreaView>
      </Modal>

      <AnimatedBtn
      style={stylesHome.plusButton}
      animation='bounceInUp'
      duration={1500}
      onPress={ () => setOpen(true) }
      >

          <Image
          style={stylesHome.plusButton} 
          source={require('../../../../assets/plusIcon.png')}/>

      </AnimatedBtn>
      
    </SafeAreaView>
  )
}

