import { Eye, EyeClosed, EyeOff } from "lucide-react";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [seen, setseen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        console.log({ email, password, "role":"admin" });

        setEmail("");
        setPassword("");
    };

    const handleSeen = (e) => {
        e.preventDefault()
        setseen(!seen)
    }

    return (
        <div className="min-h-screen  flex items-start justify-center pt-16 px-4 bg-zinc-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-4">
                <h1 className="text-3xl font-semibold text-center text-zinc-800">Login here!</h1>

                <input type="email" name="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg font-semibold text-lg outline-none focus:ring-2 focus:ring-zinc-500" />
                <div className="w-full border text-lg flex justify-between items-center font-semibold rounded-lg outline-none focus-within:ring-2 focus-within:ring-zinc-500" >
                    <input type={`${seen ? "text" : "password"}`} name="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" className="w-4/5 px-4 py-2 text-lg font-semibold rounded-lg outline-none" />
                    <div className="h-full w-1/5 py-2 px-2 text-zinc-500 flex justify-end items-center " >
                        {
                            !seen ? <Eye className="cursor-pointer " onClick={handleSeen} /> : <EyeOff className="cursor-pointer " onClick={handleSeen} />
                        }
                    </div>
                </div>

                <button type="submit" className="w-full cursor-pointer text-lg bg-zinc-600 text-white py-2 rounded-lg font-semibold hover:bg-zinc-700 active:scale-95 transition" > Submit </button>
            </form>
        </div>
    );
}
export default Auth