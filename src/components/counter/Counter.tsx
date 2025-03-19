import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Store';
import { decrement, increment } from '../../store/features/counter/CounterSlice';
import styles from './Counter.module.scss';

export const Counter = () => {
    // TODO use reselect to memoize the selector if time allows
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className={styles.counter}>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
};
