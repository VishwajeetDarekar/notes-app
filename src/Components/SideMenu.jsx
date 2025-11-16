function SideMenu({ onAdd, activeTab, setActiveTab }) {
  const menuItems = [
    { label: "All Notes", key: "all" },
    { label: "Favorites", key: "favorites" },
    { label: "Trash", key: "trash" },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg p-6 border-r h-screen flex flex-col">
      <h2 className="text-3xl font-bold text-indigo-600 mb-8">Notes App</h2>

      <button
        onClick={onAdd}
        className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mb-6"
      >
        + Add Note
      </button>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`text-left px-2 py-1 rounded ${
              activeTab === item.key
                ? "bg-indigo-100 text-indigo-700 font-semibold"
                : "text-gray-700 hover:text-indigo-600"
            } transition`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default SideMenu;
