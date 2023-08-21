import './steps.less';
import { attachPropertiesToComponent } from '@/utils/attach-properties-to-component';
import { Steps } from './steps';
import { Step } from './step';

export type {StepsProps} from './steps';
export type {StepProps} from './step';

export default attachPropertiesToComponent(Steps, {
    Step
})