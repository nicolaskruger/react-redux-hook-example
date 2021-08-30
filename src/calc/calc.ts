import { useAppDispatch, useAppSelector } from "../hooks";

export function Counter() {
    const count = useAppSelector(state => state.counter);

    const dispatch = useAppDispatch();
}