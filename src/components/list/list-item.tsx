import React,
{ ReactNode, FC } from 'react'
import classNames from 'classnames';
import { RightOutline } from 'antd-mobile-icons';
import { isNodeWithContent } from 'src/utils/is-node-with-content';
import { NativeProps, withNativeProps } from 'src/utils/native-props';

const classPrefix = 'intuition-list-item';

export type ListItemProps = {
    title?: ReactNode;
    children?: ReactNode;
    description?: ReactNode;
    prefix?: ReactNode;
    extra?: ReactNode;
    clickable?: boolean;
    arrow?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
} & NativeProps<
    | '--prefix-width'
    | '--align-items'
    | '--active-background-color'
>

export const ListItem: FC<ListItemProps> = props => {
    const clickable = props.clickable ?? !!props.onClick;
    const arrow = props.arrow === undefined ? clickable : props.arrow;

    const content = (
        <div className={`${classPrefix}-content`}>
            {isNodeWithContent(props.prefix) && (
                <div className={`${classPrefix}-content-prefix`}>{props.prefix}</div>
            )}
            <div className={`${classPrefix}-content-main`}>
                {isNodeWithContent(props.title) && (
                    <div className={`${classPrefix}-title`}>{props.title}</div>
                )}
                {props.children}
                {isNodeWithContent(props.description) && (
                    <div className={`${classPrefix}-description`}>{props.description}</div>
                )}
            </div>
            {isNodeWithContent(props.extra) && (
                <div className={`${classPrefix}-content-extra`}>{props.extra}</div>
            )}
            {isNodeWithContent(arrow) && (
                <div className={`${classPrefix}-content-arrow`}>
                    {arrow === true ? <RightOutline /> : arrow}
                </div>
            )}
        </div>
    )

    return withNativeProps(
        props,
        React.createElement(
            clickable ? 'a' : 'div',
            {
                className: classNames(
                    `${classPrefix}`,
                    clickable ? ['intuition-plain-anchor'] : [],
                    props.disabled && `${classPrefix}-disabled`
                ),
                onClick: props.disabled ? undefined : props.onClick
            },
            content
        )
    )
}