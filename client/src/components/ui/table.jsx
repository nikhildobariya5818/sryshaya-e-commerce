import React from 'react';

export function Table(props) {
    return <table className={props.className}>{props.children}</table>;
}

export function TableHeader(props) {
    return <thead>{props.children}</thead>;
}

export function TableBody(props) {
    return <tbody>{props.children}</tbody>;
}

export function TableRow(props) {
    return <tr>{props.children}</tr>;
}

export function TableHead(props) {
    return <th>{props.children}</th>;
}

export function TableCell(props) {
    return <td>{props.children}</td>;
}

export function Checkbox(props) {
    return <input type="checkbox" id={props.id} />;
}

export function Badge(props) {
    return <span className={`badge badge-${props.variant}`}>{props.children}</span>;
}
