import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  MenuItem,
  Paper,
  Tab,
  Tabs,
  TextField,
  Toolbar,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import React from "react";
// import { TabPanel } from '@material-ui/lab';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ImageIcon from "@material-ui/icons/Image";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5em",
  },
  hidden: {
    display: "none",
  },
  paper: {
    position: "absolute",
    width: 1200,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  content: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45ch",
    },
    padding: theme.spacing(2),
  },
  content2: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
    padding: theme.spacing(2),
  },
  contentBtn: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
  sizes: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  tabRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  cover: {
    width: 151,
  },
  rootGallery: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  inlineField: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  delete: {
    position: "relative",
  },
  hiddenClear: {
    position: "absolute",
    top: "0",
    right: "0",
    color: "#fff",
    background: "#555",
    opacity: "0.5",
    cursor: "pointer",
    fontSize: "20px",
    "&:hover": {
      opacity: "1",
      color: "#f50057",
      background: "#efefef",
    },
  },
  appBar: {
    position: "fixed",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function EditProductForm(props: any) {
  const classes = useStyles();
  const product = {
    _id: "12121212",
    color: "green",
    typeProduct: "shoes",
    img: "https://static.nike.com/a/images/t_PDP_144_v1/f_auto/a0ca97be-ce25-456a-8ba7-73216a041c70/air-force-1-shadow-shoe-klCJXd.png",
    name: "Nike Air Force 1 Shadow",
    message: "product message",
    price: "252",
    description: "product.description",
    sizes: ["36", "37", "38"],
    imgDetails: ["black", "white", "red"],
    userCreated: "product.userCreated",
    gender: "product.gender",
    status: "product.status",
  };

  // category
  const [selectedCategory, setSelectedCategory] = React.useState(
    product.typeProduct
  );
  const [category, setCategory] = React.useState([]);

  const handleChangeCategory = (e: any) => {
    setSelectedCategory(e.target.value);
  };

  // gender
  const [selectedGender, setSelectedGender] = React.useState(product.gender);
  const [gender, setGenders] = React.useState([]);

  const handleChangeGender = (e: any) => {
    setSelectedGender(e.target.value);
  };

  // thumb
  const [thumb, setThumb] = React.useState({ thumb: product.img });
  const handleOnChangeThumb = (e: any) => {
    setThumb({ thumb: e.target.value });
  };

  // sizes
  const [sizes, setSizes] = React.useState(product.sizes);

  // colors (gallery)
  const [colors, setColors] = React.useState(product.imgDetails);

  const [value, setValue] = React.useState(0);

  // actions btn
  const saveBtn = () => {};

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Edit {product.name}
          </Typography>
          <Button onClick={props.closeDialog}>Cancel</Button>
          <Button autoFocus color="inherit" onClick={saveBtn}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper elevation={0} className={classes.content}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  defaultValue={product.name}
                  variant="outlined"
                />
                <TextField
                  id="message"
                  name="message"
                  label="Short Description"
                  defaultValue={product.message}
                  variant="outlined"
                />
                <TextField
                  id="desc"
                  name="description"
                  label="Details"
                  defaultValue={product.description}
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <TextField
                  id="selectPrdTypes"
                  name="typeProduct"
                  select
                  label="Product Type"
                  value={selectedCategory}
                  variant="outlined"
                >
                  {category.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <TextField
                  id="selectPrdGender"
                  name="gender"
                  select
                  label="Gender"
                  value={selectedGender}
                  variant="outlined"
                >
                  {gender.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <TextField
                  id="color"
                  name="color"
                  label="Color"
                  defaultValue={product.color}
                  variant="outlined"
                />
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  defaultValue={product.price}
                  variant="outlined"
                />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={0} className={classes.content2}>
                <h3>Thumbnail</h3>
                <Box
                  component="div"
                  display="inline"
                  className={classes.inlineField}
                >
                  {thumb.thumb ? (
                    <img src={thumb.thumb} width="65" height="65" />
                  ) : (
                    <ImageIcon fontSize="large"></ImageIcon>
                  )}
                  <TextField
                    id="img"
                    name="img"
                    label="Image"
                    defaultValue={thumb.thumb}
                    variant="outlined"
                  />
                </Box>
                <Divider />
                <h3>Sizes</h3>
                <Box
                  component="div"
                  display="inline"
                  className={classes.inlineField}
                >
                  <TextField
                    id="addSize"
                    // name="sizes"
                    label="Add Size"
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    size="medium"
                    // className={classes.button}

                    endIcon={<Icon>add</Icon>}
                  >
                    Add
                  </Button>
                </Box>

                <Paper
                  component="ul"
                  variant="outlined"
                  elevation={0}
                  className={classes.sizes}
                >
                  {sizes.length != 0
                    ? sizes.map((data, index) => {
                        return (
                          <li key={index}>
                            <Chip label={data} className={classes.chip} />
                          </li>
                        );
                      })
                    : "There is no size for this product. Please add one."}
                </Paper>
                <Divider />
                <h3>Gallery</h3>
                <Box
                  component="div"
                  display="inline"
                  className={classes.inlineField}
                >
                  <TextField
                    id="addColorGallery"
                    label="Add Color"
                    variant="outlined"
                    size="small"
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    // className={classes.button}

                    endIcon={<Icon>add</Icon>}
                  >
                    Add
                  </Button>
                </Box>
                <Paper
                  component="ul"
                  variant="outlined"
                  elevation={0}
                  className={classes.sizes}
                >
                  <div className={classes.tabRoot}>
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={value}
                      className={classes.tabs}
                    >
                      {colors.map((data, index) => {
                        return (
                          <Tab
                            key={index}
                            label={data}
                            {...a11yProps({ index })}
                          />
                        );
                      })}
                    </Tabs>
                    {colors.map((data, idx) => {
                      return (
                        <TabPanel value={value} index={idx} key={idx}>
                          <Box
                            component="div"
                            display="inline"
                            className={classes.inlineField}
                          >
                            <TextField
                              id="addImgGallery"
                              label="Add Image"
                              variant="outlined"
                              size="small"
                            />
                            <Button
                              variant="outlined"
                              color="primary"
                              size="small"
                              //   className={classes.button}
                              endIcon={<Icon>add</Icon>}
                            >
                              Add
                            </Button>
                            <Box ml={1}>
                              <Button
                                variant="outlined"
                                color="secondary"
                                size="small"
                                // className={classes.button}

                                endIcon={<Icon>delete</Icon>}
                              >
                                Delete color
                              </Button>
                            </Box>
                          </Box>

                          <Box
                            display="flex"
                            flexWrap="wrap"
                            p={1}
                            m={1}
                            css={{ maxWidth: 500 }}
                          >
                            {/* {data.imgs.length > 0
                              ? data.imgs.map((img, imgIdx) => {
                                  return (
                                    <Box
                                      key={imgIdx}
                                      p={0}
                                      m={1}
                                      className={classes.delete}
                                    >
                                      <img
                                        src={img.img}
                                        width="60"
                                        height="60"
                                      />
                                      <ClearIcon
                                        className={classes.hiddenClear}
                                        
                                      />
                                    </Box>
                                  );
                                })
                              : "No image found in gallery"} */}
                            No image found in gallery
                          </Box>
                        </TabPanel>
                      );
                    })}
                  </div>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
