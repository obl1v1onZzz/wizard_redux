import {useAppSelector} from "../../store/store.ts";
import AuthStep from "../Steps/StepsByDomain/AuthStep/AnotherDomain/AuthStep/AuthStep.tsx";
import {STEPS} from "../../features/stepSlice.ts";
import style from './App.module.css'
import EmailStep from "../Steps/EmailStep/EmailStep.tsx";
import MessageStep from "../Steps/MessageStep/MessageStep.tsx";
import MailingStep from "../Steps/MailingStep/MailingStep.tsx";
import {domainZone} from "../../constant/domain.ts";
import AuthStepRu from "../Steps/StepsByDomain/AuthStep/RuDomain/AuthStep/AuthStepRu.tsx";

const App = () => {
    const currentStep = useAppSelector((state) => state.stepSlice.currentStep)
    const savedData = useAppSelector(state => state.saveDataSlice)


    return <div className={style.app}>
        {(() => {
            switch (currentStep) {
                case STEPS.AUTH: {
                    return domainZone === 'ru' ?
                        <AuthStepRu savedData={savedData[STEPS.AUTH]['domainRU']}></AuthStepRu> :
                        <AuthStep savedData={savedData[STEPS.AUTH]['anotherDomain']}></AuthStep>
                }
                case STEPS.EMAIL:
                    return <EmailStep savedData={savedData[STEPS.EMAIL]}></EmailStep>
                case STEPS.MESSAGE:
                    return <MessageStep></MessageStep>
                case STEPS.MAILLING:
                    return <MailingStep savedData={savedData[STEPS.MAILLING]}></MailingStep>
                default:
                    return <div>Some error</div>
            }
        })()}


    </div>;

};

export default App;
