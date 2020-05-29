import React from 'react'
import { mount, configure, ReactWrapper } from "enzyme";
import StudentDetails, { StudentDetailsProps } from "../components/pages/StudentDetails";
import { createStudent } from "../stores/StudentsStore";
import Adapter from 'enzyme-adapter-react-16';

const student = createStudent({
    firstName: "Louis",
    lastName: "Lane",
    gpa: "B",
    phoneNumber: "202-555-3215",
    street: "Pinnacle #443",
    city: "New Jersey",
    state: "New Jersey State",
    zipCode: "07095"
});

const studentDetailsFieldsShownCount = 8;

const mockGoBackFn = jest.fn();
const mockProps: StudentDetailsProps = {
    ...student,
    onGoBack: mockGoBackFn,
    photoUrl: ""
}

configure({ adapter: new Adapter() });

describe("StudentDetails", () => {
    let component : ReactWrapper;
    beforeAll(() => component = mount(<StudentDetails {...mockProps}/>));

    it("should show the information of the student", () => {
        expect(component.find("label").length)
            .toBe(studentDetailsFieldsShownCount);
    });

    it("should have a functional go back button", () => {
        const buttons = component.find("button");
        expect(buttons.length).toBe(1);

        const goBackButton = buttons.first();
        expect(goBackButton).not.toBeNull();

        goBackButton.simulate("click");
        expect(mockGoBackFn).toHaveBeenCalled();
    });

    it("should have one image", () => {
        const images = component.find("img");
        expect(images.length).toBe(1);
    });

    afterAll(() => component.unmount());
});