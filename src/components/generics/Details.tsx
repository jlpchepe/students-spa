import React from "react";
import TextDetails from "./TextDetails";

interface Field {
    /**
     * Must be unique.
     */
    key: string;
    label: string;
    value: string;
}

interface DetailsProps {
    fields: Field[];
}

/**
 * Fields with details.
 */
const Details: React.FC<DetailsProps> = ({ fields }) => (
    <div>
        {fields.map(({ key, label, value }) => 
            <TextDetails
                key={key}
                label={label}
                value={value}>
            </TextDetails>
        )}
    </div>
);

export default Details;