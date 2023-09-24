import {domainZone} from "../../../constant/domain.ts";
import React, {useRef} from "react";
import {useAppDispatch} from "../../../store/store.ts";
import {saveMailingStep} from "../../../features/saveDataSlice.ts";
import {decreaseStep, increaseStep} from "../../../features/stepSlice.ts";

interface IMailingStepProps {
    savedData: boolean
}

const MailingStep: React.FC<IMailingStepProps> = ({savedData}) => {
    const isAcceptedRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const nextStepHandler = () => {
        if (!isAcceptedRef.current) throw new DOMException('some problem with inputs ._.')
        dispatch(saveMailingStep({
            isAccepted: isAcceptedRef.current.checked
        }))
        dispatch(increaseStep())
    }
    const backStepHandler = () => {
        if (!isAcceptedRef.current) throw new DOMException('some problem with inputs ._.')
        dispatch(saveMailingStep({
            isAccepted: isAcceptedRef.current.checked
        }))
        dispatch(decreaseStep())
    }
    return (
        <div>
            <div>Mailing</div>
            <input ref={isAcceptedRef} defaultChecked={savedData} type={'checkbox'}/>Agree
            <div>{domainZone === 'ru' ? 'Some text...' : 'Another text'}</div>
            <button onClick={nextStepHandler}>Next</button>
            <button onClick={backStepHandler}>Back</button>
        </div>
    );
};

export default MailingStep;
