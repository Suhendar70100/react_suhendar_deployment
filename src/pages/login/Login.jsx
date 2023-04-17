import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css"
export default function Login() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    })

    const onSubmit = (data, e) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (data.email === user.email && data.password === user.password) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Data that is input is valid',
                showConfirmButton: true
            })
            localStorage.setItem('isLoggedIn', true);
            navigate("/home");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            e.target.reset();
        }
    }

    return (
        <>
            <div className="wrapper">
                <div className="text-center mt-4" style={{ fontSize: "30px", color: "#666" }}>
                    Login
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field align-items-center">
                        <input
                            {...register("email", {
                                required: {
                                    value: true, message: "Email Harus diisi"
                                },
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Email tidak valid',
                                },
                            })}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email" />
                    </div>
                    <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>{errors.email?.message}</p>
                    <div className="form-field align-items-center">
                        <input
                            {...register("password", {
                                required: {
                                    value: true, message: "Password Harus diisi"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password minimal 8 Character"
                                }
                            })}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password" />
                    </div>
                    <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>{errors.password?.message}</p>
                    <button className="btn mt-3">Login</button>
                </form>
                <div className="text-center fs-6">
                    <Link to={"/"}>Sign Up</Link>
                </div>
            </div>
        </>
    )
}