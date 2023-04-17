import {
    gql
} from "@apollo/client";

export const SubscriptionProduct = gql `
subscription MySubscription {
    products {
      id
      productCategory
      productFreshness
      productName
      productPrice
      descriptionProduct
    }
  }
  
`