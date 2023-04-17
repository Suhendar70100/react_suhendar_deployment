import {
    useSubscription
} from "@apollo/client";
import {
    SubscriptionProduct
} from "../graphql/subscription";

export default function useSubscribeProduct() {
    const {
        loading,
        data
    } = useSubscription(SubscriptionProduct);
    return {
        data,
        loading
    }
}