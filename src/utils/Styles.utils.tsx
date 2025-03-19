export const useStyles = () => {
    return {
        mergeClasses: (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' '),
    };
}