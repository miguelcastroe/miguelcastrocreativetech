import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const NextProject = () => {
  return (
    <div className="border-t border-gray-200 pt-8">
      <Link to="/" className="inline-flex items-center text-lg hover:text-[#ff4f00]">
        <span>Next Project</span>
        <FileText className="w-5 h-5 ml-2" />
      </Link>
    </div>
  );
};

export default NextProject;