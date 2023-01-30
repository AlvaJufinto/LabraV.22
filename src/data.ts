import { StaticImageData } from "next/image";

import SectionImg1 from "@/assets/img/section-1.png";
import SectionImg2 from "@/assets/img/section-2.png";
import SectionImg3 from "@/assets/img/section-3.png";

import ElectricIcon from "@/assets/icon/electric-icon.svg";
import VolumeIcon from "@/assets/icon/volume-icon.svg";
import ProcessorIcon from "@/assets/icon/processor-icon.svg";
import PlaneIcon from "@/assets/icon/plane-icon.svg";
import TimeIcon from "@/assets/icon/time-icon.svg";
import MenuIcon from "@/assets/icon/menu-icon.svg";
import GpsIcon from "@/assets/icon/gps-icon.svg";
import RestartIcon from "@/assets/icon/restart-icon.svg";

import EditIcon from "@/assets/icon/edit-icon.svg";
import ChannelIcon from "@/assets/icon/channel-icon.svg";
import SensitivityIcon from "@/assets/icon/sensitivity-icon.svg";
import PowerIcon from "@/assets/icon/power-icon.svg";
import FrequencyIcon from "@/assets/icon/frequency-icon.svg";
import TimePlusIcon from "@/assets/icon/time-plus-icon.svg";
import WalkieIcon from "@/assets/icon/walkie-icon.svg";


export interface ISlider {
    img: StaticImageData,
    title: string,
    subTitle: string
}

export interface ISpesification {
    image: StaticImageData,
    title: string,
}


export const links: string[] = ["Overview", "Product", "Spesification", "Feature", "Warranty"]

export const sliderContent: ISlider[] = [
    {
      img: SectionImg1,
      title: "New Generation of Two-way Radio",
      subTitle: "Interface Gateway Technology RoIP (Radio Through IP) Solution",
    },
    {
      img: SectionImg2,
      title: "Fast Transmission Signal",
      subTitle: "Never lost an important signal"
    },
    {
      img: SectionImg3,
      title: "Flexibility With LABRA V.22",
      subTitle: "Combine LABRA V.22 With your require radio or even your favorite!"
    }
];

export const spesificationContent: ISpesification[] = [
    {
        image: ElectricIcon,
        title: "Input 12V DC 4A"
    },
    {
        image: VolumeIcon,
        title: "Volume Control"
    },
    {
        image: ProcessorIcon,
        title: "AVR Microcontroler"
    },
    {
        image: PlaneIcon,
        title: "Controlling with Telegram"
    },
    {
        image: TimeIcon,
        title: "Delay Repeater (Manual or Telegram)"
    },
    {
        image: MenuIcon,
        title: "Controlling Menu (Manual or Telegram)"
    },
    {
        image: GpsIcon,
        title: "GPS Anntenas (with Android System)"
    },
    {
        image: RestartIcon,
        title: "AutoRestart for PoC Radio (Manual or Telegram)"
    },
]

export const featureContent: ISpesification[] = [
    {
        image: EditIcon,
        title: "Change Username"
    },
    {
        image: ChannelIcon,
        title: "Change Channel Name"
    },
    {
        image: SensitivityIcon,
        title: "Change Vox Sensitivity"
    },
    {
        image: PowerIcon,
        title: "Turn off the RoIP unit"
    },
    {
        image: FrequencyIcon,
        title: "Change Frequency Number"
    },
    {
        image: PowerIcon,
        title: "Turn on RoIP when the application is off"
    },
    {
        image: TimeIcon,
        title: "Sets Delay Release of the Repeater"
    },
    {
        image: TimeIcon,
        title: "Repeater delay programming"
    },
    {
        image: PowerIcon,
        title: "Set Automatic Shutdown"
    },
    {
        image: RestartIcon,
        title: "Manual Restart if there any trouble"
    },
    {
        image: TimePlusIcon,
        title: "Check real-time condition"
    },
    {
        image: WalkieIcon,
        title: "RoIP RX only (POC cannot transmit to 2 Ways Radio System)"
    },
]