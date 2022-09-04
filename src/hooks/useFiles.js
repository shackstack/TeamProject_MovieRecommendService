import React from "react";

const useFiles = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const upload = async (files) => {
        setLoading(true);
        setError(null);
        setData(null);
        const formData = new FormData();
        const appendFile = (file) => {
            formData.append("files", {
                uri: file.sourceURL,
                name: file.filename,
                type: file.mime,
            });
        };
        if (Array.isArray(files)) {
            files.forEach((file) => {
                appendFile(file);
            });
        } else {
            appendFile(files);
        }
        // try {
        //   const responseData = await fetch(`${getAPIHost()}api/files`, {
        //     method: 'post',
        //     body: formData,
        //     headers: {
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   }).then((responseData) => responseData.json());
        //   setData(responseData);
        //   return responseData;
        // } catch (error) {
        //   setError(error);
        //   throw error;
        // } finally {
        //   setLoading(false);
        // }
    };

    const clear = () => {
        setLoading(false);
        setData(null);
        setError(null);
    };

    return { data, error, loading, upload, clear };
};

export default useFiles;
