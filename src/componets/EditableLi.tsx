import {DataType} from '../data/data';
import React, {ChangeEvent, MouseEvent, useState} from 'react';

type EditableLiType = DataType & {
    id: string
    name: string
    activeClass: string
    onClickItemHandler: (id: string) => void
}
export const EditableLi = ({
                               id,
                               dataColumn,
                               updateItemList,
                               name,
                               activeClass,
                               onClickItemHandler
                           }: EditableLiType) => {
    const [editModeItem, setEditModeItem] = useState('')
    const [elementEditValue, setElementEditValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setElementEditValue(e.currentTarget.value)
    }
    const onBlurInputHandler = () => {
        updateItemList(dataColumn.map(el => el.id === editModeItem ? {...el, name: elementEditValue} : el))
        setEditModeItem('')
        setElementEditValue('')
    }
    const onClickEditHandler = (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        setEditModeItem(id)
        setElementEditValue(name)
    }

    const onClickDeleteHandler = (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        updateItemList(dataColumn.filter(el => el.id !== id))
    }
    return (
        <>
            {
                editModeItem !== id
                    ? <li key={id}
                          onClick={() => onClickItemHandler(id)}
                          className={`${activeClass} edit_li btn block`}
                    >
                        <span style={{width: '80px'}}>{name}</span>
                        <span onClick={onClickEditHandler} className={'icon btn'}>
                            <i className="fa-solid fa-pen"/></span>
                        <span onClick={onClickDeleteHandler} className={'btn'}>
                            <i className="fa-solid fa-trash"/></span>
                    </li>
                    : <input type={'text'}
                             key={id}
                             autoFocus={true}
                             value={elementEditValue}
                             onBlur={onBlurInputHandler}
                             onChange={onChangeInputHandler}
                             className={'inputBlock'}/>

            }
        </>
    )
}
