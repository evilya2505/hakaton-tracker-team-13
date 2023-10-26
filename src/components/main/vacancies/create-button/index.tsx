import createButton from "./index.module.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BootstrapButton = styled(Button)({
    textTransform: "none",
    fontSize: 16,
});

function CreateVacancyButton() {
    return (
        <BootstrapButton
            className={createButton.createButton}
            variant="contained"
            // onClick={handleCreate}
        >
            Создать
        </BootstrapButton>
    )
};

export default CreateVacancyButton;