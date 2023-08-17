import SearchIcon from '@mui/icons-material/Search';
//import { useState, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';

const Searchbar = () => {

    const [keyword, setKeyword] = useState("");
    //const [searchHistory, setSearchHistory] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     await axios.post('http://localhost:3001/store-history', {
        //         searchTerm: keyword
        //     });

        //     setKeyword('');

        //     navigate('/');

        // } catch (error) {
        //     console.error(error);
        // }
        navigate('/');
    };

    // useEffect(() => {
    //     axios.get('http://localhost:3001/get-history')
    //         .then(response => setSearchHistory(response.data))
    //         .catch(error => console.error(error));
    // }, []);



    return (
        <form onSubmit={handleSubmit} className="w-full sm:w-9/12 px-1 sm:px-4 py-1.5 flex justify-between items-center shadow-md bg-white rounded-sm overflow-hidden">
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="text-sm flex-1 outline-none border-none placeholder-gray-500" type="text" placeholder="Search for products, brands and more" />
            <button type="submit" className="text-primary-blue"><SearchIcon /></button>
        </form>
    );
};

export default Searchbar;