import {
  gql
} from "@apollo/client";

export const SubscriptionProduct = gql `
subscription MySubscription {
    product {
      id
      productCategory
      productFreshness
      productName
      productPrice
      descriptionProduct
    }
  }
  
`