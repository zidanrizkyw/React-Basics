import {useCounter} from '../../hooks/useCounter'

const Counter = () => {
    const {count, handleDecrement, handleIncrement, handleReset} = useCounter()


    return (
        <div style={{
            display: "flex",
            gap: "16px"

        }}>
            <button onClick={handleDecrement}>Kurang</button>
            <p style={{ fontSize: "48px" }}>{count}</p>
            {/* <p style={{fontSize: "48px"}}>{nama}</p> */}
            <button onClick={handleIncrement}>Tambah</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter
