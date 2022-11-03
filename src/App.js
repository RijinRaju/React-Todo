
import './App.css';
import {useState} from 'react'


function App() {

  const[toDos,setToDos] = useState([])
  const[toDo,setToDo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
          <div className="todos">
      {
      toDos.map((Data)=>{

        return(
            <div className="todo">
              <div className="left">
                <input value={Data.status} 
                onChange={(e)=>{
                  console.log(e.target.checked)
                  console.log(Data)


                  setToDos(toDos.filter(Data2=>{
                    if(Data2.id === Data.id){
                      Data2.status = e.target.checked
                    }
                    return Data2
                  }))
                }}
                type="checkbox" name="" id="" />
                <p>{Data.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>{setToDos(toDos=>toDos.filter((data)=>
                {
                     return data.id !== Data.id
                                  
                }))}} className="fas fa-trash"></i>
              </div>
            </div>
        )  
  })
    }

   
      </div>
    </div>
  );
}

export default App;
