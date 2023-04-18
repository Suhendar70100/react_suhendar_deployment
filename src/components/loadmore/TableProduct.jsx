import { Link, useNavigate } from "react-router-dom"
// import useGetData from "../../hooks/useGetData"
import useDeleteProduct from "../../hooks/useDeleteProduct";
import Swal from "sweetalert2";
import Loading from "../loading/Loading";
import useSubscribeProduct from "../../hooks/useSubscribeProduct";

export default function TableProduct() {
    const { data, loading } = useSubscribeProduct();
    console.log(data);
    const navigate = useNavigate();
    const { deleteProduct } = useDeleteProduct();
    const onDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                deleteProduct({
                    variables: {
                        id: id
                    }
                })
            }
        })
    }
    return (
        <>
            <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h3 style={{ marginTop: "30px" }}>List Product</h3>
                <table className="table table-striped" id="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Category</th>
                            {/* <th scope="col">Image</th> */}
                            <th scope="col">Product Freshness</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <Loading /> : data?.product.map((item, index) =>
                        (
                            <tr key={index}>
                                <td scope="row"><Link to={`/account/${item.id}`}>{item.id}</Link></td>
                                <td>{item.productName}</td>
                                <td>{item.productCategory}</td>
                                {/* <td><img className="picture" src={item.avatar} alt="picture" /></td> */}
                                <td>{item.productFreshness}</td>
                                <td>{item.productPrice}</td>
                                <td style={{ display: "flex" }}>
                                    <button type="button" style={{ marginRight: "10px" }} onClick={() => onDelete(item.id)} className="btn btn-danger">Delete</button>
                                    <button type="button" onClick={() => navigate(`/edit/${item.id}`)} style={{ marginRight: "10px" }} className="btn btn-success">Edit</button>
                                </td>
                            </tr>

                        )
                        )
                        }

                    </tbody>
                </table>
            </div>
            <div className="btnGroup" style={{ display: "flex", paddingBottom: "40px", marginLeft: "75px" }}>
                <button type="button" onClick={() => navigate('/createproduct')}
                    style={{ backgroundColor: "#0D6EFD", border: "none", color: "#FFFFFF", borderRadius: "10px" }}>Go Back</button>
            </div>
        </>
    )
}