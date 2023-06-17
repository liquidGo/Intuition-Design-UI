import * as React from 'react';
import { DotLoading } from '../../exportIndex';
import { Space } from '../../exportIndex'
import './index.less'

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div>
            <DotLoading />
            <hr />
            <Space wrap>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>4</div>
                <div>4</div> <div>3</div>
                <div>4</div>
                <div>4</div>
                <div>4</div> <div>3</div>
                <div>4</div>
                <div>4</div>
                <div>4</div> <div>3</div>
                <div>4</div>
                <div>4</div>
                <div>4</div> <div>3</div>
                <div>4</div>
                <div>4</div>
                <div>4</div> <div>3</div>
                <div>4</div>
                <div>4</div>
                <div>4</div>
                <div>4</div>
                <div>4</div>
            </Space>
        </div>
    );
};

export default Home;
