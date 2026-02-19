import React from 'react'

const Otp = () => {
    const [otp, setOtp] = React.useState(new Array(6).fill(""));

    const handleChange = (element, index) => {
        if(isNaN(element.value)) return false;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if(element.nextSibling) {
            element.nextSibling.focus();
        }

        if(element.value === "" && element.previousSibling) {
            element.previousSibling.focus();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(otp.join(""));
    }

  return (
    <div>
        <h1>
            OTP
        </h1>
        {otp.map((data, index) => {
            return (
                <input
                    className='otp-field'
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                    onFocus={e => e.target.select()}
                />
            )
        })}
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Otp