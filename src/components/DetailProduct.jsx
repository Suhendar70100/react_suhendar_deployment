import { useParams, useNavigate } from "react-router-dom";
import "../components/DetailProduct.css";
import Loading from "./loading/Loading";
// import useGetData from "../hooks/useGetData";
import useSubscribeProduct from "../hooks/useSubscribeProduct";



export default function DeatilProduct() {
    const { id } = useParams();
    const navigate = useNavigate()


    const { loading, data } = useSubscribeProduct();
    // console.log(data.products)
    return (
        <div className="box">
            <h1>Detail Product</h1>
            {loading ? <Loading /> :
                data?.products.filter((item) => item.id === id).map((item) => (
                    <div key={item.id}>
                        <p>Product Name : {item.productName}</p>
                        <p>Category Product : {item.productCategory}</p>
                        <p>Product Freshnes : {item.productFreshness}</p>
                        <p>Description Product: {item.descriptionProduct}</p>
                        <p>Price Product: {item.productPrice}</p>
                        <button type="button" onClick={() => navigate('/home')}
                            style={{ backgroundColor: "#8873be", width: "100px", border: "none", borderRadius: "5px", color: "#FFFFFF" }}>Go Home</button>
                    </div>
                ))}

        </div>
    )
}
