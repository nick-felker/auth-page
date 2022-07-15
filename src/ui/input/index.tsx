import React from 'react';
import styled from 'styled-components';




interface Props{
    placeholder: string;
    type: string;
    error?: string;
    value?: string;
    onChange: any;
    pattern?: any;
    format?: any;
    separator?: any;
}



const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => (
    <>
        <Root {...props} ref={ref}/>
    </>
)); 


interface RootProps{
    error?: string;
    bgColor?: string;
    borderStyle?: string;
}


const Root = styled.input<RootProps>`
    z-index: 3;
    font-family: Gilroy;
    background: #F2F3F4;
    outline: none;
    border: ${props=> props.error === 'error' ? '1px solid red' : props.error === 'ok' ? '1px solid #17BC77' : '1px solid white'};
    padding: 14px 20px;
    ::placeholder{
        color: #717583;
        font-weight: 400;
        font-size: 14px;
    }
    border-radius: 10px;
    width: 280px;

`
export default Input;

