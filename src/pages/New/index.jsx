import { Link } from 'react-router-dom';

import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/Noteitem'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form } from './styles'

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://github.com/CaioEliws" />
                        <NoteItem isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Novo tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}