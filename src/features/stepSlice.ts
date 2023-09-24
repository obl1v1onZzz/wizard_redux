import {createSlice} from '@reduxjs/toolkit'

export enum STEPS {
    AUTH,
    EMAIL,
    MAILLING,
    MESSAGE
}

export const initialStep = STEPS.EMAIL

interface stepState {
    currentStep: STEPS,
}

const initialState: stepState = {
    currentStep: STEPS.EMAIL,
}

const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        increaseStep(state) {

            switch (state.currentStep) {
                case STEPS.EMAIL:
                    state.currentStep = STEPS.AUTH;
                    break
                case STEPS.AUTH:
                    state.currentStep = STEPS.MAILLING
                    break
                case STEPS.MAILLING:
                    state.currentStep = STEPS.MESSAGE
                    break
                default:
                    state.currentStep = STEPS.EMAIL
            }
        },
        decreaseStep(state) {
            switch (state.currentStep) {
                case STEPS.AUTH:
                    state.currentStep = STEPS.EMAIL
                    break
                case STEPS.MAILLING:
                    state.currentStep = STEPS.AUTH
                    break
                case STEPS.MESSAGE:
                    state.currentStep = STEPS.MAILLING
                    break
                default:
                    state.currentStep = STEPS.EMAIL
            }
        },

    },
})

export const {increaseStep, decreaseStep} = stepSlice.actions
export default stepSlice.reducer