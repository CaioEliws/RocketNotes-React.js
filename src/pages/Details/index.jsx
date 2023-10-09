import { Container, Links, Content } from './styles'

import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota"/>

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis eaque dolorum nihil animi officia quidem expedita pariatur dolorem, et impedit suscipit numquam veniam eos fugit adipisci autem neque perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptatum repellendus commodi doloremque illo asperiores vel, natus tempore impedit quis nobis, est optio ipsa unde cum. Consequatur ex repellat animi.</p>

          <Section title="links úteis">
            <Links>
              <li><a href="https://github.com/CaioEliws" target='_blank'>https://github.com/CaioEliws</a></li>
              <li><a href="https://github.com/CaioEliws" target='_blank'>https://github.com/CaioEliws</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar"/>
        </Content>
      </main>
    </Container>
  )
}