import {InputField} from "../../../../../Shared/InputField/InputField.tsx";
import React, {useRef} from "react";
import {useAppDispatch} from "../../../../../../store/store.ts";
import {loginValidator, passwordValidator} from "../../Validators.ts";
import {saveAuthRu, TDomainRU} from "../../../../../../features/saveDataSlice.ts";
import {phoneValidator} from "./Validator.ts";

interface IAuthStepRuProps {
    savedData: TDomainRU
}

const AuthStepRu: React.FC<IAuthStepRuProps> = ({savedData}) => {
    const phoneNumberRef = useRef<HTMLInputElement>(null)
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const nextStepHandler = () => {
        if (!phoneNumberRef.current || !loginRef.current || !passwordRef.current) throw new DOMException('some problem with inputs ._.')
        const login = loginRef.current.value
        const password = passwordRef.current.value
        const phoneNumber = phoneNumberRef.current.value
        if (loginValidator(login) && phoneValidator(phoneNumber).result && passwordValidator(password)) {
            dispatch(saveAuthRu({
                login,
                password,
                phoneNumber
            }))
        }
    }
    return (
        <div>
            <InputField defaultValue={savedData.phoneNumber} ref={phoneNumberRef}
                        description={'Phone number'}></InputField>
            <InputField defaultValue={savedData.login} ref={loginRef} description={'Login'}></InputField>
            <InputField defaultValue={savedData.password} type={'password'} ref={passwordRef}
                        description={'Password'}></InputField>
            <button onClick={nextStepHandler}>Next</button>
        </div>
    );
};

export default AuthStepRu;