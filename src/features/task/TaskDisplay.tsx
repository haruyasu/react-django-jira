import React from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedTask } from './taskSlice'
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'

const TaskDisplay: React.FC = () => {
    const selectedTask = useSelector(selectSelectedTask)
    const rows = [
        { item: 'タスク', data: selectedTask.task },
        { item: '説明', data: selectedTask.description },
        { item: '基準', data: selectedTask.criteria },
        { item: '所有者', data: selectedTask.owner_username },
        { item: '責任者', data: selectedTask.responsible_username },
        { item: '期日', data: selectedTask.estimate },
        { item: 'カテゴリ', data: selectedTask.category_item },
        { item: '状況', data: selectedTask.status_name },
        { item: '作成日', data: selectedTask.created_at },
        { item: '更新日', data: selectedTask.updated_at },
    ]

    if (!selectedTask.task) {
        return null
    }

    return (
        <>
            <h2>タスク詳細</h2>
            <Table>
                <TableBody>
                    {
                        rows.map((row) => (
                            <TableRow key={row.item}>
                                <TableCell align='center'>
                                    <strong>{row.item}</strong>
                                </TableCell>
                                <TableCell align='center'>
                                    {row.data}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default TaskDisplay