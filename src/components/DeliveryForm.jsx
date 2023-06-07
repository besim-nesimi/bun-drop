import React, {useEffect, useState} from 'react';

// För enkelhetens skull, testar med att bara lägga allt som text, även siffror

function DeliveryForm() {
    const [formData, setFormData] = useState({
        customerName: "",
        streetAddress: "",
        streetNumber: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
    })

    const [isDeliveryFormSubmitted, setDeliveryFormSubmitted] = useState(false)

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
            setFormData({
                customerName: "",
                streetAddress: "",
                streetNumber: "",
                city: "",
                zipCode: "",
                phoneNumber: "",
            });

            
        }

        setFormData({
            customerName: "",
            streetAddress: "",
            streetNumber: "",
            city: "",
            zipCode: "",
            phoneNumber: "",
        });

        
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 10,
            marginBottom: 10,
        },
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={styles.container}>
                <div>
                    <label>
                        Customer Name: <input 
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                        />
                    </label>
                    {formErrors.customerName && <span>{formErrors.customerName}</span>}
                </div>
                <div>
                    <label>
                        Street Address: <input 
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        />
                    </label>
                    {formErrors.streetAddress && <span>{formErrors.streetAddress}</span>}
                </div>
                <div>
                    <label>
                        Street Number: <input 
                        type="text"
                        name="streetNumber"
                        value={formData.streetNumber}
                        onChange={handleInputChange}
                        />
                    </label>
                    {formErrors.streetNumber && <span>{formErrors.streetNumber}</span>}
                </div>
                <div>
                    <label>
                        City: <input
                        type="text"
                        name='city'
                        value={formData.city}
                        onChange={handleInputChange}
                        />
                    </label>
                    {formErrors.city && <span>{formErrors.city}</span>}
                </div>
                <div>
                <label>
                        Zip Code: <input
                        type="text"
                        name='zipCode'
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        />
                    </label>
                    {formErrors.zipCode && <span>{formErrors.zipCode}</span>}
                </div>
                <div>
                <label>
                        Phone Number: <input
                        type="text"
                        name='phoneNumber'
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        />
                    </label>
                    {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default DeliveryForm;