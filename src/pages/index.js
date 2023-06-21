import { ThemeContext } from '@/components/theme';
import { GetServerSideProps } from 'next'
import { getSession, signIn } from "next-auth/react"
import { useContext, useState } from 'react';
import styled from 'styled-components';

import {AiFillGithub} from 'react-icons/ai'

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

const StyleInitialPage = styled.main`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

height: 100vh;
background-color: #1C1C1C;
color: #fff;

.infoBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #101010;
    width: 400px;
    height: 300px;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px -1px #000;
    /* &:hover{
        animation: hoverLogin 100ms linear normal;
        box-shadow: 0px 0px 20px -1px #fff;
    } */

    @keyframes hoverLogin {
        from{
            box-shadow: 0px 0px 0px -1px #fff;
        }
        to{
            box-shadow: 0px 0px 20px -1px #fff;
        }
    }

    .login{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 10%;
    }

    .run_login button{
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
        .github_logo{
            height: 40px;
            width: 40px;
        }
        &:hover{
            /* background-color: #1A1A1A; */
            transform: scale(1.1);
        }
    }
}

`;

export default function App() {

    const handleSignIn = () => {
        signIn('github')
    }

    const [step, setStep] = useState(0)

    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <StyleInitialPage>
            <div className='infoBox'>
                <div className='title'>
                    <h1>Bem - vindo ao MyLink</h1>
                </div>
                <div className='login'>
                    <div className='title_login'>
                        <h3>Faça seu login com o Github</h3>
                    </div>
                    <div className='run_login'>
                        <button onClick={handleSignIn}>
                            <span>Github</span>
                            <AiFillGithub className='github_logo'/>
                        </button>
                    </div>
                </div>
            </div>
        </StyleInitialPage>
    )
}