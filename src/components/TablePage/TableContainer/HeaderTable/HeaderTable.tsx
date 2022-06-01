import s from './HeaderTable.module.scss'

export const HeaderTable = () => <div className={s.mainContainer}>
    <span style={{width: 53}}>Тип</span>
    <span style={{width: 89}}>Время</span>
    <span style={{width: 128}}>Сотрудник</span>
    <span style={{width: 326}}>Звонок</span>
    <span style={{width: 214}}>Источник</span>
    <span style={{width: 461}}>Оценка</span>
    <span>Длительность</span>
</div>