import React from "react";
import { StyledButton, ButtonProps } from "../../styles/ButtonStyle";

const Button: React.FC<ButtonProps> = ({
    width = '100%',
    height = '100%',
    background = '#67A8E3',
    color = '#FFFFFF',
    radius = '0',
    onClick = () => {},
    children
}) => {
    return (
        <StyledButton 
            width={width}
            height={height}
            background={background} 
            color={color} 
            radius={radius}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;