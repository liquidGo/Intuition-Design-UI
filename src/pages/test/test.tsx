import * as React from 'react';
import './test.less'
import classNames from 'classnames';
import { mergeProps } from '@/utils/with-default-props';
import { withNativeProps, NativeProps } from '@/utils/native-props';


const Test = () => {

    return (
        <div >
            <Father current={21}>
                <Child num="1" style={{ color: 'red' }} />
                <Child num="2" />
                <Child num="3" />
                <Child num="4" />
                <Child num="5" />
                <Child num="6" />
                <Child num="7" />
                <Child num="8" />
                <Child num="9" />
                <Child num="10" />
                <Child num="11" />
                <Child num="12" />
                <Child num="13" />
                <Child num="14" />
                <Child num="15" />
                <Child num="16" />
                <Child num="17" />
                <Child num="18" />
                <Child num="19" />
                <Child num="20" />
                <Child num="21" />
                <Child num="22" />
            </Father>
        </div>
    );
};

const direction = 'turning'

const Child = ({ num, status, style }: { num: any, status?: any, style?: React.CSSProperties }) => {
    console.log(status, 'props')
    return (
        <div className={classNames('child', status)} style={style}>
            {num}
        </div>
    )
}

function isPatternNumber(number: any) {
    if ((number - 4) % 6 === 0) {
        return number + 2;
    } else if ((number - 6) % 6 === 0) {
        return number - 2;
    } else {
        return number
    }
}

function isFlexEnd(number: any) {
    if (((number - 4) % 6 === 0) || ((number - 5) % 6 === 0)) {
        return true
    }
    return false
}



const Father = ({ children, current = 0 }: { children?: any, current?: number }) => {
    const defaultProps = {
        current: 0,
        style: {
            '--justify-content': isFlexEnd(children.length) ? 'flex-end' : 'flex-start',
        }
    }

    const props = mergeProps(defaultProps, { current });
    return withNativeProps(
        props,
        <div
            className='father'
        >
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) {
                    return child
                }


                const childProps: any = child.props;
                let status = childProps.status || 'wait';
                let style = childProps.style || {};
                style = {
                    ...style,
                    order: isPatternNumber(index + 1),
                }

                if (index < current) {
                    status = childProps.status || 'finish'
                } else if (index === current) {
                    status = childProps.status || 'process'
                }

                console.log('@log:  -----', React.cloneElement<any>(child, {
                    status,
                    style
                })
                );
                return React.cloneElement<any>(child, {
                    status,
                    style
                })

            })}
        </div>
    )
}

export default Test;
