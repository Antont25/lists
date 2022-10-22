import {v1 as uuidv1} from 'uuid';
import {Dispatch, SetStateAction} from 'react';

export type DataType = {
    dataColumn: ListTechnologiesType[]
    updateItemList: Dispatch<SetStateAction<ListTechnologiesType[]>>
}
export type ListTechnologiesType = {
    id: string
    name: string
}
export const ListTechnologies1: ListTechnologiesType[] = [{
    id: uuidv1(),
    name: 'JavaScript'
}, {id: uuidv1(), name: 'TypeScript'}]
export const ListTechnologies2: ListTechnologiesType[] = [{
    id: uuidv1(),
    name: 'Java'
}, {id: uuidv1(), name: 'C#'}]
export const ListTechnologies3: ListTechnologiesType[] = [{
    id: uuidv1(),
    name: 'HTML'
}, {id: uuidv1(), name: 'C++'}]
