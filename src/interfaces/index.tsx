export interface todoInfo{
    id : string;
    textValue : string;
    checked : boolean;
}

export interface TodoListItemProps {
    textValue: string; 
    id: string;
    checked: boolean;
    onRemove: any;
    onToggle: any;
}

export interface pageInfo {
    name : string;
    component : any;
    title : string;
    icon : string;
}

export interface pageListInfo {
    initial : string;
    pages : any[];
}