import { ImSpinner8 } from "react-icons/im";
export default function LoadingSpinner() {
    return (
        
        <div className="loading-spinner">
            <ImSpinner8 className="spinner" />
            <p>Loading...</p>
        </div>
    )
}