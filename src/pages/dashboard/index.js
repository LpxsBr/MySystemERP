import Navbar from "@/components/navbar";
import { getSession, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styled from "styled-components";
import FinancialResume from "@/components/FinancialResume";
import OrderResumeTable from "@/components/OrderResumeTable";
import OrderResume from "@/components/OrderResume";
import Link from "next/link";

export const system_modules = [
    {
        name: 'Service Order',
        path: '/system/service-order',
        image: 'https://www.pngkey.com/png/full/207-2078127_services-icon-white-png.png'
    },
    {
        name: 'Finances',
        path: '/system/service-order',
        image: 'https://www.pngkit.com/png/full/303-3032439_we-deliver-guarantee-finance-icon-white-png.png'
    },
    {
        name: 'Business Inteligence',
        path: '/system/service-order',
        image: 'https://www.seekpng.com/png/full/125-1250887_business-intelligence-business-intelligence-icon-white.png'
    },
    {
        name: 'Costumers',
        path: '/system/service-order',
        image: 'https://capivari.sp.gov.br/portal/wp-content/uploads/2023/01/Icons-05.png'
    }
]

export const ModuleItem = ({ module }) => {

    const StyledModuleItem = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #000;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        height: 100px;
        width: 100px;
        a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
        }
        div img{
            width: 50px;
        }
        div h3{
            color: #fff;
        }
    `;

    return (
        <StyledModuleItem>
            <Link href={module.path}>
                <div>
                    <img src={module.image} />
                </div>
                <div>
                    <h3>{module.name}</h3>
                </div>
            </Link>
        </StyledModuleItem>
    )
}

export default function Dashboard() {

    const [user, setUser] = useState([]);

    const router = useRouter();

    const handleSingOut = async () => {
        const data = await signOut({ redirect: false, callbackUrl: '/' })
        router.push(data.url)
    }

    const session = getSession();

    useEffect(() => {
        session.then((data) => setUser(data.user))
    }, [session])

    const InitStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 5%;
    .module_container{
        display: flex;
        justify-content: space-around;
        padding: 5% 0 ;
        /* height: 00px; */
    }
    .resume_container{
        display: flex;
        /* flex-direction: column; */
        gap: 5%;
        height: 400px;
        width: calc(100%-40px);
        
        /* padding: 5%; */
    }
    .order_container{
        display: flex;
        flex-direction: column; 
        /* flex-direction: column; */
        /* height: 300px; */
        width: calc(100%-40px);
        
        padding: 5% 0;
    }
    `;

    return (
        <>
            <Navbar />
            <InitStyle>
                <section className="module_container">
                    {
                        system_modules.map((module, key) => <ModuleItem key={key} module={module} />)
                    }
                </section>  
                <section className="resume_container">
                    <FinancialResume />
                    <OrderResume />
                </section>
                <section className="order_container">
                    <div className="title_resume">
                        <h1>Transactions Resume</h1>
                    </div>
                    <div>
                        <OrderResumeTable />
                    </div>
                </section>
            </InitStyle>
        </>
    )
}