import React from "react";
import { Form } from "react-bootstrap";

interface TextInputProps {
    /**
     * Input identifier.
     */
    id: string;

    /**
     * Label text for the input.
     */
    label: string;

    /**
     * Current input value.
     */
    value: string;

    /**
     * On change value callback.
     */
    onChange : (value: string) => void;

    /**
     * Indicates if the input must autofocus when mounted.
     */
    autoFocus?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, value, onChange, autoFocus}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value);

    return (
        <Form.Group controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                autoFocus={autoFocus}
                type="text"
                name={id}
                onChange={handleChange}
                placeholder={label}
                value={value}
                required
            />
            <Form.Control.Feedback>Perfect</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
        </Form.Group>
    );
}

export default TextInput;
