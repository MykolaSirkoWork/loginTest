import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/userSlice";
import React from 'react';
import classes from "./chart.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import data from '../../data.json';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const Chart = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
     const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: user.userName
            },
        },
    };
     const labels = data.map(i => i.date);
     const chartData = {
         labels,
         datasets: [
             {
                 label: 'Patients 2020',
                 data: data.map(i => i.value),
                 borderColor: 'rgb(53, 162, 235)',
                 backgroundColor: 'rgba(53, 162, 235, 0.5)',
             }
         ]
     }
     const handleLogOut = () =>{
         dispatch(logout());
     }
    return(
        <div className={classes.container}>
            <div className={classes.chart}>
                <Line  options={options} data={chartData}/>
                <button className={classes.btn} onClick={handleLogOut}>Log out</button>
            </div>
        </div>
    )
}
