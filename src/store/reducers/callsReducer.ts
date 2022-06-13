import {CallType, globalApi} from '../../api/globalApi'
import {AppThunk} from '../store'
import {errorThunkHandler} from '../../utils/errorThunkHandler/errorThunkHandler'

enum EnumCallsReducerActionType {
	setData = 'CALLS/SET-DATA',
	setTotalRows = 'CALLS/SET-TOTAL-ROWS',
	setFetching = 'CALLS/SET-FETCHING',
	setCallRequestValue = 'CALLS/SET-CALL-REQUEST-VALUE',
	setRecord = 'CALLS/SET-RECORD',
}

const initialState = {
	data: [] as CallType[],
	offset: 0 as number,
	totalRows: 0 as number,
	fetching: true as boolean,
	callRequestValue: 'Все звонки' as CallRequestValueType,
	record: [],
}

export const callsReducer = (state: StateType = initialState, action: CallsReducerActionType): StateType => {
	switch (action.type) {
		case EnumCallsReducerActionType.setData:
			return {...state, fetching: false, offset: state.offset + 50, data: [...state.data, ...action.payload]}
		case EnumCallsReducerActionType.setTotalRows:
		case EnumCallsReducerActionType.setFetching:
		case EnumCallsReducerActionType.setCallRequestValue:
		case EnumCallsReducerActionType.setRecord:
			return {...state, ...action.payload}
		default:
			return state
	}
}

//action
const setDataAC = (data: CallType[]) => {
	return {
		type: EnumCallsReducerActionType.setData,
		payload: data
	} as const
}
const setTotalRowsAC = (totalRows: number) => {
	return {
		type: EnumCallsReducerActionType.setTotalRows,
		payload: {totalRows}
	} as const
}
export const setFetchingAC = (fetching: boolean) => {
	return {
		type: EnumCallsReducerActionType.setFetching,
		payload: {fetching}
	} as const
}
export const setCallRequestValueAC = (callRequestValue: CallRequestValueType) => {
	return {
		type: EnumCallsReducerActionType.setCallRequestValue,
		payload: {callRequestValue}
	} as const
}
const setRecordAC = (record: any[]) => {
	return {
		type: EnumCallsReducerActionType.setRecord,
		payload: record
	}
}


//thunk
export const setDataTC = (): AppThunk => async (dispatch, getState) => {
	const offset = getState().calls.offset
	try {
		const res = await globalApi.getData(50, offset)
		dispatch(setDataAC(res.results))
		dispatch(setTotalRowsAC(Number(res.total_rows)))
	} catch (e: any) {
		errorThunkHandler(e)
	} finally {
		setFetchingAC(false)
	}
}
export const setRecordTC = (callId: number, recordId: string): AppThunk => async dispatch => {
	try {
		const res = await globalApi.getRecord(recordId)
		const mp3 = new Blob([res.data], {type: 'audio/mp3'})
		const url = window.URL.createObjectURL(mp3)
		const audio = new Audio(url)
		audio.load()
		await audio.play()
		dispatch(setRecordAC([callId, audio]))
	} catch (e: any) {
		errorThunkHandler(e)
	}
}


//type
type StateType = typeof initialState
export type CallsReducerActionType =
		| ReturnType<typeof setDataAC>
		| ReturnType<typeof setTotalRowsAC>
		| ReturnType<typeof setFetchingAC>
		| ReturnType<typeof setCallRequestValueAC>
		| ReturnType<typeof setRecordAC>
export type CallRequestValueType = 'Все звонки' | 'Входящие' | 'Исходящие'