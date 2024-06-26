"use client";

import PopupWrapper from "@/components/PopupWrapper";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, useId } from "react";

const AccountHistory = (): JSX.Element => {
    const router = useRouter();

    const randomID = useId().replace(":", "");
    const cleanedID = randomID.replace(":", "");

    const [popupIsActive, setPopupIsActive] = useState(false);
    const [modalType, setModalType] = useState<"Confirm" | "Cancel" | "">("");

    return (
        <>
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full border-collapse whitespace-nowrap table-auto">
                    <thead className="text-left">
                        <tr>
                            <th className="text-black/100 font-medium py-3 pr-8">

                            </th>

                            <th className="text-black/100 font-medium py-3 pr-8">
                                Invoice ID
                            </th>

                            <th className="text-black/100 font-medium py-3 pr-8">
                                Due Date
                            </th>

                            <th className="text-black/100 font-medium py-3 pr-8">
                                Issue Date
                            </th>

                            <th className="text-black/100 font-medium py-3 pr-8">
                                Amount
                            </th>

                            <th className="text-black/100 font-medium py-3 pr-8">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="font-medium py-6 pr-4">
                                <div className="bg-purple-500 text-white size-10 rounded-full font-black grid place-content-center">
                                    W
                                </div>
                            </td>

                            <td className="py-3 pr-8 cursor-pointer text-brand-blue" onClick={() => router.push(`/user/invoice-history/${cleanedID}`)}>
                                NES989238093
                            </td>

                            <td className="py-3 pr-8 text-black/80">
                                15/6/2024
                            </td>

                            <td className="py-3 pr-8 text-black/80">
                                15/6/2024
                            </td>

                            <td className="py-3 pr-8 text-black/80">
                                13/06/2024
                            </td>

                            <td className="py-3 pr-8 text-black/80">
                                <button className="mr-4" type="button" aria-label="Confirm payment" onClick={() => {
                                    setModalType("Confirm");
                                    setPopupIsActive(true);
                                }}>
                                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                                        <circle cx="25" cy="25" r="25" fill="#388C00" fillOpacity="0.05" />
                                        <path d="M30.569 19.3194C30.8331 19.0679 31.1846 18.9289 31.5493 18.9317C31.9139 18.9344 32.2633 19.0788 32.5236 19.3342C32.7839 19.5896 32.9347 19.9362 32.9444 20.3007C32.954 20.6653 32.8217 21.0193 32.5752 21.2881L25.094 30.6444C24.9653 30.783 24.8101 30.8942 24.6375 30.9713C24.4649 31.0485 24.2785 31.0901 24.0895 31.0936C23.9004 31.0971 23.7126 31.0624 23.5373 30.9917C23.3619 30.921 23.2027 30.8156 23.069 30.6819L18.1077 25.7206C17.9696 25.5919 17.8588 25.4367 17.7819 25.2642C17.705 25.0917 17.6637 24.9054 17.6604 24.7166C17.657 24.5278 17.6918 24.3403 17.7625 24.1652C17.8332 23.99 17.9385 23.831 18.072 23.6975C18.2056 23.5639 18.3646 23.4586 18.5397 23.3879C18.7148 23.3172 18.9024 23.2825 19.0912 23.2858C19.28 23.2891 19.4662 23.3304 19.6387 23.4073C19.8112 23.4842 19.9665 23.595 20.0952 23.7331L24.0215 27.6575L30.5334 19.3606C30.5451 19.3462 30.5576 19.3324 30.5709 19.3194H30.569Z" fill="#388C00" />
                                    </svg>
                                </button>

                                <button type="button" aria-label="Cancel payment" onClick={() => {
                                    setModalType("Cancel");
                                    setPopupIsActive(true);
                                }}>
                                    <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                                        <circle cx="25" cy="25" r="25" fill="#EE6A5F" fillOpacity="0.05"/>
                                        <g clipPath="url(#clip0_1155_6715)">
                                        <path d="M24.9997 14.334C22.89 14.334 20.8277 14.9596 19.0736 16.1316C17.3195 17.3037 15.9523 18.9696 15.145 20.9187C14.3376 22.8678 14.1264 25.0125 14.538 27.0816C14.9495 29.1507 15.9654 31.0514 17.4572 32.5431C18.949 34.0349 20.8496 35.0508 22.9187 35.4624C24.9878 35.8739 27.1326 35.6627 29.0816 34.8554C31.0307 34.048 32.6966 32.6809 33.8687 30.9267C35.0408 29.1726 35.6663 27.1103 35.6663 25.0006C35.6663 22.1717 34.5425 19.4586 32.5422 17.4582C30.5418 15.4578 27.8287 14.334 24.9997 14.334ZM30.333 29.0673C30.5098 29.2441 30.6092 29.4839 30.6092 29.734C30.6092 29.984 30.5098 30.2238 30.333 30.4006C30.1562 30.5775 29.9164 30.6768 29.6663 30.6768C29.4163 30.6768 29.1765 30.5775 28.9997 30.4006L24.9997 26.4006L20.9997 30.414C20.9121 30.5015 20.8082 30.571 20.6938 30.6184C20.5794 30.6657 20.4568 30.6901 20.333 30.6901C20.2092 30.6901 20.0866 30.6657 19.9722 30.6184C19.8578 30.571 19.7539 30.5015 19.6663 30.414C19.5788 30.3264 19.5094 30.2225 19.462 30.1081C19.4146 29.9937 19.3902 29.8711 19.3902 29.7473C19.3902 29.6235 19.4146 29.5009 19.462 29.3865C19.5094 29.2721 19.5788 29.1682 19.6663 29.0806L23.6663 25.054L19.553 20.9073C19.3762 20.7305 19.2769 20.4907 19.2769 20.2406C19.2769 19.9906 19.3762 19.7508 19.553 19.574C19.7298 19.3972 19.9696 19.2978 20.2197 19.2978C20.4697 19.2978 20.7095 19.3972 20.8863 19.574L24.9997 23.734L29.113 19.6207C29.2006 19.5331 29.3045 19.4637 29.4189 19.4163C29.5333 19.3689 29.6559 19.3445 29.7797 19.3445C29.9035 19.3445 30.0261 19.3689 30.1405 19.4163C30.2549 19.4637 30.3588 19.5331 30.4463 19.6207C30.5339 19.7082 30.6033 19.8121 30.6507 19.9265C30.6981 20.0409 30.7225 20.1635 30.7225 20.2873C30.7225 20.4111 30.6981 20.5337 30.6507 20.6481C30.6033 20.7625 30.5339 20.8664 30.4463 20.954L26.333 25.054L30.333 29.0673Z" fill="#EE6A5F"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_1155_6715">
                                        <rect width="24" height="24" fill="white" transform="translate(13 13)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PopupWrapper isActive={popupIsActive} toggleIsActive={() => setPopupIsActive(false)} className="lg:w-1/3">
                <div className="space-y-8">
                    {modalType === "Cancel" && (
                        <>
                            <svg width="60" height="60" viewBox="0 0 70 70" fill="none">
                                <g clipPath="url(#clip0_1155_6747)">
                                    <path d="M34.9998 3.88867C28.8466 3.88867 22.8316 5.71331 17.7154 9.13184C12.5992 12.5504 8.6116 17.4093 6.25688 23.0941C3.90215 28.7789 3.28605 35.0343 4.48648 41.0693C5.68691 47.1042 8.64995 52.6477 13.0009 56.9987C17.3519 61.3496 22.8954 64.3127 28.9303 65.5131C34.9653 66.7135 41.2207 66.0974 46.9055 63.7427C52.5903 61.388 57.4492 57.4004 60.8677 52.2842C64.2863 47.168 66.1109 41.153 66.1109 34.9998C66.1109 26.7486 62.8331 18.8354 56.9987 13.0009C51.1642 7.16644 43.251 3.88867 34.9998 3.88867ZM50.5553 46.8609C51.071 47.3766 51.3608 48.076 51.3608 48.8053C51.3608 49.5346 51.071 50.2341 50.5553 50.7498C50.0396 51.2655 49.3402 51.5552 48.6109 51.5552C47.8816 51.5552 47.1822 51.2655 46.6665 50.7498L34.9998 39.0831L23.3331 50.7887C23.0778 51.044 22.7746 51.2466 22.441 51.3848C22.1074 51.523 21.7498 51.5941 21.3887 51.5941C21.0276 51.5941 20.67 51.523 20.3364 51.3848C20.0027 51.2466 19.6996 51.044 19.4442 50.7887C19.1889 50.5333 18.9863 50.2302 18.8481 49.8965C18.71 49.5629 18.6388 49.2053 18.6388 48.8442C18.6388 48.4831 18.71 48.1255 18.8481 47.7919C18.9863 47.4583 19.1889 47.1551 19.4442 46.8998L31.1109 35.1553L19.1137 23.0609C18.598 22.5452 18.3083 21.8458 18.3083 21.1164C18.3083 20.3871 18.598 19.6877 19.1137 19.172C19.6294 18.6563 20.3288 18.3666 21.0581 18.3666C21.7874 18.3666 22.4869 18.6563 23.0026 19.172L34.9998 31.3053L46.997 19.3081C47.2524 19.0528 47.5555 18.8502 47.8891 18.712C48.2228 18.5738 48.5803 18.5027 48.9415 18.5027C49.3026 18.5027 49.6602 18.5738 49.9938 18.712C50.3274 18.8502 50.6306 19.0528 50.8859 19.3081C51.1413 19.5635 51.3438 19.8666 51.482 20.2002C51.6202 20.5339 51.6913 20.8914 51.6913 21.2526C51.6913 21.6137 51.6202 21.9713 51.482 22.3049C51.3438 22.6385 51.1413 22.9417 50.8859 23.197L38.8887 35.1553L50.5553 46.8609Z" fill="#EE6A5F" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1155_6747">
                                        <rect width="70" height="70" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div>
                                <h2 className="font-medium text-black/100 text-xl/10">
                                    Cancel Payment
                                </h2>

                                <p>
                                    Are you sure you didn’t receive this payment? Once deleted it can’t be undone.
                                </p>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <button className={cn("btn bg-white/100 border-[1.5px] border-[rgba(151,_151,_151,_1)] font-medium hover:bg-[rgba(151,_151,_151,_1)] hover:text-white py-3 rounded-lg inline-block")} type="button" onClick={() => setPopupIsActive(false)}>
                                    Cancel
                                </button>

                                <button className={cn("btn bg-brand-red text-white border-[1.5px] border-brand-red font-medium hover:bg-brand-red/60 hover:border-transparent py-3 rounded-lg inline-block")} type="button" onClick={() => setPopupIsActive(false)}>
                                    Delete
                                </button>
                            </div>
                        </>
                    )}

                    {modalType === "Confirm" && (
                        <>
                            <svg width="60" height="60" viewBox="0 0 70 70" fill="none">
                                <circle cx="35" cy="35" r="35" fill="#388C00" fillOpacity="0.05"/>
                                <path d="M42.796 27.0468C43.1658 26.6947 43.6578 26.5001 44.1684 26.504C44.6789 26.5078 45.168 26.7099 45.5324 27.0675C45.8968 27.4251 46.1081 27.9102 46.1216 28.4206C46.135 28.931 45.9497 29.4267 45.6047 29.803L35.131 42.9018C34.9509 43.0957 34.7335 43.2514 34.4919 43.3595C34.2503 43.4675 33.9893 43.5258 33.7247 43.5307C33.46 43.5356 33.1971 43.487 32.9516 43.388C32.7061 43.289 32.4831 43.1414 32.296 42.9543L25.3502 36.0085C25.1568 35.8283 25.0017 35.6109 24.8941 35.3694C24.7865 35.1279 24.7286 34.8672 24.7239 34.6029C24.7193 34.3385 24.7679 34.076 24.8669 33.8308C24.9659 33.5857 25.1133 33.363 25.3003 33.176C25.4872 32.9891 25.7099 32.8417 25.955 32.7427C26.2002 32.6437 26.4628 32.595 26.7271 32.5997C26.9915 32.6044 27.2522 32.6622 27.4937 32.7698C27.7352 32.8774 27.9525 33.0326 28.1327 33.226L33.6295 38.7201L42.7461 27.1045C42.7625 27.0843 42.7801 27.065 42.7986 27.0468H42.796Z" fill="#388C00"/>
                            </svg>

                            <div>
                                <h2 className="font-medium text-black/100 text-xl/10">
                                    Confirm Payment
                                </h2>

                                <p>
                                    Are you sure you have received this payment? Once deleted it can’t be undone.
                                </p>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <button className={cn("btn bg-white/100 border-[1.5px] border-[rgba(151,_151,_151,_1)] font-medium hover:bg-[rgba(151,_151,_151,_1)] hover:text-white py-3 rounded-lg inline-block")} type="button" onClick={() => setPopupIsActive(false)}>
                                    Cancel
                                </button>

                                <button className={cn("btn bg-brand-green text-white border-[1.5px] border-brand-green font-medium hover:bg-brand-green/60 hover:border-transparent py-3 rounded-lg inline-block")} type="button" onClick={() => setPopupIsActive(false)}>
                                    Confirm
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </PopupWrapper>
        </>
    );
};

export default AccountHistory;
