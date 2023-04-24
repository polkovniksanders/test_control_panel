export interface IField {
	id: string,
	title: string,
	hint: string | null,
	paymentType: string,
	checked?: boolean
}

export const fieldsData: IField[] = [
	{
		id: "1",
		title: "Оклад за месяц",
		hint: null,
		paymentType: "monthly",
		checked: true
	},
	{
		id: "2",
		title: "МРОТ",
		hint: "МРОТ - минимальный размер оплаты труда. Разный для разных регионов",
		paymentType: "pauper"
	},
	{
		id: "3",
		title: "Оплата за день",
		hint: null,
		paymentType: "daily"
	},
	{
		id: "4",
		title: "Оплата за час",
		hint: null,
		paymentType: "hourly"
	},
]
