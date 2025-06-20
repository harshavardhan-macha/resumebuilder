const PersonalStep = ({ formData, handleChange, validationErrors }) => (
  <>
    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className={`input border rounded-md p-2 w-full ${
          validationErrors.fullName ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="John Doe"
      />
      {validationErrors.fullName && (
        <p className="text-red-500 text-sm mt-1">{validationErrors.fullName}</p>
      )}
    </div>

    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`input border rounded-md p-2 w-full ${
          validationErrors.email ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="john@example.com"
      />
      {validationErrors.email && (
        <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
      )}
    </div>

    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className={`input border rounded-md p-2 w-full ${
          validationErrors.phone ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="+91-9876543210"
      />
      {validationErrors.phone && (
        <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
      )}
    </div>

    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="input border border-gray-300 rounded-md p-2 w-full"
      />
    </div>

    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="input border border-gray-300 rounded-md p-2 w-full"
        placeholder="123, Street Name, City, State - ZIP"
      />
    </div>

    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
      <input
        type="url"
        name="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
        className="input border border-gray-300 rounded-md p-2 w-full"
        placeholder="https://linkedin.com/in/yourname"
      />
    </div>

    <div className="col-span-1">
      <label className="block text-sm font-medium text-gray-700 mb-1">GitHub / Portfolio URL</label>
      <input
        type="url"
        name="github"
        value={formData.github}
        onChange={handleChange}
        className="input border border-gray-300 rounded-md p-2 w-full"
        placeholder="https://github.com/yourname"
      />
    </div>
    <div className="col-span-2">
  <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
  <textarea
    name="summary"
    value={formData.summary}
    onChange={handleChange}
    className="input border border-gray-300 rounded-md p-2 w-full"
    rows={4}
    placeholder="A passionate web developer with experience in React, Node.js, and MongoDB..."
  />
</div>

  </>
);
export default PersonalStep;
