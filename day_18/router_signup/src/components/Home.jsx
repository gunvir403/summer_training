import { useState, useEffect } from "react";

const Home = () => {

    const [dummyUsers, setDummyUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredFakeUsers, setFilteredFakeUsers] = useState([]);
    const [ok, setOk] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const storedFakeUsers = localStorage.getItem("fakeusers");
        if (storedFakeUsers) {
            setDummyUsers(JSON.parse(storedFakeUsers));
        } else {
            fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => {
                const fakeUsersData = data.users;
                localStorage.setItem("fakeusers", JSON.stringify(fakeUsersData));
                setDummyUsers(fakeUsersData);
            })
            .catch((err) => setError("Error fetching data: ", err));
        }
    }, []);

    const handleSearch = () => {
        setOk(true);
        const result = dummyUsers.filter((fakeuser) => 
            fakeuser.username.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredFakeUsers(result);
    }

    const handleKeypress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="homeflex">
            <h3>Welcome</h3>
            <div className="searchbox">
                <label>Search for users</label>
                <input 
                    type="text"
                    placeholder="Search by username"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeypress}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {error && (<p style={{color: "red"}}>{error}</p>)}
            {filteredFakeUsers.length > 0 && (
                <div className="result">
                    {filteredFakeUsers.map((fakeuser) => (
                        <div key={fakeuser.id} className="resultbox">
                            <h4>{fakeuser.firstName + " " + fakeuser.lastName}</h4>
                            <p>Username: {fakeuser.username}</p>
                            <p>Email: {fakeuser.email}</p>
                        </div>
                    ))}
                </div>
                )}
                {filteredFakeUsers.length === 0 && ok && (
                    <p style={{color: "red"}}>No users found</p>
                )}
        </div>
    )
}
export default Home;