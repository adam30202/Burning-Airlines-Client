const CurrentUser = (props) => {
    return (
        <div>
            <div className="nav-tab">
                <p>{ props.user }</p>
            </div>
            <h1 className="title">Virgin Airlines</h1>
        </div>

        
    )
};

export default CurrentUser;