import {instance} from './apiConfig/apiConfig'

export const globalApi = {
    getData() {
        return instance.post<DataType>('getList').then(res => res.data)
    }
}

//type
export type DataType = {
    total_rows: string
    results: CallType[]
}

export type CallType = {
    abuse: any[]
    contact_company: string
    contact_name: string
    date: string
    date_notime: string
    disconnect_reason: string
    errors: any[]
    from_extension: string
    from_number: string
    from_site: number
    id: number
    in_out: number
    is_skilla: number
    line_number: string
    partner_data:{
        id: string
        name: string
        phone: string
    }
    partnership_id: string
    person_avatar: string
    person_id: number
    person_name: string
    person_surname: string
    record: string
    results: any[]
    source: string
    stages: any[]
    status: string
    time: number
    to_extension: string
    to_number: string
}