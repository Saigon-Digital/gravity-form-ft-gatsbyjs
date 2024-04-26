import React from "react"
import InputWrapper from "../InputWrapper"
const FileUpload = ({
  defaultValue,
  fieldData,
  name,
  MyFile,
  ...wrapProps
}) => {
  function onChange({ target: { validity, files } }) {
    MyFile(files)
  }
  return (
    <InputWrapper inputData={fieldData} labelFor={name} {...wrapProps}>
      <label for="input_7" class="gravityform__label gfield_label">Upload CV</label>
      <input
        className="gravityform__field__input gravityform__field__input__uploadfile"
        type="file"
        multiple
        required
        id={name || "upload-field"}
        name={name || "upload-field"}
        onChange={onChange}
      />
    </InputWrapper>
  )
}
export default FileUpload