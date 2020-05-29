import React, { ReactNode } from "react";
import { Table as BoostrapTable } from "react-bootstrap"
import Button from "./Button";

interface TableColumn<TRow> {
    /**
     * Must be unique.
     */
    columnKey: string;
    header: string;
    selector: (row: TRow) => ReactNode;
    centerContent?: boolean;
}

interface TableProps<TRow> {
    columns: TableColumn<TRow>[];
    rowKeySelector: (row: TRow) => string;
    onClickRow: (row: TRow) => void;
    onDeleteRow: (row: TRow) => void;
    rows: TRow[];
    children?: ReactNode;
}

/**
 * Table that prints the elements based on the passed props.
 */
const Table = <TRow extends {}>(
    {
        columns,
        rowKeySelector,
        onClickRow,
        onDeleteRow,
        rows
    }: TableProps<TRow>) =>
    <BoostrapTable className="thead-dark" responsive striped bordered hover size="sm">
        <thead className="thead-dark">
            <tr>
                {
                    columns.map(column =>
                        <th
                            key={column.columnKey}
                            className="center"
                        >{column.header}</th>)
                }
                <th className="fit"></th>
            </tr>
        </thead>
        <tbody>
            {
                rows.map(row => {
                    const handleClickRow = () => onClickRow(row);
                    const handleDeleteRow = () => onDeleteRow(row);
                    const rowKey = rowKeySelector(row);

                    return (
                        <tr key={rowKey}>
                            {columns.map(column =>
                                <td
                                    key={column.columnKey + "|" + rowKey}
                                    className={column.centerContent ? "text-center" : undefined}
                                    onClick={handleClickRow}
                                >{column.selector(row)}</td>)}

                            <td className="text-center fit">
                                <Button 
                                    className="delete-button"
                                    onClick={handleDeleteRow}
                                    variant="danger"
                                >X</Button>
                            </td>
                        </tr>
                    );
                })
            }
        </tbody>
    </BoostrapTable>;

export default Table;
