import toast from "react-hot-toast";

export const Logout = () => {
    const handleLogout = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");

        if (token) {
            localStorage.removeItem("userToken");
            toast.success("LoggedOut successfully!")
            window.location = "/login"
        }

    }
    return (
        <div className="p-4">
            <button onClick={handleLogout} className="py-2 px-3 rounded bg-red-500 text-white">LOGOUT</button>
        </div>
    )
}