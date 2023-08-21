import React, { FC } from 'react';
import { withNativeProps, NativeProps } from '@/utils/native-props';
import { mergeProps } from '@/utils/with-default-props';
import classNames from 'classnames';

const classPrefix = `theMoment-steps`;
const stepClassPrefix=`theMomoent-step`

const defaultIcon = <span className={`${stepClassPrefix}-icon-hot`} />

type Direction = 'horizontal' | 'vertical';

export type StepsProps = {
    current?: number;
    direction?: Direction;
    children?: React.ReactNode;
} & NativeProps<
    | '--title-font-size'
    | '--direction-font-size'
    | '--indicator-margin-right'
    | '--icon-size'
>

const defaultProps = {
    current: 0,
    direction: 'horizontal',
}

export const Steps: FC<StepsProps> = p => {
    const props = mergeProps(defaultProps, p);
    const { current, direction } = props;
    const classString = classNames(classPrefix, `${classPrefix}-${direction}`)

    return withNativeProps(
        props,
        <div className={classString}>
            {React.Children.map(props.children, (child, index) => {
                if (!React.isValidElement<any>(child)) {
                    return child;
                }

                const childProps = child.props;

                let status=childProps.status||'wait';

                if(index<current){
                    status=childProps.status||'finish';
                }else if(index===current){
                    status=childProps.status||'process';
                }

                const icon = childProps.icon ?? defaultIcon;

                return React.cloneElement(child, {
                    status,
                    icon,
                })
            })}
        </div>
    )
}