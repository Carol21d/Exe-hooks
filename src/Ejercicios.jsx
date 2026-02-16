import { useEffect,useState } from "react";

function filterFruits(){



 function FruitsSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Clear results if query is empty or only spaces
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    // Debounce: wait 700ms after user stops typing
    const timeoutId = setTimeout(async () => {
      try {
        // ✅ Replace this with your actual API endpoint
        const response = await fetch(`https://api.example.com/fruits?search=${query}`);
        const data = await response.json();

        // Update results
        setResults(data);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      }
    }, 700);

    // Cleanup: cancel the timeout if query changes before 700ms
    return () => clearTimeout(timeoutId);
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div id="results">
        {results.length > 0 ? (
          results.map((item, index) => (
            <p key={index} className="result-item">{item}</p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
}
export default filterFruits