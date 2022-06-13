import s from './FilterLine.module.scss'
import {SvgSelector} from '../../../../assets/icons/SvgSelector'
import {DataArrayType} from '../../../Navbar/Navbar'
import {FC, useState} from 'react'
import {CallRequestValueType} from '../../../../store/reducers/callsReducer'

const inactiveDataArray: DataArrayType[] = [
	{id: 1, name: 'Все сотрудники', svgName: 'arrowDown'},
	{id: 2, name: 'Все звонки', svgName: 'arrowDown'},
	{id: 3, name: 'Все источники', svgName: 'arrowDown'},
	{id: 4, name: 'Все оценки', svgName: 'arrowDown'},
	{id: 5, name: 'Все ошибки', svgName: 'arrowDown'},
]

const callRequestValueDataArray: CallRequestValueDataArray[] = [
	{id: 'Все звонки', name: 'Все звонки', key: 1},
	{id: 'Входящие', name: 'Входящие', key: 2},
	{id: 'Исходящие', name: 'Исходящие', key: 3},
]

export const FilterLine: FC<FilterLinePropsType>
		= ({callRequestValue, setCallRequestValue}) => {

	const [isHide, setIsHide] = useState(true)

	const inactiveData = inactiveDataArray.map(i => <div key={i.id} className={s.inactiveContainer}>
		<span>{i.name}</span>
		<div className={s.svgContainer}><SvgSelector svgName={i.svgName}/></div>
	</div>)

	const callRequestValueData = callRequestValueDataArray.map(c =>
			<span style={{zIndex: 100}} key={c.key} id={c.id}
						className={callRequestValue === c.name ? s.activeValue : undefined}>
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
					{callRequestValueData}
				</div>
			</div>
			{inactiveData}
		</div>
	</div>
}

//type

type CallRequestValueDataArray = {
	id: string
	key: number
	name: string
}
type FilterLinePropsType = {
	callRequestValue: CallRequestValueType
	setCallRequestValue: (value: CallRequestValueType) => void
}