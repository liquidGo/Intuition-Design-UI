import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import DotLoading from '../dot-loading';
import { mergeProps } from 'src/utils/with-default-props';
import { NativeProps, withNativeProps } from 'src/utils/native-props';

const classPrefix = `adm-button`;

type NativeButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export type ButtonProps = {
    color?: 'default' | 'primary' | 'white' | (string & {}),
    fill?: 'solid' | 'outline' | 'none',
    size?: 'mini' | 'small' | 'middle' | 'large',
    block?: boolean,
    loading?: boolean,
    loadingIcon?: React.ReactNode,
    disabled?: boolean,
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | Promise<void> | unknown,
    type?: 'button' | 'submit' | 'reset',
    shape?: 'default' | 'rounded' | 'rectangular',
    children?: React.ReactNode
} & Pick<
    NativeButtonProps,
    'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd'
> &
    NativeProps<
        | '--text-color'
        | '--background-color'
        | '--border-radius'
        | '--border-width'
        | '--border-style'
        | '--border-color'
    >

export type ButtonRef = {
    nativeElement: HTMLButtonElement | null
}

const defaultProps = {
    color: 'default',
    fill: 'solid',
    block: false,
    loading: false,
    loadingIcon: <DotLoading />,
    type: 'button',
    shape: 'default',
    size: 'middle'
}

export const Button = forwardRef<any, any>((p, ref) => {
    const props = mergeProps(defaultProps, p);
    const nativeButtonRef = useRef<any>(null);
    return withNativeProps(
        props,
        <button></button>
    )
})