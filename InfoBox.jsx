import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
    const INIT_URL="https://www.thoughtco.com/thmb/K_nGTjsTammwtx1vbMaLjZ0zeno=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/114822915-56a9e2a43df78cf772ab3989.jpg"
    
    return(
        <>
            <div className="InfoBox">
                {/* <h1>Weather Informartion : {info.weather}</h1> */}
                <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Minimum Temperature = {info.tempMin}&deg;C</p>
          <p>Maximum Temperature = {info.tempMax}&deg;C</p>
          <p>Weather today feels like {info.feelsLike}&deg;C and can be descriped as <i>{info.weather}</i></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
            </div>
        </>
    )
}