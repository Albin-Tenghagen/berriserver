import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    lastName: "",
    address: "",
    municipality: "",
    description: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("User registered successfully!");
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className=" text-gray-700 shadow-md rounded-2xl p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          User Registration
        </h2>

        <div>
          <label className="block text-gray-700 mb-1">Förnamn</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Förnamn"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Efternamn</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Efternamn"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Adress</label>
          <input
            type="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Adress"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Kommun</label>
          <input
            type="text"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Sök eller välj kommun"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Beskrivning</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Beskriv ditt projekt"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="1234567890"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
}
