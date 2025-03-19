import { HTMLAttributes, PropsWithChildren } from "react";
import styles from './Dialog.module.scss';
import { Button } from "@components/button/Button";

export type DialogHeaderProps = HTMLAttributes<HTMLDivElement> & {
};

export const DialogHeader = ({children, ...rest}: PropsWithChildren<DialogHeaderProps>) => {
    return <div {...rest} className={styles.dialogHeader}>{children}<form className={styles.closeForm} method="dialog"><Button className={styles.close} appearance="transparent">x</Button></form></div>
};