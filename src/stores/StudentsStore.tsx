import Student from "../models/Student";
import { observable, action } from "mobx";
import { v4 as uuid } from "uuid";

const createStudent = (data: Omit<Student, "id">) => ({
    id: uuid(),
    ...data
});

export class StudentsStore {
    @observable students = [
        createStudent({
            firstName: "Jane",
            lastName: "Jones",
            gpa: "A",
            phoneNumber: "202-555-0115",
            street: "Lemon #123",
            city: "New York",
            state: "New York State",
            zipCode: "10001"
        }),
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
            firstName: "Marc",
            lastName: "Lopez",
            gpa: "C",
            phoneNumber: "202-555-6411",
            street: "Apple #133",
            city: "New York",
            state: "New York State",
            zipCode: "10002"
        })
    ];

    createStudent = () => createStudent({
        firstName: "",
        gpa: "",
        phoneNumber: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zipCode: ""
    });

    @action deleteStudent = (student: Student) => {
        this.students = this.students.filter(s => s.id !== student.id);
    }

    @action addStudent = (student: Student) => {
        this.students = [ ...this.students, student ];
    }
}

const studentsStore = new StudentsStore();

export { createStudent, studentsStore };