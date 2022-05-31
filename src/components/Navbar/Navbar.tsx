import s from './Navbar.module.scss'
import {idValue, SvgSelector} from '../../assets/icons/SVGselector'

const navDataArray: DataArrayType[] = [
    {id: 1, name: 'Итоги', svgName: 'results'},
    {id: 2, name: 'Заказы', svgName: 'orders'},
    {id: 3, name: 'Сообщения', svgName: 'messages'},
    {id: 4, name: 'Звонки', svgName: 'calls'},
    {id: 5, name: 'Контрагенты', svgName: 'counterparties'},
    {id: 6, name: 'Документы', svgName: 'documents'},
    {id: 7, name: 'Исполнители', svgName: 'performers'},
    {id: 8, name: 'Отчеты', svgName: 'reports'},
    {id: 9, name: 'База знаний', svgName: 'knowledgeBase'},
    {id: 10, name: 'Настройки', svgName: 'settings'},
]
const buttonsDataArray: DataArrayType[] = [
    {id: 1, name: 'Добавить заказ', svgName: 'buttonAdd'},
    {id: 2, name: 'Оплатить', svgName: 'buttonPay'},
]

export const Navbar = () => {

    const navData = navDataArray.map(n => <a href="" key={n.id} className={n.id === 4 ? s.activeMenu : s.inactiveMenu}>
            <SvgSelector svgName={n.svgName}/>
            <span>{n.name}</span>
        </a>
    )
    const buttonsData = buttonsDataArray.map(b => <button key={b.id} onClick={()=>alert('Приветики!)')}>
            <span>{b.name}</span>
            <div className={s.svgContainer}><SvgSelector svgName={b.svgName}/></div>
        </button>
    )

    return <div className={s.mainContainer}>
        <div className={s.logoContainer}><SvgSelector svgName="skillaLogo"/></div>
        <nav className={s.navContainer}>
            {navData}
        </nav>
        <div className={s.buttonsContainer}>
            {buttonsData}
        </div>
    </div>
}

//type
export type DataArrayType = {
    id: number
    name: string
    svgName: idValue
}