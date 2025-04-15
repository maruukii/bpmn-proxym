import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  getFormKey,
  updateFormKey,
  removeFormKey,
} from "../../../utils/formKeyUtil"; // adjust path as needed
import { useEffect, useState } from "react";

const FormKey = () => {
  const { activeElement, modeling } = useSelector(
    (state: RootState) => state.modeler
  );
  useEffect(() => {
    if (activeElement) {
      const formKey = getFormKey(activeElement);
      setFormKey(formKey || "");
    }
  }, [activeElement]);

  const [formKey, setFormKey] = useState<string | undefined>("");
  const handleFormKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFormKey = event.target.value;
    setFormKey(newFormKey);
    if (activeElement && modeling) {
      newFormKey === ""
        ? removeFormKey(modeling, activeElement)
        : updateFormKey(modeling, activeElement, newFormKey);
      console.log("Updated form key:", newFormKey);
    }
  };
  return (
    <div>
      <label htmlFor="formKeyInput">Form key</label>
      <br />
      <input
        id="formKeyInput"
        type="text"
        placeholder="form key"
        value={formKey || ""}
        onChange={handleFormKeyChange}
      />
    </div>
  );
};

export default FormKey;
