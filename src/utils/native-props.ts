import React, {AriaAttributes} from 'react';
import type { CSSProperties,ReactElement } from 'react';
import classNames from 'classnames';

export type NativeProps<S extends string = never> = {
    className?: string;
    style?: CSSProperties & Partial<Record<S, any>>;
    tabIndex?: number;
} & AriaAttributes;

export function withNativeProps<P extends NativeProps>(
    props: P,
    element: ReactElement
) {
    const p = {
        ...element.props,
    }
    if(props.className) {
        p.className = classNames(props.className, element.props.className)
    }
    if (props.style) {
        p.style = {
            ...p.style,
            ...props.style,
        }
    }
    if(props.tabIndex!==undefined) {
        p.tabIndex = props.tabIndex
    }
}