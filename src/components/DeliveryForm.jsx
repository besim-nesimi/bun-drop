import React, {useEffect, useState} from 'react';

// För enkelhetens skull, testar med att bara lägga allt som text, även siffror

function DeliveryForm({setDeliveryFormSubmitted}) {
    const [formData, setFormData] = useState({
        customerName: "",
        streetAddress: "",
        streetNumber: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
    })


    const [formErrors, setFormErrors] = useState({
        customerName: "",
        streetAddress: "",
        streetNumber: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
    })

    const validateForm = () => {
        let valid = true;
        const errors = {};

        for (const field in formData) {
            if(formData[field].trim() === "") {
                errors[field] = "* Required"
                valid = false;
            }
        }

        setFormErrors(errors);
        return valid;
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem("customerDetails", JSON.stringify(formData));
            console.log("Your informations have been saved.")
            setDeliveryFormSubmitted(true);

            // Resetta formuläret
            // Jag gör ett medvetet val att inte resetta formuläret.
            // Om kund gjort fel, kan dem skriva om det fält som blivit fel och klicka submit på nytt.
            // setFormData({
            //     customerName: "",
            //     streetAddress: "",
            //     streetNumber: "",
            //     city: "",
            //     zipCode: "",
            //     phoneNumber: "",
            // });

            
        }

        
    };

    const styles = {
      main: {
        backgroundColor: "#ffcab5",
      },
      container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 10,
        marginBottom: 10,
      },
      formContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: 2,
      },
      card: {
        backgroundColor: "white",
        color: "black",
        margin: 5,
        padding: 5,
        borderRadius: 5,
      },
      btnCard: {
        backgroundColor: "white",
        color: "black",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
      }
    };
    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <form onSubmit={handleSubmit}>
            <div style={styles.card}>
              <div style={styles.formContainer}>
                <label style={styles.formContainer}>
                  Customer Name:{" "}
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                  />
                </label>
                {formErrors.customerName && (
                  <span>{formErrors.customerName}</span>
                )}
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.formContainer}>
                <label style={styles.formContainer}>
                  Street Address:{" "}
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                  />
                </label>
                {formErrors.streetAddress && (
                  <span>{formErrors.streetAddress}</span>
                )}
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.formContainer}>
                <label style={styles.formContainer}>
                  Street Number:{" "}
                  <input
                    type="text"
                    name="streetNumber"
                    value={formData.streetNumber}
                    onChange={handleInputChange}
                  />
                </label>
                {formErrors.streetNumber && (
                  <span>{formErrors.streetNumber}</span>
                )}
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.formContainer}>
                <label style={styles.formContainer}>
                  City:{" "}
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </label>
                {formErrors.city && <span>{formErrors.city}</span>}
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.formContainer}>
                <label style={styles.formContainer}>
                  Zip Code:{" "}
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </label>
                {formErrors.zipCode && <span>{formErrors.zipCode}</span>}
              </div>
            </div>
            <div style={styles.card}>
              <div style={styles.formContainer}>
                <label>
                  Phone Number:{" "}
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </label>
                {formErrors.phoneNumber && (
                  <span>{formErrors.phoneNumber}</span>
                )}
              </div>
            </div>
            <div style={styles.btnCard}>
              <button type="submit">Save Details</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default DeliveryForm;