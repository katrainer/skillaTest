import {Header} from './Header/Header';
import {TableContainer} from './TableContainer/TableContainer';
import s from './TablePage.module.scss'

export const TablePage = () => <div className={s.mainContainer}>
    <Header/>
    <TableContainer/>
</div>