
import { CounterAction } from "../counter.action";
import { CounterState } from "../counter.state";

const decrement = (state: CounterState, action: CounterAction): CounterState => {
    return {
        num: state.num - 1
    }
}

export { decrement }