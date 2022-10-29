import "./searchbar.css"

const Searchbar = () => {
    return (
        <form className="search-container" action="">
            <input type="search" className="searchbar" placeholder="Find your pizza"/>
            <button type="submit" alt="search icon (magnifyingglass)"/>
        </form>
    )
}
export default Searchbar;