const objectToFormData = (object: Record<string, string | null | undefined>) => {
    const formData = new FormData();

	Object.entries(object).forEach(([key, value]) => {
        formData.append(key, value?.toString() ?? "");
    });

    return formData;
};

export default objectToFormData;
