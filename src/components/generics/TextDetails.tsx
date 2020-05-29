import React from "react";

interface TextDetailsProps {
    label: string;
    value: string;
}

const TextDetails: React.FC<TextDetailsProps> = ({ label, value }) => (
    <label style={{ display:"block" }}><strong>{label}:</strong> {value}</label>
);

export default TextDetails;
