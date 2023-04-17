import {
    InsertProduct
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
export default function useInsertProduct() {
    const [insertProduct] = useMutation(InsertProduct, {
        refetchQueries: [SubscriptionProduct]
    });
    return {
        insertProduct
    }
}