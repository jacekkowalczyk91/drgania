import {Line} from 'react-chartjs-2'

function Chart () {
    const data = {
        labels: ["jeden", "dwa", "trzy"],
        datasets: [{
            data: [1, 2, 3]
        }]
    }
    return (
        <div>
            <p>Liniowy</p>
            <Line data={data}/>
        </div>
    )
}

export default Chart;