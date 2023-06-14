import * as React from 'react';
import { DotLoading } from '../../exportIndex';

import {HandleButton} from '../../exportIndex';
import './index.less'

interface IHomeProps {
}
const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div>
            {/* <DotLoading /> */}
            <HandleButton/>
        </div>
    );
};

export default Home;
