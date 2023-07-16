import React, { FC, useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { components } from '@/config/components';
import { demoConfig } from '@/config/demoConfig';
import type { ReactNode } from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '@/utils/with-default-props';
import { isNodeWithContent } from '@/utils/is-node-with-content';
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



    return withNativeProps(
        props,
        <div className={classPrefix}>
            <div className={`${classPrefix}-header`}>
                <NavBar>
                    {title}
                </NavBar>
            </div>
            {isNodeWithContent(props.children) && (
                <div className={`${classPrefix}-children`}>
                    {props.children}
                </div>
            )}
        </div>
    )
};

