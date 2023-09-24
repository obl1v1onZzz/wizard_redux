import React from "react";

interface ErrorBlockProps {
    status: boolean
    errorMessage: string
}

const ErrorBlock: React.FC<ErrorBlockProps> = ({status, errorMessage}) => {
    return (
        <div>
            {status && errorMessage}
        </div>
    );
};

export default ErrorBlock;
