
const JobApplicationForm = () => {
    return (
        <div className="form-container">
            <form className="job-application-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        required
                    />
                </label>

                <label>
                    Gender:
                    <select
                        name="gender"
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label>
                    Email ID:
                    <input
                        type="email"
                        name="email"
                        required
                    />
                </label>

                <label>
                    Country:
                    <input
                        type="text"
                        name="country"
                        required
                    />
                </label>

                <label>
                    Current City:
                    <input
                        type="text"
                        name="city"
                        required
                    />
                </label>

                <label>
                    Current Locality:
                    <input
                        type="text"
                        name="locality"
                        required
                    />
                </label>

                <label>
                    Mobile:
                    <input
                        type="tel"
                        name="mobile"
                        required
                    />
                </label>

                <label>
                    Qualification:
                    <select
                        name="qualification"
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label>
                    Area:
                    <select
                        name="functionalArea"
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label>
                Total Work Experience:
                <select
                        name="workExperience"
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label>
                    Current Annual Salary:
                    <input
                        type="text"
                        name="annualSalary"
                        required
                    />
                </label>

                <label>
                    Key Skills:
                    <textarea
                        name="keySkills"
                        rows={4}
                        required
                    />
                </label>

                <label>
                    Attach Resume:
                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                    />
                </label>

                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default JobApplicationForm;
