import Sidebar from "../components/Sidebar";

function Shop() {
  return (
    <div className="flex h-screen p-2 overflow-hidden bg-gray-200">
      <Sidebar />
      <main className="flex-1 bg-gray-200 p-2 overflow-y-auto">
        <div className="bg-white min-h-screen rounded-2xl p-2">
            <div className="space-y-6">
          <h2 className="text-2xl font-bold">Main Section</h2>
          {[...Array(30)].map((_, i) => (
            <p key={i}>This is line {i + 1} — scroll down to test.</p>
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}

export default Shop;
