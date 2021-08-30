
enum COUNTER_TYPE {
    INCREMENT,
    DECREMENT
}

type CounterAction = {
    type: COUNTER_TYPE
}

export { COUNTER_TYPE }
export type { CounterAction }