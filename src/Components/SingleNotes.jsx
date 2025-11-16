function SingleNotes({ note }) {
  return (
    <div className="p-4 bg-white shadow rounded border">
      <h2 className="font-semibold">{note.title}</h2>
      <p className="text-gray-700 mt-1">{note.content}</p>
    </div>
  );
}

export default SingleNotes;
