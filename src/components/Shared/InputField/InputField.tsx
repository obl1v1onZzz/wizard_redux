import React, {forwardRef} from 'react';
import styles from './InputField.module.css';

interface InterfaceInputField {
    className?: string;
    err?: string;
    description?: string;
    defaultValue?: string;
    value?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void

}

export const InputField = forwardRef<HTMLInputElement, InterfaceInputField>(
    ({className, err, description, defaultValue, type}, ref) => {
        return (
            <div className={className}>
                <span>{description}</span>
                <input type={type} ref={ref} defaultValue={defaultValue}
                       className={styles.inputField}></input>
                {err && <span style={{fontSize: '12px'}}>{err}</span>}
            </div>
        );
    },
);
