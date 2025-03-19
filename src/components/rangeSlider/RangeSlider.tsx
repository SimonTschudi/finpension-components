import { InputHTMLAttributes, useCallback, useState } from 'react';
import styles from './RangeSlider.module.scss';
import { useStyles } from '@utils/Styles.utils';

export type RangeSliderProps = InputHTMLAttributes<HTMLInputElement> & {
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
};

export const RangeSlider = ({ defaultValue, value, step = 1, onChange, className, ...rest }: RangeSliderProps) => {
    const { mergeClasses } = useStyles();
    const [internalValue, setInternalValue] = useState(value || defaultValue || 0);
    const onInternalChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
        setInternalValue(Number(e.target.value));
    }, [onChange]);

    return (
        <input
            defaultValue={defaultValue || 0}
            title={`Current value: ${internalValue}`}
            type="range"
            step={step}
            className={mergeClasses(styles.rangeSlider, className)}
            { ...rest }
            onChange={onInternalChange}
        />
    );
}