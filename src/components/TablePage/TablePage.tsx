import {Header} from './Header/Header'
import s from './TablePage.module.scss'
import {TableContainer} from './TableContainer/TableContainer'

export const TablePage = () => <div className={s.mainContainer}>
	<Header/>
	<TableContainer/>
</div>