import * as React from 'react';
import { Table } from "@/components"


const Test = () => {

    const columns = [
        {
            title: '姓名',
            key: 'name',
            align: 'center',
            sorter:((a:any,b:any)=>b.name-a.name),
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
            name: '1',
            sex: '男',
            record: '小学',
        },
        {
            name: '2',
            sex: '女',
            record: '本科',
        },
        {
            name: '3',
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
