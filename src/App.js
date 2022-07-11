import React from 'react';
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {Chart} from "./components/Chart/Graphic";

const App = () => {

    const user = useSelector(selectUser);
    return(
        <div>
            {user ? <Chart/> : <Login/>}
        </div>
    )
}
export default App;
