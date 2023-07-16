export const SearchBar =(params) =>{
    return (

        <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
            <form className="bd-search d-flex align-items-center">
                <input
                    type="search"
                    className="form-control"
                    id="search-input"
                    placeholder="Search..."
                    aria-label="Search for..."
                    autoComplete="off"
                />
                <button
                    className="btn btn-link bd-search-docs-toggle btn-sm d-md-none p-0 ml-3" // Aggiungi la classe 'btn-sm' per rendere il pulsante più piccolo
                    type="button"
                    data-toggle="collapse"
                    data-target="#bd-docs-nav"
                    aria-controls="bd-docs-nav"
                    aria-expanded="false"
                    aria-label="Toggle docs navigation"
                >
                    SEARCH
                </button>
            </form>
        </div>
    );
}
export default SearchBar