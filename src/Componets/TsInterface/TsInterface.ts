
export interface Example {
    address: string
};

export interface Example2 extends Example {
    id: number;
    title: string;
    fruts: string[];
    user: { name: string, number: number }
};

export type Data = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


