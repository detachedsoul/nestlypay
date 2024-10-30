"use client";

import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { useState, ChangeEvent } from "react";
import { cn } from "@/lib/utils";

const Profile = (): JSX.Element => {
    const { authInfo } = useAuth();

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const showUploadedImage = (fileInputSelector: HTMLInputElement) => {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
            const target = e.target as FileReader;
            setImageUrl(target.result as string);
        };

        if (fileInputSelector.files && fileInputSelector.files[0]) {
            reader.readAsDataURL(fileInputSelector.files[0]);
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileInputSelector = e.target as HTMLInputElement;
        showUploadedImage(fileInputSelector);
    };

    return (
        <form className="space-y-6 lg:w-3/5 xl:w-1/2 lg:mx-auto settings-card">
            <label className="h-28 w-28 mx-auto bg-black/100 rounded-full grid place-content-center cursor-pointer relative" htmlFor="profilePicture">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <mask className="[mask-type:alpha]" id="mask0_907_6573" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                    <rect width="40" height="40" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_907_6573)">
                    <path d="M9.75065 28.5007C11.1673 27.4173 12.7507 26.5629 14.5007 25.9373C16.2507 25.3129 18.084 25.0007 20.0007 25.0007C21.9173 25.0007 23.7507 25.3129 25.5007 25.9373C27.2507 26.5629 28.834 27.4173 30.2507 28.5007C31.2229 27.3618 31.9801 26.0701 32.5223 24.6257C33.0634 23.1812 33.334 21.6395 33.334 20.0007C33.334 16.3062 32.0357 13.1601 29.439 10.5623C26.8412 7.96565 23.6951 6.66732 20.0007 6.66732C16.3062 6.66732 13.1607 7.96565 10.564 10.5623C7.96621 13.1601 6.66732 16.3062 6.66732 20.0007C6.66732 21.6395 6.93843 23.1812 7.48065 24.6257C8.02176 26.0701 8.77843 27.3618 9.75065 28.5007ZM20.0007 21.6673C18.3618 21.6673 16.9795 21.1051 15.854 19.9807C14.7295 18.8551 14.1673 17.4729 14.1673 15.834C14.1673 14.1951 14.7295 12.8129 15.854 11.6873C16.9795 10.5629 18.3618 10.0007 20.0007 10.0007C21.6395 10.0007 23.0218 10.5629 24.1473 11.6873C25.2718 12.8129 25.834 14.1951 25.834 15.834C25.834 17.4729 25.2718 18.8551 24.1473 19.9807C23.0218 21.1051 21.6395 21.6673 20.0007 21.6673ZM20.0007 36.6673C17.6951 36.6673 15.5284 36.2295 13.5007 35.354C11.4729 34.4795 9.70898 33.2923 8.20898 31.7923C6.70898 30.2923 5.52176 28.5284 4.64732 26.5007C3.77176 24.4729 3.33398 22.3062 3.33398 20.0007C3.33398 17.6951 3.77176 15.5284 4.64732 13.5007C5.52176 11.4729 6.70898 9.70898 8.20898 8.20898C9.70898 6.70898 11.4729 5.52121 13.5007 4.64565C15.5284 3.77121 17.6951 3.33398 20.0007 3.33398C22.3062 3.33398 24.4729 3.77121 26.5007 4.64565C28.5284 5.52121 30.2923 6.70898 31.7923 8.20898C33.2923 9.70898 34.4795 11.4729 35.354 13.5007C36.2295 15.5284 36.6673 17.6951 36.6673 20.0007C36.6673 22.3062 36.2295 24.4729 35.354 26.5007C34.4795 28.5284 33.2923 30.2923 31.7923 31.7923C30.2923 33.2923 28.5284 34.4795 26.5007 35.354C24.4729 36.2295 22.3062 36.6673 20.0007 36.6673ZM20.0007 33.334C21.4729 33.334 22.8618 33.119 24.1673 32.689C25.4729 32.2579 26.6673 31.6395 27.7507 30.834C26.6673 30.0284 25.4729 29.4101 24.1673 28.979C22.8618 28.549 21.4729 28.334 20.0007 28.334C18.5284 28.334 17.1395 28.549 15.834 28.979C14.5284 29.4101 13.334 30.0284 12.2507 30.834C13.334 31.6395 14.5284 32.2579 15.834 32.689C17.1395 33.119 18.5284 33.334 20.0007 33.334ZM20.0007 18.334C20.7229 18.334 21.3201 18.0979 21.7923 17.6257C22.2645 17.1534 22.5007 16.5562 22.5007 15.834C22.5007 15.1118 22.2645 14.5145 21.7923 14.0423C21.3201 13.5701 20.7229 13.334 20.0007 13.334C19.2784 13.334 18.6812 13.5701 18.209 14.0423C17.7368 14.5145 17.5007 15.1118 17.5007 15.834C17.5007 16.5562 17.7368 17.1534 18.209 17.6257C18.6812 18.0979 19.2784 18.334 20.0007 18.334Z" fill="white"/>
                    </g>
                </svg>

                <span className="sr-only">Upload a new profile picture</span>

                <input type="file" className="h-full cursor-pointer opacity-0 absolute inset-0 w-full rounded-xl z-50" required id="profilePicture" name="profilePicture" onChange={handleImageChange} />

                {imageUrl && (
                    <Image
                        className="absolute inset-0 w-full h-full object-cover object-center rounded-full cursor-pointer aspect-square"
                        src={imageUrl}
                        fill
                        alt={authInfo?.name}
                    />
                )}

            </label>

            <div className="flex items-center flex-wrap gap-4 place-content-center">
                <button className={cn("btn bg-brand-blue text-white border-[1.5px] border-brand-blue font-medium hover:bg-brand-blue/60 hover:border-transparent py-3.5 rounded-lg inline-block")} type="button" onClick={() => setImageUrl(null)}>
                    Upload Image
                </button>

                <button className={cn("btn bg-white/100 border-[1.5px] border-[rgba(151,_151,_151,_1)] text-[rgba(151,_151,_151,_1)] font-medium hover:bg-[rgba(151,_151,_151,_1)] hover:text-white py-3.5 rounded-lg inline-block")} type="button" onClick={() => setImageUrl(null)}>
                    Delete
                </button>
            </div>

            <div className="space-y-4">
                <label className="w-full block" htmlFor="fullName">
                    <input className="input" type="text" placeholder="Full Name" name="fullName" />
                </label>

                <label className="w-full block" htmlFor="email">
                    <input className="input" type="email" placeholder="Email Address" name="email" />
                </label>

                <label className="w-full block" htmlFor="phoneNumber">
                    <input className="input" type="text" placeholder="Phone Number" name="phoneNumber" />
                </label>

                <button className={cn("submit-btn bg-brand-blue text-white border-[1.5px] border-brand-blue font-medium hover:bg-brand-blue/60 hover:border-transparent py-4 rounded-lg block w-full")} type="submit">
                    Update
                </button>
            </div>
        </form>
    );
};

export default Profile;
