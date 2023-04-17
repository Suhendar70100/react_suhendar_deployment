import Header from "../components/header/Header";
import ImageParagraph from "../components/paragraph/ImageParagraph";
import CreateFormProduct from "../components/create-product/CreateFormProduct";
import TableProduct from "../components/tabel-product/TableProduct";
import Footer from "../components/footer/Footer";
import Swal from "sweetalert2"
import { useEffect } from "react";

export default function product() {
    useEffect(() => {
        Swal.fire({
            title: `<h1> Welcome </h1>`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }, [])
    return (
        <>
            <Header />
            <ImageParagraph />
            <CreateFormProduct />
            <TableProduct />
            <Footer />
        </>
    );
}