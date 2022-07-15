import styled from "styled-components";
import {useState} from 'react'


interface Props{
    title: string;
    advancedInfo: string;
}


function FAQelem({title, advancedInfo}:Props){

    const [openAdditionalMenuFlag, setOpenAdditionalMenuFlag] = useState(false);


    return(
        <ExternalWrapper onClick={()=>setOpenAdditionalMenuFlag(!openAdditionalMenuFlag)}>
            <InnerWrapper>
                <Title>{title}</Title>
                {openAdditionalMenuFlag === false ? 
                <ShowButton src="./images/shevronDown.svg"/> 
                : 
                <HideButton src="./images/ShevronDown.svg" /> 
                }
            </InnerWrapper>
                {openAdditionalMenuFlag === false ? 
                    null 
                    :
                    <AdvancedInfo>{advancedInfo}</AdvancedInfo>
                }
        </ExternalWrapper>
    )
}

const Title = styled.p`
    font-size: 16px;
    text-align: left;
    font-weight: 500;
`
const ShowButton = styled.img`
    cursor: pointer;
    padding: 5px;
`
const HideButton = styled.img`
    transform: rotate(180deg);
    cursor: pointer;
    padding: 4px;
`
const AdvancedInfo = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #0B1332;
    margin-top: 24px;
`
const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ExternalWrapper = styled.div`
    padding: 24px 30px;
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    box-shadow: 0px 12px 26px rgba(232, 233, 236, 0.57);
    border-radius: 15px;
    font-family: Gilroy;
    cursor: pointer;
`


export default FAQelem;