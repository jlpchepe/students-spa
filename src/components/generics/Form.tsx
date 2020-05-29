import React, { FormEvent, useState } from "react";
import { Form as BoostrapForm, Row, Col } from "react-bootstrap";
import Button from "./Button";
import TextInput from "./TextInput";

interface FormInput {
    /**
     * Must be unique.
     */
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
}

interface FormProps {
    inputs: FormInput[];
    onSubmit: () => void;
    onGoBack: () => void;
}

/**
 * A form with auto generated inputs.
 */
const Form: React.FC<FormProps> = ({ inputs, onSubmit, onGoBack }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity()) {
            onSubmit();
        }

        setValidated(true);
    };

    const renderInput = (input: FormInput, autoFocus: boolean) => 
        input ? (
            <Col>
                <TextInput
                    id={input.id}
                    label={input.label}
                    value={input.value}
                    onChange={input.onChange}
                    autoFocus={autoFocus}
                >
                </TextInput>
            </Col>
        ) : undefined;

    const rowRenderedInputs : JSX.Element[] = [];
    for (let index = 0; index < inputs.length; index = index + 2) {
        const input = inputs[index];
        const leftColumn = renderInput(input, index === 0);
        const rightColumn = renderInput(inputs[index + 1], false);
        const row = <Row key={input.id}>{leftColumn}{rightColumn}</Row>;
        
        rowRenderedInputs.push(row);
    }

    return (
        <BoostrapForm
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            {rowRenderedInputs}
            <div className="float-right text-right">
                <Button className="mr-2" type="submit">Save</Button>
                <Button onClick={onGoBack} variant="secondary">Back</Button>
            </div>
        </BoostrapForm>
    );
}

export default Form;