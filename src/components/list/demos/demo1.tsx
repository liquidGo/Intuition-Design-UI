import React from 'react';
import { Switch } from 'antd-mobile';

export default () => {
    return (
        <>
            <C>
                123
            </C>
            {/* <Switch>ceshi </Switch> */}
        </>
    )
}

const C = (props: any) => {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}