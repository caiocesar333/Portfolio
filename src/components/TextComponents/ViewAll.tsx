import React from 'react';
import { SmallText } from './SmallText';
import { ViewAllDiv } from './style';

export function ViewAll() {
    return (
        <ViewAllDiv>
            <SmallText text='View all ~~>' about='hover' />
        </ViewAllDiv>
    )
}