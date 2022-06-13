import {FC} from 'react'
import {SvgSelector} from '../../../../assets/icons/SvgSelector'
import s from './Calls.module.scss'
import {CallsType} from '../TableContainer'
import {CallsTitle} from './CallsTitle/CallsTitle'
import {CallRecord} from './CallRecord/CallRecord'
import {timeUtils} from '../../../../utils/timeUtils/timeUtils'


export const Calls: FC<CallsPropsType> = ({calls, reloadCall}) => <div className={s.mainContainer}>

	{Object.keys(calls).map(c => {

		return <div key={c} className={s.callsContainer}>
			<CallsTitle date={c} length={calls[c].length}/>

			{calls[c].map(d => <div
					key={d.id}
					className={s.callContainer}
			>
				<div className={s.typeOfCall}>
					<SvgSelector
							svgName={d.in_out === 0 && d.status === 'Дозвонился' ?
									'outgoingCall' : d.in_out === 1 && d.status === 'Дозвонился' ?
											'incomingCall' : d.in_out === 0 && d.status === 'Не дозвонился' ?
													'didSpeakCall' : 'missedCall'}/>
				</div>
				<span className={s.timeContainer}>
            {timeUtils.timeConvert(d.date)}
            </span>
				<div className={s.avatarContainer}>
					<img src={d.person_avatar} alt=""/>
					{d.from_site === 1 && <SvgSelector svgName="fromSites"/>}
				</div>
				<span className={s.phoneNumberContainer}>+{d.to_number}</span>
				<span className={s.sourceContainer}>{d.source}</span>
				<span className={s.estimationContainer}>{''}</span>

				<CallRecord callId={d.id} recordId={d.record} duration={d.time} reloadCall={reloadCall}/>

			</div>)}
		</div>
	})}
</div>

//type
type CallsPropsType = {
	calls: CallsType
	reloadCall: (callId: number, recordId: string) => void
}