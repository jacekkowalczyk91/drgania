import {useState, useEffect} from "react";
import DataList from './DataList'


function FetchingData(){
   const [isLoading, setIsLoading] = useState(true)
    const [loadedData, setLoadedData] = useState([])
    // const history = useHistory();

    useEffect(() => {
        setIsLoading(true)
        fetch('http://ananke.cs.pollub.pl:6001/api/datasets/20150124/')
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
        <section>
            <DataList datalists = {loadedData}/>
        </section>
    )
}

export default FetchingData;