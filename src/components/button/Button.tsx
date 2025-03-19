import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import { useStyles } from '@utils/Styles.utils';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Button appearance
     * @default secondary
     */
    appearance?: 'primary' | 'secondary' | 'transparent';
    /**
     * Button size
     * @default medium
     */
    size?: 'small' | 'medium' | 'large';
};
export const Button = ({
    children,
    appearance = 'secondary',
    size = 'medium',
    onClick,
    className,
    ...rest
}: PropsWithChildren<ButtonProps>) => {
    const { mergeClasses } = useStyles();
    return (
        <button
            className={mergeClasses(
                styles.button,
                styles[appearance],
                styles[size],
                className
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};
