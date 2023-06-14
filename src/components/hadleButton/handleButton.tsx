import React, { forwardRef, FC } from 'react';
// @Description: 暂用antd-mobile的组件，后期替换
import { mergeProps } from 'src/utils/with-default-props';
import { NativeProps, withNativeProps } from 'src/utils/native-props';

export type IHandleButtonProps = {
} &
    NativeProps

const defaultProps = {

}
export const HandleButton: FC<IHandleButtonProps> = (props) => {
    return (
        <div>HandleButton</div>
    );
};

