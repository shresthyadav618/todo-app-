import logo from './logo.svg';
import './App.css';
import firestore from "./firestore"
import Firebase from "./firebase"
// import './task.css'
import  { getDocs , collection, onSnapshot , deleteDoc , doc } from "firebase/firestore"
import { useEffect,useState } from 'react';

function useApp() {
  const colref= collection(firestore,'task');
console.log("0")

const [ini,change]=useState();




function handleClick(e){
const xx=e.target.parentElement.parentElement.getAttribute('id')
const docref=doc(firestore,'task',xx);

deleteDoc(docref)
getDocs(colref).then((snap)=>{
  let newnew=snap.docs.map((doc)=>{
    // console.log(doc)
   return (<div className="ett" id={doc.id}>
    <div className='fixx'>
   <div className="ett1">{doc.data().task}</div>
   <div className="ett2" onClick={handleClick}>X</div>
   </div>
  </div>)
    
  })
  
  change(newnew)
})


}

// onSnapshot(colref,(snap)=>{
//   let newnew;
//   newnew=snap.docs.map((doc)=>{
//     // console.log(doc)
//    return (<div className="ett" id={doc.id}>
//     <div className='fixx'>
//    <div className="ett1">{doc.data().task}</div>
//    <div className="ett2" onClick={handleClick}>X</div>
//    </div>
// </div>)
    
//   })
  
//   change(newnew)
// })

let newnew;
useEffect(()=>{
  console.log("1")
  let con=document.getElementsByClassName("add-tasks")[0];
  const colref=collection(firestore, 'task')
  // console.log("1")
  
getDocs(colref).then((snap)=>{
  // console.log("2")
  newnew=snap.docs.map((doc)=>{
    // console.log(doc)
   return (<div className="ett" id={doc.id}>
    <div className='fixx'>
   <div className="ett1">{doc.data().task}</div>
   <div className="ett2" onClick={handleClick}>X</div>
   </div>
</div>)
    
  })
  
  change(newnew)
})

},[])


console.log("2")

 function handleSubmit(e){
e.preventDefault();

let con=document.getElementsByClassName("my-form")[0];

{/* <Firebase con={con} dothechange={dothechange}/>  */}
Firebase(con)

con.reset();

getDocs(colref).then((snap)=>{
let newnew=snap.docs.map((doc)=>{
  // console.log(doc)
  return (<div className="ett" id={doc.id}>
    <div className='fixx'>
  <div className="ett1">{doc.data().task}</div>
  <div className="ett2" onClick={handleClick}>X</div>
  </div>
</div>)
   
 })

change(newnew)
})
}




const mystyles={
  width: '50%',
  backgroundColor: 'gray',
  color: 'black',
  position: 'relative',
  textAlign: 'left',
  display: 'flex'
}


console.log(ini)

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className='my-form'>
        <label for="task">Enter Task</label>
        <input name="task"></input>
        <button>Add</button> 
      </form>

<div className='tasks'>

<div className='add-tasks'> 
{ini}
</div>


</div>

    </div>
  );
}

export default useApp;
