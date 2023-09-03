/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from '@/utils/native-props';
import { DownOutline } from 'antd-mobile-icons';
import { cloneDeep, isEqual } from 'lodash';
import { mergeProps } from '@/utils/with-default-props';
import { BasicTableProps, TableColumnsProps } from './types';

const classPrefix = 'theMoment-table';

export type TableProps = BasicTableProps & NativeProps<
    | "--table-col-padding"
    | "--table-th-wight"
    | "--table-header-color"
    | "--table-main-color"
    | "--table-text-color"
    | "--table-header-text"
>

const defaultProps: TableProps = {
    columns: [],
    data: [],
    bordered: true,
    striped: false,
    showHeader: true,
    noData: "暂无数据"
}

export const Table: FC<TableProps> = p => {
    const props = mergeProps(defaultProps, p)
    const { showHeader, columns, data, onSort, summary, noData } = props;
    const [curData, setCurData] = useState(cloneDeep(data));
    const [defaultSorter, setDefaultSorter] = useState(true);

    const curDataPrev = useRef(cloneDeep(data));

    const handleSorterClick = (item: TableColumnsProps) => {
        if (item?.sorter) {
            onSort && onSort(item, data);
            if (typeof item.sorter === "function") {
                setCurData(curData.sort(item.sorter as (a: any, b: any) => number));
            } else {
                setCurData(item.sorter === 'default' ? curData.sort() : curData)
            }
        }
        if (isEqual(curDataPrev.current, curData)) return;
        setDefaultSorter(!defaultSorter);
        curDataPrev.current = curData;
    }

    const sortDataItem = () => {
        return columns.map((column: any) => {
            return [column.key, column.render]
        })
    }

    const getColumnItem = (key: string): TableColumnsProps => {
        return columns.find(v => v.key === key) as TableColumnsProps
    }

    const headElement = (
        <div className={`${classPrefix}-tr `}>
            {columns.map(item => (
                <span
                    key={item.key}
                    className={classNames(`${classPrefix}-td`,
                        `${classPrefix}-align-center`,
                        `${classPrefix}-th`,
                        {
                            [`${classPrefix}-align-${item.align}`]: item.align ?? false,
                            [`${classPrefix}-bordered`]: props.bordered
                        })}
                    onClick={() => handleSorterClick(item)}
                >
                    {item.title}
                    {item.sorter && (
                        <span className={classNames(
                            `${classPrefix}-th-sorted`,
                            { [`${classPrefix}-th-sorted-turn`]: !defaultSorter }
                        )}>{props.sorterIcon || <DownOutline width="12px" height="12px" />}</span>
                    )}
                </span>
            ))}
        </div>
    )

    const bodyElement = (curData.map((dataItem, dataIndex) => (
        <div className={`${classPrefix}-tr`} key={dataIndex}>
            {sortDataItem().map(([key, render], columnIndex) => (
                <span
                    key={columnIndex}
                    className={classNames(`${classPrefix}-td`, `${classPrefix}-align-center`, {
                        [`${classPrefix}-align-${getColumnItem(key).align}`]: getColumnItem(key).align ?? false,
                        [`${classPrefix}-bordered`]: props.bordered
                    })}
                >
                    {typeof dataItem[key] === 'function' || typeof render === "function" ? (
                        <div>
                            {render ? render(dataItem) : dataItem[key](dataItem)}
                        </div>
                    ) : (
                        <div>{dataItem[key]}</div>
                    )}
                </span>
            ))
            }
        </div>
    )))

    useEffect(() => {
        if (data && String(data) !== String(curData)) {
            setCurData(data)
            setDefaultSorter(true)
        }
    }, [data])


    return withNativeProps(
        props,
        <div className={classPrefix}>
            <div className={`${classPrefix}-main`}>
                <div className={`${classPrefix}-main-head`}>
                    {showHeader && headElement}
                </div>
                <div className={`${classPrefix}-main-body`}>
                    {bodyElement}
                </div>
            </div>
            {(summary || curData.length === 0) && (
                <div className={`${classPrefix}-main-summary`}>{summary || noData}</div>
            )}
        </div>
    )
}