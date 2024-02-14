import "./AdoptionPage.css";
import { useState } from "react";
import { TextField, Button, Stack, Container } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [telephone, setTelephone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      message,
      street,
      city,
      country,
      zipCode,
      telephone
    );
  }

  return (
    <div className="formTitle">
      <h2>Register Form</h2>
      <form
        onSubmit={handleSubmit}
        action={<Link to="/login" />}
        className="adoptionForm"
      >
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
          />
        </Stack>
        <TextField
          type="email"
          variant="outlined"
          color="secondary"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="number"
          variant="outlined"
          color="secondary"
          label="Telephone"
          onChange={(e) => setTelephone(e.target.value)}
          value={telephone}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Street"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="Country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          label="ZipCode"
          onChange={(e) => setZipCode(e.target.value)}
          value={zipCode}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="text"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          label="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
          fullWidth
          sx={{ mb: 4 }}
        />
        <Button variant="outlined" color="secondary" type="submit">
          Adopt
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
