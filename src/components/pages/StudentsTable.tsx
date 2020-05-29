import React from "react";
import Student from "../../models/Student";
import Table from "../generics/Table";
import Button from "../generics/Button";

export interface StudentsTableProps {
    students: Student[];
    onAddStudent: () => void;
    onClickStudent: (student: Student) => void;
    onDeleteStudent: (student: Student) => void;
}

/**
 * Table that shows information of students.
 */
const StudentsTable: React.FC<StudentsTableProps> =
    ({ students, onAddStudent, onDeleteStudent, onClickStudent }) => (
    <>
        <Button
            id="add-button"
            className="float-right mb-2"
            onClick={onAddStudent}
        >Add student</Button>
        <Table
            rows={students.map(s => ({ ...s, key: s.id }))}
            rowKeySelector={student => student.id}
            onClickRow={onClickStudent}
            onDeleteRow={onDeleteStudent}
            columns={[
                {
                    columnKey: "firstName",
                    header: "First Name",
                    selector: student => student.firstName
                },
                {
                    columnKey: "lastName",
                    header: "Last Name",
                    selector: student => student.lastName
                },
                {
                    columnKey: "phoneNumber",
                    header: "Phone Number",
                    selector: student => student.phoneNumber,
                    centerContent: true
                },
                {
                    columnKey: "gpa",
                    header: "GPA",
                    selector: student => student.gpa,
                    centerContent: true
                }
            ]}>
        </Table>
    </>
);

export default StudentsTable;