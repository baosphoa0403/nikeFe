import {
  AppBar,
  Button,
  Checkbox,
  DialogContentText,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import API_IMAGE from "../../../Config/api-image";
import colorService from "../../../Service/ColorService";
import genderService from "../../../Service/GenderService";
import sizeService from "../../../Service/SizeService";
import ImageTwoToneIcon from "@material-ui/icons/ImageTwoTone";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import productDetailService from "../../../Service/ProductDetailService";
import statusService from "../../../Service/StatusService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  input: {
    width: "70%",
    margin: "15px 0",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    margin: "15px 15px",
  },
  container: {
    display: "flex",
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));
interface Quantity {
  quantity: number;
  sizeId: string;
  price: number;
}
export default function EditDetail(props: any) {
  const classes = useStyles();

  const [selectedStatus, setSelectedStatus] = React.useState(
    props.itemData.info.status._id
  );
  const [selectedColor, setSelectedColor] = React.useState(
    props.itemData.info.color._id
  );
  const [selectedGender, setSelectedGender] = React.useState(
    props.itemData.info.gender._id
  );
  const [images, setImages] = React.useState<string[]>(
    [...props.itemData.images].map((item) => item.urlImage)
  );
  const [selectedQuantities, setSelectedQuantities] = React.useState<
    Quantity[]
  >(
    [...props.itemData.quantities].map((item) => {
      return {
        quantity: item.quantity,
        sizeId: item.size._id,
        price: item.price,
      };
    })
  );

  //the first loading
  const [colors, setcolors] = React.useState<any[]>([]);
  const [genders, setgenders] = React.useState<any[]>([]);
  const [quantities, setQuantities] = React.useState<any[]>([]);
  const [status, setStatus] = React.useState<any[]>([]);

  React.useEffect(() => {
    colorService.getAllColors().then((res) => {
      setcolors(res.data);
    });
    genderService.getAllGenders().then((res) => {
      setgenders(res.data);
    });
    sizeService.getAllSizes().then((res) => {
      setQuantities(res.data);
    });
    statusService.getAllStatus().then((res) => {
      setStatus(
        res.data.filter(
          (item: any) =>
            item.nameStatus === "active" || item.nameStatus === "inactive"
        )
      );
    });
  }, []);
  //handle image
  const [showImageLoading, setShowImageLoading] = React.useState(false);
  const handleImage = async (e: any) => {
    let i = 0;
    const length = e.target.files.length;
    do {
      try {
        let formData = new FormData();
        formData.append("image", e.target.files[i]);
        setShowImageLoading(true);
        const res = await API_IMAGE(formData);
        images.push(res.data.data.url);
        setImages([...images]);
        setShowImageLoading(false);
      } catch (err) {
        console.log({ ...err });
      }
      ++i;
    } while (i < length);
  };
  //remove image
  const removeImage = (url: string) => {
    images.splice(
      images.findIndex((item) => item === url),
      1
    );
    setImages([...images]);
  };
  //Popup
  const [checked, setChecked] = React.useState(false);
  //handle quantity
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(1);
  const [sizeId, setSizeId] = React.useState("");
  const handleQuantity = (e: any) => {
    const item = selectedQuantities.find(
      (item) => item.sizeId === e.target.value
    );
    if (item === undefined) {
      setSizeId(e.target.value);
      setChecked(true);
    } else {
      selectedQuantities.splice(selectedQuantities.indexOf(item), 1);
      setSelectedQuantities([...selectedQuantities]);
    }
  };
  const addQuantity = (e: any) => {
    e.preventDefault();
    selectedQuantities.push({ quantity, sizeId, price });
    setSelectedQuantities([...selectedQuantities]);
    setChecked(false);
    setPrice(0);
    setQuantity(0);
  };

  //show quantity & price
  const show = (size: string) => {
    const quantity = selectedQuantities.find((item) => item.sizeId === size);
    if (quantity !== undefined) {
      return (
        <Typography>
          <div>Quantity = {quantity.quantity}</div>
          <div>Price = {quantity.price}</div>
        </Typography>
      );
    }
  };

  //Dialog notification
  const [open, setOpen] = React.useState(false);
  const [quantityNotification, setQuantityNotification] = React.useState(
    <div></div>
  );
  const [imageNotification, setImageNotification] = React.useState(<div></div>);
  //check validation when send API
  const [selectedColorValid, setSelectedColorValid] = React.useState(false);
  const [selectedGenderValid, setSelectedGenderValid] = React.useState(false);
  const [selectedStatusValid, setSelectedStatusValid] = React.useState(false);

  const checkValid = () => {
    let result = true;
    if (selectedStatus === "") {
      result = false;
      setSelectedStatusValid(true);
    } else {
      setSelectedStatusValid(false);
    }
    if (selectedColor === "") {
      result = false;
      setSelectedColorValid(true);
    } else {
      setSelectedColorValid(false);
    }
    if (selectedGender === "") {
      result = false;
      setSelectedGenderValid(true);
    } else {
      setSelectedGenderValid(false);
    }
    if (selectedQuantities.length < 1) {
      setQuantityNotification(<div>- Choose at least 1 size</div>);
      result = false;
    } else {
      setQuantityNotification(<div></div>);
    }
    if (images.length < 1) {
      result = false;
      setImageNotification(<div>- Need at least 1 image</div>);
    } else {
      setImageNotification(<div></div>);
    }
    return result;
  };
  // actions btn
  const saveBtn = async () => {
    if (checkValid()) {
      try {
        console.log(props);
        const res = await productDetailService.editProductDetail(
          props.itemData.info._id,
          {
            statusId: selectedStatus,
            colorId: selectedColor,
            genderId: selectedGender,
            quantities: selectedQuantities,
            imageUrls: images,
          }
        );
        console.log(res);
        props.setLoadAgain(!props.loadAgain);
        props.closeDialog();
      } catch (err) {
        console.log({ ...err });
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "#ffd803" }} id="alert-dialog-title">
          {"Warning"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ color: "red" }}
            id="alert-dialog-description"
          >
            <h2>Data not enough</h2>
            {quantityNotification}
            {imageNotification}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="primary"
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.container}>
        <Fade in={checked}>
          <div
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              onSubmit={(e: any) => {
                addQuantity(e);
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#fef6e4",
                  padding: 20,
                }}
              >
                <span>Fill quantity and price</span>
                <TextField
                  style={{ width: "100%", margin: 15 }}
                  id="outlined-category-input"
                  label="Quantity"
                  variant="outlined"
                  value={quantity}
                  type="number"
                  onChange={(e: any) => {
                    setQuantity(e.target.value);
                  }}
                />
                <TextField
                  style={{ width: "100%", margin: 15 }}
                  id="outlined-category-input"
                  label="Price"
                  variant="outlined"
                  value={price}
                  type="number"
                  onChange={(e: any) => {
                    setPrice(e.target.value);
                  }}
                />
                <div>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Edit Detail
          </Typography>
          <Button onClick={props.closeDialog}>Cancel</Button>
          <Button autoFocus color="inherit" onClick={saveBtn}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div className={classes.content}>
              <TextField
                error={selectedStatusValid}
                className={classes.input}
                id="outlined-status-input"
                label="Status"
                select
                variant="outlined"
                value={selectedStatus}
                required
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                }}
              >
                {status.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item._id}>
                      {item.nameStatus}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                error={selectedColorValid}
                className={classes.input}
                id="outlined-category-input"
                label="Color"
                select
                variant="outlined"
                value={selectedColor}
                required
                onChange={(e) => {
                  setSelectedColor(e.target.value);
                }}
              >
                {colors.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item._id}>
                      {item.nameColor}
                    </MenuItem>
                  );
                })}
              </TextField>
              <TextField
                error={selectedGenderValid}
                className={classes.input}
                id="outlined-category-input"
                label="Gender"
                select
                variant="outlined"
                value={selectedGender}
                required
                onChange={(e) => {
                  setSelectedGender(e.target.value);
                }}
              >
                {genders.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item._id}>
                      {item.nameGender}
                    </MenuItem>
                  );
                })}
              </TextField>
              <div>
                <input
                  accept="image/*"
                  multiple
                  style={{ display: "none" }}
                  id="contained-button-file"
                  type="file"
                  onChange={(e: any) => handleImage(e)}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Add images
                  </Button>
                </label>
              </div>
            </div>
            <div
              style={{ marginLeft: 15, display: checked ? "none" : "block" }}
            >
              <FormControl component="fieldset">
                <FormLabel component="legend">Choose size</FormLabel>
                <Grid container spacing={1}>
                  {quantities.map((size) => {
                    return (
                      <Grid item xs={3}>
                        <FormControlLabel
                          value={size._id}
                          control={
                            <Checkbox
                              checked={
                                selectedQuantities.find(
                                  (i) => i.sizeId === size._id
                                )
                                  ? true
                                  : false
                              }
                              color="primary"
                            />
                          }
                          label={`Size: ${size.nameSize}`}
                          labelPlacement={size.nameSize}
                          onChange={(e: any) => {
                            handleQuantity(e);
                          }}
                        />
                        {show(size._id)}
                      </Grid>
                    );
                  })}
                </Grid>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className={classes.image}>
              <h2>Images:</h2>
              {images.map((url) => {
                return (
                  <div style={{ width: 200, textAlign: "center" }}>
                    <img
                      src={url}
                      style={{
                        width: 150,
                        border: "1px solid black",
                        marginLeft: 10,
                      }}
                    />
                    <Button
                      onClick={() => {
                        removeImage(url);
                      }}
                    >
                      Remove image
                    </Button>
                  </div>
                );
              })}
              {showImageLoading && (
                <ImageTwoToneIcon
                  style={{ width: 150, height: 150, border: "1px solid black" }}
                />
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
