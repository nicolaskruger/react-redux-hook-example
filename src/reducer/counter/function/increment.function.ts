import { CounterAction } from "../counter.action";
import { CounterState } from "../counter.state";

const increment = (state: CounterState, action: CounterAction): CounterState => {
    return {
        num: state.num + 1
    }
}

export { increment }