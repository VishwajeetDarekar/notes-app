function NoteBox({ id, title, content, onEdit, onDelete, onToggleFavorite, isFavorite, className }) {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={() => onToggleFavorite(id)}
          className={`px-2 py-1 rounded ${isFavorite ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-600"} hover:opacity-80 transition`}
        >
          ★
        </button>
      </div>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => onEdit(id)}
          className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteBox;
