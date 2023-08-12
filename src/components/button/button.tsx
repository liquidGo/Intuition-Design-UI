import React, { FC, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import { mergeProps } from '@/utils/with-default-props';
import { NativeProps, withNativeProps } from '@/utils/native-props';
import { isPromise } from '@/utils/validate';
import { DotLoading } from 'antd-mobile';

const classPrefix = `theMoment-button`;

type NativeButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export type ButtonProps = {
    color?: "default" | 'primary' | 'success' | 'warning' | "danger";
    block?: boolean;
    fill?: 'solid' | 'outline' | 'none';
    size?: 'mini' | 'small' | 'middle' | 'large';
    loading?: boolean | 'auto';
    loadingText?: string;
    loadingIcon?: React.ReactNode;
    shape?: 'default' | 'rounded' | 'rectangular';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | Promise<void> | unknown;
} & Pick<
    NativeButtonProps,
    'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
> & NativeProps<
    | '--text-color'
    | '--background-color'
    | '--border-color'
    | '--border-radius'
    | '--border-width'
    | '--border-style'
>

export type ButtonRef = {
    nativeElement: HTMLButtonElement | null;
}

const defaultProps: ButtonProps = {
    color: 'default',
    fill: 'solid',
    size: 'middle',
    shape: 'default',
    type: 'button',
    block: false,
    loading: false,
    loadingIcon: <DotLoading color='currentColor' />,
}


export const Button: FC<any> = forwardRef<ButtonRef, ButtonProps>((p, ref) => {
    const props = mergeProps(defaultProps, p);
    const [interLoading, setInterLoading] = useState(false);
    const nativeButtonRef = useRef<HTMLButtonElement>(null);
    const loading = props.loading === 'auto' ? interLoading : props.loading;
    const disabled = props.disabled || loading;

    useImperativeHandle(ref, () => ({
        get nativeElement() {
            return nativeButtonRef.current;
        }
    }))

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async e => {
        if (!props.onClick) return;

        const promise = props.onClick(e)

        if (isPromise(promise)) {
            try {
                setInterLoading(true);
                await promise;
                setInterLoading(false);
            } catch (e) {
                setInterLoading(false);
                throw e;
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
                props.color ? `${classPrefix}-${props.color}` : null,
                {
                    [`${classPrefix}-block`]: props.block,
                    [`${classPrefix}-disabled`]: props.disabled,
                    [`${classPrefix}-fill-outline`]: props.fill === 'outline',
                    [`${classPrefix}-fill-none`]: props.fill === 'none',
                    [`${classPrefix}-mini`]: props.size === 'mini',
                    [`${classPrefix}-small`]: props.size === 'small',
                    [`${classPrefix}-middle`]: props.size === 'middle',
                    [`${classPrefix}-large`]: props.size === 'large',
                    [`${classPrefix}-loading`]: loading,
                },
                `${classPrefix}-shape-${props.shape}`
            )}
            disabled={disabled}
            onMouseDown={props.onMouseDown}
            onMouseUp={props.onMouseUp}
            onTouchStart={props.onTouchStart}
            onTouchEnd={props.onTouchEnd}
        >
            {loading ? (
                <div className={`${classPrefix}-loading-wrapper`}>
                    {props.loadingIcon}
                    {props.loadingText}
                </div>
            ) : (
                <div>
                    {props.children}
                </div>

            )}

        </button>
    )
})

