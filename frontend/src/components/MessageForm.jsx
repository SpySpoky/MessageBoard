function MessageForm({ name, message, setName, setMessage, handleSubmit}) {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h4 className="mb-3">Post a Message</h4>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Your Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Message</label>
                        <textarea className="form-control" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Post Message</button>
                </form>
            </div>
        </div>
    )
};

export default MessageForm;