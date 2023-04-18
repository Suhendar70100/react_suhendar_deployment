import {
    gql
} from "@apollo/client";

export const GetData = gql `
        query GetProducts {
            product {
            productPrice
            productCategory
            productFreshness
            productName
            descriptionProduct
            id
            }
        }
    `;

export const DataPagination = gql `
query GetProducts {
    product(limit: 5, offset: 0, order_by: {productName: asc}) {
      productPrice
          descriptionProduct
          productCategory
          productFreshness
          productName
          id
    }
  }
`