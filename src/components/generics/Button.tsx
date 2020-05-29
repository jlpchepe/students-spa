import React from "react";
import { Button as BoostrapButton } from "react-bootstrap";

interface ButtonProps {
    id?: string;
    onClick?: () => void;
    type?: "button" | "reset" | "submit";
    className?: string;
    variant?: "secondary" | "danger";
}

/**
 * A simple button.
 */
const Button: React.FC<ButtonProps> =
    ({ id, className, onClick, type, variant, children }) => (
    <BoostrapButton
        id={id}
        className={className}
        onClick={onClick}
        type={type}
        variant={variant}
    >{children}
    </BoostrapButton>
);

export default Button;
