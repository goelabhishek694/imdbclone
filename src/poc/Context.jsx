import React, { createContext, useContext, useState } from "react";
const groceryStore = createContext(); //creates our store
function Context() {
  const [user, setUser] = useState({ name: "Scaler", age: 23 });
  console.log("Context is rendered");
  
  return (
    <div>
      <h3>Prop Drilling</h3>
      <div>⬇️</div>
      {/* <Grandparent user={user} setUser={setUser}/> */}
      <groceryStore.Provider value = {user}>
      <Grandparent/>
      <FarAwayRelative/>
      </groceryStore.Provider>
    </div>
  );
}

// function Grandparent({user, setUser}) {
function Grandparent() {
    console.log("Grandparent is rendered");
  return (
    <>
      <p>Parent</p>
      <div>⬇️</div>
      {/* <Parent user={user} setUser={setUser}/> */}
      <Parent/>
    </>
  );
}

// function Parent({user, setUser}) {
function Parent() {
    console.log("Parent is rendered");
  return (
    <>
      <p>Child</p>
      <div>⬇️</div>
      {/* <Child user={user} setUser={setUser}/> */}
      <Child/>
    </>
  );
}

function FarAwayRelative() {
    console.log("FarAwayRelative is rendered");
    const user = useContext(groceryStore);
  return (
    <>
      <p>FarAwayRelative</p>
      <div>⬇️</div>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </>
  );
}

// function Child({user, setUser}) {
function Child() {
    console.log("Child is rendered");
    const user = useContext(groceryStore);
  return (
    <>
      <p>Child</p>
      <div onClick={()=>setUser({name:"Anuroop", age:Math.random()})}>⬇️</div>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </>
  );
}

export default Context;
