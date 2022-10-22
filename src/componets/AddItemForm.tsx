import React, {ChangeEvent, MouseEvent, useState} from 'react';

type AddItemFormType = {
    addNewItem: (name: string) => void
}

export const AddItemForm = ({addNewItem}: AddItemFormType) => {
    const [value, setValue] = useState('')

    const onClickButtonHandler = () => {
        const valueTrim = value.trim()
        if (valueTrim !== '') {
            addNewItem(valueTrim)
            setValue('')
        }
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input type={'text'} value={value} onChange={onChangeInputHandler} placeholder={'названия'}/>
            <button onClick={onClickButtonHandler} className={'btn'}>+</button>
        </div>
    );
};

