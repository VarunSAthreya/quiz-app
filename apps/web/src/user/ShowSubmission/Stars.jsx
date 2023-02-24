const Stars = (props) => {
    const { score, totalPoints } = props;
    let stars = [];
    for (let index = 0; index < totalPoints; index++) {
        stars.push(index);
    }
    // console.log(stars);   --------2baar console pe kyun?
    return stars.map((star) => {
        // return <i className="fa fa-star"></i>;
        return star < score ? (
            <span className="fa fa-star checked , stars" key={star}></span>
        ) : (
            <span className="fa fa-star , stars" key={star}></span>
        );
    });
};
export default Stars;
