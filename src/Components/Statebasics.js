import React, {useState} from "react";

const Statebasics=()=>{
    const [name, setName]= useState("");

    function updateName(event){
        setName(event.target.value)
    }


    return(
        <div>
            <view>
            <input type="text" onChange={updateName}/>
            <button >Submit</button>
            <p>{name}</p>
            </view>
        </div>
    )
}

export default Statebasics;