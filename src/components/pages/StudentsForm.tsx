import React, { useState } from "react";
import Student from "../../models/Student";
import Form from "../generics/Form";

export interface StudentsFormProps {
    onSubmit: (student: Student) => void;
    onGoBack: () => void;
    createStudent: () => Student;
}

/**
 * Student form page, to add new students.
 */
const StudentsForm: React.FC<StudentsFormProps> = ({ createStudent, onSubmit, onGoBack }) => {
    const [student, setStudent] = useState(createStudent());

    const handleChange =
        (property: keyof Student) =>
            (value: string) =>
                setStudent({ ...student, [property]: value });

    const handleSubmit = () => onSubmit(student);

    return (
        <Form
            inputs={[
                {
                    id: "firstName",
                    label: "First Name",
                    value: student.firstName,
                    onChange: handleChange("firstName")
                },
                {
                    id: "lastName",
                    label: "Last Name",
                    value: student.lastName,
                    onChange: handleChange("lastName")
                },
                {
                    id: "street",
                    label: "Street Number/Name",
                    value: student.street,
                    onChange: handleChange("street")
                },
                {
                    id: "city",
                    label: "City",
                    value: student.city,
                    onChange: handleChange("city")
                },
                {
                    id: "state",
                    label: "State",
                    value: student.state,
                    onChange: handleChange("state")
                },
                {
                    id: "zipCode",
                    label: "ZIP Code",
                    value: student.zipCode,
                    onChange: handleChange("zipCode")
                },
                {
                    id: "phoneNumber",
                    label: "Phone Number",
                    value: student.phoneNumber,
                    onChange: handleChange("phoneNumber")
                },
                {
                    id: "gpa",
                    label: "GPA",
                    value: student.gpa,
                    onChange: handleChange("gpa")
                },
            ]}
            onSubmit={handleSubmit}
            onGoBack={onGoBack}
        ></Form>
    );
};

export default StudentsForm;