import styled from 'styled-components';
import React from 'react';

const SearchBox = styled.form`
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin: 20px;
border: black solid 1px;
border-radius: 2px;

& input {
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: bold;
}

& button {
  background-color: black;
  font-size: 14px;
  padding: 0 10px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-familiy: Montserrat;
  font-weight: bold;
}
`;

const ChooseCityLabel = styled.span`
color: black;
margin: 10px auto;
font-size: 18px;
font-weight: bold;
`;

const WelcomeWeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;
`;

const CityComponent = (props) => {
  const {updateCity, fetchWeather } = props;
  return(
    <>
    <WelcomeWeatherLogo src={"https://raw.githubusercontent.com/ayushkul/react-weather-app/8182448417bd379bdfcb452f3a15b9b29b3fd674/public/icons/perfect-day.svg"} />
      <ChooseCityLabel>find weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
      <input
        onChange={(e) => updateCity(e.target.value)}
        placeholder='City'
        />
        <button type={'submit'}>search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;