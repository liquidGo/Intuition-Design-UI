import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import classNames from 'classnames';
import { DotLoading } from 'src/exportIndex';
import { mergeProps } from 'src/utils/with-default-props';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from 'src/utils/native-props';
import { isPromise } from 'src/utils/validate';

const classPrefix = `intuition-button`;

type NativeButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export type ButtonProps = {
    color?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & {})
    fill?: 'solid' | 'outline' | 'none'
    size?: 'mini' | 'small' | 'middle' | 'large'
    block?: boolean
    loading?: boolean | 'auto'
    loadingText?: 'string'
    loadingIcon?: React.ReactNode
    disabled?: boolean
    onClick?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | Promise<void> | unknown
    type?: 'submit' | 'reset' | 'button'
    shape?: 'default' | 'rounded' | 'rectangular'
    children?: React.ReactNode
} & Pick<
    NativeButtonProps,
    'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd' | 'id'
> & NativeProps<
    | '--text-color'
    | '--background-color'
    | '--border-radius'
    | '--border-width'
    | '--border-style'
    | '--border-color'
>

const defaultProps = {
    color: 'default'
}

export type ButtonRef = {
    nativeElement: HTMLButtonElement | null
}

export const Button = forwardRef<ButtonRef, ButtonProps>((p, ref) => {

    const props = mergeProps(defaultProps, p);
    const [innerLoading, setInnerLoading] = useState(false);
    const nativeButtonRef = useRef<HTMLButtonElement>(null);
    const loading = props.loading === 'auto' ? innerLoading : props.loading;
    const disabled = props.disabled || loading;

    useImperativeHandle(ref, () => ({
        get nativeElement() {
            return nativeButtonRef.current;
        }
    }))

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = async e => {
        if (!props.onClick) return;

        const promise = props.onClick(e);

        if (isPromise(promise)) {
            try {
                setInnerLoading(true);
                await promise;
                setInnerLoading(false);
            } catch (error) {
                setInnerLoading(false);
            }
        }
    }

    return withNativeProps(
        props,
        <button
            ref={nativeButtonRef}
            type={props.type}
            onClick={handleClick}
            className={classNames(
                classPrefix,
                props.color ? `${classPrefix}-${props.color}` : null,
                {
                    [`${classPrefix}-block`]: props.block,
                    [`${classPrefix}-disabled`]: disabled,
                    [`${classPrefix}-fill-outline`]: props.fill === 'outline',
                    [`${classPrefix}-fill-none`]: props.fill === 'none',
                    [`${classPrefix}-mini`]: props.size === 'mini',
                    [`${classPrefix}-small`]: props.size === 'small',
                    [`${classPrefix}-large`]: props.size === 'large',
                    [`${classPrefix}-loading`]: loading
                },
                `${classPrefix}-shape-${props.shape}`
            )}
            disabled={disabled}
        >
            {loading ? (
                <div className={`${classPrefix}-loading-wrapper`}>
                    {props.loadingIcon}
                    {props.loadingText}
                </div>
            ) : (
                <div>{props.children}</div>
            )}
        </button>
    )
})

