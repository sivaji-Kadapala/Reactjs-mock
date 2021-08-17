import React,{useRef,useEffect} from 'react'

const Ref1 = () => {
    const data = useRef(null);
    const submitHandler=e=>{
        e.preventDefault();
        console.log(data.current.value);
        //Updating
       data.current.value="Hello sivaji"
    }
    useEffect(() => {
      data.current.focus();
    })
    return (
        <div>
            <form onSubmit={submitHandler}>
                <center>
                    <input
                    type="text"
                    placeholder="Enter any one"
                    ref={data}
                />               
                <input type="submit"/>
                 </center>
            </form>
        </div>
    )
}

export default Ref1
