import {FC} from 'react'
import s from './CallsTitle.module.scss'
import {dateUtils} from '../../../../../utils/dateUtils/dateUtils'

export const CallsTitle: FC<CallsTitlePropsType> = ({length, date}) => <div className={s.mainContainer}>
	{dateUtils.dateConvert(date) === dateUtils.today() ? undefined
			: <div className={s.dateContainer}>
                    <span>
                        {dateUtils.dateConvert(date) === dateUtils.yesterday() ? 'Вчера' : dateUtils.dateConvert(date)}
                    </span>
				<span className={s.quantityCalls}>
                        {length}
                    </span>
			</div>}
</div>

//type
type CallsTitlePropsType = {
	length: number
	date: string
}