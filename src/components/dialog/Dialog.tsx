import {
    cloneElement,
    DialogHTMLAttributes,
    PropsWithChildren,
    ReactElement,
    RefObject,
    useCallback,
    useEffect,
    useId,
    useImperativeHandle,
    useRef,
} from 'react';
import { DialogHeaderProps } from './DialogHeader';
import { DialogContentProps } from './DialogContent';
import { DialogFooterProps } from './DialogFooter';
import { useStyles } from '@utils/Styles.utils';
import styles from './Dialog.module.scss';

export type HandleDialog = {
    open: () => void;
    close: () => void;
};

export type DialogProps = PropsWithChildren<
    DialogHTMLAttributes<HTMLDialogElement>
> & {
    children: [
        ReactElement<DialogHeaderProps>,
        ReactElement<DialogContentProps>,
        ReactElement<DialogFooterProps>,
    ];
    ref?: RefObject<HandleDialog>;
};

export const Dialog = ({
    children,
    ref,
    ...rest
}: PropsWithChildren<DialogProps>) => {
    const genHeaderId = useId();
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { mergeClasses } = useStyles();

    const headerId = children[0].props.id || genHeaderId;
    const headerNode = useCallback(
        () => cloneElement(children[0], { id: headerId }),
        [headerId, children]
    );

    useImperativeHandle(
        ref,
        () => ({
            open: () => {
                dialogRef.current?.showModal();
            },
            close: () => {
                dialogRef.current?.close();
            },
        }),
        []
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                dialogRef.current?.close();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <dialog
            {...rest}
            ref={dialogRef}
            className={mergeClasses(styles.dialog)}
            aria-labelledby={headerId}
        >
            {headerNode()}
            {children[1]}
            {children[2]}
        </dialog>
    );
};
