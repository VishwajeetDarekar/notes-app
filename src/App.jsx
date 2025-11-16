import { useEffect, useState } from "react";
import NotesList from "./Components/NotesList";
import NoteForm from "./Components/NoteForm";
import SideMenu from "./Components/SideMenu";
import { getNotes, saveNotes } from "./helpers/LocalStore";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("all"); // which tab is active

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleAdd = () => {
    setEditingNote(null);
    setShowForm(true);
  };

  const handleSave = (note) => {
    const updatedNotes = note.id
      ? notes.map((n) => (n.id === note.id ? note : n))
      : [...notes, { ...note, id: Date.now(), favorite: false, trashed: false }];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
    setShowForm(false);
  };

  const handleEdit = (id) => {
    setEditingNote(notes.find((n) => n.id === id));
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.map((n) =>
      n.id === id ? { ...n, trashed: true } : n
    ); // move to trash
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const handleToggleFavorite = (id) => {
    const updatedNotes = notes.map((n) =>
      n.id === id ? { ...n, favorite: !n.favorite } : n
    );
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  // Filter notes based on active tab
  const filteredNotes = notes.filter((n) => {
    if (activeTab === "all") return !n.trashed;
    if (activeTab === "favorites") return n.favorite && !n.trashed;
    if (activeTab === "trash") return n.trashed;
    return true;
  });

  return (
    <div className="min-h-screen flex relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('C:\Users\lenovo\Desktop\BCA 3 year\notes-app\public\IMG-20250403-WA0007[1].jpg')" }}
      ></div>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Main content */}
      <div className="relative flex-1 flex">
        {/* Sidebar */}
        <SideMenu
          onAdd={handleAdd}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">
            📒 My Notes
          </h1>

          {/* Notes List */}
          {!showForm && (
            <NotesList
              notes={filteredNotes}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          {/* Note Form */}
          {showForm && (
            <div className="flex justify-center">
              <NoteForm
                initialData={editingNote}
                onSave={handleSave}
                onCancel={() => setShowForm(false)}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
