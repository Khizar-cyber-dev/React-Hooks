import React from 'react'

const Form = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
    });
    const [imagePreview, setImagePreview] = React.useState(null);
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const validate = () => {
        const newErrors = {};
        if(!formData.name) newErrors.name = 'Name is required';
        if(!formData.email) newErrors.email = 'Email is required';
        if(!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length === 0) {
            console.log('Form submitted successfully', {
                ...formData,
                file: selectedFile
            });
            setErrors({});
            setFormData({ name: '', email: '', password: '' });
            setSelectedFile(null);
            setImagePreview(null);
            alert('Registration Successful!');
        } else {
            setErrors(validationErrors);
        }
    }

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if(!file) return;
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        }
        reader.readAsDataURL(file);
    }

  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1 style={{ text: 'center' }}>Registration Form</h1>
        <div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <label>Name:</label>
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <label>Email:</label>
            <input 
                type="email"
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                required
            />
            {errors.email && <span style={{ color: 'red' }} >{errors.email}</span>}
            <label>Password:</label>
            <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            <label>Profile Picture:</label>
            <input 
                type="file"
                name="file"
                onChange={onFileChange}
            />
            {/* Image preview */}
            {selectedFile && imagePreview && (
                <img src={imagePreview} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />
            )}
            <button type="submit" style={{ marginTop: '10px' }}>Register</button>
        </form>
        </div>
    </div>
  )
}

export default Form