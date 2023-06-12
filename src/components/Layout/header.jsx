
import './Header.css'; // assuming you're putting your CSS in a separate file

const Header = () => {
    const categories = {
        supplements: ['Vitamins', 'Minerals', 'Herbs', 'Protein'],
        lifestyle: ['Meditation', 'Yoga', 'Travel', 'Hiking'],
        exercises: ['Aerobics', 'Strength Training', 'Flexibility', 'Balance'],
        nutrition: ['Healthy Eating', 'Meal Planning', 'Diet Tips', 'Recipes'],
        sleep: ['Sleep Hygiene', 'Sleep Disorders', 'Sleep Aids', 'Better Sleep Tips'],
        research: ['Latest Studies', 'Medical Advancements', 'Nutrition Research', 'Fitness Research'],
        mindfulness: ['Mindfulness Techniques', 'Benefits', 'Mindfulness for Kids', 'Apps and Resources'],
        technology: ['Fitness Trackers', 'Mobile Apps', 'Online Coaching', 'Smart Devices'],
        professionals: ['Doctors', 'Nutritionists', 'Fitness Trainers', 'Wellness Coaches']
    };

    return (
        <div className="header">
            <div className="logoContainer">
                <img src="../../src/assets/logo.png" alt="Logo" className="logo"/>
            </div>
            <div className="navContainer">
                {Object.keys(categories).map(category => (
                    <div className="dropdown" key={category}>
                        <button className="dropbtn">{capitalize(category)}
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            {categories[category].map((subCategory, i) => (
                                <a key={i} href="#">{subCategory}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default Header;
