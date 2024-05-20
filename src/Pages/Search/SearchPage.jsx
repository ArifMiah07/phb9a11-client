import  { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { Helmet } from 'react-helmet-async';

const SearchPage = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://smart-kidz-server-liard.vercel.app/category');
        // console.log('Fetched Data:', response.data);
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    // console.log('Search Query:', query);
    if (!query) {
      setFilteredData(data);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = data.filter(item =>
        item.heading1.toLowerCase().includes(lowerCaseQuery) ||
        item.content.some(course =>
          course.heading1.toLowerCase().includes(lowerCaseQuery)
        )
      );
      // console.log('Filtered Data:', filtered);
      setFilteredData(filtered);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <Helmet>
                <title>Search</title>
      </Helmet>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        {filteredData.length > 0 ? (
          filteredData.map(category => (
            <div key={category._id} className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{category.heading1}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.content.map(course => (
                  <div key={course.sl} className="border p-4 rounded">
                    <img src={course.imgLink} alt={course.heading1} className="w-full h-40 object-cover mb-2" />
                    <h3 className="text-xl font-bold">{course.heading1}</h3>
                    <p>{course.ages}</p>
                    <p>{course.time}</p>
                    <p>{course.rating}</p>
                    <p>{course.teacher}</p>
                    <img src={course.imgT} alt={course.teacher} className="w-8 h-8 rounded-full" />
                    <p>{course.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
