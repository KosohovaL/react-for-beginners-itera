const IndexPage = (props) => {
    return (
        <>
            <div>
                {(props.lng === "uk") ? (
                    <h3>Домашня сторінка</h3>
                ) : (<h3>Home page</h3>)}
            </div>
        </>
    )
}

export default IndexPage