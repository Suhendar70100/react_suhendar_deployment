import "../login/Login.css"
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Register() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    })

    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: true,
        })
        navigate("/login");
    }

    return (
        <>
            <div className="wrapper">
                <div className="text-center mt-2" style={{ fontSize: "30px", color: "#666" }}>
                    Register
                </div>
                <form className="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-field align-items-center">
                        <input
                            {...register("firstName", {
                                required: {
                                    value: true, message: "FirstName Harus diisi"
                                },
                                minLength: {
                                    value: 3,
                                    message: "FirstName minimal dari 3 Character"
                                }
                            })}
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Firstname" />
                    </div>
                    {/* <div className="form-text pt-0 text-danger">{errors.firstName?.message}</div> */}
                    <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>{errors.firstName?.message}</p>
                    <div className="form-field align-items-center">
                        <input
                            {...register("lastName", {
                                required: {
                                    value: true, message: "LastName Harus diisi"
                                },
                                minLength: {
                                    value: 3,
                                    message: "LasName minimal 3 Character"
                                }
                            })}
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Lastname" />
                    </div>
                    <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>{errors.lastName?.message}</p>

                    <div className="form-field align-items-center">
                        <input
                            {...register("userName", {
                                required: {
                                    value: true, message: "Username Harus diisi"
                                },
                            })}
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Username" />
                    </div>
                    <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>{errors.userName?.message}</p>
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
                    <div className="form-field align-items-center">
                        <input
                            {...register("confirmPassword", {
                                required: {
                                    value: true, message: "Confirm Password Harus diisi"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Confirm minimal 8 Character"
                                },
                                validate: value =>
                                    value === password.value || "Password tidak sesuai"
                            })}
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password" />
                    </div>
                    <p style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>{errors.confirmPassword?.message}</p>
                    <button type="submit" className="btn mt-3">Register</button>
                </form>
                <div className="text-center fs-6">
                    <Link to={"/login"}>Log In</Link>
                </div>
            </div>
        </>
    )
}