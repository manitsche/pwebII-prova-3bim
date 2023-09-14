import { Container } from "./styles";
import { OrderBoard } from "../OrderBoard";

export function Orders() {
    return (
        <Container>
            <OrderBoard title="Notícias" icon="📜" amount="1" />
            <OrderBoard title="Informações" icon="👨‍🍳" amount="5" />
            <OrderBoard title="Matérias" icon="📈" amount="2" />
            <OrderBoard title="Feed" icon="✅" amount="3" /> 
        </Container>
    )
}