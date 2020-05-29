import React from 'react'
import { mount, shallow, configure, ReactWrapper } from "enzyme";
import StudentsForm, { StudentsFormProps } from "../components/pages/StudentsForm";
import { createStudent } from "../stores/StudentsStore";
import Adapter from 'enzyme-adapter-react-16';
import TextInput from '../components/generics/TextInput';

const mockGoBack = jest.fn();
const mockOnSubmit = jest.fn();
const mockProps: StudentsFormProps = {
    createStudent: () => createStudent({
        firstName: "Louis",
        lastName: "Lane",
        gpa: "B",
        phoneNumber: "202-555-3215",
        street: "Pinnacle #443",
        city: "New Jersey",
        state: "New Jersey State",
        zipCode: "07095"
    }),
    onGoBack: mockGoBack,
    onSubmit: mockOnSubmit
}

configure({ adapter: new Adapter() });

describe("StudentDetails", () => {
    let component: ReactWrapper;
    beforeAll(() => component = mount(<StudentsForm {...mockProps}></StudentsForm>))

    const expectedInputIds = [ 
        "firstName",
        "lastName",
        "street",
        "city",
        "state",
        "zipCode",
        "phoneNumber",
        "gpa"
    ];

    it("should contain an input for every field of the student", () => {
        const actualInputs = component.find(TextInput);
        
        const actualInputIds = actualInputs
            .map(input => input.props().id)
            .filter((id, idIndex, arr) => idIndex === arr.indexOf(id));

        expect(actualInputIds.length).toBe(expectedInputIds.length);

        for (let inputId of expectedInputIds) {
            expect(actualInputIds).toContain(inputId);
        }
    });
});