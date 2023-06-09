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

    const [isDetailsSaved, setDetailsSaved] = useState(false);

    // If statements to validate any value user inserts into fields
    const validateForm = () => {
        let valid = true;
        const errors = {};

        // RegEx in order to make ZipCode and PhoneNumber only accept 5 or 10 digits respectively.
        const zipCodePattern = /^\d{5}$/;
        const phoneNumberPattern = /^\d{10}$/;

        if (formData.customerName.trim() === "") {
          errors.customerName = "* Required";
          valid = false;
        } else if (formData.customerName.trim().length > 24) {
          errors.customerName = "* Maximum 24 characters";
          valid = false;
        }

        if(formData.streetAddress.trim() === "") {
          errors.streetAddress = "* Required";
          valid = false; // RegEx used again in order to make sure its only text.
        } else if(formData.streetAddress.trim().length > 24 || !/^[a-öA-Ö\s]+$/.test(formData.streetAddress.trim())) {
          errors.streetAddress = "* Maximum 24 characters (letters, no numbers)";
          valid = false;
        }

        if(formData.streetNumber.trim() === "") {
          errors.streetNumber = "* Required";
          valid = false;
        } else {
          const streetNumber = parseInt(formData.streetNumber);
          if(isNaN(streetNumber) || streetNumber < 1 || streetNumber > 1000) {
            errors.streetNumber = "*Must be a number between 1-1000";
            valid = false;
          }
        }

        if(formData.city.trim() === "") {
          errors.city = "* Required";
          valid = false;
        } else if(formData.city.trim().length > 24) {
          errors.city = "* Maximum 24 characters";
          valid = false;
        }

        if(formData.zipCode.trim() === "") {
          errors.zipCode = "* Required";
          valid = false;
        } else if (!zipCodePattern.test(formData.zipCode.trim())) {
          errors.zipCode = "* Invalid Zip Code";
          valid = false;
        }

        if(formData.phoneNumber.trim() === "") {
          errors.phoneNumber = "* Required";
          valid = false;
        } else if(!phoneNumberPattern.test(formData.phoneNumber.trim())) {
          errors.phoneNumber = "* Invalid Phone Number";
        }

        // Not needed anymore.
        // for (const field in formData) {
        //     if(formData[field].trim() === "") {
        //         errors[field] = "* Required"
        //         valid = false;
        //     }
        // }

        setFormErrors(errors);
        return valid;
    };

    // Responsible for capturing changes in the input fields of the form
    // and updating the corresponding values in the form data state object.
    // It makes sure that the form data state stays up to date with the user's input.
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    // If the validation passes as true, then we set the customer details into localStorage to pass over
    // also we make sure that the form has been submitted in order to be able to pay.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem("customerDetails", JSON.stringify(formData));
            setDetailsSaved(true);
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

    // Styles...
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
            {isDetailsSaved && (<div style={styles.card}>Your delivery details were saved!</div>)}
          </form>
        </div>
      </div>
    );
}

export default DeliveryForm;