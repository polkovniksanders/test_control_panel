interface IFields {
    id: string,
    title: string,
    hint: string,
	hasInput: boolean,
}

export const fields: IFields[] = [
	{id: "1", title: "Оклад за месяц", hint: "", hasInput: true},
	{id: "2", title: "МРОТ", hint: "", hasInput: false},
	{id: "3", title: "Оплата за день", hint: "", hasInput: true},
	{id: "4", title: "Оплата за час", hint: "", hasInput: true},
]
