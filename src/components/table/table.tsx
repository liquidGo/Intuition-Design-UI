import React, { FC } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from '@/utils/native-props';
import { DownOutline } from 'antd-mobile-icons';
import { mergeProps } from '@/utils/with-default-props';
import { BasicTableProps, TableColumnsProps } from './types';

const classPrefix = 'theMoment-table';

export type TableProps = BasicTableProps & NativeProps<
    | '--'
>

const defaultProps: TableProps = {
    columns: [],
    data: [],
    bordered: true,
    striped: false,
    showHeader: true,
}

export const Table: FC<TableProps> = p => {
    const props = mergeProps(defaultProps, p)
    const { showHeader, columns, data } = props;

    const handleSorterClick = (item: TableColumnsProps) => {

    }

    const headElement = (
        <div className={`${classPrefix}-head`}>
            <div className={`${classPrefix}-row`}>
                {columns.map(item => (
                    <span
                        key={item.key}
                        className={classNames(`${classPrefix}-cell`, {
                            [`${classPrefix}-align-${item.align}`]: item.align ?? false
                        })}
                    >
                        {item.title}
                        {item.sorter && (
                            <span>{props.sorterIcon || <DownOutline width="12px" height="12px" />}</span>
                        )}
                    </span>
                ))}
            </div>
        </div>
    )

    return (
        <div className={classPrefix}>
            {showHeader && headElement}
        </div>
    )
}