import {FC} from 'react';
import {CallType} from '../../../../api/globalApi';
import {SvgSelector} from '../../../../assets/icons/SvgSelector';
import s from './Table.module.scss'
import {toTime} from '../../../../utils/formatDate/toTime';


export const Table: FC<TablePropsType> = ({data}) => {


    return <div className={s.mainContainer}>
        {data.map(d => <div key={d.id} className={s.callContainer}>
            <div className={s.typeOfCall}>
                <SvgSelector
                    svgName={d.in_out === 0 && d.status === 'Дозвонился' ?
                        'outgoingCall' : d.in_out === 1 && d.status === 'Дозвонился' ?
                            'incomingCall' : d.in_out === 0 && d.status === 'Не дозвонился' ?
                                'didSpeakCall' : 'missedCall'}/>
            </div>
            <span className={s.timeContainer}>
            {toTime(d.date)}
            </span>
            <div className={s.avatarContainer}>
                <img src={d.person_avatar} alt=""/>
                {d.from_site === 1 && <SvgSelector svgName="fromSites"/>}
            </div>
            <span className={s.phoneNumberContainer}>+{d.to_number}</span>
            <span className={s.sourceContainer}>{d.source}</span>
            <span className={s.estimationContainer}>{''}</span>
            <div className={s.recordCall}>
                {d.record}
                <span>{d.time===0?'':d.time}</span>
            </div>
        </div>)}
    </div>
}

//type
type TablePropsType = {
    data: CallType[]
}