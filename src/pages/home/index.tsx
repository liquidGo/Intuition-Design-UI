import * as React from 'react';
import { DotLoading } from '../../exportIndex';
import { HandleButton ,HANDLE_BUTTON_TYPE } from '../../exportIndex';
import { Space } from '../../exportIndex'
import './index.less'

const Home: React.FunctionComponent<any> =p => {
    console.log('@log: HANDLE_BUTTON_TYPE -----', HANDLE_BUTTON_TYPE);
    return (
        <div>
            <HandleButton
                type={[HANDLE_BUTTON_TYPE.CREATE]}
            />
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
