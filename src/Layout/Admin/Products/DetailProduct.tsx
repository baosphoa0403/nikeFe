import { Button, CircularProgress, Dialog, Slide } from "@material-ui/core";
import MaterialTable, { MTableToolbar } from "material-table";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import productDetailService from "../../../Service/ProductDetailService";
import SizeProduct from "./SizeProduct";
import { TransitionProps } from "@material-ui/core/transitions";
import AddDetail from "./AddDetail";
import EditProduct from "./EditProduct";
import EditDetail from "./EditDetail";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function DetailProduct(props: any) {
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

  //is loading state
  const [isLoading, setIsLoading] = React.useState(true);
  //first
  const [details, setDetails] = React.useState([]);
  //load again
  const [loadAgain, setLoadAgain] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    productDetailService.getProductDetail(props.itemData._id).then((res) => {
      setDetails(res.data);
      setIsLoading(false);
    });
  }, [loadAgain]);

  const deleteProductDetail = async (id: string) => {
    try {
      const res = await productDetailService.deleteProductDetail(id);
      console.log(res);
    } catch (err) {
      console.log({ ...err });
    }
  };
  return (
    <div>
      {isLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
      {!isLoading && (
        <MaterialTable
          title={`Detail: ${props.itemData.name}`}
          columns={[
            {
              title: "Image",
              render: (rowData: any) => (
                <img src={rowData.images[0].urlImage} style={{ width: 80 }} />
              ),
            },
            { title: "Color", field: "info.color.nameColor" },
            { title: "Gender", field: "info.gender.nameGender" },
          ]}
          data={details}
          actions={[
            {
              tooltip: "Edit Detail",
              icon: "edit",
              onClick: (event, rowData) => {
                handleOpen(rowData);
              },
            },
            {
              tooltip: "Delete Detail",
              icon: "delete",
              onClick: (event, rowData) => {
                deleteProductDetail(rowData.info._id);
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            pageSize: 10,
          }}
          detailPanel={[
            {
              tooltip: "Show Sizes",
              render: (rowData: any) => (
                <SizeProduct itemData={rowData.quantities} />
              ),
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
                    Add New Detail
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
          <AddDetail
            loadAgain={loadAgain}
            setLoadAgain={setLoadAgain}
            idProduct={props.itemData._id}
            handleCloseAddNew={handleCloseAddNew}
            closeDialog={handleClose}
          />
        ) : (
          <EditDetail
            loadAgain={loadAgain}
            setLoadAgain={setLoadAgain}
            itemData={itemData}
            closeDialog={handleClose}
          />
        )}
      </Dialog>
    </div>
  );
}
