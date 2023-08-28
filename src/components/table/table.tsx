import React, { FC } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from '@/utils/native-props';
import { mergeProps } from '@/utils/with-default-props';
import { BasicTableProps } from './types';

const classPrefix = 'theMoment-table';

export type TableProps = BasicTableProps & NativeProps<
    | '--'
>

const defaultProps: TableProps = {
    columns: [],
    data: [],
    bordered: true,
    striped:false,
    showHeader: true,
}

export const Table: FC<TableProps> = () => {
    return (
        <div>

        </div>
    )
}