import { Button } from '@components/button/Button';
import { HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Dialog.module.scss';

export type DialogFooterProps = HTMLAttributes<HTMLDivElement> & {};

export const DialogFooter = ({
    children,
}: PropsWithChildren<DialogFooterProps>) => {
    return (
        <div className={styles.dialogFooter}>
            {children}
            <form method="dialog">
                <Button>Cancel</Button>
            </form>
        </div>
    );
};
