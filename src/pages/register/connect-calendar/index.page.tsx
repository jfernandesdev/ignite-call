import { Heading, MultiStep, Text, Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>

          <Button type="button" variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button type="submit" disabled={true}>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}