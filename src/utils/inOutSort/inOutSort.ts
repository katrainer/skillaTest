import {CallType} from '../../api/globalApi'
import {CallsType} from '../../components/TablePage/TableContainer/TableContainer'
import {CallRequestValueType} from '../../store/reducers/callsReducer'

export const inOutSort = (data: CallType[], callRequestValue: CallRequestValueType) => {
	const dataForTable = callRequestValue === 'Все звонки' ?
			data.map(d => d) : callRequestValue === 'Исходящие' ?
					data.filter(d => d.in_out === 0) : data.filter(d => d.in_out === 1)
	const keysArray = Array.from(new Set(dataForTable.map(d => d.date_notime)))
	let calls: CallsType = {}
	for (let i = 0; i < keysArray.length; i++) {
		calls[keysArray[i]] = dataForTable.filter(d => d.date_notime === keysArray[i])
	}
	return calls
}