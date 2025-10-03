import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import './NumberSense-module.css';
import { ChevronLeft } from "lucide-react";

function PracticeNS() {
    // const navigate = useNavigate();
    const { user } = useAuth();
    return (<div className="container practice-ns">
        <div className="container header">
            <Link to={"/number-sense"}><button><ChevronLeft /></button></Link>
            <h2 className="practice-ns-header">Choose your practice mode {user.username}!</h2>
        </div>
        <div className="container online">
            <Link to={"online"}>
                <button className="mode-card online" /*onClick={() => navigate('/number-sense/practice/online')}*/>
                    <h2>Online Practice</h2>
                </button>
            </Link>
        </div>
        <div className="container pdf">
            <Link to={"pdf-gen"}>
                <button className="mode-card pdf" /*onClick={() => navigate('/number-sense/practice/pdf-gen')}*/>
                    <h2>PDF Worksheets</h2>
                </button>
            </Link>
        </div>
    </div>);
}

export default PracticeNS;