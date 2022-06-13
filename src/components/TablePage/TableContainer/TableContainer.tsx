import {useEffect} from 'react'
import {CallType} from '../../../api/globalApi'
import {FilterLine} from './FilterLine/FilterLine'
import {HeaderTable} from './HeaderTable/HeaderTable'
import s from './TableContainer.module.scss'
import {inOutSort} from '../../../utils/inOutSort/inOutSort'
import {Calls} from './Calls/Calls'
import {
	CallRequestValueType,
	setCallRequestValueAC,
	setDataTC,
	setFetchingAC,
	setRecordTC
} from '../../../store/reducers/callsReducer'
import {useAppDispatch, useAppSelector} from '../../../store/store'

export const TableContainer = () => {


	const dispatch = useAppDispatch()
	const totalRows = useAppSelector(state => state.calls.totalRows)
	const fetching = useAppSelector(state => state.calls.fetching)
	const data = useAppSelector(state => state.calls.data)
	const callRequestValue = useAppSelector(state => state.calls.callRequestValue)
	const audio = useAppSelector(state => state.calls.record)
	useEffect(() => {
		if (fetching) dispatch(setDataTC())
	}, [fetching])

	useEffect(() => {

		const scrollHandler = (e: any) => {
			if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
					&& data.length < totalRows) {
				dispatch(setFetchingAC(true))
			}
		}

		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [data, totalRows])


	const setCallRequestValue = (value: CallRequestValueType) => {
		dispatch(setCallRequestValueAC(value))
	}

	const reloadCall = (callId: number, recordId: string) => {
		dispatch(setRecordTC(callId, recordId))
	}

	const calls = inOutSort(data, callRequestValue)


	return <div className={s.mainContainer}>
		<FilterLine callRequestValue={callRequestValue} setCallRequestValue={setCallRequestValue}/>
		<div className={s.tableContainer}>
			<HeaderTable/>
			<Calls calls={calls} reloadCall={reloadCall}/>
		</div>
	</div>
}


//type

export type CallsType = {
	[key: string]: CallType[]
}