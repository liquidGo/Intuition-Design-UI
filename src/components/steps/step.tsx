import React, { FC } from 'react';
import { withNativeProps, NativeProps } from '@/utils/native-props';
import classNames from 'classnames';

const classPrefix = `theMoment-step`;

export type StepProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    status?: 'wait' | 'process' | 'finish' | 'error';
} & NativeProps

export const Step: FC<any> = props => {
    const { title, description, icon, status = 'wait' } = props;
    console.log('@log: icon -----',icon);

    return withNativeProps(
        props,
        <div
            className={classNames(
                `${classPrefix}`,
                `${classPrefix}-status-${status}`
            )}
        >
            <div className={`${classPrefix}-indicator`}>
                <div className={`${classPrefix}-icon-container`}>{icon}</div>
            </div>
            <div className={`${classPrefix}-content`}>
                <div className={`${classPrefix}-title`}>{title}</div>
                {!!description && (
                    <div className={`${classPrefix}-description`}>{description}</div>
                )}
            </div>

        </div>
    )
}