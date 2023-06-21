import OrderResumeTable from "@/components/OrderResumeTable";
import Navbar from "@/components/navbar";
import styled from "styled-components"

const StyledServiceOrder = styled.main`
display: flex;
flex-direction: column;
align-items: center;
.title{
    padding: 3%;
}
.transactions{
    padding: 0%;
    display: flex;
    width: 90%;
    .order_lateral_menu{
        padding: 5%;
        background-color: #000;
        height: 30rem;
        width: 30%;
    }
    .order_table{
        padding: 0 5%;
        width: 100%;
    }
}
padding: 10px;
`;

export default function ServiceOrder(){
    return(
        <>
        <Navbar/>
        <StyledServiceOrder>
            <div className="title">
                <center>
                    <h1>Service order</h1>
                </center>
            </div>
            <section className="transactions">
                <aside className="order_lateral_menu">
                    <button className="btn">Create service order</button>
                </aside>
                <div className="order_table">
                    <OrderResumeTable/>
                </div>
            </section>
        </StyledServiceOrder>
        </>
    )
}