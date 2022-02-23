import {useEffect, useState} from "react";
import Chart from './Chart'


function Charts() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedData, setLoadedData] = useState([])
    // const history = useHistory();

    useEffect(() => {
        setIsLoading(true)
        fetch('http://ananke.cs.pollub.pl:6001/api/datasets/20150124/51272865-22544302')
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
            <p>
                a
            </p>
        </div>
    );
}

export default Charts;