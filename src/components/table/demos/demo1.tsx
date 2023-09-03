/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Table } from "@/components"
import { DemoBlock } from 'demos/index'
import { TableColumnsProps } from '../index'

export const columns: TableColumnsProps[] = [
    {
        title: "姓名",
        key: 'name',
    }, {
        title: '性别',
        key: 'sex'
    }, {
        title: "年龄",
        key: "age"
    }
]

export const datas: any[] = [
    {
        name: "小明",
        sex: "男",
        age: '20'
    }, {
        name: "小李",
        sex: "女",
        age: "30"
    }, {
        name: "小赵",
        sex: "男",
        age: "18"
    }
]

export default () => {
    return (
        <>
            <DemoBlock title="基础表格">
                <Table
                    columns={columns}
                    data={datas}
                    bordered={true}
                />
            </DemoBlock>
            <DemoBlock title="不展示边框">
                <Table
                    columns={columns}
                    data={datas}
                    bordered={false}
                />
            </DemoBlock>
            <DemoBlock title="隐藏表头">
                <Table
                    columns={columns}
                    data={datas}
                    showHeader={false}
                    bordered={true}
                />
            </DemoBlock>
            <DemoBlock title="自定义颜色背景、表头颜色、内容颜色">
                <Table
                    columns={columns}
                    data={datas}
                    bordered={true}
                    style={{
                        "--table-header-color": "var(--moment-color-primary)",
                        "--table-header-text":"var(--moment-color-white)",
                    }}
                />
            </DemoBlock>
        </>
    )
}