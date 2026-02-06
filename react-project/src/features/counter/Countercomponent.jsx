import {useDispatch} from "react-redux"

import{increment,decrement} from "./counterSlice"

const Countercomponent=()=>{
    const dispatch=useDispatch();

    return(
        <div>
            <h2>counter controls</h2>
            <button onClick={()=> dispatch(increment())}>add</button>
            <button onClick={()=>dispatch(decrement())}>minus</button>
        </div>
    )
}

export default Countercomponent