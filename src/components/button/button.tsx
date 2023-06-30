import React, { forwardRef, useImperativeHandle, useState, useRef } from 'react';
import classNames from 'classnames';
import { DotLoading } from 'src/exportIndex';
import { mergeProps } from 'src/utils/with-default-props';
import { NativeProps, withNativeProps } from 'src/utils/native-props';
import { isPromise } from 'util/types';

const classPrefix = 'intuition-button';

export type NativeButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export type ButtonProps = {
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & {})
    fill?: 'solid' | 'outline' | 'none'
    size?: 'large' | 'middle' | 'small'|'mini'
    block?: boolean
    loading?: boolean|'auto'
    loadingText?:string
    loadingIcon?:React.ReactNode
    disabled?: boolean
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | Promise<void> | unknown
    type?:'submit'|'reset'|'button'
    shape?:'default'|'rounded'|'rectangular'
    children?: React.ReactNode
} & Pick<
    NativeButtonProps,
    'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
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

const defaultProps: ButtonProps = {
    color:'default',
    fill:'solid',
    block:false,
    loading:false,
    loadingIcon: <DotLoading color='currentColor' />,
    type:'button',
    shape:'default',
    size:'middle'
}

export const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
    const props = mergeProps(defaultProps, p);
    const [innerLoading, setInnerLoading] = useState(false);
    const nativeButtonRef = useRef<HTMLButtonElement>(null)
    const loading = props.loading === 'auto' ? innerLoading : props.loading
    const disabled=props.disabled||loading

    useImperativeHandle(ref, () => ({
        get nativeElement() {
            return nativeButtonRef.current
        }
    }))

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async e => {
        if (!props.onClick) return

        const promise = props.onClick(e)

        if (isPromise(promise)) {
            try {
                setInnerLoading(true)
                await promise
                setInnerLoading(false)
            } catch (error) {
                setInnerLoading(false)
                throw error
            }
        }
    }

    return withNativeProps(
        props,
        <button
            ref={nativeButtonRef}
            onClick={handleClick}
            className={classNames(
                classPrefix,
                props.color?`${classPrefix}-${props.color}`:null,
                {
                    [`${classPrefix}-block`]: props.block,
                    [`${classPrefix}-disabled`]: disabled,
                    [`${classPrefix}-fill-outline`]: props.fill === 'outline',
                    [`${classPrefix}-fill-none`]: props.fill === 'none',
                    [`${classPrefix}-mini`]: props.size === 'mini',
                    [`${classPrefix}-small`]: props.size === 'small',
                    [`${classPrefix}-large`]: props.size === 'large',
                    [`${classPrefix}-loading`]: loading,
                },
                `${classPrefix}-${props.shape}`
            )}
            disabled={disabled}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onTouchStart={props.onTouchStart}
            onTouchEnd={props.onTouchEnd}
        >
            {loading ? (
                <div className={classNames(`${classPrefix}-loading-wrapper`)}>
                    {props.loadingIcon}
                    {props.loadingText}
                </div>
            ) : (
                <span>{props.children}</span>
            )}
        </button>
    )
})