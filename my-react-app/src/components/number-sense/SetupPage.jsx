import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNSPractice } from "../../context/NSPracticeContext";
import { Link } from "react-router-dom";
import categories from "../../data/ns-categories";
import { ChevronDown, ChevronLeft } from "lucide-react";
// import { Dropdown } from "react-bootstrap/Dropdown";

function NumberSenseOnline() {
    const { user } = useAuth();
    const { setup, updateSetup } = useNSPractice();
    const [openGroups, setOpenGroups] = useState({
        "1-20": false,
        "21-40": false,
        "41-60": false,
        "61-70": false,
        "71-80": false,
    }); // tracks which main categories are expanded.

    const handleToggle = (subcategory, isChecked) => (
        updateSetup((prevSetup) => ({
            ...prevSetup, // keeping other settings the same
            categories: isChecked ? [...prevSetup.categories, subcategory] // adding subcategory if checkbox got checked
            : prevSetup.categories.filter((cat) => cat !== subcategory) // removing subcategory if checkbox got unchecked
        }))
    )

    const toggleGroup = (mainCat) => (
        setOpenGroups((prevOpenGroups) => ({
            ...prevOpenGroups,
            [mainCat]: !prevOpenGroups[mainCat], // changing bool to oppo value to conditionally render subcats.
        }))
    )
    console.log(categories);
    return (
    <div className="container page">
        <div className="container header">
            <Link to={"/number-sense/online"}><button><ChevronLeft/></button></Link>
            <h2>Set up your session {user.username}.</h2>
        </div>
        <div className="container setup">
            <h2 className="container header">Categories</h2>
            
            {/* mapping categories into groups of checkboxes */}
            {Object.entries(categories).map(([mainCat, subCats]) => (
                <div key={mainCat} className="main-cat">
                    <h3>Problems {mainCat}</h3>
                    <div className="subcategories">
                        <button className="toggle-button" onClick={() => toggleGroup(mainCat)}>
                            <span>{mainCat}</span>
                            {console.log(openGroups)}
                            {openGroups[mainCat] ? (<ChevronDown />) : (<ChevronLeft />)}
                        </button>

                        {/* render subcats only if respective openGroups bool is true */}
                        {openGroups[mainCat] && 
                        (<div className="poop ">
                            {subCats.map((subCat, index) => (
                            <label key={index}>
                                <input 
                                    type="checkbox"
                                    value={subCat}
                                    checked={setup.categories.includes(subCat)}
                                    onChange={(e) => (handleToggle(subCat,e.target.checked))}
                                />
                                <span>{subCat}</span>
                            </label>
                        ))}
                        </div>
                        )}
                    </div>
                </div>
            ))}

            <div className="container timer">
                <h3>Choose Timer</h3>
                <input 
                    type="number"
                    value={setup.timer}
                    placeholder="Time (in minutes)"
                    onChange={(e) => updateSetup({...setup, timer: parseInt(e.target.value)})}
                />
            </div>
            <div className="container num-questions">
                <h3>Choose Number of Questions</h3>
                <input
                    type="number"
                    value={setup.numQuestions}
                    placeholder="Number of Questions"
                    onChange={(e) => (updateSetup({...setup, numQuestions: parseInt(e.target.value)}))}
                />
            </div>
            <div className="container start-session">
                {/* will me putting the same link name to the practice sessions still
                    give me the desired result, which is different practice questions
                    every time a new session is created? */}

                    <Link to={"/number-sense/practice/online/session"}>
                        <button className="button start-session">
                            Start Practice Session!
                        </button>
                    </Link>
            </div>
        </div>
    </div>)
}

export default NumberSenseOnline;