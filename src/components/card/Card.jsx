import useGetDataPagination from "../../hooks/useGetDataPagination";
import { Link } from 'react-router-dom';
import "../card/Card.css";
export default function Card({ input }) {

    const { data } = useGetDataPagination();
    const filterData = data?.product.filter((el) => {
        if (input === "") {
            return el;
        } else {
            return el.productName.toLowerCase().includes(input)
        }
    })
    console.log(input)
    return (
        <>
            <div className="container">
                <div className="row">
                    {filterData?.map((item) => (
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" id="card-img" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.descriptionProduct}</p>
                                    <button className="btn btn-outline-primary btn-sm"><Link to={`/account/${item.id}`}>Read More</Link></button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}
