
import firestore from "./firestore"
import { getDoc , getDocs , collection , onSnapshot , addDoc  } from "firebase/firestore";

async function useFirebase(props){



console.log("firebase file starts")

const colref= collection(firestore, 'task');
console.log(props.task.value)
 addDoc(colref, {
    task : props.task.value
})


console.log('break')





}

export default useFirebase;