import {createSlice} from '@reduxjs/toolkit'
import {STEPS} from "./stepSlice.ts";


type auth = {
    password: string,
    login: string
}
export type TDomainRU = auth & {
    phoneNumber: string,
}
export type TAnotherDomain = auth & {
    isAccepted: boolean
}
type TEmailStepAction = {
    payload: { email: string }
};

type TMailingStepAction = {
    payload: { isAccepted: boolean }
};
type TAuthStepAction = {
    payload: {
        password: string, login: string
    }
};

type TAuthStepRuAction = TAuthStepAction & {
    payload: {
        phoneNumber: string
    }
}
type TAnotherDomainAuthAction = TAuthStepAction & {
    payload: {
        isAccepted: boolean
    }
}


interface saveDataState {
    [STEPS.EMAIL]: string
    [STEPS.MAILLING]: boolean
    [STEPS.AUTH]:
        {
            domainRU: TDomainRU,
            anotherDomain: TAnotherDomain
        }

}

const initialState: saveDataState = {
    [STEPS.AUTH]: {
        domainRU: {
            password: '',
            phoneNumber: '',
            login: ''
        },
        anotherDomain: {
            password: '',
            isAccepted: false,
            login: ''
        }
    },
    [STEPS.MAILLING]: false,
    [STEPS.EMAIL]: ''
}

const saveDataSlice = createSlice({
    name: 'saveData',
    initialState,
    reducers: {
        saveEmailStep(state, action: TEmailStepAction) {
            state[STEPS.EMAIL] = action.payload.email
        },

        saveAuthStep(state, action: TAnotherDomainAuthAction) {
            state[STEPS.AUTH]['anotherDomain'] = action.payload
        },
        saveMailingStep(state, action: TMailingStepAction) {
            state[STEPS.MAILLING] = action.payload.isAccepted
        },
        saveAuthRu(state, action: TAuthStepRuAction) {
            state[STEPS.AUTH]['domainRU'] = action.payload
        }


    },
})

export const {saveMailingStep, saveEmailStep, saveAuthStep, saveAuthRu} = saveDataSlice.actions
export default saveDataSlice.reducer