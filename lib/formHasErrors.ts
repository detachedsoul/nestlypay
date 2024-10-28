const formHasErrors = (errors: object) => {
    return Object.values(errors).some((error) => error !== "");
};

export default formHasErrors;
