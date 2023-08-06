import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {

// const dispatch = useDispatch();
//   const cash = useSelector(state => state.cash)

//   const addCash = () => {
//     dispatch({type:"ADD_CASH", payload: 1})
//   }
//   const getCash = () => {
//     dispatch({type:"GET_CASH", payload: 1})
//   }

  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const word = useSelector(state => state.word)

  const changeWord = () => {
    dispatch({type:"CHANGE_WORD", payload: inputRef.current.value})
  }
  


return (
    // <>
    //   <div style={{textAlign: "center",
    //                marginTop: "15%",
    //                fontSize: "3rem"}}>{cash}</div>
    //   <div style={{display: "flex",
    //                justifyContent: "center",
    //                marginTop: "3%"}}>
    //     <button style={{fontSize: "3rem",
    //                     width: "250px",
    //                     backgroundColor:"aquamarine",
    //                     border: "1px solid black",}} 
    //                     onClick={() => addCash()}>+</button>
    //     <button style={{fontSize: "3rem",
    //                     marginLeft: "20px",
    //                     width: "250px",
    //                     backgroundColor:"aquamarine",
    //                     border: "1px solid black",
    //                     }} 
    //                     onClick={() => getCash()}>+</button>
    //   </div>
    // </>

    <>
      <div style={{textAlign: "center",
                   marginTop: "15%",
                   fontSize: "3rem"}}>{word}</div>
      <div style={{display: "flex",
                   justifyContent: "center",
                   marginTop: "3%"}}>
        <input ref={inputRef} type="text" onChange={changeWord} id="input"/>
        {/* <button onClick={changeWord}>add</button> */}
      </div>
    </>


  );
}

export default App;
