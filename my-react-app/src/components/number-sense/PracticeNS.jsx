import React from "react";
import { useAuth } from "../../context/AuthContext";
import './NumberSense-module.css';

function PracticeNS() {
    const { user } = useAuth();
    return (<div className="container-practice-ns">
        <h2 className="practice-ns-header">Choose your practice mode {user.username}!</h2>
        
    </div>);
}

export default PracticeNS;