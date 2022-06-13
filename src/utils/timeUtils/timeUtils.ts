export const timeUtils = {
	secondToMinute(d: number) {
		d = Number(d);
		const m = Math.floor(d % 3600 / 60) < 10 ? `0${Math.floor(d % 3600 / 60)}` : Math.floor(d % 3600 / 60)
		const s = Math.floor(d % 3600 % 60) < 10 ? `0${Math.floor(d % 3600 % 60)}` : Math.floor(d % 3600 % 60)
		return `${m}:${s}`
	},
	timeConvert(dates: string) {
		const date: Date = new Date(dates)
		const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
		const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
		return `${hours}:${minutes}`
	}
}


