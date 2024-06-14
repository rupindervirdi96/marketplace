import React from "react";
import { useStore } from "../redux/store";

interface SidebarProps {
  hidden: boolean;
}

export const Sidebar = ({ hidden }: SidebarProps) => {
  const showSidebar = useStore((state: any) => state.showSidebar);

  return (
    <div
      className={`bg-gray-400 h-screen ${
        showSidebar ? "translate-x-0 transition-all" : "-translate-x-full transition-all"
      } overflow-hidden transition-all`}
    >
      <ul className="px-2">
        <li>
          hello{" "}
          <span
            onClick={() => {
              showSidebar();
            }}
          >
            movein
          </span>
        </li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
    </div>
  );
};

export default Sidebar;
