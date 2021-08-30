import { CounterAction, COUNTER_TYPE } from "./counter.action";
import { counterIState, CounterState } from "./counter.state";
import { decrement, increment } from "./function";
import { createReducer } from "typesafe-actions";

// const { DECREMENT, INCREMENT } = COUNTER_TYPE;

// const counterReducer = createReducer(counterIState)
//     .handleAction(DECREMENT,decrement)
//     .handleAction(INCREMENT,increment);

const counterReducer = (state: CounterState | undefined = counterIState, action: CounterAction): CounterState => {
    const { DECREMENT, INCREMENT } = COUNTER_TYPE;

    const realState = state as CounterState

    switch (action.type) {
        case INCREMENT:
            return increment(realState, action);
        case DECREMENT:
            return decrement(realState, action)
        default:
            return {
                ...realState
            }
    }

}

export { counterReducer }