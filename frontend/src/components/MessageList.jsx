import MessageCard from "./MessageCard.jsx";

function MessageList({ messages, handleDelete, handleEdit, handleUpdate, editingId, editName, editText, setEditingId, setEditName, setEditText }) {
    return(
        <div>
            <h4 className="mb-3">Recent Messages</h4>

            {messages.map((msg) => (
                <MessageCard
                    key={msg.id}
                    msg={msg}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    editingId={editingId}
                    editName={editName}
                    editText={editText}
                    setEditingId={setEditingId}
                    setEditName={setEditName}
                    setEditText={setEditText}
                />
            ))}
        </div>
    )
}

export default MessageList;