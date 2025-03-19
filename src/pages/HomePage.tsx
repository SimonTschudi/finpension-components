import { Button } from "@components/button/Button";
import { Dialog, HandleDialog } from "@components/dialog/Dialog";
import { DialogContent } from "@components/dialog/DialogContent";
import { DialogFooter } from "@components/dialog/DialogFooter";
import { DialogHeader } from "@components/dialog/DialogHeader";
import { TextInput } from "@components/input/TextInput";
import { RangeSlider } from "@components/rangeSlider/RangeSlider";
import { useRef } from "react";
import styles from './HomePage.module.scss';

export const HomePage = () => {
    const dialogRef = useRef<HandleDialog>();
    return (
        <div>
            <div>
                <h1>Buttons</h1>
                <h2>Appearance</h2>
                <div className={styles.grid}>
                    <Button appearance="primary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button appearance="primary" disabled onClick={() => console.log('Hello, World!')}>Click me!</Button>
                </div>
                <div className={styles.grid}>
                    <Button appearance="secondary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button disabled appearance="secondary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                </div>
                <div className={styles.grid}>
                    <Button appearance="transparent" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button disabled appearance="transparent" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                </div>
                <h2>Size</h2>
                <h3>small</h3>
                <div className={styles.grid}>
                    <Button size="small" appearance="primary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button size="small" appearance="secondary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button size="small" appearance="transparent" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                </div>
                <h3>medium</h3>
                <div className={styles.grid}>
                    <Button size="medium" appearance="primary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button size="medium" appearance="secondary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button size="medium" appearance="transparent" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                </div>
                <h3>large</h3>
                <div className={styles.grid}>
                    <Button size="large" appearance="primary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button size="large" appearance="secondary" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                    <Button size="large" appearance="transparent" onClick={() => console.log('Hello, World!')}>Click me!</Button>
                </div>
            </div>
            <h1>Inputs</h1>
            <h2>Text Input</h2>
            <h3>Number Input</h3>
            <TextInput label="Number demo" type="number" validationError="You can only set numbers between 0 and 100" max={100} min={0} />
            <h3>prefix/suffix input with info</h3>
            <TextInput info="Hallo Welt" label="hallo" prefix="simon@" suffix=".ch" type="email" placeholder="Enter your email" validationError="You need to write a valid email" />  
            <h2>Range Slider</h2>
            <RangeSlider min={0} max={100} step={10} onChange={(value) => console.log(value)} />

            <h1>Dialog</h1>
            <div>
                <Dialog ref={dialogRef}>
                    <DialogHeader><h1>Hallo Welt</h1></DialogHeader>
                    <DialogContent>Content</DialogContent>
                    <DialogFooter>Footer</DialogFooter>
                </Dialog>
                <Button appearance="primary" size="large" onClick={() => dialogRef?.current?.open()}>Open dialog</Button>
            </div>
        </div>
    );
};
