import useSWR from "swr";

const useFetch = (url: string, fetcher: any, options?: any) => {
    const { data, error, isLoading } = useSWR(url, fetcher, options);

    return {
        data,
        error,
        isLoading,
    };
};

export const usePrismaFetch = ({
	key,
    fetcher,
    refreshInterval
}: {
	key: any;
        fetcher: any;
    refreshInterval?: number
}) => {
	const { data, error, isLoading } = useSWR(key, fetcher, {
		refreshInterval: refreshInterval,
	});

	return {
		data,
		error,
		isLoading,
	};
};


export default useFetch;
