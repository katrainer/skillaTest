import s from './CallRecord.module.scss'
import {FC} from 'react'
import {timeUtils} from '../../../../../utils/timeUtils/timeUtils'

export const CallRecord: FC<CallRecordPropsType> = ({duration, recordId, callId, reloadCall}) => {

	const onClickHandler = () => {
		reloadCall(callId, recordId)
	}

	return <div className={s.mainContainer}>
		{recordId === '' ? <span>{duration === 0 ? '' : timeUtils.secondToMinute(duration)}</span
		> : <>
            <span className={s.reloadButton} onClick={onClickHandler}>
            {timeUtils.secondToMinute(duration)}
        </span></>}
	</div>
}
type CallRecordPropsType = {
	recordId: string
	duration: number
	callId: number
	reloadCall: (callId: number, recordId: string) => void
}