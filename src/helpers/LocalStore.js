export function getNotes() {
  const saved = localStorage.getItem("notes");
  return saved ? JSON.parse(saved) : [];
}

export function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

