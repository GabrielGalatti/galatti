import React from "react";

import EmailInput from "@components/email-input/email-input";
import TextInput from "@components/text-input/text-input";
import PasswordInput from "@components/password-input/password-input";
import NumberInput from "@components/number-input/number-input";

const compontents = {
    email: EmailInput,
    text: TextInput,
    password: PasswordInput,
    number: NumberInput
}

const getGenericInput = ({props}) => {
    const GenericInput = compontents[props.type.toLowerCase() || 'text'];
    if(!GenericInput)
        throw new Error("Input type não existente")
    return(
        <GenericInput label={props.label} placeholder={props.placeholder} name={props.name} action={props.action} id={props.id} required={props.required}/>
    )
}

export default getGenericInput;