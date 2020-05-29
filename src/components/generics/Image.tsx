import React from "react";
import { Image as BootstrapImage } from "react-bootstrap";

interface ImageProps {
    alt: string;
    url: string
}

/** A photo or image */
const Image: React.FC<ImageProps> = ({ url, alt }) =>
    <BootstrapImage src={url} alt={alt} rounded fluid/>;

export default Image;