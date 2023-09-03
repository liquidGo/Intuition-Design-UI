import React from 'react';


export interface TableColumnsProps {
    key: string;
    title?: string;
    align?: 'left' | 'center' | 'right' | (string & {});
    sorter?: ((a: any, b: any) => number) | boolean | ('default' & {});
    render?: (rowData?: any, rowIndex?: number) => React.ReactNode;
}

export interface BasicTableProps {
    columns: Array<TableColumnsProps>;
    data: any[];
    bordered?: boolean;
    summary?: string;
    noData?: React.ReactNode;
    striped?: boolean;
    sorterIcon?: React.ReactNode;
    onSort?: (item: TableColumnsProps, data: Array<any>) => void;
    showHeader?: boolean;
}
