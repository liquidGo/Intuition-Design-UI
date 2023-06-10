import * as React from 'react';
import { DotLoading } from '../../exportIndex'
import './index.less'

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div>
            <DotLoading />
        </div>
    );
};

export default Home;
