import { observer } from "mobx-react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Student from "../../models/Student";
import { StudentsStore } from "../../stores/StudentsStore";
import StudentDetails from "../pages/StudentDetails";
import StudentsForm from "../pages/StudentsForm";
import StudentsTable from "../pages/StudentsTable";

interface StudentsDetailsMatchParams {
    id: string
}

export type RouteComponentPropsAndStudentStore<T = {}> =
    RouteComponentProps<T> & { studentsStore: StudentsStore };

const StudentDetailsRouterConnected = observer<React.FC<RouteComponentPropsAndStudentStore<StudentsDetailsMatchParams>>>(
    ({ history, match, studentsStore }) =>
        <>
            <StudentDetails
                onGoBack={() => history.push("/")}
                photoUrl={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"}
                {...studentsStore.students.find(student => student.id === match.params.id) as Student} />
        </>
);

const StudentsFormRouterConnected = observer<React.FC<RouteComponentPropsAndStudentStore>>(
    ({ history, studentsStore }) => {
        const handleSubmit = (student: Student) => {
            studentsStore.addStudent(student);
            history.push("/");
        }

        return <StudentsForm
            createStudent={studentsStore.createStudent}
            onGoBack={() => history.push("/")}
            onSubmit={handleSubmit}
        />;
    });


const StudentsTableRouterConnected = observer<React.FC<RouteComponentPropsAndStudentStore>>(
    ({ history, studentsStore }) => (
        <StudentsTable
            students={studentsStore.students}
            onAddStudent={() => history.push("add")}
            onDeleteStudent={studentsStore.deleteStudent}
            onClickStudent={student => history.push("details/" + student.id)} />
    )
);

export { StudentDetailsRouterConnected, StudentsFormRouterConnected, StudentsTableRouterConnected };

