import React, {
    forwardRef,
    ReactNode,
    useImperativeHandle,
    useRef,
} from 'react';
import classNames from 'classnames';
import { NativeProps, withNativeProps } from 'src/utils/native-props';
import { mergeProps } from 'src/utils/with-default-props';

const classPrefix = 'intuition-list';

export type ListProps = {
    header?: ReactNode;
    mode?: 'card' | 'default';
    children?: ReactNode;
} & NativeProps<
    | '--active-background-color'
    | '--align-items'
    | '--border-bottom'
    | '--border-inner'
    | '--border-top'
    | '--extra-max-width'
    | '--font-size'
    | '--header-font-size'
    | '--padding-left'
    | '--padding-right'
    | '--prefix-padding-right'
    | '--prefix-width'
>

export type ListRef = {
    nativeElementRef: HTMLDivElement | null;
}

const defaultProps = {
    mode: 'default'
}

export const List = forwardRef<ListRef, ListProps>((p, ref) => {
    const props = mergeProps(defaultProps, p);
    const nativeElementRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        get nativeElementRef() {
            return nativeElementRef.current;
        }
    }))

    return withNativeProps(
        props,
        <div
            className={classNames(classPrefix, `${classPrefix}-${props.mode}`)}
            ref={nativeElementRef}
        >
            {props.header && (
                <div className={`${classPrefix}-header`}>{props.header}</div>
            )}
            <div className={`${classPrefix}-body`}>
                <div className={`${classPrefix}-body-inner`}>{props.children}</div>
            </div>
        </div>
    )
})