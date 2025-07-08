import { useState } from "react";

const Home = () => {
    return (
        <div className="homeflex">
            <h3>Welcome</h3>
            <div className="searchbox">
                <label>Search for users</label>
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    )
}
export default Home;