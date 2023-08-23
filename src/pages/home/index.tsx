/* eslint-disable jsx-a11y/alt-text */
import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { List } from 'antd-mobile';
import { components, componentsName, componentsIcon } from '@/config/components'
import { mergeProps } from '@/utils/with-default-props';
import { withRouter } from 'react-router-dom';
import { isNodeWithContent } from 'src/utils/is-node-with-content'


import './index.less'
import 'src/global/global.less'

const classPrefix = 'pages-home';


type ContentProps = {
    img?: ReactNode,
    children?: ReactNode
}

const defaultContentProps: ContentProps = {
    img: <img src={require('@/common/imgs/logo.png')} />
}

const Home = withRouter(p => {
    const props = mergeProps(p, {})
    const { history } = props;
    console.log('@log: props -----', props);

    return (
        <div className={`${classPrefix}`}>
            <div className={`${classPrefix}-clear`} />
            <Content>
                <p>
                    下面是一些Intuition Design的组件Demo，可以点击看看
                </p>
            </Content>
            <List header="通用">
                {components.common.map((item, index) => {
                    const componentKey = item.split('/')[item.split('/')?.length - 1];
                    return (
                        <List.Item
                            key={index}
                            prefix={<img width={20} src={componentsIcon[item]} />}
                            onClick={() => history.push(`/gallery/${componentKey}/${componentKey}_demo_1`)}>
                            {componentsName[item]}
                        </List.Item>
                    )
                })
                }
            </List>
            <List header="信息展示">
                {components.information.map((item, index) => {
                    const componentKey = item.split('/')[item.split('/')?.length - 1];
                    return (
                        <List.Item
                            key={index}
                            prefix={<img width={20} src={componentsIcon[item]} />}
                            onClick={() => history.push(`/gallery/${componentKey}/${componentKey}_demo_1`)}>
                            {componentsName[item]}
                        </List.Item>
                    )
                })
                }
            </List>
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


