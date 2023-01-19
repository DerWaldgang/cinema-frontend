export interface ITableItem {
    _id: string;
    editUrl: string;
    items: string[]
}

export interface IAdminTableItem {
    tableItem: ITableItem;
    removeHandler: () => void
}

export interface IAdminTable {
    tableItems: ITableItem[]
    isLoading: boolean
    headerItems: string[]
    removeHandler: (id:string) => void
}