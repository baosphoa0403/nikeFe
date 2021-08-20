import React from "react";
import Grid from "@material-ui/core/Grid";
import MaterialTable, { MTableToolbar } from "material-table";
import { Button, CircularProgress, Dialog, Slide } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { TransitionProps } from "@material-ui/core/transitions";
import productService from "../../../Service/ProductService";
import DetailProduct from "./DetailProduct";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { API_IMGBB } from "../../../Config/url";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Products() {
  const [addNewType, setAddNewType] = React.useState(false);
  const [itemData, setItemData] = React.useState(null);

  // Dialog
  const [open, setOpen] = React.useState(false);

  const handleOpen = (rowData: any) => {
    setItemData(rowData);
    setAddNewType(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenAddNew = () => {
    setOpen(true);
    setAddNewType(true);
  };

  const handleCloseAddNew = () => {
    setAddNewType(false);
    setOpen(false);
  };
  //icon loading
  const [isLoading, setIsLoading] = React.useState(true);
  // delete a product
  const removeItem = async (rowData: any) => {};
  //load again
  const [loadAgain, setLoadAgain] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    productService.getAllProduct().then((res) => {
      setIsLoading(true);
      setProducts(res.data);
      setIsLoading(false);
    });
  }, [loadAgain]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        )}
        {!isLoading && (
          <MaterialTable
            title="List Products"
            columns={[
              { title: "Name", field: "name" },
              { title: "Category", field: "category.nameCategory" },
            ]}
            data={products}
            actions={[
              {
                tooltip: "Edit Product",
                icon: "edit",
                onClick: (event, rowData) => handleOpen(rowData),
              },
              // {
              //   tooltip: "Delete all Details",
              //   icon: "delete",
              //   onClick: (event, rowData) => removeItem(rowData),
              // },
            ]}
            options={{
              actionsColumnIndex: -1,
              pageSize: 10,
            }}
            detailPanel={[
              {
                tooltip: "Show Detail",
                render: (rowData: any) => <DetailProduct itemData={rowData} />,
              },
            ]}
            components={{
              Toolbar: (props) => (
                <div className="tableToolbar">
                  <div className="title">
                    <MTableToolbar {...props} />
                  </div>
                  <div>
                    <Button
                      onClick={handleOpenAddNew}
                      className="addnew"
                      variant="contained"
                      size="small"
                      color="primary"
                      startIcon={<AddIcon />}
                    >
                      Add new
                    </Button>
                  </div>
                </div>
              ),
            }}
          />
        )}

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          {addNewType ? (
            <AddProduct
              loadAgain={loadAgain}
              setLoadAgain={setLoadAgain}
              handleCloseAddNew={handleCloseAddNew}
              closeDialog={handleClose}
            />
          ) : (
            <EditProduct
              loadAgain={loadAgain}
              setLoadAgain={setLoadAgain}
              itemData={itemData}
              closeDialog={handleClose}
            />
          )}
        </Dialog>
      </Grid>
    </Grid>
  );
}
