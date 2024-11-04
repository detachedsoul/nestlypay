import useSWR from "swr";

const useFetch = (url: string, fetcher: any, options?: any) => {
    const { data, error, isLoading } = useSWR(url, fetcher, options);

    return {
        data,
        error,
        isLoading,
    };
};

export default useFetch;
