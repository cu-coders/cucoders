import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { success, error } from "../messages";

import { useAuth0 } from "@auth0/auth0-react";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
// const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [college, setCollege] = useState("");
  const [value, setValue] = useState("");

  const [collegeName, setCollegeName] = useState("");
  const [collegeYear, setCollegeYear] = useState("");
  const [branch, setBranch] = useState("");

  const collegeArray = [];
  const yearArray = [];
  const branchArray = [
    "Aeronautical Engineering",
    "Aerospace Engineering",
    "Automobile Engineering",
    "Biomedical Engineering",
    "Biotechnology Engineering",
    "Ceramic Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Communications Engineering",
    "Computer Science Engineering",
    "Construction Engineering",
    "Electrical Engineering",
    "Electronics & Communication Engineering",
    "Electronics Engineering",
    "Environmental Engineering",
    "Industrial Engineering",
    "Marine Engineering",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Metallurgical Engineering",
    "Mining Engineering",
    "Petroleum Engineering",
    "Power Engineering",
    "Production Engineering",
    "Robotics Engineering",
    "Structural Engineering",
    "Telecommunication Engineering",
    "Textile Engineering",
    "Tool Engineering",
    "Transportation Engineering",
  ];
  // get all college name
  useEffect(() => {
    axios
      .get("https://dashboard.digitallocker.gov.in/apisetuDashboardData.json")
      .then((res) => {
        setCollegeName(res.data.records);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  for (let index = 0; index < collegeName.length; index++) {
    collegeArray.push(collegeName[index]);
  }

  function generateArrayOfYears() {
    const max = new Date().getFullYear() + 6;
    const min = max - 20;

    return Array.from({ length: max - min + 1 }, (_, index) => max - index);
  }
  generateArrayOfYears();

  function submit(e) {
    e.preventDefault();
    var fullname = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var college = document.getElementById("college").files[0];
    var phone = document.getElementById("phone-input").value;
    var collegeName = document.getElementById("college-input").value;
    var branch = document.getElementById("branch-input").value;
    var year = document.getElementById("year-input").value;
    var collegeID = document.getElementById("id-input").value;

    const formData = new FormData();

    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("number", phone);
    formData.append("image", college);
    formData.append("college", collegeName);
    formData.append("branch", branch);
    formData.append("year", year);
    formData.append("collegeid", collegeID);

    const options = {
      method: "POST",
      body: formData,
    };
    setIsLoading(true);
    fetch("https://backend.cuchapter.tech/membership/add", options)
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          success("You're now a member", 1);
          // reset form
          document.getElementById("name-input").value = "";
          document.getElementById("email-input").value = "";
          document.getElementById("phone-input").value = "";
          document.getElementById("branch-input").value = "";
          document.getElementById("college").value = "";
          document.getElementById("college-input").value = "";
          document.getElementById("year-input").value = "";
          document.getElementById("id-input").value = "";
          window.location.href = "/thankyou";
        } else {
          if (res.status === 400) {
            error("You're already member with provided email/college id");
          } else {
            error("Something went wrong");
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        error("Something went wrong");
      });
  }
  const { user, isAuthenticated } = useAuth0();

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Fill the form & be a Member </h2>
            <form
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <TwoColumn>
                <Column>
                  {isAuthenticated ? (
                    <InputContainer>
                      <Label htmlFor="name-input">Your Full Name*</Label>
                      <Input
                        id="name-input"
                        type="name"
                        name="name"
                        required
                        placeholder="E.g. John Doe"
                        defaultValue={
                          user.name.includes("@") ? user.nickname : user.name
                        }
                      />
                    </InputContainer>
                  ) : (
                    <InputContainer>
                      <Label htmlFor="name-input">Your Full Name*</Label>
                      <Input
                        id="name-input"
                        type="name"
                        name="name"
                        required
                        placeholder="E.g. John Doe"
                      />
                    </InputContainer>
                  )}
                  {isAuthenticated ? (
                    <InputContainer>
                      <Label htmlFor="email-input">Your Email Address*</Label>
                      <Input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        placeholder="E.g. john@mail.com"
                        defaultValue={user.email}
                      />
                    </InputContainer>
                  ) : (
                    <InputContainer>
                      <Label htmlFor="email-input">Your Email Address*</Label>
                      <Input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        placeholder="E.g. john@mail.com"
                      />
                    </InputContainer>
                  )}
                  <InputContainer>
                    <Label htmlFor="file-input">College ID*</Label>
                    <Input
                      id="college"
                      type="file"
                      accept=".png, .jpeg, .jpg"
                      name="college"
                      required
                      onChange={(e) => {
                        if (e.target.files[0].size > 10000000) {
                          error("File size should be less than 10MB");
                          e.target.value = "";
                        }
                      }}
                    />
                    <h1
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "bold",
                        color: "#FF895C",
                        marginTop: "10px",
                        marginBottom: "0px",
                        fontFamily: "system-ui",
                      }}
                    >
                      College ID should be a PNG/JPEG/JPG under 10MB.{" "}
                    </h1>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="id-input">College ID(Roll)*</Label>
                    <Input
                      id="id-input"
                      type="text"
                      name="description"
                      required
                      placeholder="Type your College ID here"
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                    <Label htmlFor="phone-input">Your Phone Number*</Label>
                    <PhoneInput
                      id="phone-input"
                      placeholder="Enter phone number"
                      defaultCountry="IN"
                      initialValueFormat="national"
                      value={value}
                      onChange={setValue}
                      international={true}
                      withCountryCallingCode
                      countryCallingCodeEditable={false}
                      countrySelectProps={{ unicodeFlags: true }}
                      error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                      required
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="college-input">College*</Label>
                    <select
                      id="college-input"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                      name="college"
                      required
                      style={{
                        backgroundColor: "#efefef",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px",
                        fontSize: "0.875rem", // 14px
                        width: "100%",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <option value="">Select College</option>
                      {collegeArray.map((college, index) => {
                        return (
                          <option key={index} value={college.orgName}>
                            {college.orgName}
                          </option>
                        );
                      })}
                      <option value="other college">Other College</option>
                    </select>
                    <h1
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: "10px",
                        marginBottom: "0px",
                        fontFamily: "system-ui",
                      }}
                    >
                      Selected College: {college}
                    </h1>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="branch-input">Branch*</Label>
                    <select
                      id="branch-input"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      name="branch"
                      required
                      style={{
                        backgroundColor: "#efefef",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px",
                        fontSize: "0.875rem", // 14px
                        width: "100%",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <option value="">Select Branch</option>
                      {branchArray.map((branch, index) => {
                        return (
                          <option key={index} value={branch}>
                            {branch}
                          </option>
                        );
                      })}
                      <option value="other college">Other Branch</option>
                    </select>
                    <h1
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: "10px",
                        marginBottom: "0px",
                        fontFamily: "system-ui",
                      }}
                    >
                      Selected Branch: {branch}
                    </h1>
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="year-input">Year*</Label>
                    <select
                      id="year-input"
                      value={collegeYear}
                      onChange={(e) => setCollegeYear(e.target.value)}
                      name="year"
                      required
                      style={{
                        backgroundColor: "#efefef",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        padding: "5px",
                        fontSize: "0.875rem", // 14px
                        width: "100%",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <option value="">Select Passing Year</option>
                      {yearArray.map((year, index) => {
                        return (
                          <option key={index} value={year}>
                            {year}
                          </option>
                        );
                      })}
                    </select>
                    <h1
                      style={{
                        fontSize: ".8rem",
                        fontWeight: "bold",
                        color: "#fff",
                        marginTop: "10px",
                        marginBottom: "0px",
                        fontFamily: "system-ui",
                      }}
                    >
                      Selected Year: {collegeYear}
                    </h1>
                  </InputContainer>
                  {isLoading ? (
                    <Loader
                      type="TailSpin"
                      color="#00BFFF"
                      height={80}
                      width={80}
                      style={{
                        zIndex: "2",
                        width: "fit-content",
                        position: "absolute",
                        left: "46%",
                        top: "45%",
                      }}
                    />
                  ) : null}
                </Column>
              </TwoColumn>
              <SubmitButton
                type="submit"
                disabled={isLoading ? true : false}
                value={isLoading ? "Submitting..." : "Submit"}
              >
                Submit
              </SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
