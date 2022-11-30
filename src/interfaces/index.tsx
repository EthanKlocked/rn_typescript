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
