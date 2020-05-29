import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Student from "../../models/Student";
import Button from "../generics/Button";
import Details from "../generics/Details";
import Image from "../generics/Image";

export interface StudentDetailsProps extends Student {
    photoUrl: string;
    onGoBack: () => void;
}

/**
 * Student details component.
 */
const StudentDetails: React.FC<StudentDetailsProps> =
    ({ photoUrl, onGoBack, ...student }) => (
    <Container>
        <Row className="row justify-content-md-center">
            <Col className="col-md-auto">
                <Image
                    alt="Student photo"
                    url={photoUrl}
                ></Image>
            </Col>
            <Col className="col-md-auto">
                <Details
                    fields={[
                        {
                            key: "firstName",
                            label: "First Name",
                            value: student.firstName
                        },
                        {
                            key: "lastName",
                            label: "Last Name",
                            value: student.lastName
                        },
                        {
                            key: "street",
                            label: "Street Number/Name",
                            value: student.street
                        },
                        {
                            key: "city",
                            label: "City",
                            value: student.city
                        },
                        {
                            key: "state",
                            label: "State",
                            value: student.state
                        },
                        {
                            key: "zipCode",
                            label: "ZIP Code",
                            value: student.zipCode
                        },
                        {
                            key: "phoneNumber",
                            label: "Phone number",
                            value: student.phoneNumber
                        },
                        {
                            key: "gpa",
                            label: "GPA",
                            value: student.gpa
                        },
                    ]}
                ></Details>
                <Button 
                    className="float-right mt-2"
                    onClick={onGoBack}
                    variant="secondary"
                >Back</Button>
            </Col>
        </Row>
    </Container>
);

export default StudentDetails;