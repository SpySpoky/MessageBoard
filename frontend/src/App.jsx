import { useState, useEffect } from 'react'
import MessageForm from './components/MessageForm.jsx';
import MessageList from './components/MessageList.jsx';

function App() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editText, setEditText] = useState("");

  const fetchMessages = async() => { // GET
    try {
      const response = await fetch("http://localhost:4200/messages");

      if(!response.ok) {
        throw new Error("Failed to fetch messages");
      }

      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => { // POST
    e.preventDefault();

    if(!name.trim() || !message.trim()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:4200/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          text: message.trim()
        })
      });

      if (!response.ok) {
        throw new Error("Failed to post message");
      }

      await fetchMessages();
      setMessage("");
      setName("");

    } catch(error) {
      console.error(error);
    }

  };

  const handleDelete = async(id) => { // DELETE
    try {
        const response = await fetch(`http://localhost:4200/messages/${id}`, {
          method:"DELETE"
        });

        if(!response.ok) {
          throw new Error("Failed to delete message");
        }

        await fetchMessages();
    } catch (error) {
      console.error(error);
    }

  };

  const handleEdit = (msg) => {
    setEditingId(msg.id);
    setEditName(msg.name);
    setEditText(msg.text);
  };

  const handleUpdate = async(id) => {
    if (!editName.trim() || !editText.trim()) return;

    try {
      const response = await fetch(`http://localhost:4200/messages/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: editName.trim(),
          text: editText.trim()
        })
      });

      if(!response.ok) {
        throw new Error("Failed to update message");
      }

      setEditingId(null);
      await fetchMessages();
    } catch(error) {
      console.error(error);
    }
  }


  return  (
    <div className="container py-5">
      <h1 className="text-center mb-4">Message Board</h1>
      <MessageForm name={name} message={message} setName={setName} setMessage={setMessage} handleSubmit={handleSubmit} />
      <MessageList messages={messages} handleDelete={handleDelete} handleUpdate={handleUpdate} handleEdit={handleEdit} editingId={editingId} editName={editName} editText={editText} setEditName={setEditName} setEditText={setEditText} setEditingId={setEditingId}/>
    </div>
  );
}

export default App
