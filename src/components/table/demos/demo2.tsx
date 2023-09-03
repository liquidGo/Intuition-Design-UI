/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Table, Button } from "@/components"
import { DemoBlock } from 'demos/index'
import { DownFill } from 'antd-mobile-icons';
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
        key: "age",
        sorter: (() => {
            let status = false;
            let power = true
            return (a: any, b: any) => {
                if (power) {
                    status = !status;
                    power = false;
                    setTimeout(() => {
                        power = true;
                    }, 0);
                }
                if (status) {
                    return a.age - b.age;
                } else {
                    return b.age - a.age;
                }

            }
        })() as any
    }
]

export const columns2: TableColumnsProps[] = [
    {
        title: "姓名",
        key: 'name',
    }, {
        title: '性别',
        key: 'sex'
    }, {
        title: "年龄",
        key: "age",
        render: (item: any) => {
            if (item.name === "小明") {
                return (
                    <Button
                        children="查看"
                        color="primary"
                        size="mini"
                        block={false}
                    />
                )
            } else {
                return item.age;
            }
        }
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
            <DemoBlock title="排序">
                <Table
                    columns={columns}
                    data={datas}
                    bordered={true}
                />
            </DemoBlock>
            <DemoBlock title="自定义排序图标">
                <Table
                    columns={columns}
                    data={datas}
                    bordered={true}
                    sorterIcon={<DownFill />}
                />
            </DemoBlock>
            <DemoBlock title="自定义渲染列">
                <Table
                    columns={columns2}
                    data={datas}
                    bordered={true}
                    sorterIcon={<DownFill />}
                />
            </DemoBlock>
            <DemoBlock title="总结栏、无数据">
                <Table
                    columns={columns2}
                    data={[]}
                    bordered={true}
                    sorterIcon={<DownFill />}
                />
                <Table
                    columns={columns2}
                    data={datas}
                    summary='总结表格'
                    bordered={true}
                    sorterIcon={<DownFill />}
                />
            </DemoBlock>
        </>
    )
}