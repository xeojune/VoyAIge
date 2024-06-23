import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    width?: string;
    height?: string;
    background?: string;
    color?: string;
    radius?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const StyledButton = styled.button<ButtonProps> `
    width: ${props => props.width ? props.width : '100%'};
    background-color: ${props => props.background ? props.background: '#67A8E3'};
    border-radius: ${props => props.radius ? props.radius: '0'};
    height: ${props => props.height ? props.height : '100%'};
    color: ${props => props.color ? props.color : '#ffffff'};
    outline: none;
    font-size: 1rem;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
    &:hover {
        cursor: pointer;
        background-color: #A8E8FF;
        color: ${props => props.color ? props.color : '#ffffff'};
        transition: background-color 0.2s ease;
        outline: none;
    }
    &:active {
        outline: none;
    }
`;

export type { ButtonProps };

