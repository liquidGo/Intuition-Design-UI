/* eslint-disable jsx-a11y/alt-text */
import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { List } from 'src/exportIndex';
import { mergeProps } from '@/utils/with-default-props';
import { isNodeWithContent } from 'src/utils/is-node-with-content'


import './index.less'
import 'src/global/global.less'

const classPrefix = 'pages-home';

type HeaderProps = {
    title?: ReactNode
}

type ContentProps = {
    img?: ReactNode,
    children?: ReactNode
}

const defaultContentProps: ContentProps = {
    img: <img src={require('@/common/imgs/logo.png')} />
}

const Home: FC = p => {
    const props = mergeProps(p, {})


    return (
        <div className={`${classPrefix}`}>
            <Header  title='Intuition Design' />
            <div className={`${classPrefix}-clear`} />
            <Content>
                <p>
                    下面是一些Intuition Design的组件Demo，可以点击看看
                </p>
            </Content>
            <List header="通用">
                <List.Item onClick={()=>{console.log(1)}}>
                    Button 按钮
                </List.Item>
            </List>
        </div>
    );
};

const Header: FC<HeaderProps> = p => {
    const props = mergeProps(p, {})
    return (
        <div className={`${classPrefix}-header`}>
            {isNodeWithContent(props.title) && (
                <div className={`${classPrefix}-header-title`}>{props.title}</div>
            )}
        </div>
    )
}

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


