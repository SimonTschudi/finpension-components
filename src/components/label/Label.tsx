import {
    LabelHTMLAttributes,
    PropsWithChildren,
    useCallback,
    useState,
} from 'react';
import styles from './Label.module.scss';
import { useStyles } from '@utils/Styles.utils';

type InfoTooltipIconProps = {
    info: string;
};

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    info?: InfoTooltipIconProps['info'];
};

const InfoTooltipIcon = ({ info }: InfoTooltipIconProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { mergeClasses } = useStyles();
    const onToggleTooltip = useCallback(() => setIsOpen((prev) => !prev), []);
    return (
        <span className={styles.infoWrapper}>
            <button
                aria-pressed={isOpen}
                className={styles.info}
                aria-label={info}
                onClick={onToggleTooltip}
            >
                i
            </button>
            <span
                className={mergeClasses(styles.tooltip, isOpen && styles.show)}
            >
                {info}
            </span>
        </span>
    );
};

export const Label = ({
    children,
    info,
    className,
    ...rest
}: PropsWithChildren<LabelProps>) => {
    const { mergeClasses } = useStyles();
    return (
        <label className={mergeClasses(styles.label, className)} {...rest}>
            {children}
            {info && <InfoTooltipIcon info={info} />}
        </label>
    );
};
