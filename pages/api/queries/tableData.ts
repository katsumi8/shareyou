import { gql, useQuery } from "@apollo/client";
import { Table } from "../../../types/serverState";

const GET_TABLES = gql`
  query {
    seatmap {
      id
      tableID
      capability
      isReserved
      isRounded
      isUnReservable
      position
    }
  }
`;

export const useFetchTableData = () => {
  const { data, error, loading } = useQuery(GET_TABLES);

  const tableStyles = data ? (data.seatmap as Table[]) : [];

  return { tableStyles, error, loading };
};
