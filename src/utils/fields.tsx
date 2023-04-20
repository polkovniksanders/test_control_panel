export interface IField {
	id: string,
	title: string,
	hint: string,
	hasInput: boolean,
	paymentType: string,
}

export const fieldsData: IField[] = [
	{id: "1", title: "Оклад за месяц", hint: "", hasInput: true, paymentType: "monthly"},
	{id: "2", title: "МРОТ", hint: "", hasInput: false, paymentType: "pauper"},
	{id: "3", title: "Оплата за день", hint: "", hasInput: true, paymentType: "daily"},
	{id: "4", title: "Оплата за час", hint: "", hasInput: true, paymentType: "hourly"},
]
