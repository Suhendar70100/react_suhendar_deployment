import {
    useMutation
} from "@apollo/client";
import {
    DeleteProduct
} from "../graphql/mutations";
import {
    GetData
} from "../graphql/query";
import {
    SubscriptionProduct
} from "../graphql/subscription";

export default function useDeleteProduct() {
    const [deleteProduct, {
        loading: loadingDelete
    }] = useMutation(DeleteProduct, {
        refetchQueries: [SubscriptionProduct]
    });
    return {
        deleteProduct,
        loadingDelete
    }
}