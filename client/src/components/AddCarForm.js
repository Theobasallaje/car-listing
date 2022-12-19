import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function AddCarForm(props) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Sell a Car</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To sell your car enter in the details below to create the listing.
        </DialogContentText>
        <TextField
          autoFocus
          required
          error={props.makeError}
          margin="dense"
          id="Make"
          label="Make"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => props.setMake(event.target.value)}
        />
        <TextField
          autoFocus
          required
          error={props.modelError}
          margin="dense"
          id="Model"
          label="Model"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => props.setModel(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Color"
          label="Color"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => props.setColor(event.target.value)}
        />
        <TextField
          autoFocus
          required
          error={props.yearError}
          margin="dense"
          id="Year"
          label="Year"
          type="number"
          fullWidth
          variant="standard"
          onChange={(event) => props.setYear(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Category"
          label="Category"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => props.setCategory(event.target.value)}
        />
        <TextField
          autoFocus
          required
          error={props.mileageError}
          margin="dense"
          id="Mileage"
          label="Mileage"
          type="number"
          fullWidth
          variant="standard"
          onChange={(event) => props.setMileage(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Fuel"
          label="Fuel"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => props.setFuel(event.target.value)}
        />
        <TextField
          autoFocus
          required
          error={props.priceError}
          margin="dense"
          id="Price"
          label="Price"
          type="number"
          fullWidth
          variant="standard"
          onChange={(event) => props.setPrice(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="Image"
          label="Image"
          type="text"
          fullWidth
          variant="standard"
          onChange={(event) => props.setImage(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={props.handleSubmit}>List</Button>
      </DialogActions>
    </Dialog>
  );
}
export default AddCarForm;
