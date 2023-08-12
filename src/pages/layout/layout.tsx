import React, { FC, useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { components } from '@/config/components';
import { demoConfig } from '@/config/demoConfig';
import type { ReactNode } from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '@/utils/with-default-props';
import { isNodeWithContent } from '@/utils/is-node-with-content';
import { useLocation } from 'react-router-dom';
import { List, NavBar, Popover, SafeArea, SearchBar } from 'antd-mobile';

const classPrefix = 'intuition-layout';

const demos = Object.keys(demoConfig);
const compo = Object.values(components);
const componentToDemoPaths: Record<string, string[]> = {};
const componentToTitle: Record<string, string> = {};

type ILayoutProps = {
    children: ReactNode;
} & NativeProps


const defaultProps = {}


compo.forEach(group => {
    group.forEach(item => {
        const keyArrs = item.split('/');
        const key = keyArrs[keyArrs.length - 1];
        console.log('@log: key -----', key)
        componentToDemoPaths[key] = demos.filter(val =>
            val.startsWith(`${key}_demo`)
        )

        componentToTitle[key] = key;
        console.log('@log: componentToDemoPaths -----', componentToTitle);

    })
})


console.log('@log: component -----', compo);

export const Layout: FC<ILayoutProps> = p => {
    const props = mergeProps(defaultProps, p);
    const [title, setTitle] = useState('Intuition Design');
    const [currentDemoIndex, setCurrentDemoIndex] = useState<number | null>(null);
    const [currentComponent, setCurrentComponent] = useState('');
    const location = useLocation();

    useEffect(() => {
        console.log('@log: 1 -----',1);
        if(window.location.hash.split('/')?.length < 4) {
            setTitle('Intuition Design');
            setCurrentComponent('');
            setCurrentDemoIndex(null)
        }
    },[location])


    useLayoutEffect(() => {
        console.log('@log: 123123123 -----', 12312312);
        if (window.location.hash.split('/')?.length < 4) return;
        const demoKeyArrs = window.location.hash.split('/');
        const demoKey = demoKeyArrs[demoKeyArrs.length - 2];
        setTitle(componentToTitle[demoKey]);
        setCurrentComponent(demoKey);
    }, [location])

    useLayoutEffect(() => {
        if (!currentComponent) {
            setCurrentDemoIndex(null);
        } else {
            setCurrentDemoIndex(0)
        }
    }, [currentComponent])

    // useEffect(() => {
    //     document.body.style.overflow = 'hidden'
    //     return () => {
    //         document.body.style.overflow = ''
    //     }
    // })

    const demoSwitcher = window.location.hash.split('/')?.length === 4 && currentComponent && currentDemoIndex !== null && (
        <Popover.Menu
            trigger='click'
            placement='bottomRight'
            actions={componentToDemoPaths[currentComponent].map((_, index) => ({
                text: `Demo${index + 1}`,
                onClick: () => {
                    setCurrentDemoIndex(index)
                    window.location.href = `#/gallery/${currentComponent}/${currentComponent}_demo_${index + 1}`
                },
            }))}
        >
            <a className={`${classPrefix}-popver`}>
                {currentDemoIndex + 1} / {componentToDemoPaths[currentComponent].length}
            </a>
        </Popover.Menu>
    )


    return withNativeProps(
        props,
        <div className={classPrefix}>
            <div className={`${classPrefix}-header`}>
                <NavBar
                    backArrow={currentDemoIndex !== null}
                    onBack={() => window.location.href = "#/gallery"}
                    right={demoSwitcher}
                >
                    {title}
                </NavBar>
            </div>
            <div className={`${classPrefix}-clear-both`}/>
            {isNodeWithContent(props.children) && (
                <div className={`${classPrefix}-children`}>
                    {props.children}
                </div>
            )}
        </div>
    )
};

