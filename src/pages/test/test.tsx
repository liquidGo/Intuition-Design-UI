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
        },{
            title:'体重',
            key:"a"
        },{
            title:'身高',
            key:'b'
        },{
            title:'成绩',
            key:'c'
        }
    ]

    const dataSource = [
        {
            name: '1',
            sex: '男',
            record: '小学',
            a:1,
            b:2,
            c:3
        },
        {
            name: '2',
            sex: '女',
            record: '本科',
            a:1,
            b:2,
            c:3
        },
        {
            name: '3',
            sex: '男',
            record: '高中',
            a:1,
            b:2,
            c:3
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
