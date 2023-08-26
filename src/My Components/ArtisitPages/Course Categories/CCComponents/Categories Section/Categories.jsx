import './Categories.css';

const Categories = () =>{
    return(
        <div id="categories-header-section">
            <div id="categories-header-bg"></div>
            <div id="couse-categories-text">Course Categories</div>

            {/* all categories names */}
            <div id="all-categories-scroll-section">
                <div className="every-category page-category">All</div>
                <div className="every-category">Dance</div>
                <div className="every-category">Music</div>
                <div className="every-category">Drama</div>
                <div className="every-category">Acting</div>
                <div className="every-category">Fine Art</div>
                <div className="every-category">Comedy</div>
            </div>
        </div>
    )
}

export default Categories;