import React from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import moment from "moment";
import cartService from "../../../Service/CartService";
import userService from "../../../Service/UserService";

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  datePicker: {
    width: 150,
  },
}));

export default function Orders() {
  const classes = useStyles();
  const token = userService.getAccessToken();
  let dataRes = null;

  React.useEffect(() => {
    const callAPI = async () => {
      try {
        const res = await cartService.getAllOrders(token);
        dataRes = res.data;
      } catch (error) {
        console.log({ ...error });
      }
    };
    callAPI();
  }, []);

  return (
    <div>
      <MaterialTable
        title="Orders"
        columns={[
          { title: "Order ID", field: "_id", editable: "never" },
          {
            title: "Create At",
            field: "createdAt",
            editable: "never",
          },
          {
            title: "Product",
            field: "products",
            editable: "never",
          },
          {
            title: "Status",
            field: "status",
            type: "string",
            editable: "never",
          },
        ]}
        data={[]}
        options={{
          pageSize: 10,
          pageSizeOptions: [10, 15, 20, 25],
          emptyRowsWhenPaging: false,
        }}
        editable={{}}
      />
    </div>
  );
}
