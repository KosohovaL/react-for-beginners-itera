import { useSearchParams } from "react-router-dom";

const Abaut = () => {
    const [searchParams] = useSearchParams();
    const ln = searchParams.get('ln')
    return (
        <>
            <div>
                {(ln === "uk") ? (
                    <h3>Українська сторінка</h3>
                ) : (<h3>English page</h3>)}
            </div>
        </>
    )
}

export default Abaut