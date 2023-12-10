

export enum ETodoStatus {
    COMPLETED = 'Выполнено',
    IN_WORK = "В работе",
    WAITING = "Ожидание",
}

export type TSelectStatusValues = ETodoStatus | 'Все'


export interface ITodo { id: number, title: string, description: string, status: ETodoStatus }
