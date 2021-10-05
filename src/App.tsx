import { useState } from 'react'
import * as C from './App.styles';
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () =>{

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo', done: true }
  ])

  const handleAddTask = (taskName: string)=>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  const handleChangeItem = (id: number, done: boolean)=>{
    
    let newList = [...list];
    for(let item of newList){
      if(item.id === id){
        item.done = done 
      }
    }
    setList(newList);
  }

  return (
    <C.Container>      
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Area de adição de nova Tarefa */}
        <AddArea onEnter={handleAddTask} />

        {/* Lista de Tarefas */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChangeItem={handleChangeItem} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;