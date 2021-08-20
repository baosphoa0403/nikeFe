import { Button } from "@material-ui/core";
import MaterialTable, { MTableToolbar } from "material-table";
import React from "react";
import AddIcon from "@material-ui/icons/Add";

export default function SizeProduct(props: any) {
  console.log(props.itemData);

  return (
    <div>
      <MaterialTable
        title={`Quantity & Size`}
        columns={[
          { title: "Quantity", field: "quantity" },
          { title: "Size", field: "size.nameSize" },
          { title: "Price", field: "price" },
        ]}
        data={props.itemData}
        options={{
          actionsColumnIndex: -1,
          pageSize: 10,
          search: false,
        }}
        components={{
          Toolbar: (props) => (
            <div className="tableToolbar">
              <div className="title">
                <MTableToolbar {...props} />
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
}
