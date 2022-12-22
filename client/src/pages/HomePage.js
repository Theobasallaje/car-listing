import { useEffect, useState, useRef } from "react";
import styles from "./HomePage.module.scss";
import Card from "../components/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import NavBar from "../components/NavBar";
import Alert from '@mui/material/Alert';
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import AddCarForm from "../components/AddCarForm";
import noCarPic from "../images/no_pic.png";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

function HomePage() {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [makeError, setMakeError] = useState(false);
  const [modelError, setModelError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [mileageError, setMileageError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      fetch(`/cars`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCars(data);
        })
        .catch((err) => {
        });
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToastClose = () => {
    if (showSuccessToast) setShowSuccessToast(false);
    if (showErrorToast) setShowErrorToast(false);
  };

  const handleSubmit = () => {

    if (!make || !model || !year || !mileage || !price) {
      !make && setMakeError(true);
      !model && setModelError(true);
      !year && setYearError(true);
      !mileage && setMileageError(true);
      !price && setPriceError(true);
      return
    }
    setOpen(false);
    let id = nanoid();
    let carData = {
      make,
      model,
      color,
      year,
      category,
      mileage,
      fuel,
      price,
      image: image || noCarPic,
    };
    fetch(`/cars/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCars(data);
        setShowSuccessToast(true);
        setTimeout(() => {
          setShowSuccessToast(false);
        }, 5000)
      })
      .catch((err) => {
        console.log(err);
        setShowErrorToast(true);
      });
    setMake("");
    setModel("");
    setColor("");
    setYear("");
    setCategory("");
    setMileage("");
    setFuel("");
    setPrice("");
    setImage("");
    setMakeError(false);
    setModelError(false);
    setMileageError(false);
    setYearError(false);
    setPriceError(false);
  };

  return (
    <>
      <NavBar />
      <div className={styles.titleAddButtonContainer}>
        <Typography
          variant="h2"
          sx={{ color: "#545B63", fontSize: { xs: "40px" } }}
        >
          Car Depot
        </Typography>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          startIcon={<AddIcon />}
          sx={{ height: "42px" }}
        >
          New Car
        </Button>
      </div>
      <Typography variant="h5" sx={{ color: "#545B63", paddingLeft: "24px" }}>
        Select a Car
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {cars.map((car, index) => (
          <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
            <Link style={{ textDecoration: "none" }} to={`/cars/${car.id}`}>
              <Card
                key={index}
                make={car.make}
                model={car.model}
                color={car.color}
                year={car.year}
                category={car.category}
                mileage={car.mileage}
                fuel={car.fuel}
                price={car.price}
                image={car.image}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <AddCarForm
        open={open}
        setMake={setMake}
        setModel={setModel}
        setColor={setColor}
        setYear={setYear}
        setCategory={setCategory}
        setMileage={setMileage}
        setFuel={setFuel}
        setPrice={setPrice}
        setImage={setImage}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        makeError={makeError}
        modelError={modelError}
        yearError={yearError}
        mileageError={mileageError}
        priceError={priceError}
      />
      {showSuccessToast && <Alert severity="success" onClose={handleToastClose} sx={{position: "fixed", left: 8, bottom: 8}}>Car Listed Successfully!</Alert>}
      {showErrorToast && <Alert severity="error" onClose={handleToastClose} sx={{position: "fixed", left: 8, bottom: 8}}>Listing failed!</Alert>}
    </>
  );
}

export default HomePage;
