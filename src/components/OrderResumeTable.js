import styled from "styled-components"

const StyledTable = styled.table`

border-collapse: collapse;
width: 100%;
thead{
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    border: none;
}
tr{
    height: 30px;
}
td, th {
    text-align: justify;
    justify-content: flex-start;
    padding: 20px;
    color: white;
}

tr:nth-child(even){
    background-color: #28231D;
}
`;

export default function OrderResumeTable(props) {
    return (
        <StyledTable>
            <thead>
                <tr className="head">
                    <th>Id</th>
                    <th>Descrição</th>
                    <th>Estado</th>
                    <th>Prazo</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>001</td>
                    <td>Teste</td>
                    <td>Brasilia</td>
                    <td>12 dias</td>
                    <td>Pago</td>
                </tr>
                <tr>
                    <td>001</td>
                    <td>Teste</td>
                    <td>Brasilia</td>
                    <td>12 dias</td>
                    <td>Pago</td>
                </tr>
                <tr>
                    <td>001</td>
                    <td>Teste</td>
                    <td>Brasilia</td>
                    <td>12 dias</td>
                    <td>Pago</td>
                </tr>
                <tr>
                    <td>001</td>
                    <td>Teste</td>
                    <td>Brasilia</td>
                    <td>12 dias</td>
                    <td>Pago</td>
                </tr>
            </tbody>
        </StyledTable>
    )
}