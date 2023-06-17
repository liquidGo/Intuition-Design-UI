import React, { FC, ReactElement } from 'react';
import classNames from 'classnames';
import { mergeProps } from 'src/utils/with-default-props';
import { NativeProps, withNativeProps } from 'src/utils/native-props';

const classPrefix = `adm-space`;

export type SpaceProps = {
    direction?: 'horizontal' | 'vertical';
    align?: 'start' | 'end' | 'center' | 'baseline';
    justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'around'
    | 'between'
    | 'evenly'
    | 'stretch'
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    wrap?: boolean;
    block?: boolean;
    children?:React.ReactNode;
} & NativeProps<'--gap' | '--gap-vertial' | '--gap-horizontal'>;

const defaultProps = {
    direction: 'horizontal',
}

export const Space: FC<SpaceProps> = p => {
    const props = mergeProps(defaultProps, p);
    const { direction, onClick } = props;
    return withNativeProps(
        props,
        <div
            className={classNames(classPrefix, {
                [`${classPrefix}-wrap`]: props.wrap,
                [`${classPrefix}-block`]: props.block,
                [`${classPrefix}-${direction}`]: true,
                [`${classPrefix}-align-${props.align}`]: !!props.align,
                [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
            })}
            onClick={onClick}
        >
            {React.Children.map(props.children, child => {
                return (
                    child !== undefined &&
                    child !== null && (
                        <div className={`${classPrefix}-item`}>{child}</div>
                    )
                )
            })}
        </div>
    )
}