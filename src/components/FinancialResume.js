import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs'
import styled from 'styled-components'

const StyledFinancialResume = styled.div`

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 5%;
    background-color: #000;
    gap: 30px;
    .cash_flow{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .svg_icon_entries, .svg_icon_exities{
        width: 20px;
        height: 20px;
    }
    .svg_icon_entries{
        fill: green;
    }
    .svg_icon_exities{
        fill: red;
    }

    .cash_flow div label {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        gap: 10px;
    }


`;

export default function FinancialResume({ ...props }) {
    return (
        <StyledFinancialResume className="financial_resume">
            <div className="title_resume">
                <h1>Finacial Resume</h1>
            </div>
            <div className="cash_flow">
                <div className="cash_entries">
                    <label>
                        <BsFillArrowUpSquareFill className="svg_icon_entries" />
                        <h2>Cash Entries</h2>
                    </label>
                    <h2>R$ 12.000,00</h2>
                </div>
                <div className="cash_exities">
                    <label>
                        <BsFillArrowDownSquareFill className="svg_icon_exities" />
                        <h2>Cash Exities</h2>
                    </label>
                    <h2>R$ -11.000,00</h2>
                </div>
            </div>
        </StyledFinancialResume>
    )
}