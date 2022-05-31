import jwtDecode from "jwt-decode";

export const GetTablesFromToken = () => {
    const token = localStorage.getItem("token");
    console.log(jwtDecode(token)?.tableName);
    return jwtDecode(token)?.tableName || [];
}