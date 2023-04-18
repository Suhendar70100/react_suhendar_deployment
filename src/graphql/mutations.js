import {
  gql
} from "@apollo/client";

export const InsertProduct = gql `
mutation MyMutation($object: product_insert_input!) {
    insert_product_one(object: $object) {
      id
      descriptionProduct
      productCategory
      productFreshness
      productName
      productPrice
    }
  }
`
export const DeleteProduct = gql `
    mutation MyMutation($id: uuid!) {
        delete_product_by_pk(id: $id) {
          id
        }
      }
    `

export const UpdateProduct = gql `
    mutation MyMutation($id: uuid!, $productName: String!, $productCategory: String!, $productFreshness: String!, $descriptionProduct: String! $productPrice: Int!) {
        update_product_by_pk(pk_columns: {id: $id}, _set: {descriptionProduct: $descriptionProduct, productCategory:  $productCategory, productFreshness: $productFreshness, productName: $productName, productPrice: $productPrice}) {
          id
          productCategory
          descriptionProduct
          productFreshness
          productName
          productPrice
        }
      }
      
    `