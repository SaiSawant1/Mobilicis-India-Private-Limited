import React from "react";
import { ChevronRight } from "lucide-react";
function MainNav() {
  return (
    <div className="w-full h-full ">
      <div className="w-full px-6 ">
        <div className="flex items-center my-4 gap-2">
          <ChevronRight className="text-gray-400" />
          <h2 className="text-blue-950 w-full text-xl px-6 py-3 border-2 rounded-xl">
            My Profile
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <ChevronRight className="text-gray-400" />
          <h2 className="text-blue-950 w-full text-xl px-6 py-3 border-2 border-blue-950 rounded-xl">
            Connections
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
