import {instance} from './apiConfig/apiConfig'

export const globalApi = {
	getData(limit: number = 25, offset: number) {
		return instance.post<DataType>('getList', null, {
			params: {
				limit,
				offset,
			}
		}).then(res => res.data)
	},
	getRecord(record: string) {
		return instance.post('getRecord', null,
				{
					params: {
						record
					},
					headers: {
						'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
					},
					responseType: 'blob'
				}).then(res => res.data)
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
	partner_data: {
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