
import logo from "../../assets/images/logo.png"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="AppFood"/>
            </Content>
        </Container>
    );
}