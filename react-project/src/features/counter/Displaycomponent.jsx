import { useSelector } from "react-redux"; 

const Displaycomponent=()=>{
    const count =useSelector((state)=>state.counter.value);
    return(
        <div>
            <h2>counter value :</h2>
            <h1>{count}</h1>
        </div>
    )
}

export default Displaycomponent