import classes from './DataItem.module.css';
import Button from "./Button";
import {useEffect, useState} from "react";
import Todo from "./Todo";
import Chart from "./Chart";

function DataItem() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedData, setLoadedData] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('http://ananke.cs.pollub.pl:6001/api/datasets/')
            .then(response => {
                return response.json();
            }).then(data => {
            const dataLists = []
            for (const key in data) {
                const dataList = {
                    id: key,
                    ...data[key]
                }
                dataLists.push(dataList)
            }
            setIsLoading(false)
            setLoadedData(dataLists)
        })
    }, [])
    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    return (
            <div>
                <Button datalists = {loadedData}/>
                <Todo/>
            </div>
    );
}

export default DataItem;