import React from 'react';
import { MediumText } from '../TextComponents/MediumText';
import quotationMark from "../../assets/quote/quote.svg"

import { Container, Phrase, Author, QuotationTop, QuotatioBottom } from './style';

export function Quote() {
    return (
        <Container>
            <QuotationTop src={quotationMark}/>
            <Phrase>
                <MediumText text='With great power comes great electricity bill'/>
            </Phrase>
            <Author>
                <MediumText text='- Dr. Who'/>
            </Author>
            <QuotatioBottom src={quotationMark}/>
        </Container>
    )
}