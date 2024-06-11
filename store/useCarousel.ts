import { create } from "zustand";

interface SlideStoreState {
    activeSlide: number;
}

interface SlideStoreActions {
    setActiveSlide: (slideIndex: number) => void;
    handleScrollLeft: (parentContainerRef: React.MutableRefObject<HTMLDivElement | null>, slidesPerScreen: number) => void;
    handleScrollRight: (parentContainerRef: React.MutableRefObject<HTMLDivElement | null>, slidesPerScreen: number, features: any[]) => void;
    scrollToSlide: (parentContainerRef: HTMLDivElement | null, slidesPerScreen: number, slideIndex: number) => void;
}

const useCarousel = create<SlideStoreState & SlideStoreActions>((set, get) => ({
    activeSlide: 0,

    setActiveSlide: (slideIndex) => {
        set({ activeSlide: slideIndex });
    },

    handleScrollLeft: (parentContainerRef, slidesPerScreen) => {
        if (parentContainerRef.current) {
            const width = parentContainerRef.current.offsetWidth;
            const { activeSlide } = get();
            if (activeSlide === 0) {
                return;
            } else {
                parentContainerRef.current.scrollLeft -= (width / slidesPerScreen) + 9;
                set((state) => ({ activeSlide: state.activeSlide - 1 }));
            }
        }
    },

    handleScrollRight: (parentContainerRef, slidesPerScreen, features) => {
        if (parentContainerRef.current) {
            const width = parentContainerRef.current.offsetWidth;
            const { activeSlide } = get();
            if (activeSlide < features.length - 1) {
                parentContainerRef.current.scrollLeft += (width / slidesPerScreen) + 9;
                set((state) => ({ activeSlide: state.activeSlide + 1 }));
            } else {
                parentContainerRef.current.scrollLeft -= width * features.length;
                set({ activeSlide: 0 });
            }
        }
    },

    scrollToSlide: (parentContainer, slidesPerScreen, slideIndex) => {
        const container = parentContainer;

        if (container) {
            container.scrollLeft = (container.offsetWidth * slideIndex) / slidesPerScreen;
            set({ activeSlide: slideIndex });
        }
    }
}));

export default useCarousel;
