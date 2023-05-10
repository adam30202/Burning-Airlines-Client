const CurrentUser = (props) => {
    return (
        <div className="nav-tab">
            <p>{ props.user }</p>
        </div>
    )
};

export default CurrentUser;