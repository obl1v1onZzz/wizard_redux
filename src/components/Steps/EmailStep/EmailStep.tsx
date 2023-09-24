import {InputField} from "../../Shared/InputField/InputField.tsx";
import React, {useRef, useState} from "react";
import {useAppDispatch} from "../../../store/store.ts";
import {saveEmailStep} from "../../../features/saveDataSlice.ts";
import {increaseStep} from "../../../features/stepSlice.ts";
import {emailInputValidator} from "./Validators.ts";
import ErrorBlock from "../../Shared/ErrorBlock/ErrorBlock.tsx";

interface EmailStepProps {
    savedData: string
}

const EmailStep: React.FC<EmailStepProps> = ({savedData}) => {
    const [isValid, setIsValidateErr] = useState(false)
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLInputElement>(null)

    const nextStepHandler = () => {

        if (!ref.current) throw new DOMException('some problem with inputs ._.')
        const email = ref.current.value
        const isValidated = emailInputValidator(email)

        if (isValidated) {
            dispatch(saveEmailStep({
                email
            }))
            dispatch(increaseStep())
        } else setIsValidateErr(true)
    }
    return (
        <div>
            <span>Email</span>
            <InputField defaultValue={savedData} ref={ref}></InputField>
            <ErrorBlock status={isValid} errorMessage={'Invalid e-mail'}></ErrorBlock>
            <button onClick={nextStepHandler}>Next</button>
        </div>

    );
};

export default EmailStep;
