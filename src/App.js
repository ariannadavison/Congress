import './App.css';
import Bill from './components/Bill'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BillDetails from './components/BillDetails'
import { useState } from "react";
import NavBar from './components/NavBar';
import Login from './components/Login'
import CreateUser from './components/CreateUser';
import UserHistory from './components/UserHistory'
function App() {
  const [billID, setBillID] = useState([]);
  const [congress, setCongress] = useState([]);
  const [userID, setUserID] = useState(localStorage.getItem("userID").split(","));
  const [usernameVal, setUsernameVal] = useState("")
  const [passwordVal, setPasswordVal] = useState("")
  console.log(userID)
  if (userID.length === 0) {
    return <Login setUserID={setUserID} />
  }
  return (
    <div className="App">
      <BrowserRouter>

        {/* <Home /> */}

        {/* <NavBar /> */}
        <NavBar setUserID={setUserID} />

        <Switch>
          {/* <Route path='/' component={Bill} /> */}
          <Route path='/Bill' >
            <Bill setCongress={setCongress} setBillID={setBillID} />
          </Route>
          <Route path='/Home' component={Home} />
          <Route path='/BillDetails' userID={userID} component={BillDetails} >
            <BillDetails userID={userID} billID={billID} congress={congress} setCongress={setCongress} setBillID={setBillID} />
          </Route>
          <Route path='/Login' component={Login}>
            <Login setUserID={setUserID} usernameVal={usernameVal} passwordVal={passwordVal} setPasswordVal={setPasswordVal} setUsernameVal={setUsernameVal} /></Route>
          <Route path='/createlogin' component={CreateUser} />
          <Route path='/history'>
            <UserHistory userID={userID} billID={billID} congress={congress} />
          </Route>
        </Switch>

        {/* <BillService userID={userID} /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
