export const dateUtils = {
	dayConvert(date: Date) {
		return date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
	},
	dateConvert(dates: string) {
		const date: Date = new Date(dates)
		const day = this.dayConvert(date)
		const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth()
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	},
	today() {
		const date: Date = new Date()
		const day = this.dayConvert(date)
		const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth()
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	},
	yesterday() {
		const date = new Date;
		const day = this.dayConvert(new Date(date.setDate(date.getDate() - 1)))
		const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth()
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}
}