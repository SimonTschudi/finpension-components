import { HTMLAttributes, PropsWithChildren } from "react";
import styles from './Dialog.module.scss';

export type DialogContentProps = HTMLAttributes<HTMLDivElement> & {
};

export const DialogContent = ({ children }: PropsWithChildren<DialogContentProps>) => {
    return <div className={styles.dialogContent}>{children}</div>
}