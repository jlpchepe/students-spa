import React from "react";
import { Container } from "react-bootstrap";

const PageHeader: React.FC<{ header: string }> = ({ header }) => (
    <Container className="row justify-content-center">
        <h2 className="mt-2">{header}</h2>
    </Container>
);

export default PageHeader;