import * as React from 'react';
import { Table } from "@/components"


const Test = () => {

    const columns = [
        {
            title: '姓名',
            key: 'name',
            align: 'center',
            sorter:true

        },
        {
            title: '性别',
            key: 'sex',
        },
        {
            title: '学历',
            key: 'record',
        },
    ]

    const dataSource = [
        {
            name: 'Tom',
            sex: '男',
            record: '小学',
        },
        {
            name: 'Lucy',
            sex: '女',
            record: '本科',
        },
        {
            name: 'Jack',
            sex: '男',
            record: '高中',
        },
    ]

    return (
        <div >
            <Table
                columns={columns}
                data={dataSource}
                bordered={false}
                onSort={()=>{}}
            />
        </div>
    );
};

export default Test;
