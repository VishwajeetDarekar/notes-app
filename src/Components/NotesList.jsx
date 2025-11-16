import NoteBox from "./NoteBox";

function NotesList({ notes, onEdit, onDelete, onToggleFavorite }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {notes.length === 0 ? (
        <p className="text-gray-500 text-lg mt-10 text-center col-span-full">
          No notes here.
        </p>
      ) : (
        notes.map((note) => (
          <NoteBox
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleFavorite={onToggleFavorite}
            isFavorite={note.favorite}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
          />
        ))
      )}
    </div>
  );
}

export default NotesList;
