import {
    useQuery
} from "@apollo/client";
import {
    GetData
} from "../graphql/query";
export default function useGetData() {
    const {
        loading,
        data
    } = useQuery(GetData);
    return {
        data,
        loading
    }
}