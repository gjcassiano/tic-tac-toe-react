
interface IHistory {
    squares: any[];
    onClick: (event: any) => void;
};

interface IProps {
    history: any[];
    xIsNext: boolean;
    stepNumber: number;
}

export type {IHistory, IProps}