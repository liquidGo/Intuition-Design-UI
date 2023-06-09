import * as React from 'react';
import { withNativeProps } from './utils/native-props';

interface ITestCompoProps {
}

const TestCompo: React.FunctionComponent<ITestCompoProps> = (props) => {
    return withNativeProps(
        { tabIndex: 12 },
        <div className='123'>
            <div className='123'>123</div>
        </div>
    );
};

export default TestCompo;
