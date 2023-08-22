/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Steps, Button } from '@/components'
import { Space } from 'antd-mobile'
import { DemoBlock } from 'demos/index'
import {
    CheckCircleFill,
    ClockCircleFill,
    HandPayCircleOutline,
} from 'antd-mobile-icons'

const { Step } = Steps

export default () => {
    return (
        <>
            <DemoBlock title='全屏步骤条' >
                <Steps current={2} direction='turning'>
                    <Step title='标题1' description='描述' />
                    <Step title='标题2' description='描述' />
                    <Step title='标题3' description='描述' />
                    <Step title='标题4' description='描述' />
                    <Step title='标题5' description='描述' />
                    <Step title='标题6' description='描述' />
                    <Step title='标题7' description='描述' />
                    <Step title='标题8' description='描述' />
                    <Step title='标题9' description='描述' />
                </Steps>
            </DemoBlock>
            <DemoBlock title='全屏步骤条失败' >
                <Steps current={2} direction='turning'>
                    <Step title='标题1' />
                    <Step title='标题2' />
                    <Step title='标题3' status="error" />
                    <Step title='标题4' />
                    <Step title='标题5' />
                    <Step title='标题6' />
                    <Step title='标题7' />
                    <Step title='标题8' />
                    <Step title='标题9' />
                </Steps>
            </DemoBlock>
            <DemoBlock title='自定义图标及大小'>
                <Steps
                    direction='turning'
                    current={3}
                    style={{
                        '--title-font-size': '17px',
                        "--description-font-size": '15px',
                        '--indicator-margin-right': '12px',
                        '--icon-size': '22px',
                    }}
                >
                    <Step
                        title='填写机构信息'
                        description='这里是一些描述'
                        icon={<CheckCircleFill />}
                    />
                    <Step
                        title='签约机构'
                        description={
                            <Space block direction='vertical'>
                                <div>这里是一些描述</div>
                            </Space>
                        }
                        icon={<ClockCircleFill />}
                    />
                    <Step
                        title='关联服务区'
                        description='这里是一些描述'
                        icon={<HandPayCircleOutline />}
                    />
                      <Step
                        title='填写机构信息'
                        description='这里是一些描述'
                        icon={<CheckCircleFill />}
                    />
                    <Step
                        title='签约机构'
                        description={
                            <Space block direction='vertical'>
                                <div>这里是一些描述</div>
                            </Space>
                        }
                        icon={<ClockCircleFill />}
                    />
                    <Step
                        title='关联服务区'
                        description='这里是一些描述'
                        icon={<HandPayCircleOutline />}
                    />
                </Steps>
            </DemoBlock>
        </>
    )
}
