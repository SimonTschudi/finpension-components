import { InputHTMLAttributes, useId } from 'react';
import { useStyles } from '@utils/Styles.utils';
import styles from './TextInput.module.scss';
import { Label, LabelProps } from '@components/label/Label';

export type TextInputTypes = 'text' | 'password' | 'email' | 'number' | 'tel';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    /**
     * Info tooltip
     */
    info?: LabelProps['info'];
    /**
     * Input type
     * @default text
     */
    type?: TextInputTypes;

    validationError?: string;

    prefix?: string;
    suffix?: string;
};

export type TextInputWithLabelProps = TextInputProps & {
    label: string;
};

export type TextInputWithoutLabelProps = TextInputProps & {
    'aria-label': string;
    info?: never;
};

export type TextInputWithHTMLForProps = TextInputProps & {
    htmlFor: LabelProps['htmlFor'];
    info?: never;
    label?: never;
};

export const TextInput = ({
    label,
    id,
    type = 'text',
    className,
    info,
    validationError,
    prefix,
    suffix,
    ...rest
}:
    | TextInputWithLabelProps
    | TextInputWithoutLabelProps
    | TextInputWithHTMLForProps) => {
    const { mergeClasses } = useStyles();
    const genId = useId();
    const inputId = id || genId;
    return (
        <span className={mergeClasses(styles.inputWrapper, className)}>
            {label && (
                <Label htmlFor={inputId} info={info}>
                    {label}
                </Label>
            )}
            <span className={styles.inputField}>
                {prefix && <span className={styles.prefix}>{prefix}</span>}
                <input
                    id={inputId}
                    type={type}
                    className={styles.input}
                    {...rest}
                />
                {suffix && <span className={styles.suffix}>{suffix}</span>}
            </span>
            {validationError && (
                <div className={styles.error}>
                    <b className={styles.icon}>!</b>
                    {validationError}
                </div>
            )}
        </span>
    );
};
