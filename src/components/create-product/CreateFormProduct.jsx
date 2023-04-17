import React, { useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Button
} from "reactstrap";
import { v4 as uuid } from 'uuid';
import "../create-product/CreateFormProduct.css";
import useInsertProduct from '../../hooks/useInsertProduct';
import { useNavigate } from 'react-router-dom';

export default function CreateFormProduct() {
    const unique_id = uuid();
    const id = unique_id.slice(0, 8)
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productFreshness, setProductFreshness] = useState();
    const [descriptionProduct, setDescriptionProduct] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [image, setImage] = useState(null);
    const specialChars = /[^a-zA-Z0-9 ]/g;
    const [isActive, setIsActive] = useState(false);
    const [errMsg, setErrMsg] = useState("")
    const [errMsgPrice, setErrMsgPrice] = useState("")
    const [allErrMsg, setAllErrMsg] = useState("");
    const navigate = useNavigate()

    const { insertProduct } = useInsertProduct()


    const handleSubmit = (e) => {
        e.preventDefault();
        if (productName === "" || productCategory === "" || productFreshness === undefined || descriptionProduct === "" || productPrice === "") {
            setAllErrMsg("The field must be filled in")
        } else {
            insertProduct({
                variables: {
                    object: {
                        productName: productName,
                        productCategory: productCategory,
                        productFreshness: productFreshness,
                        descriptionProduct: descriptionProduct,
                        productPrice: productPrice
                    }
                }
            })
            alert(`
                Data Berhasil Ditambahkan!
                Product Name : ${productName}
                Product category : ${productCategory}
                product Freshness : ${productFreshness}
                Description : ${descriptionProduct}
                Product Price : ${productPrice}
            `)
            setImage(null);
            navigate('/products')
        }
        clear();
        document.getElementById("form").reset()

    }

    const clear = () => {
        setProductName("");
        setProductCategory("");
        setDescriptionProduct("");
        setProductPrice("");
    }

    const clearErr = () => {
        setErrMsg("");
        setErrMsgPrice("");
        setAllErrMsg("");
    }


    return (
        <>
            <Form className="form" onSubmit={handleSubmit} id="form">
                <FormGroup row>
                    <h4>Detail Product</h4>
                    <Col sm={10}>
                        <Label
                            for="productName"
                            sm={2}
                        >
                            Product Name
                        </Label>
                        <Input
                            id="productName"
                            name="productName"
                            placeholder="Product Name"
                            type="text"
                            readOnly={isActive}
                            maxLength="10"
                            value={productName}
                            onChange={(e) => {
                                setProductName(e.target.value);
                                if (productName.length >= 9) {
                                    setIsActive(() => !isActive);
                                } else if (specialChars.test(e.target.value)) {
                                    setErrMsg("Name must not contain symbols.")
                                } else {
                                    clearErr()
                                }
                                console.log(productName.length);
                            }}
                        />
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{errMsg}</p>
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{allErrMsg}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Label
                            for="productCategory"
                            sm={3}
                        >
                            Product Category
                        </Label>
                        <Input
                            id="productCategory"
                            name="productCategory"
                            type="select"
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        >
                            <option>

                            </option>
                            <option>
                                Food
                            </option>
                            <option>
                                Clothes
                            </option>
                            <option>
                                Book
                            </option>
                        </Input>
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{allErrMsg}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={10}>
                        <Label
                            for="imageProduct"
                            sm={3}
                        >
                            Image Of Product
                        </Label>
                        <Input
                            id="imageProduct"
                            multiple
                            name="selectMulti"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        >
                        </Input>
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{allErrMsg}</p>
                        {image && <img style={{ marginBottom: "10px !important" }} src={URL.createObjectURL(image)} alt="image product" />}
                    </Col>
                </FormGroup>
                <FormGroup
                    row
                    tag="fieldset"
                >
                    <Col sm={10}>
                        <Label
                            for="productFreshmess"
                            sm={3}
                        >
                            Product Freshmess :
                        </Label>
                        <FormGroup check>
                            <Input
                                name="freshness"
                                type="radio"
                                value="Brand New"
                                onChange={(e) => setProductFreshness(e.target
                                    .value)}
                            />
                            {' '}
                            <Label check>
                                Brand New
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="freshness"
                                type="radio"
                                value="Second Hank"
                                onChange={(e) => setProductFreshness(e.target
                                    .value)}
                            />
                            {' '}
                            <Label check>
                                Second Hank
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                        >
                            <Input
                                name="freshness"
                                type="radio"
                                value="Refurbished"
                                onChange={(e) => setProductFreshness(e.target
                                    .value)}
                            />
                            {' '}
                            <Label check>
                                Refurbished
                            </Label>
                        </FormGroup>
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{allErrMsg}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>

                    <Col sm={10}>
                        <Label
                            for="descriptionProduct"
                            sm={3}
                        >
                            Additional Description
                        </Label>
                        <Input
                            id="descriptionProduct"
                            name="text"
                            type="textarea"
                            value={descriptionProduct}
                            onChange={(e) => setDescriptionProduct(e.target.value)}
                        />
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{allErrMsg}</p>
                    </Col>
                </FormGroup>
                <FormGroup row>

                    <Col sm={10}>
                        <Label
                            for="productPrice"
                            sm={3}
                        >
                            Product Price
                        </Label>
                        <Input
                            id="productPrice"
                            multiple
                            name="productPrice"
                            min="0"
                            type="number"
                            placeholder="$1"
                            value={productPrice}
                            onChange={(e) => {
                                setProductPrice(e.target.value)
                                if (productPrice < 0) {
                                    setErrMsgPrice("number cannot be negative")
                                } else {
                                    clearErr()
                                }
                            }}
                        >
                        </Input>
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{errMsgPrice}</p>
                        <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{allErrMsg}</p>
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                        sm={
                            2
                        }
                    >
                    </Col>

                </FormGroup>
            </Form >
            <div className="grid text-center">
                <Button type="submit" form="form" color="primary" style={{ width: "275px", alignItems: "center", marginBottom: "50px" }}>
                    Submit
                </Button>
            </div>
        </>
    )
}