function MessageCard({ 
    msg,
    handleEdit,
    handleDelete,
    handleUpdate,
    editingId,
    editName,
    editText,
    setEditingId,
    setEditName,
    setEditText}) {
    return (
        <div className="card-body card mb-3 shadow-sm border-0">
            {editingId === msg.id ? (
                <>
                    
                    <input type="text" className="form-control mb-2" value={editName} onChange={(e) => setEditName(e.target.value)}/>

                    <textarea className="form-control mb-2" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                    <div className="d-flex gap-2 mt-3">
                        <button className="btn btn-success btn-sm me-2" onClick={() => handleUpdate(msg.id)}>
                            Save
                        </button>

                        <button className="btn btn-secondary btn-sm" onClick={() => setEditingId(null)}>
                            Cancel
                        </button>
                    </div>
                    
                </>
            ) : (
                <>
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                        <h5 className="mb-0">{msg.name}</h5>

                        <small className="text-muted">
                            #{msg.id}
                        </small>
                    </div>

                    <div className="mb-3">
                        <p className="card-text">{msg.text}</p>
                    </div>

                    <div className="border-top pt-3 d-flex gap-2">
                        <button className="btn btn-primary btn-sm" onClick={() => handleEdit(msg)}>
                            Edit
                        </button>

                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(msg.id)}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default MessageCard;