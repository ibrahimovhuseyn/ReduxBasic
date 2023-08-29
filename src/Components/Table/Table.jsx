import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { completeWork, removeItem } from "../ToDoList/toDo";

function Table() {

    const { list } = useSelector(state => state.todo_items)

    console.log(list);

    const dispatch = useDispatch()


    const deleteItem = (id) => {
        dispatch(removeItem(id))
    }

    const complete = (id) => {
        dispatch(completeWork(id))
    }


    return (
        <div>
            <table className="table">
                <tbody>
                    {
                        list.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td className={`${item.isCompleted? "bg-success" : "bg-light"}`}>
                                    {
                                        item.isCompleted ?
                                        <p><del>{item.text}</del></p>
                                        :
                                        <p>{item.text}</p>
                                    }
                                </td>
                                <td>
                                    <Button
                                        size="sm"
                                        color="success"
                                        onClick={() => complete(item.id)}
                                    >
                                        Complete
                                    </Button>
                                    <Button
                                        size="sm"
                                        color="danger"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table