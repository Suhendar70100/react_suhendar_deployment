import {
    UpdateProduct
} from "../graphql/mutations";
import {
    GetData
} from "../graphql/query";
import {
    SubscriptionProduct
} from "../graphql/subscription";
import {
    useMutation
} from "@apollo/client";
export default function useUpdateProduct() {
    const [updateProduct] = useMutation(UpdateProduct, {
        refetchQueries: [SubscriptionProduct]
    });
    return {
        updateProduct
    }
}