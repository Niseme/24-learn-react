import '../Style/SuggestedCourses.css';
import '../Style/Block.css';

function SuggestedCourses() {
    return (
        <div className="block suggested-courses">

            <h2>Suggested Courses</h2>
            <select>
                <option value="trending">trending</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
            <div className="courses-list">
                <div className="item">
                    Suggested courses
                </div>
                <div className="item">
                    Suggested courses
                </div>
            </div>
        </div>

    );
}

export default SuggestedCourses;
