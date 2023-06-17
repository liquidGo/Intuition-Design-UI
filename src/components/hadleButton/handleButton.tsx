import React, { forwardRef, FC } from 'react';
import { Space } from '@/exportIndex'
import { mergeProps } from 'src/utils/with-default-props';
import { NativeProps, withNativeProps } from 'src/utils/native-props';
import classNames from 'classnames';

const classPrefix = 'up-handlebutton';

export const HANDLE_BUTTON_TYPE: { [key: string]: string } = {
    CREATE: 'create',
    DELETE: 'delete',
    EDIT: 'edit',
    VIEW: 'view',
}

export type IHandleButtonProps = {
    type?: string[];
    color?: string;
} &
    NativeProps<'--color'>

const defaultProps = {
    color: 'default',
    type: []
}

export const HandleButton: FC<IHandleButtonProps> = p => {
    const props = mergeProps(defaultProps, p);
    const { color, type } = props;
    console.log('@log: type -----',type);
    return withNativeProps(
        props,
        <Space
            className={classNames(classPrefix, {
            })}
        >
            {type.includes(HANDLE_BUTTON_TYPE.CREATE) && (
                // <Button>新建</Button>
                <div>12</div>
            )}
        </Space>
    )
};

