import "../tabel-product/TableProduct.css"
import { useNavigate } from 'react-router-dom';
export default function TableProduct() {
    const navigate = useNavigate();

    return (
        <>
            <div className="text-center">
                <h3>List Product</h3>
                <table className="table table-striped" id="myTable">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Category</th>
                            <th scope="col">Image of Product</th>
                            <th scope="col">Product Freshness</th>
                            <th scope="col">Additional Description</th>
                            <th scope="col">Product Price</th>
                        </tr>
                    </thead>
                    <tbody className="product-list" id="table">
                        <tr>
                            <td scope="row">1,001</td>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Brand new</td>
                            <td>adipiscing</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td scope="row">1,002</td>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Second Hand</td>
                            <td>adipiscing</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td scope="row">1,003</td>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Brand new</td>
                            <td>adipiscing</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td scope="row">1,004</td>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>Refushed</td>
                            <td>adipiscing</td>
                            <td>9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <input type="search" id="search" style={{ backgroundColor: "#FFFFFF", boxShadow: "0px 0px 0px #CBDAFC", borderRadius: "5px", border: "1px solid #CFD4D9", marginLeft: "75px" }} placeholder="Search by Product Name" />
            <div className="btnGroup" style={{ display: "flex", paddingBottom: "40px", marginLeft: "75px" }}>
                <button type="button" onClick={() => navigate('/home')}
                    style={{ backgroundColor: "#0D6EFD", border: "none", color: "#FFFFFF" }}>Go Home</button>
                <button type="button" style={{ border: "1px solid #0D6EFD", color: "#0D6EFD" }}
                    id="buttonSearch">Search</button>
            </div>
        </>
    )
}