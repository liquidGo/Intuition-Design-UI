import React, { AriaAttributes } from 'react';
import type { ReactElement, CSSProperties } from 'react';
import classNames from 'classnames';

export type NativeProps<S extends string=never> = {
    className?: string;
    style?: CSSProperties & Partial<Record<S, string>>;
    tabIndex?: number;
} & AriaAttributes;

export function withNativeProps<P extends NativeProps>(
    props: P,
    element: ReactElement
){
    const p={
        ...element.props,
    }

    if(props.className){
        p.className=classNames(props.className, p.className)
    }

    if(props.style){
        p.style={
            ...p.style,
            ...props.style,
        }
    }

    if(props.tabIndex){
        p.tabIndex=props.tabIndex;
    }

    for(const key in props){
        if(!props.hasOwnProperty(key)){
            continue;
        }
        if(key.startsWith('aria-')||key.startsWith('data-')){
            p[key]=props[key];
        }
    }

    return React.cloneElement(element, p);
}