import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Redirect, Route, RouteComponentProps } from "react-router-dom";
import "./App.scss";
import PageHeader from "./components/generics/PageHeader";
import {
    RouteComponentPropsAndStudentStore,
    StudentDetailsRouterConnected,
    StudentsFormRouterConnected,
    StudentsTableRouterConnected
} from "./components/routed";
import { studentsStore } from "./stores/StudentsStore";

const PageHeaderAndComponent =
    (header: string, RoutedComponent: React.FC<RouteComponentPropsAndStudentStore<any>>) =>
        (routeProps: RouteComponentProps) => {
            return (
                <>
                    <PageHeader header={header} />
                    <RoutedComponent
                        studentsStore={studentsStore}
                        {...routeProps}
                    ></RoutedComponent>
                </>
            );
        };

const App = () => (
    <Container>
        <Router>
            <Route
                exact
                path="/"
                render={PageHeaderAndComponent("Students", StudentsTableRouterConnected)}
            />
            <Route
                exact
                path="/add"
                render={PageHeaderAndComponent("Add student", StudentsFormRouterConnected)}
            />
            <Route
                path="/details/:id"
                component={PageHeaderAndComponent("Student details", StudentDetailsRouterConnected)}
            />
            <Redirect to="/" />
        </Router>
    </Container>
);

export default App;
