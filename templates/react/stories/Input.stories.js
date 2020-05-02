import React from "react";
import TextInput from "../src/components/text-input/text-input";
import EmailInput from "../src/components/email-input/email-input";
import UploadInput from "@components/upload-input/upload-input";

export default {
  title: "Input"
};

export const InputText = () => <TextInput label="Input text: " />;
export const InputEmail = () => <EmailInput />;
export const InputUpload = () => <UploadInput />;

InputText.story = {
  name: "Text Input"
};

InputEmail.story = {
  name: "Email Input"
};
