import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

const StyledBtn01 = styled.button`

        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        height: 60px;
        width: 200px;
        gap: 10%;
        border-radius: 10px;
        border: none;
        span{
            font-size: 1.2rem;
            font-weight: bolder;
        }
        .icon{
            height: 40px;
            width: 40px;
        }
        &:hover{
            /* background-color: #1A1A1A; */
            transform: scale(1.1);
        }
`;

export default function StyledBtn1({func, icon, text}) {
    return (
        <StyledBtn01 onClick={func}>
            <span>{text}</span>
            {()=>icon()}
        </StyledBtn01>
    )
}