// Building a Search Filter Component in React

import React from 'react';

function useDecounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {clearTimeout(handler)};
    }, [value, delay]);
    return debouncedValue;
}

const SearchFilter = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [filteredResults, setFilteredResults] = React.useState([]);
    const debounceData = useDecounce(inputValue, 1000);

    const data = [
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Pineapple',
        'Grapes',
        'Strawberry',
        'Blueberry',
        'Watermelon',
        'Papaya'
    ];

    React.useEffect(() => {
        const results = data.filter(items => 
            items.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredResults(results);
    },[inputValue]);

    const highlightMatchAnywhere = (item) => {
         const query = inputValue;

        if (!query) return item;

        const index = item.toLowerCase().indexOf(query.toLowerCase());

        if(index == -1) return item;

        const start = item.slice(0, index);
        const mid = item.slice(index, index + query.length);
        const end = item.slice(index + query.length);

        return (
          <span>
            {start}<b>{mid}</b>{end}
          </span>
        )
  };

    // const highLigthFirst = (value) => {
    //    const input = inputValue.length;
    //    const start = value.slice(0, input);
    //    const end = value.slice(input);

    //    return (
    //     <span>
    //         <b>{start}</b>
    //         {end}
    //     </span>
    //    )
    // }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <ul>
                {
                    filteredResults.map((item, index) => (
                        <li key={index}>{highlightMatchAnywhere(item)}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchFilter;