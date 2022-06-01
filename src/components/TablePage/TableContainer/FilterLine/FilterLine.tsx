import s from './FilterLine.module.scss'
import {SvgSelector} from '../../../../assets/icons/SvgSelector';
import {DataArrayType} from '../../../Navbar/Navbar';
import {useState} from 'react';

const inactiveDataArray: DataArrayType[] = [
    {id: 1, name: 'Все сотрудники', svgName: 'arrowDown'},
    {id: 2, name: 'Все звонки', svgName: 'arrowDown'},
    {id: 3, name: 'Все источники', svgName: 'arrowDown'},
    {id: 4, name: 'Все оценки', svgName: 'arrowDown'},
    {id: 5, name: 'Все ошибки', svgName: 'arrowDown'},
]

const callRequestValueDataArray: callRequestValueDataArray[] = [
    {id: 'Все звонки', name: 'Все звонки', key: 1},
    {id: 'Входящие', name: 'Входящие', key: 2},
    {id: 'Исходящие', name: 'Исходящие', key: 3},
    {id: 'Пропущенные', name: 'Пропущенные', key: 4},
]

export const FilterLine = () => {

    const [isHide, setIsHide] = useState(true)

    const [callRequestValue, setCallRequestValue] = useState<callRequestValueType>('Все звонки')

    const inactiveData = inactiveDataArray.map(i => <div key={i.id} className={s.inactiveContainer}>
        <span>{i.name}</span>
        <div className={s.svgContainer}><SvgSelector svgName={i.svgName}/></div>
    </div>)

    const callRequestValueData = callRequestValueDataArray.map(c =>
        <span key={c.key} id={c.id} className={callRequestValue === c.name ? s.activeValue : undefined}>
        {c.name}
    </span>)

    const changeCallRequestValueHandler = (e: any) => {
        setCallRequestValue(e.target.id)
    }


    return <div className={s.mainContainer}>
        <div className={s.searchContainer}>
            <SvgSelector svgName="magnifier"/>
            <span>Поиск по звонкам</span>
        </div>
        <div className={s.requestContainer}>
            <div className={s.activeContainer} onClick={() => setIsHide(!isHide)}>
                <span className={!isHide ? s.activeSpan : undefined}>{callRequestValue}</span>
                <div className={s.svgContainer}>
                    <SvgSelector svgName={isHide ? 'arrowDown' : 'arrowUp'}/>
                </div>
                <div className={isHide ? s.hide : s.menuContainer}
                     onClick={changeCallRequestValueHandler}
                >
                    {/*<span className={callRequestValue === 'Все звонки' ? s.activeValue : undefined} id="Все звонки">Все звонки</span>*/}
                    {/*<span id="Входящие">Входящие</span>*/}
                    {/*<span id="Исходящие">Исходящие</span>*/}
                    {/*<span id="Пропущенные">Пропущенные</span>*/}
                    {callRequestValueData}
                </div>
            </div>
            {inactiveData}
        </div>
    </div>
}

//type
type callRequestValueType = 'Все звонки' | 'Входящие' | 'Исходящие' | 'Пропущенные'
type callRequestValueDataArray = {
    id: string
    key: number
    name: string
}