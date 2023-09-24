import {InputField} from "../../../../../Shared/InputField/InputField.tsx";
import {useAppDispatch} from "../../../../../../store/store.ts";
import {decreaseStep, increaseStep} from "../../../../../../features/stepSlice.ts";
import {loginValidator, passwordValidator} from "../../Validators.ts";
import {saveAuthStep, TAnotherDomain} from "../../../../../../features/saveDataSlice.ts";
import React, {useRef} from "react";

interface IEmailStepProps {
    savedData: TAnotherDomain
}

const AuthStep: React.FC<IEmailStepProps> = ({savedData}) => {
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const isAcceptedRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const nextStepHandler = () => {
        if (!passwordRef.current || !loginRef.current || !isAcceptedRef.current) throw new DOMException('error with inputs ._.')
        const password = passwordRef.current.value
        const login = loginRef.current.value
        const isAccepted = isAcceptedRef.current.checked
        if (isAccepted && loginValidator(login) && passwordValidator(password)) {
            dispatch(saveAuthStep({
                isAccepted,
                password,
                login
            }))
            dispatch(increaseStep())
        }


    }
    const backStepHandler = () => {
        if (!passwordRef.current || !loginRef.current || !isAcceptedRef.current) throw new DOMException('error with inputs ._.')
        dispatch(saveAuthStep({
            isAccepted: isAcceptedRef.current.checked,
            password: passwordRef.current.value,
            login: loginRef.current.value
        }))
        dispatch(decreaseStep())
    }
    return (
        <div>
            <InputField defaultValue={savedData.login} ref={loginRef} description={'Login'}></InputField>
            <InputField defaultValue={savedData.password} type={'password'} ref={passwordRef}
                        description={'Password'}></InputField>
            <input defaultChecked={savedData.isAccepted} ref={isAcceptedRef} type={"checkbox"}/>
            I agree to the processing of personal
            <button onClick={nextStepHandler}>Next</button>
            <button onClick={backStepHandler}>Back</button>

        </div>
    );
};

export default AuthStep;