import {
  // alpha,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React from 'react';
import { StyledButton } from '../../../Component/Button';
import ModalPopUp from '../../../Component/Modal';
import { IStatus } from '../../../Model/IStatus';
import statusService from '../../../Service/StatusService';
import userService from '../../../Service/UserService';
import { notifiSuccess } from '../../../utils/MyToys';
import Row from '../Users/Row';
const useStyles = makeStyles((theme) => ({
  Title: {
    fontSize: 25,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      // backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  Content: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundImage:
      'linear-gradient(to left, #227df9 0%, #7462f9 25%, #df3ef8 50%, #7462f9 75%, #227df9 100%)',
    backgroundSize: '250% auto',
    transition: 'all 0.5s ease !important',
    '&:hover': {
      backgroundPosition: 'right center',
    },
  },
}));

export default function Status() {
  const classes = useStyles();
  const [status, setStatus] = React.useState<IStatus[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [flag, setFlag] = React.useState<boolean>(false);
  const [nameStatus, setNameStatus] = React.useState<string>('');
  React.useEffect(() => {
    const callAPI = async () => {
      const res = await statusService.getAllStatus();
      setStatus(res.data);
    };
    callAPI();
  }, [open]);
  const openModal = () => {
    setNameStatus('');
    setOpen(true);
  };
  const closeModal = () => {
    setNameStatus('');
    setOpen(false);
  };

  // ======== Delete Status ========
  const [id, setId] = React.useState('');
  const [openConfirm, setOpenConfirm] = React.useState(false);

  const handleOpenConfirm = (id: string) => {
    setId(id);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const removeStatus = (id: string) => {
    const callAPI = async (id: string) => {
      const token: string | null = userService.getAccessToken();
      const res = await statusService.deleteStatus(id, token);
      const res1 = await statusService.getAllStatus();
      setStatus(res1.data);
    };
    notifiSuccess('remove status successfully');
    callAPI(id);
  };

  const handleRemoveStatus = (id: string) => {
    removeStatus(id);
    setOpenConfirm(false);
  };

  return (
    <div>
      <h1>Management Status</h1>
      <StyledButton
        onClick={() => {
          setFlag(false);
          openModal();
        }}
      >
        Create Status
      </StyledButton>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>ID status</TableCell>
              <TableCell align='left'>NAME status</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {status.map((item: IStatus, index: number) => (
              <TableRow key={item._id}>
                <TableCell component='th' scope='row'>
                  {item._id}
                </TableCell>
                <TableCell align='left'>{item.nameStatus}</TableCell>
                <TableCell align='left' style={{ display: 'flex' }}>
                  <StyledButton
                    style={{ padding: '0px', margin: '0px 10px' }}
                    onClick={() => {
                      handleOpenConfirm(item._id);
                    }}
                  >
                    Remove
                  </StyledButton>
                  <StyledButton
                    style={{ padding: '0px', margin: '0px 10px' }}
                    onClick={() => {
                      setFlag(true);
                      openModal();
                      setNameStatus(item.nameStatus);
                    }}
                  >
                    Update
                  </StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalPopUp
        open={open}
        closeModal={closeModal}
        title={!flag ? 'Form: Create Status' : 'Form: Update Status'}
        contentButton={!flag ? 'Create' : 'Save'}
        nameStatus={nameStatus}
      />

      {/* Confirm Dialog */}
      <Dialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to DELETE ?'}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color='primary'>
            No
          </Button>
          <Button
            color='primary'
            autoFocus
            onClick={() => {
              handleRemoveStatus(id);
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
