import {useEffect, useState} from 'react';
import {CallType, globalApi} from '../../../api/globalApi';
import {FilterLine} from './FilterLine/FilterLine';
import {HeaderTable} from './HeaderTable/HeaderTable';
import {Table} from './Table/Table';
import s from './TableContainer.module.scss'

export const TableContainer = () => {
    const [data, setDate] = useState<CallType[]>([])

    useEffect(() => {
        globalApi.getData().then(res => setDate(res.results))
    }, [])
    return <div className={s.mainContainer}>
        <FilterLine/>
        <div className={s.tableContainer}>
            <HeaderTable/>
            <Table data={data}/>
        </div>
    </div>
}