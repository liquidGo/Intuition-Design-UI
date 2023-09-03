/* eslint-disable jsx-a11y/alt-text */
import React, { FC,useEffect } from 'react';
import { List } from 'antd-mobile';
import { MessageOutline } from 'antd-mobile-icons'
import { components, componentsName, componentsIcon, componentsType } from '@/config/components'
import { mergeProps } from '@/utils/with-default-props';
import { withRouter } from 'react-router-dom';
import { ContentProps, ListItemProps } from './types'
import { isNodeWithContent } from 'src/utils/is-node-with-content'
import './index.less'
import 'src/global/global.less'

const classPrefix = 'pages-home';

const defaultContentProps: ContentProps = {
    img: <img src={require('@/common/imgs/logo.png')} />
}

const ListItemElement: FC<ListItemProps> = ({ history, ListItemType, header }) => (
    <List header={header}>
        {components[ListItemType].map((item: any, index: any) => {
            const componentKey = item.split('/')[item.split('/')?.length - 1];
            return (
                <List.Item
                    key={index}
                    prefix={<img width={20} src={componentsIcon[item]} />}
                    onClick={() => history.push(`/gallery/${componentKey}/${componentKey}_demo_1`)}>
                    {componentsName[item]}
                </List.Item>
            )
        })}
    </List>
)

export const ListElement = (history: any) => {
    return Object.keys(components).map((component, compoIndex) => (
        <ListItemElement
            key={compoIndex}
            header={componentsType[component]}
            history={history}
            ListItemType={component}
        />
    ))
}

const Home = withRouter(p => {
    const props = mergeProps(p, {})
    const { history } = props;

    useEffect(()=>{
        sessionStorage.clear()
    },[])

    return (
        <div className={`${classPrefix}`}>
            <div className={`${classPrefix}-clear`} />
            <Content>
                <p className={`${classPrefix}-by`}>Inspired by ant-mobile</p>
            </Content>
            {ListElement(history)}
        </div>
    );
})

const Content: FC<ContentProps> = p => {
    const props = mergeProps(p, defaultContentProps)

    return (
        <div className={`${classPrefix}-content`}>
            {isNodeWithContent(props.img) && (
                <div className={`${classPrefix}-content-img`}>{props.img}</div>
            )}
            {isNodeWithContent(props.children) && (
                <div className={`${classPrefix}-content-children`}>{props.children}</div>
            )}
        </div>
    )
}


export default Home;


