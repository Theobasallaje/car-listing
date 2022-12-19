import { useEffect, useState, useRef } from "react";
import styles from "./CarPage.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "../components/NavBar";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PaletteIcon from "@mui/icons-material/Palette";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import NumbersIcon from "@mui/icons-material/Numbers";

const Responsive = styled("div")(({ theme }) => ({
}));

function CarPage() {
  let params = useParams();
  const [carInfo, setCarInfo] = useState([""]);
  const [carPrice, setCarPrice] = useState();
  const [carPriceMonthly, setCarPriceMonthly] = useState();

  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      fetch(`/cars/${params.id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let monthlyPrice = Math.round(parseInt(data[0].price) / 12);
          setCarInfo(data);
          setCarPrice(data[0].price.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
          setCarPriceMonthly(
            monthlyPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <>
      <NavBar />
      <AppBar
        position="fixed"
        sx={{ zIndex: "1", background: "white", marginTop: "104px" }}
      >
        <Link to="/" className={styles.backLink}>
          <ArrowBackIcon />
          &nbsp;&nbsp; Back to Home
        </Link>
      </AppBar>
      <Responsive
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography gutterBottom variant="h3" component="div" align="center">
          {carInfo[0].year} {carInfo[0].make} {carInfo[0].model}
        </Typography>
        <img alt={`${carInfo[0].year} ${carInfo[0].make} ${carInfo[0].model}`} src={carInfo[0].image} className={styles.carImg} />
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          align="center"
          sx={{ fontSize: { xs: "30px", sm: "32px", md: "40px" } }}
        >
          PRICE DETAILS
        </Typography>
      </Responsive>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        sx={{justifyContent:"center"}}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{maxWidth: {lg: "600px"}}}>
          <Card sx={{ minWidth: "350px" }}>
            <CardActionArea>
              <CardContent>
                <CardHeader
                  title="One Time Payment"
                  subheader="Free Shipping"
                  align="center"
                />
                <hr />
                <Typography variant="h3" align="center">
                  ${carPrice}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{maxWidth: {lg: "600px"}}}>
          <Card sx={{ minWidth: "350px" }}>
            <CardActionArea>
              <CardContent>
                <CardHeader
                  title="Monthly"
                  subheader="This is an estimate"
                  align="center"
                />
                <hr />
                <Typography variant="h3" align="center">
                  ${carPriceMonthly}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        align="center"
        sx={{
          marginTop: "32px",
          fontSize: { xs: "30px", sm: "32px", md: "40px" },
        }}
      >
        VEHICLE DETAILS
      </Typography>
      <Typography gutterBottom variant="h5" component="div" align="center">
        Basic Information
      </Typography>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div className={styles.vehicleDetails}>
          <span className={styles.vehicleDetailsItem}>
            <PaletteIcon /> Color: {carInfo[0].color}
          </span>
          <span className={styles.vehicleDetailsItem}>
            <LocalGasStationIcon /> Fuel Type: {carInfo[0].fuel}
          </span>
          <span className={styles.vehicleDetailsItem}>
            <SpeedIcon /> Mileage: {carInfo[0].mileage}mi
          </span>
          <span className={styles.vehicleDetailsItem}>
            <NumbersIcon /> Stock Number: {carInfo[0].id}
          </span>
        </div>
      </Container>
    </>
  );
}

export default CarPage;
