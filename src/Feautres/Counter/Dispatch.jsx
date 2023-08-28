import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementbyAmount } from './counterSlice'

function Dispatch() {
    const disPatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    onClick={() => disPatch(decrement())}
                >Azalt
                </button>
                <button
                    onClick={() => disPatch(increment())}
                >Artir
                </button>
            </div>
            <div>
                <button
                onClick={()=>disPatch(decrementByAmount(5))}
                >DecrementByAmount
                </button>
                <button
                onClick={()=>disPatch(incrementbyAmount(5))}
                >In crementByAmount
                </button>
            </div>
        </div>
    )
}

export default Dispatch