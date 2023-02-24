const Stars = (props) => {
    const { score, totalPoints } = props;
    let stars = [];
    for (let index = 0; index < totalPoints; index++) {
        stars.push(index);
    }

    return stars.map((star, i) => {
        return star < score ? (
            <span key={'star-' + i} className="fa fa-star checked"></span>
        ) : (
            <span key={'star-' + i} className="fa fa-star"></span>
        );
    });
};
export default Stars;
