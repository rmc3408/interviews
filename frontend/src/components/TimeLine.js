import React from 'react'
import { Timeline } from 'flowbite-react'

// let getTime = (note) => {
//     return new Date(note.createdAt).toLocaleDateString('pt-BR')
// }

export default function StepperTimeline({ dates, companyName }) {
    return (
        <Timeline horizontal>
            <Timeline.Item>
                <Timeline.Point color='red' />
                <Timeline.Content>
                    <Timeline.Title>Inicio na {companyName}</Timeline.Title>
                    <Timeline.Time>{dates.entrada}</Timeline.Time>
                    <Timeline.Body>Full Stack Developer</Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Title>Ferias</Timeline.Title>
                    <Timeline.Time>Inicio: {dates.feriasEntrada}</Timeline.Time>
                    <br />
                    <Timeline.Time>Fim: {dates.feriasSaida}</Timeline.Time>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Title>Fim do Contrato</Timeline.Title>
                    <Timeline.Time>{dates.saida}</Timeline.Time>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    )
}
