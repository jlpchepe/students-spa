import React from 'react'
import { mount, configure, ReactWrapper, shallow } from "enzyme";
import StudentsTable, { StudentsTableProps } from "../components/pages/StudentsTable";
import { createStudent } from "../stores/StudentsStore";
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/generics/Button';

const mockOnAddStudent = jest.fn();
const mockOnClickStudent = jest.fn();
const mockOnDeleteStudent = jest.fn();

const mockProps: StudentsTableProps = {
    onAddStudent: mockOnAddStudent,
    onClickStudent: mockOnClickStudent,
    onDeleteStudent: mockOnDeleteStudent,
    students: [
        createStudent({
            firstName: "Louis",
            lastName: "Lane",
            gpa: "B",
            phoneNumber: "202-555-3215",
            street: "Pinnacle #443",
            city: "New Jersey",
            state: "New Jersey State",
            zipCode: "07095"
        }),
        createStudent({
            firstName: "John",
            lastName: "Lake",
            gpa: "B",
            phoneNumber: "202-555-3215",
            street: "Pinnacle #443",
            city: "New Jersey",
            state: "New Jersey State",
            zipCode: "07095"
        }),
    ]
}

configure({ adapter: new Adapter() });

let component: ReactWrapper;
beforeAll(() => component = mount(<StudentsTable {...mockProps} />));

describe("StudentsTable", () => {

    it("should contain first name, last name, phone number and GPA", () => {
        const expectedHeaders = [ "First Name", "Last Name", "Phone Number", "GPA" ];

        const actualHeaders =  component
            .find("th")
            .map(th => th.text())
            // Remove duplicates
            .filter((header, headerIndex, arr)  => headerIndex === arr.indexOf(header))
            .filter(header => header != null && header !== "");

        // Same amount of headers
        expect(actualHeaders.length).toBe(expectedHeaders.length);
        
        for (let expectedHeader of expectedHeaders){
            expect(actualHeaders).toContain(expectedHeader);
        }
    });

    it("should contain a functional add student button per row", () => {
        const addButton = component
            .find(Button)
            .filterWhere(b => b.props().id === "add-button");

        // Should exist a unique add button
        expect(addButton.length).toBe(1);

        expect(mockOnAddStudent).not.toHaveBeenCalled();
        addButton.first().find("button").simulate("click");
        expect(mockOnAddStudent).toHaveBeenCalled();
    });

    it("should contain a functional delete student button per row", () => {
        const deleteButtons = component
            .find(Button)
            .filterWhere(b => b.props().className.includes("delete-button"));

        // Each student should have a delete button in the table
        expect(deleteButtons.length)
            .toBe(mockProps.students.length);
        
        expect(mockOnDeleteStudent).not.toHaveBeenCalled();
        deleteButtons.first().find("button").simulate("click")
        expect(mockOnDeleteStudent).toHaveBeenCalled();
    });

    it("should select a user on mouse click over his/her corresponding row", () => {
        const tdsTable = component.find("td");

        expect(mockOnClickStudent).not.toHaveBeenCalled();
        tdsTable.first().simulate("click");
        expect(mockOnClickStudent).toHaveBeenCalled();
    });
});

afterAll(() => component.unmount());
