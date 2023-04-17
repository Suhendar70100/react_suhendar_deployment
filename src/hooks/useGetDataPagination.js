import {
    DataPagination
} from "../graphql/query";
import {
    useQuery
} from "@apollo/client";

export default function useGetDataPagination() {
    const {
        loading,
        data
    } = useQuery(DataPagination);
    return {
        data,
        loading
    }
}