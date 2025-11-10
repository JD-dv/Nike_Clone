import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="flex flex-col  p-4 sticky top-0 rounded-2xl">
      <h1 className="mb-25">Nike Store</h1>
      <nav className="flex flex-col gap-y-2">
        <Link>Shoes</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
