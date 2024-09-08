import { CSSProperties } from "react";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    style?: CSSProperties | undefined;
}

export function List<T>(props: ListProps<T>) {
    return (
        <ul style={props.style}>
            {props.items.map(props.renderItem)}
        </ul>
    )
}