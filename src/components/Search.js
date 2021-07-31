function Search(){
    return (
        <div className="w-full flex-grow bg-gray-50 flex justify-center items-center">
            <div className="rounded-md">
                <input className="w-80 rounded-l-lg p-2 border-t-2 border-b-2 border-2 text-gray-800 border-gray-900 bg-white text-center outline-none" placeholder="In the World"/>
                <button className="px-8 rounded-r-lg bg-gray-900  text-gray-100 font-bold p-2 border-gray-900 border-t-2 border-b-2 border-r hover:opacity-80 transition-all">FIND</button>
            </div>
        </div>
    )
}

export default Search;