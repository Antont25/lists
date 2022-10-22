import React, {Dispatch, memo, SetStateAction, useState} from 'react';
import {v1 as uuidv1} from 'uuid';
import {DataType, ListTechnologiesType} from '../data/data';
import '../App.css';
import {AddItemForm} from './AddItemForm';
import {EditableLi} from './EditableLi';


type ListType = DataType & {
    addElementToAdjacentColumn: Dispatch<SetStateAction<ListTechnologiesType[]>>
    adjacentDataColumn: ListTechnologiesType[]
    isRedactItems?: boolean
};

export const List = memo((props: ListType) => {
        const [activeElement, setActiveElement] = useState<string[]>([])


        const updateElementLists = (active: string[]) => {
            const addItems = props.dataColumn.filter(el => active.find(item => el.id === item))

            const newItemsLists = props.dataColumn.filter(el => {
                    const deleteItem = active.find(item => el.id === item)
                    return !deleteItem
                }
            )

            props.updateItemList(newItemsLists)
            props.addElementToAdjacentColumn([...props.adjacentDataColumn, ...addItems])
        }

        const onClickArrowHandler = () => {
            if (activeElement.length > 0) {
                updateElementLists(activeElement)
                setActiveElement([])
            } else if (props.dataColumn.length > 0) {
                const allItems = props.dataColumn.map(el => el.id)
                updateElementLists(allItems)

            }
        }


        const onClickItemHandler = (id: string) => {
            if (activeElement.includes(id)) {
                setActiveElement(activeElement.filter(el => el !== id))
            } else {
                setActiveElement([...activeElement, id])
            }
        }

        const activeClass = (id: string) => activeElement.some(item => item === id) ? `active item` : 'item'

        const addNewItem = (name: string) => {
            const item = {id: uuidv1(), name}
            props.updateItemList([item, ...props.dataColumn])
        }


        return (
            <div className={'itemsBlock'}>
                {props.isRedactItems && <AddItemForm addNewItem={addNewItem}/>}
                <div className={'listBlock'}>
                    <ul>
                        {props.dataColumn.length > 0
                            ? props.dataColumn.map(el => {
                                    return props.isRedactItems
                                        ? <EditableLi id={el.id}
                                                      name={el.name}
                                                      key={el.id}
                                                      activeClass={activeClass(el.id)}
                                                      dataColumn={props.dataColumn}
                                                      updateItemList={props.updateItemList}
                                                      onClickItemHandler={onClickItemHandler}
                                        />
                                        : <li key={el.id}
                                              onClick={() => onClickItemHandler(el.id)}
                                              className={`${activeClass(el.id)} btn`}>
                                            {el.name}
                                        </li>

                                }
                            )
                            : <span>данных нет</span>
                        }
                    </ul>
                    <div className={'arrow btn'} onClick={onClickArrowHandler}>
                        <i className="fa-solid fa-arrow-right"/>
                    </div>
                </div>
            </div>

        );
    })
;



