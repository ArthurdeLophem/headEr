import { create } from "zustand"

export const useHeadphoneStore = create((set) => ({
    Color: "",
    ActiveEl: "hidden",
    Title: "hover over a headphone part to start",
    CompanyPic: null,
    Mic: false,
    ActiveGeo: null,
    chooseColor: (el) => set(() => ({ Color: `rgb(${el.r}, ${el.g}, ${el.b})` })),
    chooseActiveEl: (el) => set(() => ({ ActiveEl: el })),
    chooseTitle: (el) => set(() => ({ Title: el })),
    chooseCompanyPic: (el) => set(() => ({ CompanyPic: el })),
    chooseMic: (el) => set(() => ({ Mic: el })),
    chooseActiveGeo: (el) => set(() => ({ ActiveGeo: el }))
}))