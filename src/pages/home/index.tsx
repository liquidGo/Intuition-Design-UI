import * as React from 'react';
import { DotLoading ,HandleButton ,Button} from '../../exportIndex';
import { HANDLE_BUTTON_TYPE } from '../../exportIndex';
import { Space } from '../../exportIndex'
import './index.less'

const Home: React.FunctionComponent<any> =p => {
   
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
            </Space>
            <hr/>
            {/* <Button
            onClick={(e)=>console.log('@log: e -----',e)}
            >测试2</Button> */}
            <button >test</button>
        </div>
    );
};

export default Home;
