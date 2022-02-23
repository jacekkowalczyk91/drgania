

function Button(props) {

    return (
        <div>
            {
                props.datalists.map((datalist) => (
                    <div className='actions' id={datalist.id}>
                        <p>Dataset: {datalist.id}</p>
                        <button className='btn'>Show</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Button;