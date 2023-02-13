import React, { useEffect, useState } from 'react';

function App(props) {
  const [objData, setObjData] = useState([{ data: "One" }, { data: "Three" }]);
  const [anotherObjData, setAnotherObjData] = useState([{ name: "Andi", age: 26 }, { name: "Ands", age: 27 }]);
  const [isValidated, setIsValidated] = useState(true)
  const [staticString, setStaticString] = useState("This is a string");

  useEffect(() => {
    const oldData = [...objData]
    const anotherOldData = [...anotherObjData]
    oldData[1] = { data: "Two" }
    anotherOldData[0].name = "Andrei"
    anotherOldData[0].age = 28
    setObjData(oldData)
    setAnotherObjData(anotherOldData)
    setIsValidated(true)
    setStaticString("This is an updated string")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // execute once

  if (isValidated) {
    return ( 
      <div style={{ fontSize: 64 }}>
        <p>{objData[1]?.data}</p>
        <p>{anotherObjData[0]?.name}</p>
        <p>{anotherObjData[0]?.age}</p>
        <p>{staticString}</p>
      </div>
    )
  }
  
}

export default App;