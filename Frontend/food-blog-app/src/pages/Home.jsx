import Foodrecipe from '../assets/foodRecipe.png'
const Home = () => {
    return (
        <>
            <section className="home">
                <div className="left">
                    <h1>Food recipe</h1>
                    <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h5>
                    <button>sahre your Recipe</button>
                </div>
                <div className="right">
                    <img src={Foodrecipe} alt="foodrecipe img" width="320px" height="300px" />
                </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,192L18.5,186.7C36.9,181,74,171,111,186.7C147.7,203,185,245,222,229.3C258.5,213,295,139,332,117.3C369.2,96,406,128,443,133.3C480,139,517,117,554,128C590.8,139,628,181,665,181.3C701.5,181,738,139,775,117.3C812.3,96,849,96,886,117.3C923.1,139,960,181,997,192C1033.8,203,1071,181,1108,192C1144.6,203,1182,245,1218,261.3C1255.4,277,1292,267,1329,240C1366.2,213,1403,171,1422,149.3L1440,128L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default Home